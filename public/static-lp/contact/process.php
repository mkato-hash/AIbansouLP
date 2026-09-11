<?php
declare(strict_types=1);

require_once __DIR__ . '/form-config.php';

session_set_cookie_params([
    'httponly' => true,
    'secure' => !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off',
    'samesite' => 'Lax',
]);
session_start();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ./');
    exit;
}

$action = is_string($_POST['form_action'] ?? null) ? $_POST['form_action'] : '';
$error = '';
$values = [];

if ($action === 'confirm') {
    $values = form_values_from_post();
    $errors = form_validate($values);
    if (($_POST['website'] ?? '') !== '') {
        $errors['form'] = '送信できませんでした。';
    }

    if ($errors) {
        http_response_code(422);
        $error = implode("\n", array_values($errors));
    } else {
        $_SESSION['contact_values'] = $values;
        $_SESSION['contact_csrf'] = bin2hex(random_bytes(32));
    }
} elseif ($action === 'send') {
    $token = is_string($_POST['csrf_token'] ?? null) ? $_POST['csrf_token'] : '';
    $stored = $_SESSION['contact_values'] ?? null;

    if (!is_array($stored) || empty($_SESSION['contact_csrf']) || !hash_equals($_SESSION['contact_csrf'], $token)) {
        http_response_code(400);
        $error = 'セッションの有効期限が切れました。恐れ入りますが、もう一度入力してください。';
    } elseif (form_validate($stored, false)) {
        http_response_code(422);
        $error = '入力内容を確認できませんでした。もう一度入力してください。';
    } elseif (isset($_SESSION['contact_last_sent']) && time() - (int)$_SESSION['contact_last_sent'] < FORM_RATE_LIMIT_SECONDS) {
        http_response_code(429);
        $error = '連続送信はできません。しばらく待ってからお試しください。';
        $values = $stored;
    } elseif (form_send_mails($stored)) {
        $_SESSION['contact_last_sent'] = time();
        unset($_SESSION['contact_values'], $_SESSION['contact_csrf']);
        header('Location: thanks/');
        exit;
    } else {
        http_response_code(500);
        $error = 'メールの送信に失敗しました。時間をおいて再度お試しください。';
        $values = $stored;
    }
} else {
    header('Location: ./');
    exit;
}

$canSend = !$error && $action === 'confirm';
?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>入力内容の確認｜AI伴走パートナー</title>
  <meta name="robots" content="noindex, nofollow">
  <link rel="shortcut icon" href="../images/favicon.svg">
  <link rel="icon" href="../images/favicon.svg">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <link rel="stylesheet" href="../css/style.css">
  <link rel="stylesheet" href="../css/contact.css">
  <script src="../js/main.js" defer></script>
</head>
<body>
<main class="updated-page contact-page">
  <header class="site-header">
    <a class="brand" href="../#top" aria-label="AI伴走パートナー トップへ"><img class="brand-logo" src="../images/ai-bansou-logo.png" alt=""><span>AI伴走パートナー</span></a>
    <nav class="desktop-nav" aria-label="メインナビゲーション"><a href="../#usecases">活用例</a><a href="../#support">支援内容</a><a href="../#plans">プラン・料金</a><a href="../#process">導入の流れ</a><a href="../#faq">よくある質問</a></nav>
    <div class="header-actions"><a class="header-cta" href="./">相談してみる <span><i class="fas fa-chevron-right" aria-hidden="true"></i></span></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="メニューを開く"><span></span><span></span><span></span></button></div>
    <nav class="mobile-nav" id="mobile-menu" aria-label="スマートフォン用メインナビゲーション" hidden><a href="../#usecases">活用例</a><a href="../#support">支援内容</a><a href="../#plans">プラン・料金</a><a href="../#process">導入の流れ</a><a href="../#faq">よくある質問</a></nav>
  </header>

  <section class="contact-hero" id="top"><div class="section-shell contact-hero-inner"><p class="eyebrow">CONFIRM</p><h1>入力内容をご確認ください。</h1><p>内容をご確認のうえ、送信ボタンを押してください。</p></div></section>
  <section class="contact-form-section"><div class="section-shell contact-layout">
    <div class="contact-intro"><p class="eyebrow_left">INQUIRY FORM</p><h2><?= $canSend ? '入力内容の確認' : '送信できませんでした' ?></h2><p><?= $canSend ? 'まだ送信は完了していません。' : '内容をご確認のうえ、入力画面から再度お試しください。' ?></p></div>
    <div class="contact-form" id="contact-form">
      <?php if ($error): ?>
        <p class="form-global-error" role="alert"><?= nl2br(form_h($error)) ?></p>
        <a class="contact-submit contact-back" href="./">入力画面へ戻る</a>
      <?php else: ?>
        <dl class="confirm-list">
          <?php foreach (FORM_FIELDS as $key => $label): ?>
            <div><dt><?= form_h($label) ?></dt><dd><?= $values[$key] !== '' ? nl2br(form_h($values[$key])) : '（未入力）' ?></dd></div>
          <?php endforeach; ?>
        </dl>
        <div class="confirm-actions">
          <button class="contact-submit contact-back" type="button" onclick="history.back()">入力画面へ戻る</button>
          <form method="post" action="process.php">
            <input type="hidden" name="form_action" value="send">
            <input type="hidden" name="csrf_token" value="<?= form_h($_SESSION['contact_csrf']) ?>">
            <button class="contact-submit" type="submit">この内容で送信する <span><i class="fas fa-chevron-right" aria-hidden="true"></i></span></button>
          </form>
        </div>
      <?php endif; ?>
    </div>
  </div></section>
  <footer><div class="section-shell footer-inner"><div class="footer-brand"><a class="brand" href="../#top"><img class="brand-logo" src="../images/ai-bansou-logo.png" alt=""><span>AI伴走パートナー</span></a><p>株式会社アグリード</p><p>〒101-0044 東京都千代田区鍛冶町2-10-11<br>イマジクスビル8F</p></div><div class="footer-links"><div><b>SERVICE</b><a href="../#usecases">活用例</a><a href="../#support">支援内容</a><a href="../#plans">プラン・料金</a><a href="../#process">導入の流れ</a><a href="../#faq">よくある質問</a></div><div><b>INFORMATION</b><a href="../#faq">よくある質問</a><a href="./">お問い合わせ</a><a href="../privacy-policy/">プライバシーポリシー</a><a href="https://itvolante.jp/">ITボランチ</a></div></div><div class="footer-sign"><span>© 2026 AGLEAD INC.</span></div></div></footer>
  <a class="back-to-top" href="#top" aria-label="ページ上部へ戻る"><i class="fas fa-chevron-up" aria-hidden="true"></i></a>
</main>
</body>
</html>
