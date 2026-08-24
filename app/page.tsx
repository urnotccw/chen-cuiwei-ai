import type { Metadata } from "next";
import CatManagerDemo from "./components/CatManagerDemo";
import ResumeSection from "./components/ResumeSection";

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
      hero: null,
      heroAlt: "",
      indexImage: "/blue-cover.jpeg",
      indexTone: "dark",
      summary: "从故事灵感到角色与镜头设计的 AIGC 动画创作。",
    },
    {
      number: "02",
      title: "五行星轨",
      type: "AI 辅助网页策略卡牌游戏",
      english: "AI-ASSISTED STRATEGY CARD GAME",
      tools: ["GPT", "GPT-IMAGE", "JAVASCRIPT"],
      hero: null,
      heroAlt: "",
      indexImage: "/wuxing-map.png",
      indexTone: "dark",
      summary: "以五行生克与二十八宿为核心规则，完成从玩法策划、系统拆解到可在线体验版本的 AI 辅助开发。",
    },
    {
      number: "03",
      title: "一只喵管家",
      type: "AI 辅助微信小程序开发",
      english: "AI WECHAT MINI PROGRAM",
      tools: ["FIGMA", "CODEX", "GPT-IMAGE"],
      hero: "/portfolio-p03-ui.jpg",
      heroAlt: "一只喵管家微信小程序的四个核心界面",
      indexImage: "/portfolio-p03-ui.jpg",
      indexTone: "light",
      summary: "围绕养猫健康记录、物资库存与周期提醒，完成从需求拆解、信息架构到可演示交互版本的 0—1 产品验证。",
    },
    {
      number: "04",
      title: "AI 游戏场景设计",
      type: "AI 辅助游戏场景设计",
      english: "AI-ASSISTED GAME ENVIRONMENT",
      tools: ["UE5", "GPT", "NANO BANANA"],
      hero: "/portfolio-p04-final.jpg",
      heroAlt: "藏地建筑与雪山云海构成的游戏场景最终效果",
      indexImage: "/portfolio-p04-final.jpg",
      indexTone: "light",
      summary: "用 AI 加速视觉方向验证，再通过 UE5 白盒、模块化资产与灯光迭代完成场景落地。",
    },
    {
      number: "05",
      title: "3D 建模设计",
      type: "三维建模与材质设计",
      english: "3D MODELING & TEXTURING",
      tools: ["MAYA", "SUBSTANCE PAINTER", "TOOLBAG"],
      hero: "/portfolio-p05-hero.jpg",
      heroAlt: "海上小屋风格化三维场景",
      indexImage: "/portfolio-p05-hero.jpg",
      indexTone: "light",
      summary: "围绕风格一致性、资产复用与交付规范，完成多类型游戏 3D 资产设计与制作。",
    },
  ];

  return (
    <main>
      <details className="site-side-nav">
        <summary aria-label="打开或收起页面导航"><span>NAV</span><i aria-hidden="true">↔</i></summary>
        <div className="site-side-nav-inner">
          <p>CCW / DESIGN ARCHIVE</p>
          <nav aria-label="全站快速导航">
            <a href="#home"><span>00</span>首页</a>
            <a href="#resume"><span>CV</span>自我介绍 / 简历</a>
            {projects.map((project) => (
              <a href={`#project-${project.number}`} key={`side-nav-${project.number}`}>
                <span>{project.number}</span>{project.title}
              </a>
            ))}
          </nav>
          <small>CHEN CUIWEI · 2026</small>
        </div>
      </details>

      <section id="home" className="cover-page">
        <div className="cover-grain" aria-hidden="true" />

        <nav className="rail-menu" aria-label="作品集导航">
          <a className="is-active" href="#works">WORK</a>
          <a href="#resume">ABOUT</a>
          <a href="#top" lang="en">EN</a>
          <a href="#top" lang="zh-CN">CN</a>
        </nav>

        <aside className="profile-card" aria-label="个人、教育与联系方式">
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

      <ResumeSection />

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
            <a className={`project-row${project.indexTone === "dark" ? " is-dark-index" : ""}`} href={`#project-${project.number}`} key={project.number}>
              <span className={`project-backdrop is-${project.indexTone}-index`} style={{ backgroundImage: `url("${project.indexImage}")` }} aria-hidden="true" />
              <p className="project-number">{project.number}</p>
              <div className="project-name">
                <h3 className={project.number === "02" ? "wuxing-title" : undefined}>{project.title}</h3>
                <p>{project.english}</p>
              </div>
              <p className="project-type">{project.type}</p>
              <ul className="tool-list" aria-label={`${project.title} 使用工具`}>
                {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
              </ul>
              <div className="project-image-slot" aria-label={`${project.title} 项目预览图`}>
                <img src={project.indexImage} alt="" />
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
          <section id={`project-${project.number}`} className={`project-detail${project.hero ? " case-project-detail" : ""}`} key={`detail-${project.number}`} aria-labelledby={`project-title-${project.number}`}>
            <header className="detail-header">
              <a href="#works">CCW / WORK INDEX</a>
              <p>PROJECT {project.number} / 05</p>
              <a href="#works">BACK TO INDEX ↑</a>
            </header>

            <div className={`project-hero-layout${project.number === "01" ? " is-video-layout" : project.number === "02" ? " is-game-layout" : project.number === "03" ? " is-phone-layout" : ""}`}>
              <div className="detail-heading">
                <p className="detail-number">{project.number}</p>
                <div>
                  <p className="detail-kicker">{project.english}</p>
                  <h2 className={project.number === "02" ? "wuxing-title" : undefined} id={`project-title-${project.number}`}>{project.title}</h2>
                </div>
                <p className="detail-type">{project.type}</p>
                {project.number === "03" && (
                  <div className="phone-project-intro">
                    <p className="phone-project-summary">一只喵管家是一款面向养猫用户的 <mark className="intro-highlight is-lime">轻量健康管理小程序</mark>，把散落在备忘录、相册与购物软件中的 <mark className="intro-highlight is-coral">照护信息</mark>，收拢到一个持续可用的管理入口。</p>
                    <p className="mini-program-availability"><span>WECHAT MINI PROGRAM · LIVE</span><strong>已上线微信小程序</strong><em>微信搜索「一只喵管家」即可体验</em></p>
                    <dl>
                      <div><dt><span className="fact-label is-coral">CORE PROBLEM</span></dt><dd>记录分散、提醒易忘、库存难管理</dd></div>
                      <div><dt><span className="fact-label is-lime">SOLUTION</span></dt><dd>档案 / 库存 / 药箱 / 相册四个任务模块</dd></div>
                      <div><dt><span className="fact-label is-blue">PROTOTYPE</span></dt><dd>可演示微信小程序交互版本</dd></div>
                    </dl>
                  </div>
                )}
                {project.number === "02" && (
                  <div className="game-project-intro">
                    <p>五行星轨是一款以 <mark>五行生克</mark> 和 <mark>二十八宿</mark> 为规则基础的网页策略卡牌游戏。玩家通过上下两层阵法组合卡牌，在四象星阵中逐步点亮星宿。</p>
                    <a href="https://urnotccw.github.io/wuxing-game/" target="_blank" rel="noreferrer">进入游戏体验 ↗</a>
                  </div>
                )}
              </div>

              {project.number === "01" ? (
                <div className="blue-video-frame">
                  <video
                    className="blue-video-player"
                    controls
                    preload="metadata"
                    playsInline
                    poster="/blue-cover.jpeg"
                    aria-label="AIGC 动画短片《蓝》视频播放器"
                  >
                    <source src="/blue.mp4" type="video/mp4" />
                    你的浏览器暂不支持视频播放。
                  </video>
                  <span className="video-ratio-note">VIDEO / 16:9</span>
                </div>
              ) : project.number === "03" ? (
                <div className="iphone-demo-stage" aria-label="一只喵管家小程序交互演示预留区域">
                  <div className="iphone-15-device">
                    <span className="iphone-action-button" aria-hidden="true" />
                    <span className="iphone-volume-up" aria-hidden="true" />
                    <span className="iphone-volume-down" aria-hidden="true" />
                    <span className="iphone-power-button" aria-hidden="true" />
                    <div id="mini-program-demo-root" className="iphone-15-screen" aria-label="小程序交互内容将在此处呈现">
                      <span className="iphone-dynamic-island" aria-hidden="true" />
                      <CatManagerDemo />
                    </div>
                  </div>
                  <p className="phone-demo-callout"><span>TRY IT NOW</span><strong>手机界面可直接体验</strong><em>点击屏幕开始交互</em></p>
                </div>
              ) : project.number === "02" ? (
                <div className="wuxing-game-stage">
                  <div className="wuxing-browser-bar"><span>LIVE WEB GAME</span><span>urnotccw.github.io/wuxing-game</span><a href="https://urnotccw.github.io/wuxing-game/" target="_blank" rel="noreferrer">OPEN ↗</a></div>
                  <iframe title="五行星轨网页游戏" src="https://urnotccw.github.io/wuxing-game/" loading="lazy" allow="autoplay" />
                </div>
              ) : project.hero ? (
                <figure className="detail-visual case-detail-visual">
                  <img src={project.hero} alt={project.heroAlt} />
                  <figcaption>PROJECT {project.number} / CASE OVERVIEW</figcaption>
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
                <p>{project.summary}</p>
                <nav aria-label={`${project.title} 项目切换`}>
                  <a href={`#${previous}`}>← PREV</a>
                  <a href={`#${next}`}>NEXT →</a>
                </nav>
              </div>
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
                        <h4>童年形象 · 启蒙</h4>
                        <span>珊瑚粉连衣裙、双辫与柔软轮廓建立温暖的记忆色彩。女孩是父女关系与时间线的情感锚点，让宏大的宇宙远行落回一段具体的家庭记忆。</span>
                      </figcaption>
                    </figure>

                    <figure className="character-card">
                      <img src="/blue-character-casual.png" alt="女孩父亲年轻时期的深灰 T 恤与牛仔裤造型设定" />
                      <figcaption>
                        <p>CHARACTER 03 / FATHER · YOUNG</p>
                        <h4>女主角父亲 · 年轻</h4>
                        <span>这是女孩父亲年轻时期的形象。深灰 T 恤和牛仔裤保留普通生活的质感，让他首先是一位真实、亲近的父亲，也让“故乡”变成可以被回忆的日常。</span>
                      </figcaption>
                    </figure>

                    <figure className="character-card">
                      <img src="/blue-character-senior.png" alt="女孩父亲变老后的深色西装造型设定" />
                      <figcaption>
                        <p>CHARACTER 04 / FATHER · AGED</p>
                        <h4>女主角父亲 · 年长</h4>
                        <span>这是同一位父亲多年后的状态。银灰短发、深色格纹西装与更克制的姿态强化时间留下的痕迹，也把等待、牵挂与责任沉淀为安静的守望。</span>
                      </figcaption>
                    </figure>
                  </div>

                  <footer className="character-footer">
                    <span>CONSISTENCY / IDENTITY / COSTUME</span>
                    <a href="#project-01">BACK TO PROJECT TOP ↑</a>
                  </footer>
                </section>

                <section id="blue-spaces" className="space-prop-section" aria-labelledby="space-prop-title">
                  <header className="space-prop-header">
                    <span>BLUE / SPACE &amp; PROP DESIGN</span>
                    <span>STEP 03</span>
                  </header>

                  <div className="space-prop-intro">
                    <div>
                      <p>03 / 空间与道具</p>
                      <h3 id="space-prop-title">空间站与<br />航行器设定</h3>
                    </div>
                    <p>空间站内部围绕观察、控制与维护三类功能展开。冷灰金属结构建立理性的航天环境，暖黄色储物舱与航行器上的金色结构则成为贯穿场景与道具的识别色。</p>
                  </div>

                  <div className="space-prop-grid">
                    <figure className="space-command">
                      <img src="/blue-space-command.png" alt="空间站控制舱的驾驶席、工作台、顶部结构与整体空间设定" />
                      <figcaption><span>SPACE 01</span> CONTROL DECK / 控制与观察</figcaption>
                    </figure>
                    <figure className="space-equipment">
                      <img src="/blue-space-equipment.png" alt="空间站设备舱、舷窗、仪器墙与维护区域设定" />
                      <figcaption><span>SPACE 02</span> EQUIPMENT BAY / 设备与维护</figcaption>
                    </figure>
                    <figure className="space-shuttle">
                      <img src="/blue-prop-shuttle.png" alt="黑金配色航行器的前后、侧面、顶部与底部多视图设定" />
                      <figcaption><span>PROP 01</span> SHUTTLE / 航行器多视图</figcaption>
                    </figure>
                  </div>

                  <footer className="space-prop-footer">
                    <span>FUNCTION / CONTINUITY / VISUAL LANGUAGE</span>
                    <a href="#blue-characters">PREVIOUS · CHARACTER DESIGN ↑</a>
                  </footer>
                </section>

                <section id="blue-tone" className="tone-section" aria-labelledby="tone-title">
                  <header className="tone-header">
                    <span>BLUE / COLOR &amp; TONE TEST</span>
                    <span>STEP 04</span>
                  </header>

                  <div className="tone-intro">
                    <div>
                      <p>04 / 影片色调尝试</p>
                      <h3 id="tone-title">使用AI快速探索视觉方向</h3>
                    </div>
                    <p>在同一构图下测试不同的主色、光线方向与明暗比例，观察色彩如何改变宇宙空间的距离感，以及人物与故乡之间的情绪联系。最终选择第三种方案作为影片的统一视觉基调。</p>
                  </div>

                  <div className="tone-options" aria-label="三种影片色调方案">
                    <figure>
                      <div className="tone-image"><img src="/blue-tone-cool.png" alt="冷蓝色空间舱与蓝色星球的色调测试" /></div>
                      <figcaption>
                        <p><span>TEST 01</span> COLD BLUE</p>
                        <h4>冷蓝 · 科技与疏离</h4>
                        <span>大面积深蓝与冷白边缘光强调宇宙的寂静和技术感，但人物情绪更偏冷峻。</span>
                      </figcaption>
                    </figure>

                    <figure>
                      <div className="tone-image"><img src="/blue-tone-warm.png" alt="自然暖光照入空间舱的色调测试" /></div>
                      <figcaption>
                        <p><span>TEST 02</span> NATURAL LIGHT</p>
                        <h4>自然暖光 · 真实与亲近</h4>
                        <span>暖色太阳光让人物更具生活感，也减弱了环境的陌生感，情绪更接近现实记忆。</span>
                      </figcaption>
                    </figure>

                    <figure className="is-selected">
                      <div className="tone-image">
                        <img src="/blue-tone-final.png" alt="暗金色星体与冷灰空间舱的最终影片色调方案" />
                        <strong>FINAL / SELECTED</strong>
                      </div>
                      <figcaption>
                        <p><span>TEST 03</span> DARK GOLD</p>
                        <h4>冷色调 · 最终方案</h4>
                        <span>暗部保留宇宙的未知感，星体的浅金色成为情感焦点；冷灰与暖金之间的对照同时承载远行、记忆与希望。</span>
                      </figcaption>
                    </figure>
                  </div>

                  <footer className="tone-footer">
                    <span>LIGHT / ATMOSPHERE / EMOTION</span>
                    <a href="#blue-spaces">PREVIOUS · SPACE &amp; PROP ↑</a>
                  </footer>
                </section>

                <section id="blue-process" className="process-section" aria-labelledby="process-title">
                  <header className="process-header">
                    <span>BLUE / PROMPT &amp; CANVAS WORKFLOW</span>
                    <span>STEP 05</span>
                  </header>

                  <div className="process-intro">
                    <div>
                      <p>05 / 提示词与节点画布</p>
                      <h3 id="process-title">把创作意图，<br />拆成可验证的节点</h3>
                    </div>
                    <p>制作并不是一次性生成完整影片，而是把角色、空间、表演与镜头运动拆成独立节点。每一次提示词都承担明确任务，再通过参考图、首尾帧和连续反馈逐步收敛结果。</p>
                  </div>

                  <figure className="workflow-canvas">
                    <img src="/blue-workflow-canvas.png" alt="《蓝》项目的完整 AI 节点画布，包含角色、场景和镜头之间的大量连接" />
                    <figcaption><span>CANVAS / 01</span> 从角色资产到连续镜头的完整工作流</figcaption>
                  </figure>

                  <div className="prompt-grid">
                    <figure>
                      <div><img src="/blue-prompt-character.png" alt="女主角四视图角色设定的提示词界面" /></div>
                      <figcaption><p>01 / CHARACTER CONSISTENCY</p><h4>角色一致性</h4><span>用正面特写、正侧背视图、服装材质和光线条件建立可复用的角色基准。</span></figcaption>
                    </figure>
                    <figure>
                      <div><img src="/blue-prompt-age.png" alt="父亲年长版本的角色生成提示词界面" /></div>
                      <figcaption><p>02 / AGE VARIATION</p><h4>时间与年龄变化</h4><span>保留人物识别特征，通过发色、服装和体态变化构建同一角色在不同时间中的状态。</span></figcaption>
                    </figure>
                    <figure>
                      <div><img src="/blue-prompt-motion.png" alt="依据首尾帧设计漂浮运动的提示词界面" /></div>
                      <figcaption><p>03 / CAMERA &amp; MOTION</p><h4>动作与运镜约束</h4><span>同时指定首尾帧、运动方向、景别和环境光，让生成结果服务于连续镜头，而不是孤立画面。</span></figcaption>
                    </figure>
                    <figure>
                      <div><img src="/blue-prompt-dialogue.png" alt="研究员会议对话镜头的提示词界面" /></div>
                      <figcaption><p>04 / SPATIAL CONTINUITY</p><h4>对话与空间连续性</h4><span>固定人物站位、视线方向和机位关系，减少对话场景中的跳轴、错位与身份漂移。</span></figcaption>
                    </figure>
                  </div>

                  <footer className="process-footer">
                    <span>REFERENCE / CONSTRAINT / ITERATION</span>
                    <a href="#blue-tone">PREVIOUS · COLOR &amp; TONE ↑</a>
                  </footer>
                </section>

                <section id="blue-reflection" className="reflection-section" aria-labelledby="reflection-title">
                  <header className="reflection-header">
                    <span>BLUE / AI VALUE &amp; LIMITS</span>
                    <span>CONCLUSION</span>
                  </header>

                  <div className="reflection-intro">
                    <p>06 / 创作复盘</p>
                    <h3 id="reflection-title">AI 缩短验证想法的路径，<br />但不替代创作者的判断</h3>
                  </div>

                  <div className="reflection-columns">
                    <section aria-labelledby="value-title">
                      <p className="reflection-label">VALUE / AI 的价值</p>
                      <h4 id="value-title">更快地看见、比较与迭代</h4>
                      <ol>
                        <li><span>01</span><div><strong>快速验证想法</strong><p>把文字概念迅速转化为角色、空间和镜头草案，让创作者在投入完整制作前判断方向是否成立。</p></div></li>
                        <li><span>02</span><div><strong>降低视觉试错成本</strong><p>同一构图可以测试不同服装、光线、色调与机位，从更多方案中选择真正服务故事的一种。</p></div></li>
                        <li><span>03</span><div><strong>扩展个人创作能力</strong><p>将角色设定、概念设计和动态预演连接起来，让个人也能推进过去需要多人协作的前期验证。</p></div></li>
                      </ol>
                    </section>

                    <section aria-labelledby="limit-title">
                      <p className="reflection-label">LIMITS / AI 的边界</p>
                      <h4 id="limit-title">画面可以生成，表达必须被设计</h4>
                      <ol>
                        <li><span>01</span><div><strong>AI 不决定画面为何存在</strong><p>镜头想表达什么、人物此刻应有怎样的情绪，仍需要创作者先建立清晰的叙事意图。</p></div></li>
                        <li><span>02</span><div><strong>连续镜头需要人工设计</strong><p>景别变化、运镜轨迹、节奏和空间关系必须提前规划，AI 更适合执行明确约束，而不是代替导演判断。</p></div></li>
                        <li><span>03</span><div><strong>一致性仍需持续校正</strong><p>角色身份、服装细节、光线与道具容易漂移，需要参考资产、反复筛选、修正和后期剪辑共同完成。</p></div></li>
                      </ol>
                    </section>
                  </div>

                  <blockquote>“技术让想法更快抵达画面，创作者仍要决定画面抵达谁，以及留下什么。”</blockquote>

                  <footer className="reflection-footer">
                    <span>CHEN CUIWEI / BLUE / 2026</span>
                    <a href="#works">BACK TO WORK INDEX ↑</a>
                  </footer>
                </section>
              </>
            )}

            {project.number === "02" && (
          <section className="case-study case-study-game" aria-label="五行星轨项目概览">
                <header className="case-study-header"><span>PROJECT 02 / GAME SYSTEM</span><span>AI-ASSISTED WEB GAME</span></header>

                <div className="case-opening">
                  <div>
                    <p>01 / 项目概览</p>
                  </div>
                  <dl className="case-facts">
                    <div><dt>MY ROLE</dt><dd>玩法策划 / 系统设计 / 视觉设定 / AI 辅助开发</dd></div>
                    <div><dt>DELIVERABLE</dt><dd>可在线体验的网页策略卡牌游戏</dd></div>
                    <div><dt>AI COLLAB</dt><dd>GPT-image ／ 即梦：视觉探索；Codex ／ WorkBuddy：网页原型、交互逻辑与调试迭代</dd></div>
                    <div><dt>WORKFLOW</dt><dd>HTML / CSS / JavaScript</dd></div>
                  </dl>
                </div>

                <figure className="case-lead-media wuxing-lead-media">
                  <img src="/wuxing-battle.png" alt="五行星轨首个星宿关卡的策略卡牌战斗界面" />
                  <figcaption><span>PLAYABLE PROTOTYPE</span> 五行关系、阵法卡槽、角色状态与敌人机制在同一屏内完成决策反馈</figcaption>
                </figure>

                <section className="case-section" aria-labelledby="game-loop-title">
                  <div className="case-section-heading"><p>02 / 核心循环</p><h4 id="game-loop-title">从选择星宿到完成阵法结算</h4></div>
                  <ol className="pipeline-list game-loop-list">
                    <li><span>01</span><div><strong>选择四象篇章</strong><p>从青龙、朱雀、白虎、玄武进入一条由七个星宿组成的关卡路径。</p></div></li>
                    <li><span>02</span><div><strong>识别敌人机制</strong><p>先阅读护盾、回复、攻击节奏与特殊状态，确定本局优先策略。</p></div></li>
                    <li><span>03</span><div><strong>抽取五行手牌</strong><p>每回合获得金、木、水、火、土卡牌，并从中选择两张进入阵法。</p></div></li>
                    <li><span>04</span><div><strong>布置双层阵法</strong><p>上层卡牌发动自身效果，下层卡牌通过同列关系影响上层卡牌。</p></div></li>
                    <li><span>05</span><div><strong>触发关系结算</strong><p>相生强化主要效果，相克可能削弱效果，也能针对性破除敌人状态。</p></div></li>
                    <li><span>06</span><div><strong>点亮下一星宿</strong><p>战斗与事件节点交替推进，持续获得回复、护盾、卡牌或阶段增益。</p></div></li>
                  </ol>
                </section>

                <section className="case-section game-system-section" aria-label="规则系统">
                  <div className="case-section-heading game-system-label"><p>03 / 规则系统</p></div>
                  <div className="module-grid game-rule-grid">
                    <article><span>01 / POSITION</span><h5>发动区 × 3</h5><p>上方三格触发卡牌自身攻击、防御、回复或功能效果，是即时行动层。</p></article>
                    <article><span>02 / SUPPORT</span><h5>辅助区 × 3</h5><p>下方卡牌不会单独发动，而是与同列上方卡牌形成五行关系。</p></article>
                    <article><span>03 / SMALL SETTLE</span><h5>单列小结算</h5><p>上下两张牌组成一列后立即验证相生相克，让选择快速获得反馈。</p></article>
                    <article><span>04 / FULL SETTLE</span><h5>满阵大结算</h5><p>六格填满后，根据三生阵、三克阵、混元阵或普通满阵产生额外收益。</p></article>
                  </div>
                  <div className="case-evidence-grid two-up wuxing-evidence-grid">
                    <figure><img src="/wuxing-map.png" alt="玄武篇章中由七个星宿构成的关卡地图" /><figcaption>PROGRESSION / 四象篇章与七星宿节点</figcaption></figure>
                    <figure><img src="/wuxing-battle.png" alt="包含五行卡牌、双层阵法与敌人状态的战斗界面" /><figcaption>COMBAT SYSTEM / 手牌、阵法与敌人机制</figcaption></figure>
                  </div>
                </section>

                <section className="enemy-roster" aria-label="五行星轨敌人立绘">
                  <div className="enemy-roster-group">
                    <p>部分敌人立绘</p>
                    <div className="enemy-roster-grid">
                      <figure tabIndex={0}><img src="/wuxing-enemy-jiaomu.png" alt="角木蛟敌人立绘" /><figcaption className="artwork-info"><strong>角木蛟</strong><span>青木缠阵</span><p>每回合标记一列；相生会强化该列效果。</p></figcaption></figure>
                      <figure tabIndex={0}><img src="/wuxing-enemy-kangjin.png" alt="亢金龙敌人立绘" /><figcaption className="artwork-info"><strong>亢金龙</strong><span>金鳞威压</span><p>开场拥有金鳞护盾；有盾时攻击提升。</p></figcaption></figure>
                      <figure tabIndex={0}><img src="/wuxing-enemy-weihuo.png" alt="尾火虎敌人立绘" /><figcaption className="artwork-info"><strong>尾火虎</strong><span>燃尾追击</span><p>每三回合燃尾，下一次攻击提升至 12 点。</p></figcaption></figure>
                      <figure tabIndex={0}><img src="/wuxing-enemy-jishui.png" alt="箕水豹敌人立绘" /><figcaption className="artwork-info"><strong>箕水豹</strong><span>回潮奔流</span><p>周期回复护盾；生命低于一半时下次攻击 +6。</p></figcaption></figure>
                      <figure tabIndex={0}><img src="/wuxing-enemy-nvtu.png" alt="女土蝠敌人立绘" /><figcaption className="artwork-info"><strong>女土蝠</strong><span>蒙尘</span><p>每回合标记一张手牌，发动后效果减半。</p></figcaption></figure>
                      <figure tabIndex={0}><img src="/wuxing-enemy-doumu.png" alt="斗木獬敌人立绘" /><figcaption className="artwork-info"><strong>斗木獬</strong><span>终局审判</span><p>相生累积清正；每三回合发动一次断罪。</p></figcaption></figure>
                    </div>
                  </div>
                  <div className="wuxing-card-group" aria-label="金木水火土五行卡牌">
                    <p>卡牌设计</p>
                    <div className="wuxing-card-row">
                      <figure tabIndex={0}><img src="/wuxing-card-metal.png" alt="金元素卡牌" /><figcaption className="artwork-info"><strong>金</strong><span>稳定输出</span><p>造成 5 点伤害。</p></figcaption></figure>
                      <figure tabIndex={0}><img src="/wuxing-card-wood.png" alt="木元素卡牌" /><figcaption className="artwork-info"><strong>木</strong><span>基础回复</span><p>回复 3 点生命。</p></figcaption></figure>
                      <figure tabIndex={0}><img src="/wuxing-card-water.png" alt="水元素卡牌" /><figcaption className="artwork-info"><strong>水</strong><span>基础防御</span><p>获得 4 点护盾。</p></figcaption></figure>
                      <figure tabIndex={0}><img src="/wuxing-card-fire.png" alt="火元素卡牌" /><figcaption className="artwork-info"><strong>火</strong><span>直接输出</span><p>造成 6 点伤害。</p></figcaption></figure>
                      <figure tabIndex={0}><img src="/wuxing-card-earth.png" alt="土元素卡牌" /><figcaption className="artwork-info"><strong>土</strong><span>高防御</span><p>获得 6 点护盾。</p></figcaption></figure>
                      <figure tabIndex={0}><img src="/wuxing-card-tigerclaw.png" alt="虎爪金特殊卡牌" /><figcaption className="artwork-info"><strong>虎爪金</strong><span>破盾输出</span><p>造成 6 点伤害；目标有盾时额外破盾 3 点。</p></figcaption></figure>
                      <figure tabIndex={0}><img src="/wuxing-card-lotus.png" alt="莲花木特殊卡牌" /><figcaption className="artwork-info"><strong>莲花木</strong><span>回复＋防御</span><p>回复 4 点生命；被水生木强化时 +2 护盾。</p></figcaption></figure>
                      <figure tabIndex={0}><img src="/wuxing-card-moonwater.png" alt="月亮水特殊卡牌" /><figcaption className="artwork-info"><strong>月亮水</strong><span>控制防御</span><p>获得 4 点护盾；敌人下回合攻击 -1。</p></figcaption></figure>
                      <figure tabIndex={0}><img src="/wuxing-card-featherfire.png" alt="羽毛火特殊卡牌" /><figcaption className="artwork-info"><strong>羽毛火</strong><span>持续输出</span><p>造成 4 点伤害，并施加两回合灼烧。</p></figcaption></figure>
                      <figure tabIndex={0}><img src="/wuxing-card-amberearth.png" alt="琥珀土特殊卡牌" /><figcaption className="artwork-info"><strong>琥珀土</strong><span>防御＋回复</span><p>获得 6 点护盾，同时回复 1 点生命。</p></figcaption></figure>
                    </div>
                  </div>
                </section>

                <div className="wuxing-play-cta">
                  <div><span>PLAYABLE NOW</span><strong>亲自进入四象星阵，体验五行卡牌的组合策略。</strong></div>
                  <a href="https://urnotccw.github.io/wuxing-game/" target="_blank" rel="noreferrer">进入五行星轨 ↗</a>
                </div>

                <footer className="case-study-footer"><span>RULE / FEEDBACK / ITERATION</span><a href="#works">BACK TO WORK INDEX ↑</a></footer>
              </section>
            )}

            {project.number === "03" && (
              <section className="case-study case-study-pet" aria-labelledby="pet-case-title">
                <header className="case-study-header"><span>PROJECT 03 / PRODUCT CASE</span><span>WECHAT MINI PROGRAM</span></header>

                <div className="case-opening">
                  <div>
                    <p>01 / 项目概览</p>
                    <h3 id="pet-case-title">把分散的养猫记录，<br />变成可持续的照护系统</h3>
                  </div>
                  <dl className="case-facts">
                    <div><dt>MY ROLE</dt><dd>需求分析 / 信息架构 / 交互设计 / 原型搭建</dd></div>
                    <div><dt>DELIVERABLE</dt><dd>微信小程序可演示交互版本</dd></div>
                    <div><dt>WORKFLOW</dt><dd>Figma / Codex / GPT-image</dd></div>
                  </dl>
                </div>

                <div className="case-problem-grid">
                  <section>
                    <p className="case-label">PROBLEM / 问题</p>
                    <h4>记录存在，但无法形成连续判断</h4>
                    <p>体重、饮食、饮水、用药和物资库存通常散落在备忘录、聊天记录、相册与购物软件中。信息不连续会带来漏记、遗忘补货，以及健康异常难追踪的问题。</p>
                  </section>
                  <section>
                    <p className="case-label">PRODUCT GOAL / 产品目标</p>
                    <h4>降低记录成本，让提醒真正可执行</h4>
                    <p>把高频照护任务集中到一个轻量入口，通过模块化结构承载健康、库存、用药与成长记录，让用户能快速看到“现在需要做什么”。</p>
                  </section>
                </div>

                <section className="case-section" aria-labelledby="pet-users-title">
                  <div className="case-section-heading"><p>02 / 用户与需求</p><h4 id="pet-users-title">从三类高频场景建立优先级</h4></div>
                  <div className="persona-grid">
                    <article><span>01</span><h5>新手养猫者</h5><p>对疫苗、驱虫和用药周期不熟悉，需要清晰提醒，也需要判断当前状态是否异常。</p><strong>核心机会：周期提醒</strong></article>
                    <article><span>02</span><h5>持续记录者</h5><p>长期记录体重、饮食、饮水与用药，希望集中查看趋势，而不是在多处寻找历史信息。</p><strong>核心机会：连续档案</strong></article>
                    <article><span>03</span><h5>多物资管理者</h5><p>猫粮、罐头、冻干和药品种类多，容易忘记补货，也难快速判断剩余使用天数。</p><strong>核心机会：库存可视化</strong></article>
                  </div>
                </section>

                <section className="case-section architecture-section" aria-labelledby="pet-architecture-title">
                  <div className="case-section-heading"><p>03 / 信息架构</p><h4 id="pet-architecture-title">围绕任务，而不是数据类型组织功能</h4></div>
                  <div className="module-grid">
                    <article><span>01</span><h5>喵档案</h5><p>猫咪资料、健康提醒、体重趋势与日常照护记录。</p></article>
                    <article><span>02</span><h5>喵囤囤</h5><p>库存数量、剩余天数、喜爱程度和补货提醒。</p></article>
                    <article><span>03</span><h5>喵药箱</h5><p>疫苗、驱虫与用药历史，减少周期遗漏。</p></article>
                    <article><span>04</span><h5>喵相册</h5><p>按时间组织成长照片，建立可回看的连续时间线。</p></article>
                  </div>
                  <div className="case-evidence-grid two-up">
                    <figure><img src="/portfolio-p03-insight.jpg" alt="一只喵管家的产品背景与三类用户画像" /><figcaption>USER INSIGHT / 用户问题与场景拆解</figcaption></figure>
                    <figure><img src="/portfolio-p03-architecture.jpg" alt="一只喵管家的产品目标与四模块功能架构" /><figcaption>INFORMATION ARCHITECTURE / 功能架构</figcaption></figure>
                  </div>
                </section>

                <section className="case-conclusion">
                  <div><p className="case-label">AI VALUE / AI 在项目中的作用</p><h4>把需求快速转成可讨论的产品</h4><p>AI 用于辅助需求拆分、文案整理、界面素材与代码搭建，缩短从想法到交互版本的距离；用户问题、功能取舍与信息架构仍由人工定义。</p></div>
                  <div><p className="case-label">CURRENT STATUS / 当前阶段</p><h4>已完成可演示版本，下一步验证真实使用</h4><p>当前成果覆盖核心流程和主要界面。下一步应重点测试提醒是否可靠、记录成本是否足够低，以及多猫与跨设备数据场景。</p></div>
                </section>

                <footer className="case-study-footer"><span>PROBLEM / PRIORITY / PROTOTYPE</span><a href="#works">BACK TO WORK INDEX ↑</a></footer>
              </section>
            )}

            {project.number === "04" && (
              <section className="case-study case-study-environment" aria-label="AI 游戏场景设计项目案例">
                <header className="case-study-header"><span>PROJECT 04 / DESIGN PIPELINE</span><span>AI + UE5</span></header>

                <div className="case-opening case-opening-facts-only">
                  <dl className="case-facts">
                    <div><dt>MY ROLE</dt><dd>视觉目标定义 / 流程设计 / 场景搭建 / 迭代决策</dd></div>
                    <div><dt>DELIVERABLE</dt><dd>室内场景与藏地题材场景验证</dd></div>
                    <div><dt>WORKFLOW</dt><dd>UE5 / GPT / Nano Banana / Photoshop</dd></div>
                  </dl>
                </div>

                <section className="case-section environment-reference-section" aria-label="参考驱动的世界观">
                  <div className="research-grid">
                    <div><p>建筑参考云川藏地区的形制与配色，提取黄、红、白墙体和局部金色屋顶；环境以高海拔针叶林、苔藓、草甸、雪山与云海建立气候识别。</p><p>AI 用于快速比较构图与气氛，模块化资产则让概念方向能继续进入真实场景搭建。</p></div>
                    <figure><img src="/portfolio-p04-research.jpg" alt="藏地建筑与高海拔自然环境的参考研究" /><figcaption>REFERENCE / ARCHITECTURE &amp; ECOLOGY</figcaption></figure>
                  </div>
                  <div className="case-evidence-grid two-up concept-final-grid">
                    <figure><img src="/portfolio-p04-concept.jpg" alt="藏地雪山建筑场景的黑白概念草图" /><figcaption>AI CONCEPT / DIRECTION TEST</figcaption></figure>
                    <figure><img src="/portfolio-p04-final.jpg" alt="藏地雪山建筑游戏场景最终效果" /><figcaption>UE5 RESULT / IMPLEMENTATION</figcaption></figure>
                  </div>
                </section>

                <figure className="case-lead-media dark-media">
                  <img src="/portfolio-p04-final.jpg" alt="藏地建筑、雪山、云海与森林构成的最终游戏场景" />
                  <figcaption><span>FINAL ENVIRONMENT</span> 参考研究、概念验证与 UE5 场景资产的整合结果</figcaption>
                </figure>

                <div className="case-problem-grid">
                  <section><p className="case-label">HYPOTHESIS / 假设</p><h4>概念图能否转化为可执行的制作约束？</h4><p>AI 可以快速给出气氛方向，但如果没有明确空间结构、镜头目标和资产边界，最终画面很难在引擎中稳定复现。</p></section>
                  <section><p className="case-label">STRATEGY / 策略</p><h4>先验证空间，再补充视觉复杂度</h4><p>先用白盒确认构图与动线，再分层处理资产、灯光、人物和氛围；把每轮 AI 结果转译为可执行的场景修改项。</p></section>
                </div>

                <section className="case-section environment-pipeline-section" aria-label="室内场景迭代">
                  <ol className="pipeline-list">
                    <li><span>01</span><div><strong>搭建白盒</strong><p>先确定破旧废弃别墅的房间结构和核心机位。</p></div></li>
                    <li><span>02</span><div><strong>补充资产</strong><p>根据叙事设定增加家具、杂物与空间层次。</p></div></li>
                    <li><span>03</span><div><strong>建立光线规则</strong><p>下午暖光斜入主空间，侧房间用偏冷绿光形成对比。</p></div></li>
                    <li><span>04</span><div><strong>丰富使用痕迹</strong><p>通过墙面污渍、跨区域物件和细节密度强化废弃感。</p></div></li>
                    <li><span>05</span><div><strong>人物与镜头校正</strong><p>替换角色并重新调整景别，使构图更符合游戏大厅展示。</p></div></li>
                    <li><span>06</span><div><strong>整体氛围统一</strong><p>回到可读性、冷暖关系与视线焦点，对全局进行收敛。</p></div></li>
                  </ol>
                  <div className="case-evidence-grid three-up">
                    <figure><img src="/portfolio-p04-interior-a.jpg" alt="室内废弃别墅从白盒到初步灯光的过程" /><figcaption>GREYBOX / STRUCTURE</figcaption></figure>
                    <figure><img src="/portfolio-p04-interior-b.jpg" alt="室内场景资产、灯光和人物持续迭代" /><figcaption>DETAIL / LIGHTING</figcaption></figure>
                    <figure><img src="/portfolio-p04-interior-final.jpg" alt="室内废弃别墅场景最终氛围" /><figcaption>FINAL / ATMOSPHERE</figcaption></figure>
                  </div>
                </section>

                <section className="case-conclusion">
                  <div><p className="case-label">AI VALUE / AI 的价值</p><h4>缩短概念比较时间，帮助团队更早对齐方向</h4><p>AI 最适合前期气氛、配色与构图探索。它把抽象描述变成可比较的视觉选项，但必须继续被拆解为资产、灯光、空间和镜头任务。</p></div>
                  <div><p className="case-label">PRODUCT THINKING / 产品化思考</p><h4>把一次作品沉淀成可复用的生产流程</h4><p>下一步将资产命名、模块组合、验收维度与性能约束整理为场景制作清单，使流程能够被团队复用，而不只依赖个人经验。</p></div>
                </section>

                <footer className="case-study-footer"><span>HYPOTHESIS / PIPELINE / IMPLEMENTATION</span><a href="#works">BACK TO WORK INDEX ↑</a></footer>
              </section>
            )}

            {project.number === "05" && (
              <section className="case-study case-study-assets" aria-labelledby="assets-case-title">
                <header className="case-study-header"><span>PROJECT 05 / 3D ASSET SYSTEM</span><span>MODELING &amp; TEXTURING</span></header>

                <div className="case-opening">
                  <div><p>01 / 项目概览</p><h3 id="assets-case-title">不只完成单个模型，<br />也建立可交付的资产意识</h3></div>
                  <dl className="case-facts">
                    <div><dt>MY ROLE</dt><dd>视觉拆解 / 建模 / UV / 材质 / 渲染呈现</dd></div>
                    <div><dt>ASSET RANGE</dt><dd>场景 / 工业道具 / 风格化角色道具 / 写实道具</dd></div>
                    <div><dt>WORKFLOW</dt><dd>Maya / Substance Painter / Toolbag</dd></div>
                  </dl>
                </div>

                <figure className="case-lead-media asset-lead-media">
                  <img src="/portfolio-p05-hero.jpg" alt="海上小屋风格化三维场景的最终效果" />
                  <figcaption><span>ENVIRONMENT ASSET</span> 海上小屋：从整体构图到局部细节的一体化场景</figcaption>
                </figure>

                <div className="case-problem-grid">
                  <section><p className="case-label">GOAL / 目标</p><h4>验证不同风格下的完整资产生产能力</h4><p>覆盖风格化场景、工业道具、角色化道具与写实材质，关注的不只是视觉完成度，也包括多视图一致、结构合理和后续复用。</p></section>
                  <section><p className="case-label">DELIVERY LOGIC / 交付逻辑</p><h4>让每个资产都能被理解、检查和复用</h4><p>通过主视图、背面、侧面和细节图说明结构；材质区分、比例与风格语言保持统一，降低进入后续动画或游戏场景时的沟通成本。</p></section>
                </div>

                <section className="case-section" aria-labelledby="asset-process-title">
                  <div className="case-section-heading"><p>02 / 制作流程</p><h4 id="asset-process-title">把视觉目标拆成五个可检查阶段</h4></div>
                  <ol className="asset-process">
                    <li><span>01</span><strong>参考与风格定义</strong><p>确定使用场景、轮廓语言、材质倾向和关键识别点。</p></li>
                    <li><span>02</span><strong>结构与比例</strong><p>先保证大形和功能结构成立，再进入细节建模。</p></li>
                    <li><span>03</span><strong>拓扑与 UV</strong><p>为材质绘制、变体扩展和后续使用预留清晰结构。</p></li>
                    <li><span>04</span><strong>材质与磨损</strong><p>用材质层级解释使用方式，而不是只增加表面噪点。</p></li>
                    <li><span>05</span><strong>渲染与检查</strong><p>用多角度、细节图和统一灯光确认比例、材质和可读性。</p></li>
                  </ol>
                </section>

                <section className="case-section" aria-labelledby="asset-library-title">
                  <div className="case-section-heading"><p>03 / 资产库</p><h4 id="asset-library-title">用不同资产类型验证风格与生产边界</h4></div>
                  <div className="asset-gallery">
                    <figure className="asset-wide"><img src="/portfolio-p05-details.jpg" alt="海上小屋场景的多个局部细节与整体效果" /><figcaption><span>ENVIRONMENT</span><strong>海上小屋</strong><p>整体构图、建筑、船只与水面共同维持轻量化的风格语言。</p></figcaption></figure>
                    <figure><img src="/portfolio-p05-vending.jpg" alt="黄色奖品机的正面、背面、侧面和细节" /><figcaption><span>INDUSTRIAL PROP</span><strong>奖品机</strong><p>多视图验证功能结构与可交互部件。</p></figcaption></figure>
                    <figure><img src="/portfolio-p05-book.jpg" alt="带有牙齿和舌头的奇幻书本角色道具" /><figcaption><span>STYLIZED PROP</span><strong>奇幻书</strong><p>通过夸张轮廓与材质对比建立角色感。</p></figcaption></figure>
                    <figure><img src="/portfolio-p05-aircraft.jpg" alt="球形风格化飞行器的三个角度" /><figcaption><span>VEHICLE</span><strong>飞行器</strong><p>在统一主体结构上组织推进器与功能细节。</p></figcaption></figure>
                    <figure><img src="/portfolio-p05-robot.jpg" alt="球形机器人多个角度的三维模型" /><figcaption><span>CHARACTER PROP</span><strong>机器人</strong><p>用可拆分结构和橙灰配色保持识别一致。</p></figcaption></figure>
                    <figure className="asset-wide"><img src="/portfolio-p05-door.jpg" alt="木门的正面和不同开启角度" /><figcaption><span>REALISTIC PROP</span><strong>木门</strong><p>以木纹、金属磨损和开启角度检验写实材质表达。</p></figcaption></figure>
                  </div>
                </section>

                <section className="case-conclusion">
                  <div><p className="case-label">PRODUCT VALUE / 对产品的价值</p><h4>理解资产如何影响体验与协作成本</h4><p>3D 资产是体验的一部分，也是团队协作的接口。风格、比例、材质和变体规则越清楚，设计、开发与内容生产之间的返工越少。</p></div>
                  <div><p className="case-label">NEXT STEP / 下一步</p><h4>补齐游戏资产的标准化交付清单</h4><p>进一步加入命名规则、尺寸单位、碰撞体、LOD、贴图通道与性能预算，让展示作品转化为可以直接进入项目管线的资产包。</p></div>
                </section>

                <footer className="case-study-footer"><span>SPECIFICATION / REUSE / HANDOFF</span><a href="#works">BACK TO WORK INDEX ↑</a></footer>
              </section>
            )}
          </section>
        );
      })}
    </main>
  );
}
