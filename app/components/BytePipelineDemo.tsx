"use client";

import { useState } from "react";

const stages = [
  {
    title: "接收需求",
    action: "提取主题、受众、节日语境与交付尺寸。",
    output: "结构化 brief",
    check: "缺少地区或渠道时暂停进入生成。",
  },
  {
    title: "规则检查",
    action: "把品牌规范、文化禁忌和文件要求转成可执行约束。",
    output: "约束清单",
    check: "高风险文化元素必须进入人工复核。",
  },
  {
    title: "设计策略",
    action: "确定构图、色彩、主体层级与文案占位关系。",
    output: "设计方案",
    check: "先对齐策略，再消耗模型生成次数。",
  },
  {
    title: "图像生成",
    action: "按策略生成候选并绑定提示词、模型和版本记录。",
    output: "候选图像",
    check: "最多 3 次生成尝试，避免无效循环。",
  },
  {
    title: "文件质检",
    action: "检查尺寸、格式、透明通道、命名与可交付性。",
    output: "文件报告",
    check: "任何硬性规格失败都不能进入交付。",
  },
  {
    title: "文化审核",
    action: "检查符号、地域表达和节日语义是否准确。",
    output: "文化审核单",
    check: "不确定项回到设计策略，而不是直接重生成。",
  },
  {
    title: "审美评估",
    action: "从主体、构图、色彩、细节与完成度形成可复查评分。",
    output: "评分与问题定位",
    check: "评价必须绑定当前图像哈希与版本。",
  },
  {
    title: "本地交付",
    action: "汇总成品、过程记录、审核结果和复用说明。",
    output: "可追溯交付包",
    check: "交付前由人确认最终版本。",
  },
];

export default function BytePipelineDemo() {
  const [active, setActive] = useState(0);
  const current = stages[active];

  return (
    <div className="byte-pipeline-demo">
      <header>
        <div>
          <span>ONLINE FLOW WALKTHROUGH</span>
          <strong>礼序 · 数字礼物生产 Pipeline</strong>
        </div>
        <p>前端流程演练，不调用模型、不产生费用</p>
      </header>

      <div className="byte-pipeline-grid">
        <ol aria-label="数字礼物生产流程">
          {stages.map((stage, index) => (
            <li key={stage.title}>
              <button
                type="button"
                className={index === active ? "is-active" : index < active ? "is-complete" : undefined}
                onClick={() => setActive(index)}
                aria-current={index === active ? "step" : undefined}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{stage.title}</strong>
                <em>{index < active ? "已检查" : index === active ? "当前" : "待处理"}</em>
              </button>
            </li>
          ))}
        </ol>

        <section aria-live="polite">
          <p>STEP {String(active + 1).padStart(2, "0")} / {String(stages.length).padStart(2, "0")}</p>
          <h4>{current.title}</h4>
          <dl>
            <div><dt>当前动作</dt><dd>{current.action}</dd></div>
            <div><dt>阶段输出</dt><dd>{current.output}</dd></div>
            <div><dt>质量门槛</dt><dd>{current.check}</dd></div>
          </dl>
          <div className="byte-pipeline-actions">
            <button type="button" onClick={() => setActive((value) => Math.max(0, value - 1))} disabled={active === 0}>返回上一步</button>
            <button type="button" onClick={() => setActive((value) => Math.min(stages.length - 1, value + 1))} disabled={active === stages.length - 1}>通过并继续</button>
            <button type="button" onClick={() => setActive(0)}>重新演练</button>
          </div>
        </section>
      </div>
    </div>
  );
}
