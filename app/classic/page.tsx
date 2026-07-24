import type { Metadata } from "next";
import "./classic.css";

const contactUrl = "https://itvolante.jp/contact/";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "AI伴走パートナー｜デザインパターンB",
  description:
    "経営者のAI体験、スタッフのAI活用習得、業務改善・自動化を支援するAI伴走パートナーのデザインパターンBです。",
};

const planData = [
  {
    no: "01",
    en: "Executive Experience",
    title: "経営者向け\nAI伴走体験プラン",
    copy: "経営者ご自身の仕事でAIを試し、自社での活用イメージと、次に進むための判断材料を持ち帰る体験型プランです。",
    price: "100,000円",
    note: "1回3時間・税別",
    image: `${basePath}/classic-workshop.jpg`,
    alt: "AI活用の進め方を検討するワークショップ",
    items: ["業務と課題のヒアリング", "AI活用テーマの抽出", "実際の業務でAIを体験", "次の一歩を整理"],
  },
  {
    no: "02",
    en: "Team Learning",
    title: "スタッフ向け\nAI活用習得プラン",
    copy: "スタッフが自分の仕事でAIを使い続けられるよう、毎週の実践と振り返りを重ねながら定着を支援します。",
    price: "50,000円",
    note: "1回2時間・税別／月4回 200,000円",
    image: `${basePath}/classic-team.jpg`,
    alt: "スタッフが一緒に学ぶミーティング",
    items: ["基本操作と安全な利用ルール", "実際の業務による実践", "成果物へのフィードバック", "再利用できる手順を整備"],
  },
  {
    no: "03",
    en: "Workflow Improvement",
    title: "AI業務改善・\n自動化プラン",
    copy: "時間のかかる仕事を棚卸しし、効果の高いタスクを選定。試作、現場テスト、運用まで一緒に進めます。",
    price: "80,000円〜",
    note: "1タスク・税別／1時間程度の作業を自動化する場合の目安",
    image: `${basePath}/classic-hero.jpg`,
    alt: "業務改善について話し合うチーム",
    items: ["業務の棚卸しと優先度評価", "改善フローの試作", "現場テストと調整", "運用手順と効果測定"],
  },
];

const faqData = [
  ["どのプランを選べばよいかわかりません。", "無料相談で現在の状況を伺い、体験・習得・業務改善のどこから始めるべきかをご提案します。"],
  ["AIやITに詳しくなくても参加できますか。", "はい。専門用語を避け、普段の仕事を題材に進めるため、初めてAIを使う方もご参加いただけます。"],
  ["スタッフ向けプランは何人から実施できますか。", "少人数のチームからご相談いただけます。人数や職種に合わせて内容を調整します。"],
  ["自動化する業務が決まっていなくても大丈夫ですか。", "はい。業務の頻度、工数、難易度、リスクを整理し、効果が見込める仕事から候補を選びます。"],
  ["機密情報の取り扱いが心配です。", "利用する情報の範囲を事前に確認し、安全な利用方法を整理します。NDAの締結も可能です。"],
];

