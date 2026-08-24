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
                      <h3 id="tone-title">从冷蓝到暗金，<br />寻找故事的温度</h3>
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
                        <h4>暗金冷灰 · 最终方案</h4>
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
          </section>
        );
      })}
    </main>
  );
}
