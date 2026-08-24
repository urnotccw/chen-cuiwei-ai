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
            <h2 id="works-title">目录</h2>
          </div>
          <p className="works-summary">
            从生成式影像、互动产品到三维场景，<br />
            记录 AI 参与创意与产品落地的不同路径。
          </p>
          <div className="index-barcode" aria-hidden="true"><span>INDEX / CCW / 2026</span></div>
        </div>

        <div className="project-index" aria-label="项目目录">
          {projects.map((project) => (
            <a className="project-row" href={`#project-${project.number}`} key={project.number}>
              <span className={`project-backdrop${project.number === "01" ? " blue-index-cover" : ""}`} aria-hidden="true" />
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
            </a>
          ))}
        </div>

        <footer className="works-footer">
          <span>CHEN CUIWEI / PORTFOLIO</span>
          <span>AI PRODUCT · DESIGN · EXPERIENCE</span>
          <span>PAGE 01</span>
        </footer>
      </section>

      {projects.map((project, index) => {
        const previous = index === 0 ? "works" : `project-${projects[index - 1].number}`;
        const next = index === projects.length - 1 ? "works" : `project-${projects[index + 1].number}`;

        return (
          <section id={`project-${project.number}`} className="project-detail" key={`detail-${project.number}`} aria-labelledby={`project-title-${project.number}`}>
            <header className="detail-header">
              <a href="#works">CCW / WORK INDEX</a>
              <p>PROJECT {project.number} / 05</p>
              <a href="#works">BACK TO INDEX ↑</a>
            </header>

            <div className="detail-heading">
              <p className="detail-number">{project.number}</p>
              <div>
                <p className="detail-kicker">{project.english}</p>
                <h2 id={`project-title-${project.number}`}>{project.title}</h2>
              </div>
              <p className="detail-type">{project.type}</p>
            </div>

            {project.number === "01" ? (
              <figure className="detail-visual blue-detail-cover">
                <img src="/blue-cover.jpeg" alt="AIGC 动画短片《蓝》封面：木星及其卫星悬浮在黑色宇宙中" />
                <figcaption>BLUE / AIGC ANIMATION / 2026</figcaption>
              </figure>
            ) : (
              <div className="detail-visual" aria-label={`${project.title} 项目内容待添加`}>
                <span>PROJECT VISUAL / CONTENT PENDING</span>
                <i aria-hidden="true" />
              </div>
            )}

            <div className="detail-meta">
              <div>
                <p>TOOLS / WORKFLOW</p>
                <ul>
                  {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
                </ul>
              </div>
              <p>{project.number === "01" ? "从故事灵感到角色与镜头设计的 AIGC 动画创作。" : "项目图片与详细内容将在下一步补充。"}</p>
              <nav aria-label={`${project.title} 项目切换`}>
                <a href={`#${previous}`}>← PREV</a>
                <a href={`#${next}`}>NEXT →</a>
              </nav>
            </div>

            {project.number === "01" && (
              <>
                <section className="blue-background" aria-labelledby="blue-background-title">
                <div className="blue-background-image" aria-hidden="true" />
                <header className="blue-background-header">
                  <span>BLUE / PROJECT BACKGROUND</span>
                  <span>STEP 01</span>
                </header>

                <div className="blue-story-copy">
                  <p className="blue-story-label">01 / 故事灵感</p>
                  <h3 id="blue-background-title">Go and See，<br />My Love</h3>
                  <div className="blue-story-body">
                    <p>故事灵感来源于旅行者号和歌曲《蓝》。</p>
                    <p>旅行者号在不断远离地球、驶向宇宙深处的过程中，曾将镜头再次转向地球，留下那颗漂浮在浩瀚宇宙中的“暗淡蓝点”。</p>
                    <p>这一瞬间成为短片最重要的情感来源——远行并不意味着遗忘，正因为知道自己从哪里出发，才更有勇气驶向未知。</p>
                    <p>《蓝》也因此不只是一个关于宇宙探索的科幻故事，而更像是一次关于离别、故乡与理想的表达。</p>
                  </div>
                </div>

                <figure className="blue-flight-frame">
                  <img src="/blue-flight.png" alt="飞行器掠过蓝灰色星球表面的画面" />
                  <figcaption>DEPARTURE / UNKNOWN / HOME</figcaption>
                </figure>

                <p className="pale-dot-note">PALE BLUE DOT<br />VOYAGER / 1977—∞</p>
                </section>

                <section id="blue-characters" className="character-section" aria-labelledby="character-title">
                  <header className="character-header">
                    <span>BLUE / CHARACTER DESIGN</span>
                    <span>STEP 02</span>
                  </header>

                  <div className="character-intro">
                    <div>
                      <p>02 / 人物设定</p>
                    </div>
                    <p id="character-title">人物设定围绕“远行者与被留下的人”展开。统一的正、侧、背视图保证角色在多镜头生成中的身份与服装连续性；白色航行体系与日常服装之间的色温差异，则区分未知宇宙与故乡记忆。</p>
                  </div>

                  <div className="heroine-profile">
                    <div className="heroine-copy">
                      <p className="character-index">CHARACTER 01 / THE VOYAGER</p>
                      <h4>女主角 · 从观察者到远行者</h4>
                      <p>女主角从实验室研究者逐步进入航行状态。透明镜框和白大褂建立理性、克制的科研身份；贴身训练服强调行动力；完整宇航服则完成她从观察者到探索者的转变。</p>
                      <p>三套造型保持短发、五官与冷白色系一致，让人物在不同时间与场景中仍具有稳定、可识别的视觉身份。</p>
                    </div>
                    <div className="heroine-stages">
                      <figure>
                        <img src="/blue-character-scientist.png" alt="女主角研究员造型的面部、正面、侧面与背面设定" />
                        <figcaption><span>01A</span> RESEARCHER / 理性与观察</figcaption>
                      </figure>
                      <figure>
                        <img src="/blue-character-flight.png" alt="女主角航行训练服造型的面部、正面、侧面与背面设定" />
                        <figcaption><span>01B</span> FLIGHT SUIT / 行动与准备</figcaption>
                      </figure>
                      <figure>
                        <img src="/blue-character-astronaut.png" alt="女主角宇航服造型的面部、正面、侧面与背面设定" />
                        <figcaption><span>01C</span> ASTRONAUT / 远行与未知</figcaption>
                      </figure>
                    </div>
                  </div>

                  <div className="supporting-characters">
                    <figure className="character-card">
                      <img src="/blue-character-child.png" alt="小女孩粉色连衣裙造型的面部、正面、侧面与背面设定" />
                      <figcaption>
                        <p>CHARACTER 02 / MEMORY</p>
                        <h4>童年形态 · 故乡记忆</h4>
                        <span>珊瑚粉连衣裙、双辫与柔软轮廓建立温暖的记忆色彩。女孩是父女关系与时间线的情感锚点，让宏大的宇宙远行落回一段具体的家庭记忆。</span>
                      </figcaption>
                    </figure>

                    <figure className="character-card">
                      <img src="/blue-character-casual.png" alt="女孩父亲年轻时期的深灰 T 恤与牛仔裤造型设定" />
                      <figcaption>
                        <p>CHARACTER 03 / FATHER · YOUNG</p>
                        <h4>年轻父亲 · 日常与陪伴</h4>
                        <span>这是女孩父亲年轻时期的形象。深灰 T 恤和牛仔裤保留普通生活的质感，让他首先是一位真实、亲近的父亲，也让“故乡”变成可以被回忆的日常。</span>
                      </figcaption>
                    </figure>

                    <figure className="character-card">
                      <img src="/blue-character-senior.png" alt="女孩父亲变老后的深色西装造型设定" />
                      <figcaption>
                        <p>CHARACTER 04 / FATHER · AGED</p>
                        <h4>年长父亲 · 时间与守望</h4>
                        <span>这是同一位父亲多年后的状态。银灰短发、深色格纹西装与更克制的姿态强化时间留下的痕迹，也把等待、牵挂与责任沉淀为安静的守望。</span>
                      </figcaption>
                    </figure>
                  </div>

                  <footer className="character-footer">
                    <span>CONSISTENCY / IDENTITY / COSTUME</span>
                    <a href="#project-01">BACK TO PROJECT TOP ↑</a>
                  </footer>
                </section>
              </>
            )}
          </section>
        );
      })}
    </main>
  );
}
