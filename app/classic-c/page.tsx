import type { Metadata } from "next";
import "../classic/classic.css";
import "./classic-c.css";

const contactUrl = "https://itvolante.jp/contact/";

export const metadata: Metadata = {
  title: "AI伴走パートナー｜デザインパターンC",
  description:
    "経営者のAI体験、スタッフのAI活用習得、業務改善・自動化を支援するAI伴走パートナーのデザインパターンCです。",
};

const approaches = [
  {
    no: "01",
    en: "Experience",
    title: "まず、体験する",
    copy: "経営者ご自身の仕事でAIを試し、自社での活用イメージと判断材料を持ち帰ります。",
    note: "経営者・役員向け",
  },
  {
    no: "02",
    en: "Learning",
    title: "仕事で、身につける",
    copy: "一般的な研修ではなく、自分の仕事を題材に練習し、繰り返し使える手順まで整えます。",
    note: "スタッフ・チーム向け",
  },
  {
    no: "03",
    en: "Improvement",
    title: "業務を、仕組みにする",
    copy: "改善効果の高い仕事を選び、試作・現場テスト・運用まで一緒に進めます。",
    note: "業務改善・自動化",
  },
];

const plans = [
  {
    no: "01",
    en: "Executive Experience",
    verb: "体験する",
    title: "経営者向け\nAI伴走体験プラン",
    copy: "経営者ご自身の仕事でAIを試し、自社での活用イメージと、次に進むための判断材料を持ち帰る体験型プランです。",
    price: "100,000円",
    note: "1回3時間・税別",
    forWhom: "まずAIの可能性を確かめたい経営者・役員の方へ",
    image: "/classic-workshop.jpg",
    alt: "AI活用の進め方を検討するワークショップ",
    items: ["日々の業務と課題をヒアリング", "AIが効果を出しやすい業務を抽出", "実際の業務でAIを体験", "自社で取り組む次の一歩を整理"],
  },
  {
    no: "02",
    en: "Team Learning",
    verb: "身につける",
    title: "スタッフ向け\nAI活用習得プラン",
    copy: "スタッフが自分の仕事でAIを使い続けられるよう、毎週の実践と振り返りを重ねながら定着を支援します。",
    price: "50,000円",
    note: "1回2時間・税別／月4回 200,000円",
    forWhom: "AIを一部の人だけでなく、チームに定着させたい会社へ",
    image: "/classic-team.jpg",
    alt: "スタッフが一緒に学ぶミーティング",
    items: ["対象部署・参加者の業務を事前確認", "基本操作と安全な利用ルールを共有", "実際の業務による実践", "再利用できるプロンプトと手順を整備"],
  },
  {
    no: "03",
    en: "Workflow Improvement",
    verb: "仕組みにする",
    title: "AI業務改善・\n自動化プラン",
    copy: "時間のかかる仕事を棚卸しし、効果の高いタスクを選定。試作、現場テスト、運用まで一緒に進めます。",
    price: "80,000円〜",
    note: "1タスク・税別／1時間程度の作業を自動化する場合の目安",
    forWhom: "時間のかかる定型業務を、具体的に改善したい会社へ",
    image: "/classic-hero.jpg",
    alt: "業務改善について話し合うチーム",
    items: ["業務を棚卸しして改善候補を評価", "対象業務と目標を決定", "AIを使った改善フローを試作", "現場テスト・運用手順・効果測定"],
  },
];

const useCases = [
  {
    no: "01",
    tag: "MAIL",
    title: "メールの確認・返信",
    before: "大量のメールを一件ずつ確認し、返信文を毎回作成。",
    after: "重要メールの抽出、要約、返信案、社内共有文まで支援。",
  },
  {
    no: "02",
    tag: "MEETING",
    title: "会議後のタスク整理",
    before: "議事録を読み直し、担当者と期限を手作業で整理。",
    after: "議事録から決定事項とタスクを抽出し、一覧化。",
  },
  {
    no: "03",
    tag: "REPORT",
    title: "集計・定例レポート",
    before: "表を整え、傾向を読み取り、報告文を毎回作成。",
    after: "集計、可視化、コメントのたたき台作成を効率化。",
  },
];

