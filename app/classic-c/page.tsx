import type { Metadata } from "next";
import "../classic/classic.css";
import "./classic-c.css";

const contactUrl = "https://itvolante.jp/contact/";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "AI伴走パートナー｜実務に寄り添うAI活用支援",
  description:
    "経営者のAI体験、スタッフのAI活用習得、業務改善・自動化を支援するAI伴走パートナーです。",
};

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
    image: `${basePath}/classic-workshop.jpg`,
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
    image: `${basePath}/classic-team.jpg`,
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
    image: `${basePath}/classic-hero.jpg`,
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

const caseStudies = [
  {
    no: "01",
    industry: "経営者・サービス業",
    title: "メールと資料作成から、経営者自身がAI活用を開始。",
    challenge: "AIに関心はあるものの、自社のどの仕事から試せばよいか判断できていませんでした。",
    support: "普段のメール対応と企画資料を題材に、情報整理・下書き・確認までを一緒に実践。",
    result: "AIに任せる範囲と人が確認するポイントが整理され、日々の業務で継続して試せる状態に。",
  },
  {
    no: "02",
    industry: "管理部門・中小企業",
    title: "会議後の議事録とタスク整理を、チーム共通の手順に。",
    challenge: "担当者ごとに議事録の形式が異なり、決定事項や期限の共有に時間がかかっていました。",
    support: "実際の会議記録を使い、要約・決定事項・担当者・期限を抽出する手順を整備。",
    result: "誰が作業しても同じ流れで整理できるようになり、会議後の共有がスムーズに。",
  },
  {
    no: "03",
    industry: "営業・企画部門",
    title: "定例レポートの集計から報告文作成までを効率化。",
    challenge: "毎月同じ集計とコメント作成を繰り返し、担当者の負担になっていました。",
    support: "表の整形、傾向の抽出、報告文のたたき台作成を一連の業務フローとして試作。",
    result: "確認すべき箇所を残しながら、繰り返し作業を短くする運用イメージが明確に。",
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
          <img src={`${basePath}/ai-bansou-logo.png`} alt="" />
          <span>AI伴走パートナー</span>
        </a>
        <nav aria-label="パターンC メインナビゲーション">
          <a href="#classic-c-approach">進め方</a>
          <a href="#classic-c-partnership">伴走支援</a>
          <a href="#classic-c-plans">プラン</a>
          <a href="#classic-c-results">導入事例</a>
          <a href="#classic-c-cases">活用例</a>
          <a href="#classic-c-faq">よくある質問</a>
        </nav>
        <div className="classic-header-actions">
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
        <div className="classic-side-note"><span>Scroll</span><i /></div>
      </section>

      <section className="classic-intro" id="classic-c-about">
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

      <section className="classic-c-approach" id="classic-c-approach">
        <div className="classic-c-section-heading">
          <p className="classic-label">Our approach</p>
          <h2>AI活用の現在地に合わせて、<br />3つの進め方から選べます。</h2>
          <p>ツールを入れることからではなく、「誰が、どの仕事で、どう使うか」から考えます。</p>
        </div>
        <div className="classic-c-approach-grid">
          <article>
            <div className="classic-c-card-meta"><span>Experience</span><b>01</b></div>
            <h3>まず、体験する</h3>
            <p>経営者ご自身の仕事でAIを試し、自社での活用イメージと判断材料を持ち帰ります。</p>
            <div className="classic-c-card-graphic classic-c-experience">
              <div><span>いつもの業務を入力</span><b>→</b></div>
              <i /><i /><i />
              <strong>活用テーマが具体化</strong>
            </div>
          </article>
          <article>
            <div className="classic-c-card-meta"><span>Learning</span><b>02</b></div>
            <h3>仕事で、身につける</h3>
            <p>一般的な研修ではなく、自分の仕事を題材に練習し、繰り返し使える手順まで整えます。</p>
            <div className="classic-c-card-graphic classic-c-learning">
              <div><span>基本を知る</span><b>✓</b></div>
              <div><span>実務で試す</span><b>✓</b></div>
              <div><span>継続して使う</span><b>03</b></div>
            </div>
          </article>
          <article>
            <div className="classic-c-card-meta"><span>Improvement</span><b>03</b></div>
            <h3>業務を、仕組みにする</h3>
            <p>改善効果の高い仕事を選び、試作・現場テスト・運用まで一緒に進めます。</p>
            <div className="classic-c-card-graphic classic-c-workflow">
              <div><span>手作業</span><i /></div>
              <div><span>AI支援</span><i /></div>
              <div><span>自動化</span><i /></div>
              <strong>仕事の流れを短く</strong>
            </div>
          </article>
        </div>
      </section>

      <section className="classic-c-partnership" id="classic-c-partnership">
        <div className="classic-c-section-heading">
          <p className="classic-label">Why partnership</p>
          <h2>説明だけで終わらない、<br />実務に寄り添う伴走支援。</h2>
        </div>
        <div className="classic-c-partnership-grid">
          <article className="classic-c-partnership-card">
            <p className="classic-label">Real work</p>
            <h3>一般論ではなく、<br />実際の仕事を題材に。</h3>
            <p>メール、資料作成、集計、調査、スケジュール調整。普段の業務をそのまま題材にするから、AI導入後の変化を具体的にイメージできます。</p>
            <div className="classic-c-tool-cloud">
              <span>MAIL</span><span>REPORT</span><span>DATA</span><span>RESEARCH</span><span>SCHEDULE</span>
            </div>
          </article>
          <article className="classic-c-partnership-card">
            <p className="classic-label">Safe &amp; practical</p>
            <h3>安心して使い続けるための<br />ルールも一緒に整えます。</h3>
            <p>便利さだけでなく、入力してよい情報や確認すべきポイントも整理。現場が迷わず使える、無理のない運用をつくります。</p>
            <div className="classic-c-security">
              <b>✓</b>
              <div><i /><i /><i /></div>
              <span>利用ルールを共有</span>
            </div>
          </article>
          <article className="classic-c-support-card">
            <div><strong>3</strong><span>つの段階</span></div>
            <div><strong>1</strong><span>社ごとに設計</span></div>
            <div>
              <h3>体験から改善まで、必要な段階を支援。</h3>
              <p>会社の現在地とゴールに合わせ、必要な内容だけを組み合わせます。</p>
            </div>
          </article>
          <article className="classic-c-values-card">
            <div>
              <p className="classic-label">What we value</p>
              <h3>必要な機能だけを、わかりやすく。</h3>
              <p>複雑な仕組みを増やすのではなく、現場で続くことを大切にします。</p>
            </div>
            <ul>
              <li><b>01</b><span>専門用語に頼らない</span></li>
              <li><b>02</b><span>人と業務の両方を見る</span></li>
              <li><b>03</b><span>小さく試して改善する</span></li>
              <li><b>04</b><span>次の一歩を明確にする</span></li>
            </ul>
          </article>
        </div>
      </section>

      <section className="classic-service classic-c-plans" id="classic-c-plans">
        <div className="classic-section-title classic-on-dark">
          <p>Plans &amp; Pricing</p>
          <span>—　今の課題に合う3つの伴走プラン</span>
        </div>
        <div className="classic-c-plans-intro">
          <h2>3つの伴走プラン</h2>
          <p>今の課題に合うプランから始められます。</p>
        </div>
        <div className="classic-c-plan-grid">
          {plans.map((plan) => (
            <article className="classic-c-plan-card" key={plan.no}>
              <div className="classic-c-plan-top">
                <span>{plan.en}</span>
                <b>{plan.no}</b>
              </div>
              <p className="classic-c-plan-verb">{plan.verb}</p>
              <h3>{plan.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
              <p className="classic-c-plan-copy">{plan.copy}</p>
              <div className="classic-c-price">
                <strong>{plan.price}</strong>
                <span>{plan.note}</span>
              </div>
              <a className="classic-c-plan-button" href={contactUrl}>このプランを相談する　↗</a>
              <p className="classic-c-for-whom">{plan.forWhom}</p>
              <ul>
                {plan.items.map((item) => <li key={item}><b>✓</b><span>{item}</span></li>)}
              </ul>
            </article>
          ))}
        </div>
        <p className="classic-c-plan-note">
          どのプランが合うかわからなくても大丈夫です。まずは現在の状況をお聞かせください。
        </p>
      </section>

      <section className="classic-c-results" id="classic-c-results">
        <div className="classic-c-results-heading">
          <div>
            <p className="classic-label">Case studies</p>
            <h2>導入事例</h2>
          </div>
          <p>
            AIを使うこと自体を目的にせず、普段の仕事がどう変わるかを一緒に考えます。
            以下は支援内容をもとにしたモデルケースです。
          </p>
        </div>
        <div className="classic-c-results-list">
          {caseStudies.map((item) => (
            <article key={item.no}>
              <div className="classic-c-results-meta">
                <span>CASE {item.no}</span>
                <b>{item.industry}</b>
              </div>
              <h3>{item.title}</h3>
              <dl>
                <div><dt>課題</dt><dd>{item.challenge}</dd></div>
                <div><dt>支援内容</dt><dd>{item.support}</dd></div>
                <div><dt>導入後</dt><dd>{item.result}</dd></div>
              </dl>
            </article>
          ))}
        </div>
        <p className="classic-c-results-note">※掲載内容は、支援内容を分かりやすくお伝えするためのモデルケースです。</p>
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
          <img src={`${basePath}/classic-team.jpg`} alt="スタッフが一緒にAI活用を学ぶ様子" />
          <p>Experience. Learn. Improve.</p>
        </div>
      </section>

      <section className="classic-c-cases" id="classic-c-cases">
        <div className="classic-c-cases-heading">
          <div>
            <p className="classic-label">Use cases</p>
            <h2>こんな仕事から、<br />AI活用を始められます。</h2>
          </div>
          <p>改善前とAI活用後を比べながら、自社で効果が出やすい業務を見つけます。</p>
        </div>
        <div className="classic-c-usecase-grid">
          {useCases.map((item) => (
            <article key={item.no} className={`classic-c-usecase-card classic-c-usecase-${item.tag.toLowerCase()}`}>
              <div className="classic-c-usecase-visual">
                <span>{item.tag}</span>
                <b>↗</b>
                <div><i /><i /><i /><i /></div>
              </div>
              <p className="classic-label">{item.tag}</p>
              <h3>{item.title}</h3>
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
        <div className="classic-c-contact-inner">
          <div className="classic-c-contact-copy">
            <p className="classic-label">Contact</p>
            <h2>AIを、経営と現場のそばに。</h2>
            <p>
              実務に寄り添ったAI活用の第一歩から、会社の仕事が変わるところまでお手伝いします。
              プランが決まっていなくてもご相談いただけます。
            </p>
          </div>
          <div className="classic-c-contact-actions">
            <a href={contactUrl}>自社に合うプランを相談する　↗</a>
            <span>お電話でのご相談</span>
            <a href="tel:0368244533">03-6824-4533</a>
            <small>平日 9:00–18:00</small>
          </div>
        </div>
      </section>

      <footer className="classic-footer">
        <div>
          <a className="classic-logo" href="#classic-c-top">
            <img src={`${basePath}/ai-bansou-logo.png`} alt="" />
            <span>AI伴走パートナー</span>
          </a>
          <p>株式会社アグリード<br />〒101-0044 東京都千代田区鍛冶町2-10-11 イマジクスビル8F</p>
        </div>
        <nav>
          <a href="#classic-c-approach">進め方</a>
          <a href="#classic-c-partnership">伴走支援</a>
          <a href="#classic-c-plans">3つのプラン</a>
          <a href="#classic-c-results">導入事例</a>
          <a href="#classic-c-cases">活用例</a>
          <a href={contactUrl}>お問い合わせ</a>
        </nav>
        <small>© 2026 AGLEAD INC.<br />Photos: Unsplash / Adobe Stock</small>
      </footer>
    </main>
  );
}
