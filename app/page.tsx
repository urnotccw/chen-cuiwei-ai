import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "陈萃薇 · AI 产品经理作品集",
  description: "陈萃薇，AI 产品经理作品集，2026。",
};

export default function Home() {
  const projects = [
    {
      number: "01",
      title: "蓝",
      type: "AIGC 动画短片",
      english: "AIGC ANIMATION SHORT FILM",
      tools: ["GPT", "GPT-IMAGE 2", "LIBTV", "SEEDANCE 2.5", "剪映"],
    },
    {
      number: "02",
      title: "AI 网页小游戏",
      type: "AI 辅助网页小游戏开发",
      english: "AI-ASSISTED WEB GAME",
      tools: ["GPT", "GPT-IMAGE"],
    },
    {
      number: "03",
      title: "一只喵管家",
      type: "AI 辅助微信小程序开发",
      english: "AI WECHAT MINI PROGRAM",
      tools: ["FIGMA", "CODEX", "GPT-IMAGE"],
    },
    {
      number: "04",
      title: "AI 游戏场景设计",
      type: "AI 辅助游戏场景设计",
      english: "AI-ASSISTED GAME ENVIRONMENT",
      tools: ["UE5", "GPT", "NANO BANANA"],
    },
    {
      number: "05",
      title: "3D 建模设计",
      type: "三维建模与材质设计",
      english: "3D MODELING & TEXTURING",
      tools: ["MAYA", "SUBSTANCE PAINTER", "TOOLBAG"],
    },
  ];

  return (
    <main>
      <section className="cover-page">
        <div className="cover-grain" aria-hidden="true" />

        <nav className="rail-menu" aria-label="作品集导航">
          <a className="is-active" href="#works">WORK</a>
          <a href="#about">ABOUT</a>
          <a href="#top" lang="en">EN</a>
          <a href="#top" lang="zh-CN">CN</a>
        </nav>

        <aside id="about" className="profile-card" aria-label="个人、教育与联系方式">
          <p className="card-index">PROFILE / CONTACT · 01</p>
          <div className="profile-grid">
            <div className="identity-block">
            <h2>陈萃薇</h2>
            <p className="education-copy">深圳大学硕士<br /><strong>数字媒体与动画设计专业</strong></p>
            </div>
            <dl id="contact" className="compact-contact">
              <div><dt>WECHAT</dt><dd>urnotccw</dd></div>
              <div><dt>EMAIL</dt><dd><a href="mailto:2711348245@qq.com">2711348245@qq.com</a></dd></div>
              <div><dt>TEL</dt><dd><a href="tel:+8615750910735">15750910735</a></dd></div>
            </dl>
          </div>
        </aside>

        <section id="top" className="cover-content" aria-labelledby="page-title">
          <p className="discipline">AI PRODUCT<br />MANAGEMENT<br />PORTFOLIO</p>
          <p className="year">2026</p>
          <div className="title-stack">
            <p className="kicker">陈萃薇的</p>
            <h1 id="page-title">设计<br />档案</h1>
            <div className="barcode" aria-hidden="true">
              <span>CCW · 2026 · 0824</span>
            </div>
          </div>
          <p className="stitch-note">PRODUCT / STRATEGY<br />EXPERIENCE</p>
        </section>
      </section>

      <section id="works" className="works-page" aria-labelledby="works-title">
        <header className="works-header">
          <a className="archive-mark" href="#top" aria-label="返回封面">
            <span>CCW</span>
            <small>DESIGN ARCHIVE / 2026</small>
          </a>
          <p>WORK INDEX</p>
          <p>05 PROJECTS</p>
          <a href="#top">BACK TO COVER ↑</a>
        </header>

        <div className="works-intro">
          <div>
            <p className="works-kicker">SELECTED WORKS · 01—05</p>
            <h2 id="works-title">作品<br />目录</h2>
          </div>
          <p className="works-summary">
            从生成式影像、互动产品到三维场景，<br />
            记录 AI 参与创意与产品落地的不同路径。
          </p>
          <div className="index-barcode" aria-hidden="true"><span>INDEX / CCW / 2026</span></div>
        </div>

        <div className="project-index" aria-label="项目目录">
          {projects.map((project) => (
            <article className="project-row" key={project.number}>
              <p className="project-number">{project.number}</p>
              <div className="project-name">
                <h3>{project.title}</h3>
                <p>{project.english}</p>
              </div>
              <p className="project-type">{project.type}</p>
              <ul className="tool-list" aria-label={`${project.title} 使用工具`}>
                {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
              </ul>
              <div className="project-image-slot" aria-label={`${project.title} 项目图片待添加`}>
                <span>IMAGE<br />PENDING</span>
                <i aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>

        <footer className="works-footer">
          <span>CHEN CUIWEI / PORTFOLIO</span>
          <span>AI PRODUCT · DESIGN · EXPERIENCE</span>
          <span>PAGE 01</span>
        </footer>
      </section>
    </main>
  );
}