const faqData = [
  ["どのプランを選べばよいかわかりません。", "無料相談で現在の状況を伺い、体験・習得・業務改善のどこから始めるべきかをご提案します。"],
  ["AIやITに詳しくなくても参加できますか。", "はい。専門用語を避け、普段の仕事を題材に進めるため、初めてAIを使う方もご参加いただけます。"],
  ["スタッフ向けプランは何人から実施できますか。", "少人数のチームからご相談いただけます。人数や職種に合わせて内容を調整します。"],
  ["自動化する業務が決まっていなくても大丈夫ですか。", "はい。業務の頻度、工数、難易度、リスクを整理し、効果が見込める仕事から候補を選びます。"],
  ["機密情報の取り扱いが心配です。", "利用する情報の範囲を事前に確認し、安全な利用方法を整理します。NDAの締結も可能です。"],
];

export default function ClassicCPage() {
  return (
    <main className="classic-page classic-c-page" id="classic-c-top">
      <header className="classic-header">
        <a className="classic-logo" href="#classic-c-top">
          <img src="/ai-bansou-logo.png" alt="" />
          <span>AI伴走パートナー</span>
        </a>
        <nav aria-label="パターンC メインナビゲーション">
          <a href="#classic-c-approach">進め方</a>
          <a href="#classic-c-partnership">伴走支援</a>
          <a href="#classic-c-plans">プラン</a>
          <a href="#classic-c-cases">活用例</a>
          <a href="#classic-c-faq">よくある質問</a>
        </nav>
        <div className="classic-header-actions">
          <a className="classic-switch" href="/classic">デザインB</a>
          <a className="classic-contact-mini" href={contactUrl}>無料相談</a>
        </div>
      </header>

      <section className="classic-hero">
        <img src="/classic-main-visual.jpeg" alt="AI活用について相談する担当者とスタッフ" />
        <div className="classic-hero-shade" />
        <div className="classic-hero-copy">
          <p>AI Partnership for Business</p>
          <h1>AIを知るところから、<br />会社の仕事が変わるところまで。</h1>
          <span>
            経営者の体験、スタッフの習得、業務の改善・自動化。<br />
            自社の現在地に合った一歩から、一緒に進めます。
          </span>
        </div>
        <div className="classic-hero-detail">
          <span>Design pattern C</span>
          <b>人と仕事に寄り添う、<br />実務中心のAI伴走支援。</b>
        </div>
        <div className="classic-side-note"><span>Scroll</span><i /></div>
      </section>

      <section className="classic-intro" id="classic-c-about">
        <div className="classic-intro-photo">
          <img src="/classic-workshop.jpg" alt="業務を整理するワークショップ" />
        </div>
        <div className="classic-intro-copy">
          <p className="classic-label">Our Philosophy</p>
          <h2>企業の未来に、<br />AIという新しい助走を。</h2>
          <p>
            AIは、導入するだけで仕事を変えてくれるものではありません。
            大切なのは、自社のどの仕事に使うのか、誰が使い続けるのか、
            そしてどこまで仕組みにするのかを丁寧に決めることです。
          </p>
          <p>
            AI伴走パートナーは、経営者の体験からスタッフの習得、
            業務改善・自動化まで、会社の現在地に合わせて一緒に進みます。
          </p>
          <div className="classic-principles">
            <span>01　実際の仕事を題材に</span>
            <span>02　小さく試して改善</span>
            <span>03　続けられる仕組みへ</span>
          </div>
        </div>
        <div className="classic-watermark">AI for your business</div>
      </section>

      <section className="classic-c-approach" id="classic-c-approach">
        <div className="classic-section-title">
          <p>Our approach</p>
          <span>—　現在地に合わせた3つの進め方</span>
        </div>
        <div className="classic-c-approach-lead">
          <p className="classic-label">Start from the real work</p>
          <h2>AI活用の現在地に合わせて、<br />3つの進め方から選べます。</h2>
          <p>ツールを入れることからではなく、「誰が、どの仕事で、どう使うか」から考えます。</p>
        </div>
        <div className="classic-c-approach-list">
          {approaches.map((item) => (
            <article key={item.no}>
              <span className="classic-c-number">{item.no}</span>
              <div>
                <p className="classic-label">{item.en}</p>
                <h3>{item.title}</h3>
              </div>
              <p>{item.copy}</p>
              <small>{item.note}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="classic-c-partnership" id="classic-c-partnership">
        <div className="classic-section-title classic-on-dark">
          <p>Why partnership</p>
          <span>—　説明だけで終わらない伴走支援</span>
        </div>
        <div className="classic-c-partnership-lead">
          <p className="classic-label">Practical and sustainable</p>
          <h2>一般論ではなく、<br />実際の仕事を題材に。</h2>
          <p>普段の業務をそのまま題材にするから、AI導入後の変化を具体的にイメージできます。</p>
        </div>
        <div className="classic-c-value-grid">
          <article>
            <span>01</span>
            <p className="classic-label">Real work</p>
            <h3>実務から始める</h3>
            <p>メール、資料、集計、調査など、日々の仕事を使って効果を確かめます。</p>
          </article>
          <article>
            <span>02</span>
            <p className="classic-label">Safe &amp; practical</p>
            <h3>利用ルールも整える</h3>
            <p>入力してよい情報や確認すべきポイントを整理し、安全な運用をつくります。</p>
          </article>
          <article>
            <span>03</span>
            <p className="classic-label">Made for you</p>
            <h3>1社ごとに設計する</h3>
            <p>会社の現在地とゴールに合わせ、体験・習得・改善から必要な内容を組み合わせます。</p>
          </article>
          <article>
            <span>04</span>
            <p className="classic-label">Keep improving</p>
            <h3>小さく試して改善する</h3>
            <p>複雑な仕組みを増やさず、現場で使い続けられる形まで一緒に調整します。</p>
          </article>
        </div>
      </section>

      <section className="classic-service classic-c-plans" id="classic-c-plans">
        <div className="classic-section-title classic-on-dark">
          <p>Plans &amp; Pricing</p>
          <span>—　今の課題に合う3つの伴走プラン</span>
        </div>

        <article className="classic-feature-plan">
          <img src={plans[0].image} alt={plans[0].alt} />
          <div>
            <p className="classic-label">{plans[0].en} / {plans[0].verb}</p>
            <span className="classic-plan-no">{plans[0].no}</span>
            <h2>{plans[0].title.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
            <p>{plans[0].copy}</p>
            <div className="classic-price"><b>{plans[0].price}</b><span>{plans[0].note}</span></div>
            <p className="classic-c-for-whom">{plans[0].forWhom}</p>
            <ul>{plans[0].items.map((item) => <li key={item}>{item}</li>)}</ul>
            <a href={contactUrl}>このプランを相談する　↗</a>
          </div>
        </article>

        <div className="classic-small-plans">
          {plans.slice(1).map((plan) => (
            <article key={plan.no}>
              <img src={plan.image} alt={plan.alt} />
              <div className="classic-small-copy">
                <p className="classic-label">{plan.en} / {plan.verb}</p>
                <span className="classic-plan-no">{plan.no}</span>
                <h3>{plan.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
                <p>{plan.copy}</p>
                <div className="classic-price"><b>{plan.price}</b><span>{plan.note}</span></div>
                <p className="classic-c-for-whom">{plan.forWhom}</p>
                <ul>{plan.items.map((item) => <li key={item}>{item}</li>)}</ul>
                <a href={contactUrl}>このプランを相談する　↗</a>
              </div>
            </article>
          ))}
        </div>
        <p className="classic-c-plan-note">
          どのプランが合うかわからなくても大丈夫です。まずは現在の状況をお聞かせください。
        </p>
      </section>

      <section className="classic-process" id="classic-c-process">
        <div className="classic-section-title">
          <p>Process</p>
          <span>—　ご相談から振り返りまで</span>
        </div>
        <div className="classic-process-lead">
          <p className="classic-label">From consultation to action</p>
          <h2>話すことから始め、<br />仕事の変化まで見届ける。</h2>
          <p>プランが決まっていなくても構いません。現在の状況を整理し、もっとも効果的な進め方をご提案します。</p>
        </div>
        <div className="classic-process-list">
          {[
            ["01", "無料相談", "会社の状況、AI活用の希望、困っている業務を確認します。"],
            ["02", "プラン提案", "目的・対象者・対象業務に合う進め方を設計します。"],
            ["03", "伴走支援", "体験、習得、業務改善を実際の仕事に合わせて進めます。"],
            ["04", "振り返り", "成果を確認し、継続利用と次の改善テーマを整理します。"],
          ].map(([no, title, text]) => (
            <article key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
        <div className="classic-process-image">
          <img src="/classic-team.jpg" alt="スタッフが一緒にAI活用を学ぶ様子" />
          <p>Experience. Learn. Improve.</p>
        </div>
      </section>

      <section className="classic-c-cases" id="classic-c-cases">
        <div className="classic-section-title">
          <p>Use cases</p>
          <span>—　AI活用を始めやすい仕事</span>
        </div>
        <div className="classic-c-cases-lead">
          <h2>こんな仕事から、<br />AI活用を始められます。</h2>
          <p>改善前とAI活用後を比べながら、自社で効果が出やすい業務を見つけます。</p>
        </div>
        <div className="classic-c-case-list">
          {useCases.map((item) => (
            <article key={item.no}>
              <span>{item.no}</span>
              <div><small>{item.tag}</small><h3>{item.title}</h3></div>
              <dl>
                <div><dt>Before</dt><dd>{item.before}</dd></div>
                <div><dt>After</dt><dd>{item.after}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="classic-faq" id="classic-c-faq">
        <div className="classic-section-title">
          <p>FAQ</p>
          <span>—　よくある質問</span>
        </div>
        <div className="classic-faq-list">
          {faqData.map(([q, a], index) => (
            <details key={q}>
              <summary><b>Q{String(index + 1).padStart(2, "0")}</b><span>{q}</span><i>＋</i></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="classic-c-contact">
        <div className="classic-c-contact-copy">
          <p className="classic-label">Contact</p>
          <h2>AIを、経営と現場のそばに。</h2>
          <p>
            実務に寄り添ったAI活用の第一歩から、会社の仕事が変わるところまでお手伝いします。
            プランが決まっていなくてもご相談いただけます。
          </p>
        </div>
        <div className="classic-c-contact-phone">
          <span>お電話でのご相談</span>
          <a href="tel:0368244533">03-6824-4533</a>
          <small>平日 9:00–18:00</small>
        </div>
        <a className="classic-c-contact-button" href={contactUrl}>
          <span>Get in<br />touch</span>
          <small>無料相談　↗</small>
        </a>
      </section>

      <footer className="classic-footer">
        <div>
          <a className="classic-logo" href="#classic-c-top">
            <img src="/ai-bansou-logo.png" alt="" />
            <span>AI伴走パートナー</span>
          </a>
          <p>株式会社アグリード<br />〒101-0044 東京都千代田区鍛冶町2-10-11 イマジクスビル8F</p>
        </div>
        <nav>
          <a href="#classic-c-approach">進め方</a>
          <a href="#classic-c-partnership">伴走支援</a>
          <a href="#classic-c-plans">3つのプラン</a>
          <a href="#classic-c-cases">活用例</a>
          <a href={contactUrl}>お問い合わせ</a>
        </nav>
        <small>© 2026 AGLEAD INC.<br />Photos: Unsplash / Adobe Stock</small>
      </footer>
    </main>
  );
}
