"use client";

import { lazy, Suspense, useState } from "react";
import LiveDemo from "./LiveDemo";

const BytePipelineDemo = lazy(() => import("./BytePipelineDemo"));

export default function ByteCase() {
  const [demo, setDemo] = useState<"smile" | "pipeline">("smile");

  return (
    <div className="compact-live-demo compact-byte-demo">
      <div className="compact-demo-toolbar">
        <div className="compact-demo-switch" role="group" aria-label="选择礼序 Demo">
          <button type="button" aria-pressed={demo === "smile"} onClick={() => setDemo("smile")}>微笑花园</button>
          <button type="button" aria-pressed={demo === "pipeline"} onClick={() => setDemo("pipeline")}>礼物生产流程</button>
        </div>
        {demo === "smile" && <a href="https://urnotccw.github.io/smile-garden/" target="_blank" rel="noreferrer">新窗口打开 ↗</a>}
      </div>
      {demo === "smile" ? (
        <LiveDemo title="微笑花园实时互动体验" src="https://urnotccw.github.io/smile-garden/" allow="camera" />
      ) : <Suspense fallback={<p className="demo-loading" role="status">正在加载流程演练…</p>}><BytePipelineDemo /></Suspense>}
    </div>
  );
}
