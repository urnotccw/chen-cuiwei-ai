import LiveDemo from "./LiveDemo";

// Start the portfolio experience on the map without deleting saved trips.
const travelHome = "https://dart-trip-weekend-27113.urnotccw1.chatgpt.site/?entry=map";

export default function TravelCase() {
  return (
    <div className="compact-live-demo">
      <div className="compact-demo-toolbar">
        <span>在线体验</span>
        <a href={travelHome} target="_blank" rel="noreferrer">新窗口打开 ↗</a>
      </div>
      <LiveDemo title="下一站在线旅行规划" src={travelHome} allow="clipboard-write" />
    </div>
  );
}
