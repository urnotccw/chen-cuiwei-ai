import BytePipelineDemo from "./BytePipelineDemo";

export default function ByteCase() {
  return (
    <section className="case-study case-study-byte" aria-labelledby="byte-case-title">
      <header className="case-study-header"><span>PROJECT 04 / WRITTEN TEST</span><span>AI PRODUCT SYSTEM</span></header>

      <div className="case-opening">
        <div>
          <p>项目介绍</p>
          <h3 id="byte-case-title">从内容生产、审美判断到互动体验，回答三种 AI 产品问题</h3>
          <p className="case-opening-summary">字节笔试题由三个相互关联的系统组成：可追溯的数字礼物生产 Pipeline、可复查的图片审美评测方法，以及把表情与手势转化为花园反馈的浏览器互动原型。</p>
        </div>
        <dl className="case-facts">
          <div><dt>PART 01</dt><dd>多地区数字礼物自动化生产 Pipeline</dd></div>
          <div><dt>PART 02</dt><dd>浏览器视觉互动「微笑花园」</dd></div>
          <div><dt>PART 03</dt><dd>20 张生成图片审美评测与归因</dd></div>
        </dl>
      </div>

      <section className="byte-research" aria-labelledby="byte-research-title">
        <div className="case-section-heading"><p>前期调研 / 题目拆解</p><h4 id="byte-research-title">三道题分别检验规模化、可解释性与实时反馈</h4></div>
        <div className="byte-research-table">
          <article><span>生产</span><strong>高频、多地区内容怎样稳定交付？</strong><p>关键不是“多生成几张”，而是把规则、质检、文化审核、人审和版本追踪放在同一条可中止流程里。</p></article>
          <article><span>评估</span><strong>审美判断怎样从感受变成证据？</strong><p>把主体、构图、色彩、细节与完成度拆成统一维度，并让结论绑定到具体图片与问题位置。</p></article>
          <article><span>体验</span><strong>模型能力怎样形成自然的互动回路？</strong><p>用微笑、笑声、头部与手势触发花园变化，使输入、反馈和情绪结果在几秒内被理解。</p></article>
        </div>
      </section>

      <section className="byte-part" aria-labelledby="byte-pipeline-title">
        <div className="case-section-heading"><p>PART 01 / 生产系统</p><h4 id="byte-pipeline-title">把一次生成，变成八个可检查的交付阶段</h4></div>
        <div className="byte-pipeline-evidence">
          <div><p>流程为真实本地工作台方案的网页化演练。每一步都有输入、产物与质量门槛；连续失败时停止继续消耗，并把决定权交回人工。</p><p>原型初始安全阈值为最多 3 次生成、16 次调用、15 分钟总时长，属于待通过更多任务校准的配置，而非通用行业标准。</p></div>
          <figure><img src="/byte-pipeline-research.png" alt="数字礼物生产业务挑战与工程化处理方式" loading="lazy" decoding="async" /><figcaption>RESEARCH / 业务挑战到工程机制</figcaption></figure>
        </div>
        <BytePipelineDemo />
      </section>

      <section className="byte-part embedded-product" aria-labelledby="smile-garden-title">
        <div className="embedded-product-heading">
          <div><p>PART 02 / 浏览器互动</p><h4 id="smile-garden-title">微笑花园：让表情和手势直接改变画面</h4></div>
          <div><p>微笑触发雨水与植物生长，笑声触发烟花；手势可以接住爱心与雨滴。摄像头仅在本地浏览器处理，不上传、不录制。</p><a href="https://urnotccw.github.io/smile-garden/" target="_blank" rel="noreferrer">新窗口打开并授权摄像头 ↗</a></div>
        </div>
        <div className="embedded-browser is-smile-browser">
          <div className="embedded-browser-bar"><span>LIVE CAMERA EXPERIENCE</span><span>urnotccw.github.io/smile-garden</span><a href="https://urnotccw.github.io/smile-garden/" target="_blank" rel="noreferrer">OPEN ↗</a></div>
          <iframe title="微笑花园实时互动体验" src="https://urnotccw.github.io/smile-garden/" loading="lazy" allow="camera" />
        </div>
        <div className="byte-two-up">
          <figure><img src="/byte-smile-case.png" alt="微笑花园目标、概念与互动界面说明" loading="lazy" decoding="async" /><figcaption>CONCEPT / 从命题到情绪反馈</figcaption></figure>
          <figure><img src="/byte-smile-logic.png" alt="微笑花园互动架构、视觉规则与验收说明" loading="lazy" decoding="async" /><figcaption>SYSTEM / 感知、反馈与性能边界</figcaption></figure>
        </div>
      </section>

      <section className="byte-part byte-aesthetic" aria-labelledby="byte-aesthetic-title">
        <div className="case-section-heading"><p>PART 03 / 审美评测</p><h4 id="byte-aesthetic-title">统一维度打分，再把低分归因到可修改的问题</h4></div>
        <div className="byte-aesthetic-grid">
          <div><p>评测覆盖 20 张生成图片。流程先定义评分维度，再记录单图优缺点与修改建议，最后汇总跨图片共性问题，避免只给“好看 / 不好看”的不可执行判断。</p><dl><div><dt>维度</dt><dd>主体 / 构图 / 色彩 / 细节 / 完成度</dd></div><div><dt>输出</dt><dd>单图评分、问题定位、共性归因与优化建议</dd></div><div><dt>边界</dt><dd>主观判断需要标注依据，并接受复核</dd></div></dl></div>
          <figure><img src="/byte-aesthetic-review.png" alt="20 张生成图片的审美评分、优点、问题与建议表" loading="lazy" decoding="async" /><figcaption>EVALUATION / 评分、归因与改进建议</figcaption></figure>
        </div>
      </section>

      <footer className="case-study-footer"><span>PIPELINE / EVALUATION / EXPERIENCE</span><a href="#works">BACK TO WORK INDEX ↑</a></footer>
    </section>
  );
}
