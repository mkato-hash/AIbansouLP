import "./updated.css";

const contactUrl = "https://itvolante.jp/contact/";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const plans = [
  {
    number: "01",
    verb: "体験する",
    label: "EXECUTIVE",
    title: "経営者向け\nAI伴走体験プラン",
    lead: "経営者ご自身の仕事で、AIの効果を短時間で体験。",
    price: "100,000",
    unit: "円 / 1回",
    note: "3時間・税別",
    forWhom: "まずAIの可能性を確かめたい経営者・役員の方へ",
    items: [
      "日々の業務と課題をヒアリング",
      "AIが効果を出しやすい業務を抽出",
      "メール・資料・調査・集計などを実践",
      "自社で取り組む次の一歩を整理",
    ],
  },
  {
    number: "02",
    verb: "身につける",
    label: "TEAM",
    title: "スタッフ向け\nAI活用習得プラン",
    lead: "スタッフが、自分の仕事でAIを使い続けられる状態へ。",
    price: "50,000",
    unit: "円 / 1回",
    note: "2時間・税別／月4回 200,000円",
    forWhom: "AIを一部の人だけでなく、チームに定着させたい会社へ",
    featured: true,
    items: [
      "対象部署・参加者の業務を事前確認",
      "基本操作と安全な利用ルールを共有",
      "実際の業務を題材にした実践ワーク",
      "再利用できるプロンプトと手順を整備",
    ],
  },
  {
    number: "03",
    verb: "仕組みにする",
    label: "AUTOMATION",
    title: "AI業務改善・\n自動化プラン",
    lead: "改善効果の高い仕事を見極め、AIで回る仕組みに変える。",
    price: "80,000",
    unit: "円〜 / 1タスク",
    note: "1時間程度の作業を自動化する場合の目安・税別",
    forWhom: "時間のかかる定型業務を、具体的に改善したい会社へ",
    items: [
      "業務を棚卸しして改善候補を評価",
      "対象業務と目標を決定",
      "AIを使った改善フローを試作",
      "現場テスト・運用手順・効果測定",
    ],
  },
];

const useCases = [
  {
    tag: "MAIL",
    title: "メールの確認・返信",
    before: "大量のメールを一件ずつ確認し、返信文を毎回作成。",
    after: "重要メールの抽出、要約、返信案、社内共有文まで支援。",
    icon: "↗",
  },
  {
    tag: "MEETING",
    title: "会議後のタスク整理",
    before: "議事録を読み直し、担当者と期限を手作業で整理。",
    after: "議事録から決定事項とタスクを抽出し、一覧化。",
    icon: "✓",
  },
  {
    tag: "REPORT",
    title: "集計・定例レポート",
    before: "表を整え、傾向を読み取り、報告文を毎回作成。",
    after: "集計、可視化、コメントのたたき台作成を効率化。",
    icon: "↗",
  },
];

const painPoints = [
  "ChatGPTを試したものの、検索や文章作成にしか使えていない",
  "自社のどの業務に、どうAIを使えばよいのかわからない",
  "社員に使ってほしいが、教え方や社内ルールが決まっていない",
  "AIツールを導入したいものの、セキュリティ面が不安",
  "自動化や効率化に興味はあるが、何ができるのかわからない",
];

const consultationClues = [
  "毎月・毎週繰り返している作業",
  "手作業で転記している業務",
  "文章や資料を作る業務",
  "情報を探したり、まとめたりする業務",
  "担当者によって品質に差が出る業務",
  "ミスや確認作業が多い業務",
  "属人化している業務",
  "面倒だけれど、なくせない作業",
];

