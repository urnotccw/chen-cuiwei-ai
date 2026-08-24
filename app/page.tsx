import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "陈萃薇 · AI 产品经理作品集",
  description: "陈萃薇，AI 产品经理作品集，2026。",
};

export default function Home() {
  return (
    <main className="cover-page">
      <div className="cover-grain" aria-hidden="true" />

      <aside className="left-rail" aria-label="导航与个人信息">
        <a className="rail-name" href="#top">陈萃薇<br /><span>CHEN CUIWEI</span></a>
        <a className="rail-contact" href="#contact">WECHAT<br /><b>urnotccw</b></a>
        <nav className="rail-menu" aria-label="作品集导航">
          <a className="is-active" href="#works">WORK</a>
          <a href="#about">ABOUT</a>
          <a href="#top" lang="en">EN</a>
          <a href="#top" lang="zh-CN">CN</a>
        </nav>
      </aside>

      <section id="top" className="cover-content" aria-labelledby="page-title">
        <p className="discipline">AI PRODUCT<br />MANAGEMENT<br />PORTFOLIO</p>
        <p className="year">2026</p>
        <div className="title-stack">
          <p className="kicker">陈萃薇的</p>
          <h1 id="page-title">AI<br />产品<br />作品集</h1>
          <p className="subtitle">让模型能力<br />成为真实体验</p>
        </div>
        <p className="stitch-note">PRODUCT / STRATEGY<br />EXPERIENCE</p>
      </section>

      <section id="works" className="sr-only">作品</section>
      <section id="about" className="sr-only">关于陈萃薇</section>
      <section id="contact" className="sr-only">微信号 urnotccw</section>
    </main>
  );
}
