import LiveDemo from "./LiveDemo";

export default function TravelCase() {
  return (
    <div className="compact-live-demo">
      <div className="compact-demo-toolbar">
        <span>在线体验</span>
        <a href="https://dart-trip-weekend-27113.urnotccw1.chatgpt.site/" target="_blank" rel="noreferrer">新窗口打开 ↗</a>
      </div>
      <LiveDemo title="下一站在线旅行规划" src="https://dart-trip-weekend-27113.urnotccw1.chatgpt.site/" allow="clipboard-write" />
    </div>
  );
}