const departmentCases = [
  { department: "営業", label: "SALES", items: ["商談メモから議事録や報告書を作成", "顧客ごとの提案メールを作成", "過去資料から提案書のたたき台を作成", "営業日報から案件状況を整理"] },
  { department: "総務・人事", label: "HR & ADMIN", items: ["社内規程やマニュアルを検索", "求人票やスカウトメールを作成", "面接メモを要約", "研修資料や確認テストを作成"] },
  { department: "経理", label: "ACCOUNTING", items: ["領収書や請求書の内容を一覧化", "会計ソフトへ入力する情報を整理", "経費申請の内容をチェック", "毎月の定型レポートを作成"] },
  { department: "マーケティング・広報", label: "MARKETING", items: ["コラムやSNS投稿の案を作成", "アンケートや口コミを分類・要約", "競合情報を整理", "複数媒体向けに文章を書き換え"] },
  { department: "カスタマーサポート", label: "CUSTOMER SUPPORT", items: ["問い合わせへの回答案を作成", "対応履歴を要約", "よくある質問をFAQ化", "問い合わせを担当部署ごとに分類"] },
  { department: "経営・管理", label: "MANAGEMENT", items: ["会議資料や報告書を要約", "複数のデータから傾向を整理", "会議の議題や論点を抽出", "社内の業務フローを可視化"] },
];

const deliverables = [
  { number: "01", title: "プロンプト", text: "問い合わせ返信、議事録、コラム構成、報告書の要点抽出など、業務ごとに繰り返し使える指示文を整えます。" },
  { number: "02", title: "自動化した仕組み", text: "領収書の読み取り、問い合わせ分類、議事録作成、定型レポートなど、実務に合わせた仕組みをつくります。" },
  { number: "03", title: "利用ルール・作業手順", text: "機密情報の扱い、人による確認、使用ツール、著作権や保存方法など、安全に使うための基準を明確にします。" },
  { number: "04", title: "マニュアル・社内共有資料", text: "操作マニュアル、エラー対処、社員向け利用ガイド、活用事例、担当者向けの引き継ぎ資料を残します。" },
];

const faqs = [
  {
    q: "どのプランを選べばよいかわかりません。",
    a: "無料相談で現在の状況と目的を伺い、体験・習得・業務改善のどこから始めると効果的かをご提案します。プランを決めずにご相談いただいて問題ありません。",
  },
  {
    q: "AIやITに詳しくなくても参加できますか。",
    a: "はい。専門用語をできるだけ使わず、普段の仕事を題材に進めます。AIをまだ使ったことがない方も対象です。",
  },
  {
    q: "スタッフ向けプランは何人から実施できますか。",
    a: "少人数のチームからご相談いただけます。人数、職種、習得したい業務に合わせて内容と進め方を調整します。",
  },
  {
    q: "自動化したい業務が決まっていなくても相談できますか。",
    a: "はい。業務の頻度、工数、難易度、リスクを一緒に整理し、改善効果が見込める仕事から候補を選定します。",
  },
  {
    q: "機密情報や個人情報の扱いが心配です。",
    a: "利用する情報の範囲と扱い方を事前に確認して進めます。必要に応じて秘密保持契約（NDA）の締結も可能です。",
  },
];

