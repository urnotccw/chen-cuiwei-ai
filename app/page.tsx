import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "陈萃薇 · AI 产品经理作品集",
  description: "陈萃薇，AI 产品经理作品集，2026。",
};

export default function Home() {
  return (
    <main className="cover-page">
      <div className="cover-grain" aria-hidden="true" />

      <nav className="rail-menu" aria-label="作品集导航">
        <a className="is-active" href="#works">WORK</a>
        <a href="#about">ABOUT</a>
        <a href="#top" lang="en">EN</a>
        <a href="#top" lang="zh-CN">CN</a>
      </nav>

      <aside id="about" className="archive-card education-card" aria-label="个人与教育信息">
        <p className="card-index">PROFILE / 01</p>
        <div>
          <h2>陈萃薇</h2>
          <p className="education-copy">深圳大学硕士<br /><strong>数字媒体与动画设计专业</strong></p>
        </div>
      </aside>

      <aside id="contact" className="archive-card contact-card" aria-label="联系方式">
        <p className="card-index">CONTACT / 02</p>
        <dl>
          <div><dt>WECHAT</dt><dd>urnotccw</dd></div>
          <div><dt>EMAIL</dt><dd><a href="mailto:2711348245@qq.com">2711348245@qq.com</a></dd></div>
          <div><dt>TEL</dt><dd><a href="tel:+8615750910735">15750910735</a></dd></div>
        </dl>
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

      <section id="works" className="sr-only">作品</section>
    </main>
  );
}
