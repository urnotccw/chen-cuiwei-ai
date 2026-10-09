"use client";

import { useRef, useState } from "react";

// Cross-origin apps may keep cameras, WebGL and timers alive. Start only on
// explicit intent; never discard an in-progress demo just because it scrolls away.
export default function LiveDemo({ title, src, allow, note }: { title: string; src: string; allow?: string; note?: string }) {
  const [active, setActive] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const startButton = useRef<HTMLButtonElement>(null);
  return <div className={`live-demo-session${active ? " is-running" : ""}`}>
    {!active ? <div className="live-demo-ready">
      <div><p>交互 Demo</p><h3>{title}</h3><span>{note ?? "点击后加载完整应用，可直接在这里操作。"}</span></div>
      <button ref={startButton} type="button" onClick={() => { setLoaded(false); setActive(true); }}>开始体验 <span aria-hidden="true">↗</span></button>
    </div> : <>
      <div className="live-demo-session-bar">
        <span role="status">{loaded ? "已打开体验 · 若页面未显示，可在新窗口打开" : "正在加载应用…"}</span>
        <a href={src} target="_blank" rel="noreferrer">新窗口打开 ↗</a>
        <button type="button" onClick={() => { setActive(false); requestAnimationFrame(() => startButton.current?.focus()); }}>关闭体验</button>
      </div>
      <iframe title={title} src={src} allow={allow} onLoad={() => setLoaded(true)} />
    </>}
  </div>;
}
