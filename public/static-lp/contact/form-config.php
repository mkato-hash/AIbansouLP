<?php
declare(strict_types=1);

const FORM_ADMIN_EMAIL = 'itvolante@aglead.co.jp';
const FORM_FROM_EMAIL = 'itvolante@aglead.co.jp';
const FORM_FROM_NAME = 'ITボランチ';
const FORM_REPLY_TO = 'itvolante@aglead.co.jp';
const FORM_RATE_LIMIT_SECONDS = 60;

const FORM_FIELDS = [
    'company' => '会社名',
    'department' => '部署名',
    'name' => '氏名',
    'email' => 'メールアドレス',
    'tel' => '電話番号',
    'participants' => '対象人数',
    'preferred_period' => '希望実施時期',
    'message' => 'お問い合わせ内容',
];

function form_h(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function form_header_value(string $value): string
{
    return mb_encode_mimeheader($value, 'UTF-8', 'B', "\r\n");
}

function form_values_from_post(): array
{
    $values = [];
    foreach (FORM_FIELDS as $key => $label) {
        $value = $_POST[$key] ?? '';
        $values[$key] = is_string($value) ? trim(str_replace("\0", '', $value)) : '';
    }
    return $values;
}

function form_validate(array $values, bool $checkConsent = true): array
{
    $errors = [];
    if ($values['company'] === '') $errors['company'] = '会社名を入力してください。';
    if ($values['name'] === '') $errors['name'] = '氏名を入力してください。';
    if ($values['email'] === '') {
        $errors['email'] = 'メールアドレスを入力してください。';
    } elseif (!filter_var($values['email'], FILTER_VALIDATE_EMAIL) || preg_match('/[\r\n]/', $values['email'])) {
        $errors['email'] = '正しいメールアドレスを入力してください。';
    }
    if ($checkConsent && (!isset($_POST['privacy_consent']) || $_POST['privacy_consent'] !== '1')) {
        $errors['privacy_consent'] = 'プライバシーポリシーへの同意が必要です。';
    }
    if ($values['participants'] !== '' && (!ctype_digit($values['participants']) || (int)$values['participants'] < 1)) {
        $errors['participants'] = '対象人数は1以上の整数で入力してください。';
    }
    foreach ($values as $key => $value) {
        $limit = $key === 'message' ? 5000 : 255;
        if (mb_strlen($value, 'UTF-8') > $limit) {
            $errors[$key] = FORM_FIELDS[$key] . "は{$limit}文字以内で入力してください。";
        }
    }
    return $errors;
}

function form_details(array $values): string
{
    $lines = [];
    foreach (FORM_FIELDS as $key => $label) {
        $lines[] = '【' . $label . '】';
        $lines[] = $values[$key] !== '' ? $values[$key] : '（未入力）';
        $lines[] = '';
    }
    return implode("\n", $lines);
}

function form_mail_headers(string $replyTo): string
{
    return implode("\r\n", [
        'From: ' . form_header_value(FORM_FROM_NAME) . ' <' . FORM_FROM_EMAIL . '>',
        'Reply-To: ' . $replyTo,
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
        'X-Mailer: PHP/' . PHP_VERSION,
    ]);
}

function form_send_mails(array $values): bool
{
    $details = form_details($values);
    $thanksBody = $values['name'] . " 様\n\n"
        . "このたびは「AI伴走パートナー」へお問い合わせいただき、ありがとうございます。\n"
        . "以下の内容で受け付けました。\n\n"
        . $details
        . "※このメールは自動送信です。\n\n"
        . "---\n"
        . "リモート・定期訪問保守サービス ITVolante（ITボランチ）\n"
        . "URL：https://itvolante.jp/\n"
        . "e-mail：itvolante@aglead.co.jp\n"
        . "株式会社アグリード\n"
        . "〒101-0044 東京都千代田区鍛冶町2-10-11 イマジクスビル８F\n"
        . "TEL: 03-6824-4533 / FAX: 03-6634-5598\n";

    $adminBody = "Webサイトからお問い合わせがありました。\n\n" . $details;
    $thanksSent = mail(
        $values['email'],
        form_header_value('【AI伴走パートナー】お問い合わせありがとうございます'),
        $thanksBody,
        form_mail_headers(FORM_REPLY_TO)
    );
    $adminSent = mail(
        FORM_ADMIN_EMAIL,
        form_header_value('【AI伴走パートナー】新しいお問い合わせがありました'),
        $adminBody,
        form_mail_headers($values['email'])
    );
    return $thanksSent && $adminSent;
}
