const experience = [
  {
    company: "Converge AI（九坤创新）",
    role: "游戏产品策划实习生",
    period: "2026.06 - 至今",
    product: "Combos｜面向游戏创作者的 AI Agent 工具",
    bullets: [
      "将 Onboarding 定位为“用户画像采集 + 创作意图识别 + 任务系统承接”，拆解身份、能力、创作目的三类核心变量，完成 PRD 与可交互 Demo。",
      "参与桌宠消息提醒机制优化，将高频弹出的分散通知整合为折叠式信息箱，降低生成过程中的操作打断。",
      "设计 2D 战斗、卡牌、编辑器、Roguelike 等轻量玩法方案，梳理核心循环、资源系统、关卡机制与演示重点。",
      "参与海外创作者运营，支持 X / Twitter、Discord 与社群的用户触达、反馈整理和活动传播。",
    ],
  },
  {
    company: "腾讯",
    role: "AI 产品实习生（混元 3D / 3D 世界）",
    period: "2025.12 - 2026.06",
    product: "面向游戏资产生产的图像、视频与 3D 多模态 AIGC 能力",
    bullets: [
      "参与重构 3D 生成评测标准，将质量拆解为几何结构、纹理质量、整体效果 3 个一级维度与 8 个二级指标；标准经 3 版迭代后用于大版本评测。",
      "参与 3 轮深度评测，覆盖 6 个模型、单组 3000+ 样本，按人物、动物、道具、建筑与植物拆解模型能力边界。",
      "将 Bad Case 归因为结构错误、材质异常、细节缺失、风格偏移与资产适配不足，推动后续模型版本在 GSB 评测中胜率提升约 6%。",
      "建设 1000+ 题大版本题库与 200 题敏捷题库；跟踪 8+ 款 AIGC 产品，输出 3 份竞品大报告与 8 份敏捷评测报告。",
    ],
  },
];

const projects = [
  {
    name: "AIGC 科幻短片《蓝》",
    period: "2026.08",
    role: "内容策划 / 分镜设计 / AI 工作流 / 视频生成",
    text: "围绕“蓝色星球探索”完成故事、人物与分镜设计，使用 LibTV、Seedance 2.5 与图像生成工具搭建“文本脚本 - 分镜画面 - 视频生成 - 剪辑整合”流程，并通过固定角色特征与拆分复杂镜头提升画面一致性。",
  },
  {
    name: "星河符阵",
    period: "2026.06",
    role: "游戏策划 / AI 辅助开发 / 视觉设计",
    text: "以“五行相生相克”和“二十八星宿”为主题设计网页策略卡牌 Demo，建立抽牌、出牌、结算、敌人反制的核心循环；使用 AI Coding 完成战斗逻辑、卡牌结算、UI 交互与 Bug 修复。",
  },
  {
    name: "一只喵管家",
    period: "2026.05",
    role: "产品设计 / UI 设计 / AI 辅助开发",
    text: "面向健康记录分散、用药易忘与库存难管理等痛点，规划“喵档案、喵囤囤、喵药箱、喵相册”四大模块，并使用 AI 辅助完成需求拆解、页面开发、交互逻辑与问题调试。",
  },
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
        <dl>
          <div><dt>TEL</dt><dd><a href="tel:+8615750910735">157-5091-0735</a></dd></div>
          <div><dt>EMAIL</dt><dd><a href="mailto:2711348245@qq.com">2711348245@qq.com</a></dd></div>
          <div><dt>WECHAT</dt><dd>urnotccw</dd></div>
        </dl>
        <a className="resume-download" href="/chen-cuiwei-ai-pm-resume.pdf" target="_blank" rel="noreferrer">下载 PDF ↘</a>
      </header>

      <div className="resume-intro">
        <p className="resume-section-index">01 / PROFILE</p>
        <h3>连接模型能力、<br />用户体验与业务目标</h3>
        <p>具备腾讯混元 3D / 3D 世界多模态 AIGC 评测经验与 Converge AI 游戏 AI Agent 产品实习经历，熟悉内容评测、标准建设、Bad Case 归因、竞品分析、PRD 输出和 AI 辅助创作流程；拥有数字媒体与动画设计背景，能够推进从问题定义到产品落地的完整过程。</p>
      </div>

      <div className="resume-metric-strip" aria-label="关键经历数据">
        <div><strong>1000+</strong><span>大版本评测题库</span></div>
        <div><strong>6 / 3000+</strong><span>模型与单组样本</span></div>
        <div><strong>+6%</strong><span>GSB 评测胜率</span></div>
        <div><strong>8+</strong><span>AIGC 竞品跟踪</span></div>
      </div>

      <div className="resume-content-grid">
        <aside className="resume-sidebar">
          <section>
            <p className="resume-section-index">02 / EDUCATION</p>
            <h3>教育背景</h3>
            <article><strong>深圳大学</strong><p>数字媒体与动画设计研究（硕士）</p><span>2024.09 - 2027.06</span></article>
            <article><strong>北京交通大学</strong><p>铁道工程（本科）</p><span>2019.09 - 2023.06</span></article>
          </section>

          <section>
            <p className="resume-section-index">05 / SKILLS</p>
            <h3>个人技能</h3>
            <dl className="resume-skills">
              <div><dt>产品能力</dt><dd>用户调研、需求分析、竞品分析、PRD、功能拆解、交互流程、评测体系、数据分析报告</dd></div>
              <div><dt>AI 产品理解</dt><dd>图像、视频与 3D 生成场景，能力边界、效果评估和 Bad Case 归因</dd></div>
              <div><dt>工具与协作</dt><dd>ChatGPT、Claude、Gemini、Excel、PPT、飞书 / 腾讯文档</dd></div>
              <div><dt>游戏理解</dt><dd>Steam / PC 核心玩家，累计游戏时长 6000+ 小时</dd></div>
            </dl>
          </section>
        </aside>

        <main className="resume-main-column">
          <section className="resume-experience">
            <p className="resume-section-index">03 / EXPERIENCE</p>
            <h3>实习经历</h3>
            {experience.map((item) => (
              <article key={item.company}>
                <header><div><h4>{item.company}</h4><p>{item.role}</p></div><time>{item.period}</time></header>
                <strong className="resume-product-line">{item.product}</strong>
                <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </article>
            ))}
          </section>

          <section className="resume-projects">
            <p className="resume-section-index">04 / PROJECTS</p>
            <h3>项目经历</h3>
            {projects.map((project) => (
              <article key={project.name}>
                <header><h4>{project.name}</h4><time>{project.period}</time></header>
                <strong>{project.role}</strong>
                <p>{project.text}</p>
              </article>
            ))}
          </section>
        </main>
      </div>

      <footer className="resume-footer"><span>CHEN CUIWEI / 27届</span><span>AI PRODUCT · AIGC · GAME</span><a href="#works">NEXT / WORK INDEX ↓</a></footer>
    </section>
  );
}
