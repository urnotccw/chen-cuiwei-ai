"use client";

import { useRef, useState } from "react";

type TabKey = "profile" | "inventory" | "medicine" | "album";

const tabs: Array<{ key: TabKey; label: string; icon: string }> = [
  { key: "profile", label: "喵档案", icon: "profile" },
  { key: "inventory", label: "喵囤囤", icon: "inventory" },
  { key: "medicine", label: "喵药箱", icon: "medicine" },
  { key: "album", label: "喵相册", icon: "album" },
];

const recordOptions = {
  food: ["食量偏多", "正常", "食欲不振"],
  water: ["喝水偏多", "正常", "喝水偏少"],
  poop: ["软便", "正常", "偏硬"],
};

const recordMeta = {
  food: { label: "食量", icon: "/cat-manager/soup.svg" },
  water: { label: "饮水", icon: "/cat-manager/droplets.svg" },
  poop: { label: "便便", icon: "/cat-manager/cookie.svg" },
};

export default function CatManagerDemo() {
  const [activeTab, setActiveTab] = useState<TabKey>("profile");
  const [records, setRecords] = useState({ food: "正常", water: "正常", poop: "正常" });
  const [medDone, setMedDone] = useState(10);
  const [inventory, setInventory] = useState([
    { id: 1, name: "皇家幼猫粮", category: "猫粮", qty: 4, unit: "袋", image: "/cat-manager/royal-canin.jpg", tag: "爱吃" },
    { id: 2, name: "Ziwi 主食罐", category: "罐头", qty: 1, unit: "罐", image: "/cat-manager/ziwi.jpg", tag: "常备" },
    { id: 3, name: "Pidan 混合猫砂", category: "猫砂", qty: 2, unit: "袋", image: "/cat-manager/pidan.jpg", tag: "通用" },
  ]);
  const [toast, setToast] = useState("");
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const notify = (message: string) => {
    setToast(message);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 1800);
  };

  const updateQty = (id: number, delta: number) => {
    setInventory((items) => items.map((item) => item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item));
  };

  return (
    <div className="cat-app-shell">
      <div className="cat-status-bar" aria-hidden="true">
        <span>1:25</span><span>●●● 5G ▰</span>
      </div>

      <div className="cat-app-body">
        {activeTab === "profile" && (
          <section className="cat-app-page cat-profile-page" aria-label="喵档案">
            <div className="cat-profile-hero">
              <header className="cat-profile-main">
                <div>
                  <p className="cat-profile-name">安安</p>
                  <p className="cat-profile-meta">5月1天 · 虎斑蓝双妹妹</p>
                </div>
                <button className="cat-avatar-button" type="button" onClick={() => notify("已打开猫咪档案") }>
                  <img src="/cat-manager/cat-avatar.jpg" alt="安安的头像" />
                  <span>＋</span>
                </button>
              </header>

              <div className="cat-profile-tools">
                <button className="cat-butler" type="button" onClick={() => notify("喵管家正在整理今日任务") } aria-label="打开喵管家">
                  <img src="/cat-manager/butler.png" alt="" />
                </button>
                <div className="cat-overview-card">
                  <strong>今日概览</strong>
                  <div>
                    <span><b>良好</b><small>健康</small></span>
                    <span><b>28天</b><small>猫粮</small></span>
                    <span><b>1.65kg</b><small>体重</small></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="cat-page-content">
              <article className="cat-task-card">
                <header><div><small>今日待办</small><strong>按时完成照护</strong></div><span>1项</span></header>
                <button type="button" onClick={() => notify("驱虫提醒已查看") }>
                  <img src="/cat-manager/shield.svg" alt="" />
                  <span><b>体外驱虫提醒</b><small>距离下次驱虫还有 7 天</small></span>
                  <i>查看</i>
                </button>
              </article>

              <article className="cat-health-card">
                <header><strong>健康状况</strong><span>治疗中 ●</span></header>
                <div className="cat-health-tags"><span>已绝育</span><span>上次驱虫 11天</span><span>疫苗正常</span></div>
              </article>

              <article className="cat-record-card">
                <header><strong>健康记录</strong><span><img src="/cat-manager/calendar.svg" alt="" />2026/6/1</span></header>
                {(Object.keys(recordOptions) as Array<keyof typeof recordOptions>).map((key) => (
                  <div className="cat-record-row" key={key}>
                    <span className="cat-record-label"><img src={recordMeta[key].icon} alt="" />{recordMeta[key].label}</span>
                    <div>
                      {recordOptions[key].map((option) => (
                        <button className={records[key] === option ? "is-selected" : ""} type="button" key={option} onClick={() => setRecords((current) => ({ ...current, [key]: option }))}>{option}</button>
                      ))}
                    </div>
                  </div>
                ))}
                <button className="cat-abnormal-button" type="button" onClick={() => notify("已打开异常记录")}>其他异常记录 <span>›</span></button>
              </article>

              <article className="cat-weight-card">
                <header><strong>体重记录</strong><button type="button" onClick={() => notify("体重已记录：1.65kg")}>＋</button></header>
                <div className="cat-weight-chart" aria-label="体重趋势图">
                  <span style={{ left: "7%", bottom: "34%" }}>1.70</span><span style={{ left: "35%", bottom: "48%" }}>1.75</span><span style={{ left: "68%", bottom: "66%" }}>1.80</span><span style={{ left: "90%", bottom: "22%" }}>1.65</span>
                  <i />
                </div>
              </article>
            </div>
          </section>
        )}

        {activeTab === "inventory" && (
          <section className="cat-app-page cat-inventory-page" aria-label="喵囤囤">
            <header className="cat-subpage-header">
              <img src="/cat-manager/cat-avatar.jpg" alt="安安" />
              <div><strong>安安的食物柜</strong><small>共 {inventory.reduce((sum, item) => sum + item.qty, 0)} 件库存 · 1 件需要处理</small></div>
            </header>
            <div className="cat-inventory-summary">
              <header><strong>库存提醒</strong><span>1件待处理</span></header>
              <div><span><b>0</b><small>临期/过期</small></span><span><b>1</b><small>需要补货</small></span><span><b>1</b><small>待尝试</small></span></div>
            </div>
            <div className="cat-page-content">
              <button className="cat-current-food" type="button" onClick={() => notify("已打开剩余日期计算器") }>
                <img src="/cat-manager/soup.svg" alt="" /><span><small>当前猫粮</small><strong>皇家幼猫粮</strong><i>预计还可食用 28 天</i></span><b>调整</b>
              </button>
              <div className="cat-list-heading"><strong>囤货清单</strong><button type="button" onClick={() => notify("添加物品")}>＋</button></div>
              <div className="cat-search-row"><span>搜索名称、品牌</span><button type="button">筛选</button><button type="button">排序</button></div>
              <div className="cat-inventory-list">
                {inventory.map((item) => (
                  <article key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div><strong>{item.name}</strong><small>{item.category} · {item.tag}</small><span>库存 {item.qty}{item.unit}</span></div>
                    <div className="cat-stepper"><button type="button" onClick={() => updateQty(item.id, -1)}>−</button><b>{item.qty}</b><button type="button" onClick={() => updateQty(item.id, 1)}>＋</button></div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === "medicine" && (
          <section className="cat-app-page cat-medicine-page" aria-label="喵药箱">
            <header className="cat-subpage-header">
              <img src="/cat-manager/cat-avatar.jpg" alt="安安" />
              <div><strong>安安的喵药箱</strong><small>防护与用药记录</small></div>
            </header>
            <div className="cat-protection-grid">
              <article><img src="/cat-manager/protect-deworm.png" alt="" /><span><small>体外驱虫</small><strong>还有 7 天</strong><i>下次 2026-06-08</i></span></article>
              <article><img src="/cat-manager/protect-vaccine.png" alt="" /><span><small>疫苗</small><strong>还有 28 天</strong><i>下次 2026-06-29</i></span></article>
            </div>
            <div className="cat-page-content">
              <div className="cat-list-heading"><strong>用药历史</strong><button type="button" onClick={() => notify("添加用药计划")}>＋</button></div>
              <article className="cat-med-card">
                <header><img src="/cat-manager/pill.svg" alt="" /><div><strong>耳螨治疗</strong><small>耳康灵 · 每日早晚 2 次</small></div><span>进行中</span></header>
                <div className="cat-med-progress"><span style={{ width: `${Math.min(100, medDone / 23 * 100)}%` }} /></div>
                <p>进度 {medDone}/23 次 <b>{Math.round(medDone / 23 * 100)}%</b></p>
                <button type="button" disabled={medDone >= 23} onClick={() => { setMedDone((value) => Math.min(23, value + 1)); notify("今日用药已打卡"); }}>{medDone >= 23 ? "疗程已完成" : "今日打卡 +1"}</button>
              </article>
              <article className="cat-med-tip"><img src="/cat-manager/heart-pulse.svg" alt="" /><span><strong>今日提醒</strong><small>已连续记录 {medDone} 次，继续保持规律用药。</small></span></article>
            </div>
          </section>
        )}

        {activeTab === "album" && (
          <section className="cat-app-page cat-album-page" aria-label="喵相册">
            <div className="cat-album-top">
              <button type="button" onClick={() => notify("已打开猫咪档案") }><img src="/cat-manager/cat-avatar.jpg" alt="安安" /><span>＋</span></button>
              <article><small>去年今日</small><strong>还没有去年的回忆哦</strong></article>
            </div>
            <button className="cat-add-photo" type="button" onClick={() => notify("选择照片日期")}>＋ 添加照片</button>
            <div className="cat-album-timeline">
              <aside><strong>2026</strong><span>JUN</span><span>MAY</span></aside>
              <div>
                <article><img src="/cat-manager/cat-avatar.jpg" alt="安安的日常照片" /><span><b>Jun 1</b><small>5月1天<br />一起睡觉～</small></span></article>
                <article><span><b>May 30</b><small>4月30天<br />第一次体检</small></span><img src="/cat-manager/butler.png" alt="安安的成长记录" /></article>
                <article><img src="/cat-manager/cat-avatar.jpg" alt="安安的日常照片" /><span><b>May 21</b><small>4月21天<br />到家第一天</small></span></article>
              </div>
            </div>
          </section>
        )}
      </div>

      <nav className="cat-tab-bar" aria-label="小程序页面切换">
        {tabs.map((tab) => (
          <button className={activeTab === tab.key ? "is-active" : ""} type="button" key={tab.key} onClick={() => setActiveTab(tab.key)}>
            <img src={`/cat-manager/tab-${tab.icon}${activeTab === tab.key ? "-active" : ""}.png`} alt="" />
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>

      {toast && <div className="cat-app-toast" role="status">{toast}</div>}
    </div>
  );
}
