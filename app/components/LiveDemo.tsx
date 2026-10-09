// Native lazy loading starts the app near the viewport without a click gate.
// Keep the frame mounted so scrolling away never discards a visitor's progress.
export default function LiveDemo({ title, src, allow }: { title: string; src: string; allow?: string }) {
  return <div className="live-demo-session">
    <iframe title={title} src={src} allow={allow} loading="lazy" />
  </div>;
}
