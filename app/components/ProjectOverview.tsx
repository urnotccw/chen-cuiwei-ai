import PortfolioImage from "./PortfolioImage";

function JourneyIcon({ kind }: { kind: "pin" | "plan" | "people" }) {
  return <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    {kind === "pin" ? <><path d="M32 55S13 34 13 23a19 19 0 0 1 38 0c0 11-19 32-19 32Z" /><circle cx="32" cy="23" r="7" /><path d="m5 51 11-5m32 0 11 5M23 58h18" /></> : kind === "plan" ? <><rect x="10" y="9" width="44" height="47" rx="2" /><path d="M10 21h44M21 4v10M43 4v10M20 31h5m7 0h12M20 41h5m7 0h12" /><path d="m35 49 5 5 14-14" /></> : <><circle cx="32" cy="16" r="8" /><circle cx="12" cy="26" r="6" /><circle cx="52" cy="26" r="6" /><path d="M20 47v-9a12 12 0 0 1 24 0v9M3 49v-8a9 9 0 0 1 15-7M61 49v-8a9 9 0 0 0-15-7M24 55l6 5 12-12" /></>}
  </svg>;
}

export default function ProjectOverview({ project }: { project: "travel" | "byte" }) {
  if (project === "travel") return <section className="project-overview travel-overview" aria-label="下一站项目介绍与前期问题梳理">
    <div className="overview-heading"><h3>先心动，再一起决定。</h3><p>前期问题梳理 · 需求假设，待用户验证</p></div>
    <div className="travel-overview-layout">
      <figure className="travel-overview-visual">
        <PortfolioImage src="/travel-current.png" alt="下一站当前在线版：黄色登机牌、可缩放地图与飞镖选城界面" sizes="(max-width: 760px) 90vw, 50vw" />
        <figcaption>从“去哪儿”开始，而不是先填一份复杂表单。</figcaption>
      </figure>
      <ol className="travel-journey">
        <li><JourneyIcon kind="pin" /><div><span>不知道去哪</span><h4>飞镖选城</h4><p>先给一个具体选项，喜欢再加入候选。</p></div></li>
        <li><JourneyIcon kind="plan" /><div><span>有想法，没计划</span><h4>试排行程</h4><p>AI 编排草稿，重点保留，局部可改。</p></div></li>
        <li><JourneyIcon kind="people" /><div><span>朋友意见不一致</span><h4>共同确认</h4><p>城市、日期与安排，一次对齐。</p></div></li>
      </ol>
    </div>
    <div className="overview-takeaway"><span>关键取舍</span><p>收藏 ≠ 决定出发 <i aria-hidden="true">→</i> 先看怎么玩，再确认整份计划。</p></div>
  </section>;

  return <section className="project-overview gift-overview" aria-label="礼序项目介绍与前期方案研究">
    <div className="overview-heading"><h3>从可控生产，到有感互动。</h3><p>前期方案研究 · 生产管线设计 + 互动原型</p></div>
    <div className="gift-overview-layout">
      <div className="gift-production">
        <div className="overview-mini-heading"><span>01 / 制作端</span><h4>生成不等于可交付</h4></div>
        <ol className="gift-flow" aria-label="礼物生产与审核流程">
          <li><span>需求与文化依据</span><small>确认受众、规则与规格</small></li>
          <li><span>设计 → 生成</span><small>按已批准方案制作</small></li>
          <li className="gift-quality-gate"><span>三道审核</span><div><b>技术</b><b>文化</b><b>视觉</b></div></li>
          <li><span>人工签核 → 交付</span><small>报告与资产版本绑定</small></li>
        </ol>
        <p className="gift-return-path">↳ 未通过：定向返工；重复无改善：熔断转人工。</p>
      </div>
      <div className="gift-interaction">
        <div className="overview-mini-heading"><span>02 / 体验端</span><h4>让表情成为参与方式</h4></div>
        <figure>
          <div className="gift-render-window"><PortfolioImage src="/byte-smile-case.png" sizes="(max-width: 760px) 100vw, 55vw" alt="微笑花园的花朵生长与爱心粒子渲染示例" /></div>
          <figcaption>原型渲染示例 · 非真人识别测试</figcaption>
        </figure>
        <div className="gift-expression-flow"><span>微笑 <b>→</b> 雨滴与花园</span><span>大笑 <b>→</b> 粒子庆典</span></div>
        <p className="gift-interaction-note">表情触发，视觉回应；手部动作参与碰撞。</p>
      </div>
    </div>
    <div className="overview-takeaway"><span>设计重点</span><p>生产端控制质量与返工，体验端让观众真正参与。</p></div>
  </section>;
}