export default function Home() {
  return (
    <main className="updated-page">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="AI伴走パートナー トップへ">
          <img className="brand-logo" src={`${basePath}/ai-bansou-logo.png`} alt="" />
          <span>AI伴走パートナー</span>
        </a>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          <a href="#about">サービスについて</a>
          <a href="#plans">プラン・料金</a>
          <a href="#usecases">活用例</a>
          <a href="#faq">よくある質問</a>
        </nav>
        <a className="header-cta" href={contactUrl}>
          相談してみる <span>↗</span>
        </a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">AI PARTNERSHIP FOR YOUR BUSINESS</p>
          <h1>
            <span className="hero-line">AIを知るところから、</span>
            <span className="hero-line">会社の仕事が</span>
            <span className="hero-line hero-line-accent">変わるところまで。</span>
          </h1>
          <p className="hero-lead">
            経営者の体験、スタッフの習得、業務の改善・自動化。
            <br />
            自社の現在地に合った一歩から、AI活用を一緒に進めます。
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href={contactUrl}>
              自社に合うプランを相談する <span>↗</span>
            </a>
            <a className="text-link" href="#plans">
              プランを見る <span>↓</span>
            </a>
          </div>
          <div className="hero-notes" aria-label="サービスの特徴">
            <span>AI・ITの専門知識は不要</span>
            <span>実際の業務で実践</span>
            <span>オンライン／訪問対応</span>
          </div>
        </div>

        <div className="hero-visual">
          <img
            className="hero-photo"
            src={`${basePath}/plan-a-hero.jpg`}
            alt="AI活用について相談しながら業務データを確認する担当者"
          />
        </div>
      </section>

      <section className="concerns-section section-shell">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">YOUR CONCERNS</p>
            <h2>AIを活用したい。<br />でも、どう使えばいいかわからない。</h2>
          </div>
          <p>AIを学ぶだけではなく、自社の業務で使える形にするためのサービスです。</p>
        </div>
        <div className="concerns-grid">
          <div className="concern-list">
            {painPoints.map((item, index) => (
              <div key={item}><b>{String(index + 1).padStart(2, "0")}</b><p>{item}</p></div>
            ))}
          </div>
          <article className="consultation-card">
            <p className="mini-label">START WITH YOUR WORK</p>
            <h3>「AIで何をしたいか」が<br />決まっていなくても、安心してご相談ください。</h3>
            <p>
              まずは、時間がかかっている作業や、担当者に負担が集中している業務をお聞きします。
              その中からAIと相性のよい業務を整理し、取り組みやすいものから活用方法を考えます。
            </p>
            <div className="consultation-clues">
              {consultationClues.map((item) => <span key={item}>{item}</span>)}
            </div>
          </article>
        </div>
      </section>

      <section className="usecases-section" id="usecases">
        <div className="section-shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">USE CASES</p>
              <h2>こんな仕事から、<br />AI活用を始められます。</h2>
            </div>
            <p>改善前とAI活用後を比べながら、自社で効果が出やすい業務を見つけます。</p>
          </div>
          <div className="usecase-grid">
            {useCases.map((item) => (
              <article className="usecase-card" key={item.tag}>
                <div className={`usecase-visual visual-${item.tag.toLowerCase()}`}>
                  <span>{item.tag}</span>
                  <b>{item.icon}</b>
                  <div><i /><i /><i /><i /></div>
                </div>
                <h3>{item.title}</h3>
                <dl>
                  <div><dt>BEFORE</dt><dd>{item.before}</dd></div>
                  <div><dt>AFTER</dt><dd>{item.after}</dd></div>
                </dl>
              </article>
            ))}
          </div>
          <div className="department-heading">
            <p className="eyebrow">BY DEPARTMENT</p>
            <h3>部署ごとに、こんな業務にも活用できます。</h3>
          </div>
          <div className="department-grid">
            {departmentCases.map((group) => (
              <article className="department-card" key={group.department}>
                <p className="mini-label">{group.label}</p>
                <h3>{group.department}</h3>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="deliverables-section section-shell">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">WHAT REMAINS</p>
            <h2>支援が終わったあとも、<br />社内で使い続けられる形を。</h2>
          </div>
          <p>アドバイスだけで終わらず、プランや支援内容に応じて、実際の業務で繰り返し使える成果物を整えます。</p>
        </div>
        <div className="deliverables-grid">
          {deliverables.map((item) => (
            <article key={item.number}>
              <b>{item.number}</b>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="features section-shell" id="about">
        <div className="section-heading centered">
          <p className="eyebrow">OUR APPROACH</p>
          <h2>AI活用の現在地に合わせて、<br />3つの進め方から選べます。</h2>
          <p>
            ツールを入れることからではなく、
            <br className="mobile-only" />
            「誰が、どの仕事で、どう使うか」から考えます。
          </p>
        </div>
        <div className="feature-grid">
          <article className="feature-card">
            <div className="feature-meta"><span>EXPERIENCE</span><b>01</b></div>
            <h3>まず、体験する</h3>
            <p>経営者ご自身の仕事でAIを試し、自社での活用イメージと判断材料を持ち帰ります。</p>
            <div className="card-graphic experience-graphic">
              <div className="prompt-line"><span>いつもの業務を入力</span><b>→</b></div>
              <div className="answer-lines"><i /><i /><i /></div>
              <strong>活用テーマが具体化</strong>
            </div>
          </article>
          <article className="feature-card">
            <div className="feature-meta"><span>LEARNING</span><b>02</b></div>
            <h3>仕事で、身につける</h3>
            <p>一般的な研修ではなく、自分の仕事を題材に練習し、繰り返し使える手順まで整えます。</p>
            <div className="card-graphic learning-graphic">
              <div className="learning-row"><span>基本を知る</span><b>✓</b></div>
              <div className="learning-row"><span>実務で試す</span><b>✓</b></div>
              <div className="learning-row active"><span>継続して使う</span><b>03</b></div>
            </div>
          </article>
          <article className="feature-card">
            <div className="feature-meta"><span>IMPROVEMENT</span><b>03</b></div>
            <h3>業務を、仕組みにする</h3>
            <p>改善効果の高い仕事を選び、試作・現場テスト・運用まで一緒に進めます。</p>
            <div className="card-graphic workflow-graphic">
              <div><span>手作業</span><i /></div>
              <div><span>AI支援</span><i /></div>
              <div><span>自動化</span><i /></div>
              <strong>仕事の流れを短く</strong>
            </div>
          </article>
        </div>
      </section>

      <section className="custom-section">
        <div className="section-shell">
          <div className="section-heading centered">
            <p className="eyebrow">WHY PARTNERSHIP</p>
            <h2>説明だけで終わらない、<br />実務に寄り添う伴走支援。</h2>
          </div>
          <div className="custom-grid">
            <article className="custom-card custom-copy-card">
              <p className="mini-label">REAL WORK</p>
              <h3>一般論ではなく、<br />実際の仕事を題材に。</h3>
              <p>
                メール、資料作成、集計、調査、スケジュール調整。
                普段の業務をそのまま題材にするから、AIを導入した後の変化を具体的にイメージできます。
              </p>
              <a className="text-link" href="#usecases">活用例を見る <span>↗</span></a>
              <div className="tool-cloud" aria-label="対象業務の例">
                <span>MAIL</span><span>REPORT</span><span>DATA</span>
                <span>RESEARCH</span><span>SCHEDULE</span>
              </div>
            </article>
            <article className="custom-card custom-security">
              <p className="mini-label">SAFE & PRACTICAL</p>
              <h3>安心して使い続けるための<br />ルールも一緒に整えます。</h3>
              <p>
                便利さだけでなく、入力してよい情報や確認すべきポイントも整理。
                現場が迷わず使える、無理のない運用をつくります。
              </p>
            </article>
            <article className="custom-card support-card">
              <div className="support-stat">
                <strong>3</strong><span>つの段階</span>
              </div>
              <div className="support-stat">
                <strong>1</strong><span>社ごとに設計</span>
              </div>
              <div className="support-copy">
                <h3>体験から改善まで、必要な段階を支援。</h3>
                <p>会社の現在地とゴールに合わせ、必要な内容だけを組み合わせます。</p>
              </div>
            </article>
            <article className="custom-card compact-card">
              <div>
                <p className="mini-label">WHAT WE VALUE</p>
                <h3>必要な機能だけを、わかりやすく。</h3>
                <p>複雑な仕組みを増やすのではなく、現場で続くことを大切にします。</p>
              </div>
              <ul className="value-list">
                <li><b>01</b><span>専門用語に頼らない</span></li>
                <li><b>02</b><span>人と業務の両方を見る</span></li>
                <li><b>03</b><span>小さく試して改善する</span></li>
                <li><b>04</b><span>次の一歩を明確にする</span></li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="comparison-section">
        <div className="section-shell">
          <div className="section-heading centered">
            <p className="eyebrow">THE DIFFERENCE</p>
            <h2>一般的なAI研修や<br />コンサルとの違い。</h2>
            <p>一方的に知識や改善案を伝えるのではなく、担当者と一緒に手を動かし、自社で使える方法をつくります。</p>
          </div>
          <div className="comparison-scroll">
            <table className="comparison-table">
              <thead><tr><th>比較項目</th><th>一般的なAI研修</th><th>一般的なAIコンサル</th><th>AI伴走パートナー</th></tr></thead>
              <tbody>
                <tr><th>主な目的</th><td>基本知識や一般的な使い方を学ぶ</td><td>課題分析や方針を提案する</td><td>実際の業務で使える形を一緒につくる</td></tr>
                <tr><th>支援内容</th><td>講義・演習</td><td>調査・提案・計画策定</td><td>業務整理・試作・運用・改善</td></tr>
                <tr><th>対象業務</th><td>全員共通の題材</td><td>経営・組織課題が中心</td><td>現場の日常業務に対応</td></tr>
                <tr><th>支援後</th><td>知識や教材が残る</td><td>提案書や計画が残る</td><td>プロンプト・手順・ルール・仕組みが残る</td></tr>
                <tr><th>AI初心者</th><td>基礎知識を学びたい場合に有効</td><td>自社で課題整理が必要な場合もある</td><td>何に使えるかわからない段階から相談可能</td></tr>
              </tbody>
            </table>
          </div>
          <p className="comparison-note">小さな業務から試し、現場の意見を取り入れながら改善できることが、AI伴走パートナーの特徴です。</p>
        </div>
      </section>

      <section className="plans section-shell" id="plans">
        <div className="section-heading centered">
          <p className="eyebrow">PLANS & PRICING</p>
          <h2>4つの伴走プラン</h2>
          <p>目的に合わせた3つの伴走プランに加え、継続相談用の月額プランもご用意しています。</p>
        </div>
        <article className="consultation-plan">
          <div className="consultation-plan-main">
            <div className="consultation-plan-topline">
              <span>CONTINUOUS SUPPORT</span>
              <b>月額プラン</b>
            </div>
            <p className="consultation-plan-label">いつでも相談する</p>
            <h3>AI相談パートナー</h3>
            <p className="consultation-plan-lead">
              AIの実現方法や日々のお困りごとを、電話やチャットで何でも相談できる
              「AIのよろず相談窓口」です。
            </p>
            <ul className="consultation-plan-features">
              <li><b>01</b><span>月間2時間まで相談可能</span></li>
              <li><b>02</b><span>電話・チャットで対応</span></li>
              <li><b>03</b><span>AIについて幅広く相談可能</span></li>
              <li><b>04</b><span>調査・実作業はスポット対応</span></li>
            </ul>
          </div>
          <div className="consultation-plan-price">
            <p>月額</p>
            <div>
              <small>¥</small>
              <strong>30,000</strong>
              <span>／月</span>
            </div>
            <p className="consultation-plan-tax">税別・月間2時間まで</p>
            <dl>
              <div>
                <dt>時間追加</dt>
                <dd>1時間あたり ¥10,000</dd>
              </div>
              <div>
                <dt>スポット対応</dt>
                <dd>詳細調査や実作業も対応可能</dd>
              </div>
            </dl>
            <a className="button button-dark" href={contactUrl}>
              AI相談パートナーを相談する <span>↗</span>
            </a>
          </div>
        </article>
        <div className="plan-grid">
          {plans.map((plan) => (
            <article className={`plan-card ${plan.featured ? "featured" : ""}`} key={plan.number}>
              <div className="plan-topline">
                <span>{plan.label}</span>
                <b>{plan.number}</b>
              </div>
              <p className="plan-verb">{plan.verb}</p>
              <h3>{plan.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
              <p className="plan-lead">{plan.lead}</p>
              <div className="price">
                <small>¥</small>
                <strong>{plan.price}</strong>
                <span>{plan.unit}</span>
              </div>
              <p className="price-note">{plan.note}</p>
              <a className={`button ${plan.featured ? "button-light" : "button-outline"}`} href={contactUrl}>
                このプランを相談する <span>↗</span>
              </a>
              <p className="for-whom">{plan.forWhom}</p>
              <ul className="plan-list">
                {plan.items.map((item) => <li key={item}><b>✓</b>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <p className="plan-footnote">
          どのプランが合うかわからなくても大丈夫です。
          <a href={contactUrl}>まずは現在の状況をお聞かせください ↗</a>
        </p>
      </section>

      <section className="process-section section-shell">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">PROCESS</p>
            <h2>ご相談から振り返りまで、<br />4つのステップ。</h2>
          </div>
          <p>プランが決まっていない場合も、無料相談から最適な進め方をご提案します。</p>
        </div>
        <div className="process-grid">
          {[
            ["01", "無料相談", "会社の状況、AI活用の希望、困っている業務を確認します。"],
            ["02", "プラン提案", "目的・対象者・対象業務に合う進め方をご提案します。"],
            ["03", "伴走支援", "体験、習得、業務改善のいずれかを実務に合わせて実施します。"],
            ["04", "振り返り", "成果を確認し、継続利用や次の改善テーマを整理します。"],
          ].map(([number, title, text]) => (
            <article key={number}>
              <b>{number}</b>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section section-shell" id="faq">
        <div className="faq-intro">
          <p className="eyebrow">FAQ</p>
          <h2>よくある質問</h2>
          <p>ここにないご質問も、お気軽にご相談ください。</p>
          <a className="text-link" href={contactUrl}>お問い合わせはこちら <span>↗</span></a>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary><span>{faq.q}</span><b>＋</b></summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-contact">
        <div className="section-shell final-contact-inner">
          <div>
            <p className="eyebrow">CONTACT</p>
            <h2>AIを、経営と現場のそばに。</h2>
            <p>
              AI伴走パートナーは、実務に寄り添ったAI活用の第一歩から、
              <br />
              会社の仕事が変わるところまでお手伝いします。
            </p>
          </div>
          <div className="contact-actions">
            <a className="button button-dark" href={contactUrl}>自社に合うプランを相談する <span>↗</span></a>
            <span>お電話でのご相談</span>
            <a className="phone" href="tel:0368244533">03-6824-4533</a>
            <small>平日 9:00–18:00</small>
          </div>
        </div>
      </section>

      <footer>
        <div className="section-shell footer-inner">
          <div className="footer-brand">
            <a className="brand" href="#top">
              <img className="brand-logo" src={`${basePath}/ai-bansou-logo.png`} alt="" />
              <span>AI伴走パートナー</span>
            </a>
            <p>株式会社アグリード</p>
            <p>〒101-0044 東京都千代田区鍛冶町2-10-11<br />イマジクスビル8F</p>
          </div>
          <div className="footer-links">
            <div>
              <b>SERVICE</b>
              <a href="#about">サービスについて</a>
              <a href="#plans">プラン・料金</a>
              <a href="#usecases">活用例</a>
            </div>
            <div>
              <b>INFORMATION</b>
              <a href="#faq">よくある質問</a>
              <a href={contactUrl}>お問い合わせ</a>
              <a href={`${basePath}/privacy-policy/`}>プライバシーポリシー</a>
              <a href="https://itvolante.jp/">ITボランチ</a>
            </div>
          </div>
          <div className="footer-sign">
            <strong>AI PARTNER.</strong>
            <span>© 2026 AGLEAD INC.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
