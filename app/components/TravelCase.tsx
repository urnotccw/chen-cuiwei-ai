export default function TravelCase() {
  return (
    <section className="case-study case-study-travel" aria-labelledby="travel-case-title">
      <header className="case-study-header"><span>PROJECT 02 / PRODUCT CASE</span><span>AI TRIP PLANNING</span></header>

      <div className="case-opening">
        <div>
          <p>项目介绍</p>
          <h3 id="travel-case-title">把“去哪儿”到“怎么一起出发”，收进同一条旅行协作链路</h3>
          <p className="case-opening-summary">「下一站」面向朋友结伴旅行：从随机发现目的地、生成可编辑行程，到群体确认、出发准备和费用结算，让 AI 负责搭骨架，让人保留最后决定权。</p>
        </div>
        <dl className="case-facts">
          <div><dt>MY ROLE</dt><dd>需求拆解 / 信息架构 / 交互原型 / AI 辅助开发</dd></div>
          <div><dt>SCOPE</dt><dd>找城市 / 做行程 / 一起确认 / 出发与结算</dd></div>
          <div><dt>DELIVERABLE</dt><dd>桌面端完整交互原型与移动端关键流程</dd></div>
        </dl>
      </div>

      <section className="travel-research" aria-labelledby="travel-research-title">
        <div className="case-section-heading">
          <p>前期调研 / 场景假设</p>
          <h4 id="travel-research-title">一次结伴旅行，常被拆散在聊天、攻略、表格和记账工具里</h4>
        </div>
        <p className="research-disclaimer">本轮调研以任务拆解、工具链观察与产品假设为基础，不将其包装为用户访谈结论；后续仍需通过真实结伴旅行验证优先级。</p>
        <div className="travel-research-ledger">
          <article><span>01</span><strong>决策分散</strong><p>目的地、预算与偏好在聊天中反复出现，缺少一个所有人都能确认的当前版本。</p></article>
          <article><span>02</span><strong>组织者负担</strong><p>同一个人需要反复收集日期、同步变化、整理路线，再提醒大家完成准备。</p></article>
          <article><span>03</span><strong>AI 结果难协作</strong><p>一次生成的行程看似完整，却缺少保留、替换、投票和人工修改的真实决策过程。</p></article>
          <article><span>04</span><strong>旅前旅中断层</strong><p>确认后的行程、清单、实时记录和费用结算没有自然衔接，信息需要重复搬运。</p></article>
        </div>
      </section>

      <section className="travel-system" aria-labelledby="travel-system-title">
        <div className="case-section-heading">
          <p>系统设计</p>
          <h4 id="travel-system-title">用四个连续任务，把灵感变成可共同执行的旅行计划</h4>
        </div>
        <ol>
          <li><span>发现</span><strong>地图与飞镖选城</strong><p>先给犹豫一个起点，再把心动城市留进候选池。</p></li>
          <li><span>生成</span><strong>可控行程</strong><p>天数、预算、节奏与偏好进入结构化输入；站点可保留、替换或手动编辑。</p></li>
          <li><span>确认</span><strong>旅行房间</strong><p>成员投票、最终方案与共享日历围绕同一个当前版本协作。</p></li>
          <li><span>执行</span><strong>准备与结算</strong><p>清单、旅行日记录、账本和结算继续承接已经确认的行程。</p></li>
        </ol>
        <div className="travel-evidence-grid">
          <figure><img src="/travel-map.png" alt="下一站地图选城与飞镖随机目的地界面" loading="lazy" decoding="async" /><figcaption>DISCOVER / 地图选城与随机发现</figcaption></figure>
          <figure><img src="/travel-plan.png" alt="下一站可编辑旅行计划界面" loading="lazy" decoding="async" /><figcaption>PLAN / AI 生成后继续保留、替换与编辑</figcaption></figure>
          <figure><img src="/travel-room.png" alt="下一站结伴旅行房间、清单与费用协作界面" loading="lazy" decoding="async" /><figcaption>COORDINATE / 房间确认、清单、旅程与费用</figcaption></figure>
        </div>
      </section>

      <section className="embedded-product travel-live" aria-labelledby="travel-live-title">
        <div className="embedded-product-heading">
          <div><p>完整系统 / 在线体验</p><h4 id="travel-live-title">在作品集里直接完成一次旅行规划</h4></div>
          <div><p>建议使用桌面端；原型数据用于交互演示，不代表实时价格。</p><a href="https://urnotccw.github.io/nextstop-travel/prototype.html" target="_blank" rel="noreferrer">新窗口打开完整原型 ↗</a></div>
        </div>
        <div className="embedded-browser">
          <div className="embedded-browser-bar"><span>LIVE PRODUCT PROTOTYPE</span><span>urnotccw.github.io/nextstop-travel/prototype.html</span><a href="https://urnotccw.github.io/nextstop-travel/prototype.html" target="_blank" rel="noreferrer">OPEN ↗</a></div>
          <iframe title="下一站完整旅行规划原型" src="https://urnotccw.github.io/nextstop-travel/prototype.html" loading="lazy" allow="clipboard-write" />
        </div>
      </section>

      <section className="case-conclusion">
        <div><p className="case-label">AI ROLE / AI 的边界</p><h4>生成结构，不替用户决定</h4><p>AI 负责把偏好快速组织成可讨论的初稿；保留站点、替换安排、确认版本和实际支出仍由参与者完成。</p></div>
        <div><p className="case-label">NEXT VALIDATION / 下一步</p><h4>验证多人确认是否真的减少沟通成本</h4><p>重点观察组织者修改次数、成员完成确认的速度，以及旅前清单和旅中记账是否能自然承接计划。</p></div>
      </section>

      <footer className="case-study-footer"><span>DISCOVER / PLAN / COORDINATE / GO</span><a href="#works">BACK TO WORK INDEX ↑</a></footer>
    </section>
  );
}