export default function ClassicPage() {
  return (
    <main className="classic-page" id="classic-top">
      <header className="classic-header">
        <a className="classic-logo" href="#classic-top">
          <img src={`${basePath}/ai-bansou-logo.png`} alt="" />
          <span>AI伴走パートナー</span>
        </a>
        <nav aria-label="パターンB メインナビゲーション">
          <a href="#classic-about">私たちについて</a>
          <a href="#classic-service">3つのプラン</a>
          <a href="#classic-process">進め方</a>
          <a href="#classic-faq">よくある質問</a>
        </nav>
        <div className="classic-header-actions">
          <a className="classic-switch" href={`${basePath}/`}>デザインA</a>
          <a className="classic-contact-mini" href={contactUrl}>無料相談</a>
        </div>
      </header>

      <section className="classic-hero">
        <img src={`${basePath}/classic-main-visual.jpeg`} alt="AI活用について相談する担当者とスタッフ" />
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
          <span>Our approach</span>
          <b>人と仕事に寄り添う、<br />実務中心のAI伴走支援。</b>
        </div>
        <div className="classic-side-note">
          <span>Scroll</span><i />
        </div>
      </section>

      <section className="classic-intro" id="classic-about">
        <div className="classic-intro-photo">
          <img src={`${basePath}/classic-workshop.jpg`} alt="業務を整理するワークショップ" />
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

      <section className="classic-service" id="classic-service">
        <div className="classic-section-title classic-on-dark">
          <p>Service</p>
          <span>—　3つの伴走プラン</span>
        </div>

        <article className="classic-feature-plan">
          <img src={planData[0].image} alt={planData[0].alt} />
          <div>
            <p className="classic-label">{planData[0].en}</p>
            <span className="classic-plan-no">{planData[0].no}</span>
            <h2>{planData[0].title.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
            <p>{planData[0].copy}</p>
            <div className="classic-price">
              <b>{planData[0].price}</b><span>{planData[0].note}</span>
            </div>
            <ul>{planData[0].items.map((item) => <li key={item}>{item}</li>)}</ul>
            <a href={contactUrl}>このプランを相談する　↗</a>
          </div>
        </article>

        <div className="classic-small-plans">
          {planData.slice(1).map((plan) => (
            <article key={plan.no}>
              <img src={plan.image} alt={plan.alt} />
              <div className="classic-small-copy">
                <p className="classic-label">{plan.en}</p>
                <span className="classic-plan-no">{plan.no}</span>
                <h3>{plan.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
                <p>{plan.copy}</p>
                <div className="classic-price">
                  <b>{plan.price}</b><span>{plan.note}</span>
                </div>
                <ul>{plan.items.map((item) => <li key={item}>{item}</li>)}</ul>
                <a href={contactUrl}>このプランを相談する　↗</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="classic-process" id="classic-process">
        <div className="classic-section-title">
          <p>Process</p>
          <span>—　ご利用の流れ</span>
        </div>
        <div className="classic-process-lead">
          <p className="classic-label">From consultation to action</p>
          <h2>話すことから始め、<br />仕事の変化まで見届ける。</h2>
          <p>
            プランが決まっていなくても構いません。
            現在の状況を整理し、もっとも効果的な進め方をご提案します。
          </p>
        </div>
        <div className="classic-process-list">
          {[
            ["01", "無料相談", "会社の状況、AI活用の希望、困っている業務を確認します。"],
            ["02", "プラン提案", "目的・対象者・対象業務に合う進め方を設計します。"],
            ["03", "伴走支援", "体験、習得、業務改善を実際の仕事に合わせて進めます。"],
            ["04", "振り返り", "成果を確認し、継続利用と次の改善テーマを整理します。"],
          ].map(([no, title, text]) => (
            <article key={no}>
              <span>{no}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="classic-process-image">
          <img src={`${basePath}/classic-team.jpg`} alt="スタッフが一緒にAI活用を学ぶ様子" />
          <p>Experience. Learn. Improve.</p>
        </div>
      </section>

      <section className="classic-cases">
        <div className="classic-section-title">
          <p>Work</p>
          <span>—　AIで改善できる仕事</span>
        </div>
        <div className="classic-case-list">
          {[
            ["01", "メールの確認・返信", "重要メールの抽出、要約、返信案、社内共有文まで支援します。"],
            ["02", "会議後のタスク整理", "議事録から決定事項、担当者、期限を抽出して一覧化します。"],
            ["03", "集計・定例レポート", "表の整形、傾向の読み取り、報告文のたたき台を作成します。"],
            ["04", "スケジュール調整", "候補日の整理、依頼文、決定事項の共有までを効率化します。"],
          ].map(([no, title, text]) => (
            <article key={no}>
              <span>{no}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <b>↗</b>
            </article>
          ))}
        </div>
      </section>

      <section className="classic-faq" id="classic-faq">
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

      <section className="classic-contact">
        <div>
          <p>Contact us</p>
          <span>
            AI活用について、まずは現在のお悩みをお聞かせください。<br />
            プランが決まっていなくてもご相談いただけます。
          </span>
        </div>
        <a href={contactUrl}>
          <span>Get in<br />touch</span>
          <small>無料相談　↗</small>
        </a>
      </section>

      <footer className="classic-footer">
        <div>
          <a className="classic-logo" href="#classic-top">
            <img src={`${basePath}/ai-bansou-logo.png`} alt="" />
            <span>AI伴走パートナー</span>
          </a>
          <p>株式会社アグリード<br />〒101-0044 東京都千代田区鍛冶町2-10-11 イマジクスビル8F</p>
        </div>
        <nav>
          <a href="#classic-about">私たちについて</a>
          <a href="#classic-service">3つのプラン</a>
          <a href="#classic-process">進め方</a>
          <a href={contactUrl}>お問い合わせ</a>
        </nav>
        <small>© 2026 AGLEAD INC.<br />Photos: Unsplash</small>
      </footer>
    </main>
  );
}
