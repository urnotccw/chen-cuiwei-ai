const experience = [
  {
    company: "Converge AI（九坤创新）",
    role: "游戏产品策划实习生",
    period: "2026.06 - 至今",
    product: "Combos｜面向游戏创作者的 AI Agent 工具",
    bullets: [
      "重构 Onboarding，将用户身份、能力与创作目的转化为任务系统输入，完成 PRD 和可交互 Demo。",
      "优化桌宠消息机制，将高频分散通知整合为折叠信息箱，减少生成过程中的操作打断。",
      "策划战斗、卡牌、编辑器等轻量玩法，并支持海外创作者触达、反馈整理与活动传播。",
    ],
  },
  {
    company: "腾讯",
    role: "AI 产品实习生（混元 3D / 3D 世界）",
    period: "2025.12 - 2026.06",
    product: "面向游戏资产生产的多模态 AIGC 能力",
    bullets: [
      "重构 3D 生成评测标准，形成 3 个一级维度、8 个二级指标，并用于大版本评测。",
      "完成 3 轮深度评测，覆盖 6 个模型、单组 3000+ 样本；Bad Case 归因推动 GSB 胜率提升约 6%。",
      "建设 1000+ 题大版本题库与 200 题敏捷题库，跟踪 8+ 款产品并输出竞品和敏捷评测报告。",
    ],
  },
];

const projects = [
  { name: "AIGC 短片《蓝》", role: "内容策划 / 分镜 / AI 工作流", text: "搭建脚本—分镜—视频—剪辑流程，通过角色锚点与镜头拆分改善一致性。" },
  { name: "五行星轨", role: "游戏策划 / AI 辅助开发", text: "围绕五行生克与二十八宿设计卡牌核心循环，并完成可在线体验版本。" },
  { name: "一只喵管家", role: "产品设计 / UI / AI 辅助开发", text: "将健康、库存、用药和相册整合为四个模块，完成 0—1 可交互原型。" },
];

export default function ResumeSection() {
  return (
    <section id="resume" className="resume-page" aria-labelledby="resume-title">
      <header className="resume-profile-header">
        <div>
          <p>PROFILE / RESUME · 2026</p>
          <h2 id="resume-title">陈萃薇</h2>
          <strong>27届 · AI 产品经理</strong>
        </div>
        <p className="resume-positioning">连接模型能力、用户体验与业务目标。具备多模态 AIGC 评测、AI Agent 产品策划与数字媒体设计背景。</p>
        <dl>
          <div><dt>TEL</dt><dd><a href="tel:+8615750910735">157-5091-0735</a></dd></div>
          <div><dt>EMAIL</dt><dd><a href="mailto:2711348245@qq.com">2711348245@qq.com</a></dd></div>
          <div><dt>WECHAT</dt><dd>urnotccw</dd></div>
        </dl>
        <a className="resume-download" href="/chen-cuiwei-ai-pm-resume.pdf" target="_blank" rel="noreferrer">下载 PDF ↘</a>
      </header>

      <div className="resume-metric-strip" aria-label="关键经历数据">
        <div><strong>1000+</strong><span>大版本评测题库</span></div>
        <div><strong>6 / 3000+</strong><span>模型 / 单组样本</span></div>
        <div><strong>+6%</strong><span>GSB 评测胜率</span></div>
        <div><strong>8+</strong><span>AIGC 竞品跟踪</span></div>
      </div>

      <div className="resume-onepage-grid">
        <aside className="resume-compact-sidebar">
          <section>
            <p className="resume-section-index">01 / EDUCATION</p>
            <h3>教育背景</h3>
            <article><header><strong>深圳大学</strong><time>2024—2027</time></header><p>数字媒体与动画设计研究 · 硕士</p></article>
            <article><header><strong>北京交通大学</strong><time>2019—2023</time></header><p>铁道工程 · 本科</p></article>
          </section>

          <section>
            <p className="resume-section-index">02 / SKILLS</p>
            <h3>核心能力</h3>
            <dl className="resume-compact-skills">
              <div><dt>产品</dt><dd>需求分析、竞品、PRD、交互流程、数据报告</dd></div>
              <div><dt>AI</dt><dd>图像 / 视频 / 3D 生成评测、能力边界、Bad Case 归因</dd></div>
              <div><dt>工具</dt><dd>ChatGPT、Claude、Gemini、Figma、Codex、Excel</dd></div>
              <div><dt>游戏</dt><dd>Steam / PC 核心玩家，累计 6000+ 小时</dd></div>
            </dl>
          </section>
        </aside>

        <section className="resume-compact-experience">
          <p className="resume-section-index">03 / EXPERIENCE</p>
          <h3>实习经历</h3>
          {experience.map((item) => (
            <article key={item.company}>
              <header><div><h4>{item.company}</h4><p>{item.role}</p></div><time>{item.period}</time></header>
              <strong>{item.product}</strong>
              <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            </article>
          ))}
        </section>

        <section className="resume-compact-projects">
          <p className="resume-section-index">04 / PROJECTS</p>
          <h3>代表项目</h3>
          {projects.map((project, index) => (
            <article key={project.name}>
              <span>0{index + 1}</span>
              <div><h4>{project.name}</h4><strong>{project.role}</strong><p>{project.text}</p></div>
            </article>
          ))}
          <a href="#works">查看完整项目目录 ↓</a>
        </section>
      </div>

      <footer className="resume-footer"><span>CHEN CUIWEI / 27届</span><span>AI PRODUCT · AIGC · GAME</span><a href="#works">NEXT / WORK INDEX ↓</a></footer>
    </section>
  );
}
