"use client";

import { useState } from "react";
import BytePipelineDemo from "./BytePipelineDemo";

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
        <iframe title="微笑花园实时互动体验" src="https://urnotccw.github.io/smile-garden/" loading="lazy" allow="camera" />
      ) : <BytePipelineDemo />}
    </div>
  );
}
