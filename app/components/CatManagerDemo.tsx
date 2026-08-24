"use client";

import { FormEvent, MouseEvent, useEffect, useRef, useState } from "react";

type TabKey = "profile" | "inventory" | "medicine" | "album";
type InventoryItem = { id: number; name: string; category: string; qty: number; unit: string; image: string; tag: string };
type CatProfile = { name: string; birthday: string; gender: string; breed: string };
type ModalState = "profile" | "calendar" | "abnormal" | "inventory" | null;

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

const initialInventory: InventoryItem[] = [
  { id: 1, name: "皇家幼猫粮", category: "猫粮", qty: 4, unit: "袋", image: "/cat-manager/royal-canin.jpg", tag: "爱吃" },
  { id: 2, name: "Ziwi 主食罐", category: "罐头", qty: 1, unit: "罐", image: "/cat-manager/ziwi.jpg", tag: "常备" },
  { id: 3, name: "Pidan 混合猫砂", category: "猫砂", qty: 2, unit: "袋", image: "/cat-manager/pidan.jpg", tag: "通用" },
];

const initialProfile: CatProfile = { name: "安安", birthday: "2026-05-01", gender: "妹妹", breed: "虎斑蓝双" };
const blankItem: InventoryItem = { id: 0, name: "", category: "猫粮", qty: 1, unit: "袋", image: "/cat-manager/royal-canin.jpg", tag: "常备" };

export default function CatManagerDemo() {
  const [activeTab, setActiveTab] = useState<TabKey>("profile");
  const [records, setRecords] = useState({ food: "正常", water: "正常", poop: "正常" });
  const [medDone, setMedDone] = useState(10);
  const [inventory, setInventory] = useState<InventoryItem[]>(initialInventory);
  const [profile, setProfile] = useState<CatProfile>(initialProfile);
  const [profileDraft, setProfileDraft] = useState<CatProfile>(initialProfile);
  const [selectedDate, setSelectedDate] = useState("2026-06-01");
  const [abnormalRecords, setAbnormalRecords] = useState<Record<string, string>>({});
  const [abnormalDraft, setAbnormalDraft] = useState("");
  const [editingItem, setEditingItem] = useState<InventoryItem>(blankItem);
  const [modal, setModal] = useState<ModalState>(null);
  const [hydrated, setHydrated] = useState(false);
  const [toast, setToast] = useState("");
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("ccw-cat-manager-demo");
      if (saved) {
        const data = JSON.parse(saved);
        if (data.profile) setProfile(data.profile);
        if (Array.isArray(data.inventory)) setInventory(data.inventory);
        if (data.abnormalRecords) setAbnormalRecords(data.abnormalRecords);
        if (data.records) setRecords(data.records);
        if (typeof data.medDone === "number") setMedDone(data.medDone);
      }
    } catch { /* keep the demo defaults if storage is unavailable */ }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem("ccw-cat-manager-demo", JSON.stringify({ profile, inventory, abnormalRecords, records, medDone }));
  }, [hydrated, profile, inventory, abnormalRecords, records, medDone]);

  const notify = (message: string) => {
    setToast(message);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 1800);
  };

  const updateQty = (id: number, delta: number) => {
    setInventory((items) => items.map((item) => item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item));
  };

  const openProfileEditor = () => {
    setProfileDraft(profile);
    setModal("profile");
  };

  const openInventoryEditor = (item?: InventoryItem) => {
    setEditingItem(item ? { ...item } : { ...blankItem, id: Date.now() });
    setModal("inventory");
  };

  const openAbnormalEditor = () => {
    setAbnormalDraft(abnormalRecords[selectedDate] || "");
    setModal("abnormal");
  };

  const saveProfile = (event: FormEvent) => {
    event.preventDefault();
    setProfile(profileDraft);
    setModal(null);
    notify("猫咪档案已更新");
  };

  const saveInventoryItem = (event: FormEvent) => {
    event.preventDefault();
    if (!editingItem.name.trim()) return notify("请填写物品名称");
    setInventory((items) => items.some((item) => item.id === editingItem.id)
      ? items.map((item) => item.id === editingItem.id ? editingItem : item)
      : [...items, editingItem]);
    setModal(null);
    notify("囤货物品已保存");
  };

  const saveAbnormalRecord = (event: FormEvent) => {
    event.preventDefault();
    setAbnormalRecords((current) => ({ ...current, [selectedDate]: abnormalDraft.trim() }));
    setModal(null);
    notify("异常记录已保存");
  };

  const dateLabel = selectedDate.replaceAll("-", "/");
  const calendarDays = Array.from({ length: 35 }, (_, index) => index < 1 || index > 30 ? null : index);
  const stopStep = (event: MouseEvent<HTMLButtonElement>, id: number, delta: number) => {
    event.stopPropagation();
    updateQty(id, delta);
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
                  <p className="cat-profile-name">{profile.name}</p>
                  <p className="cat-profile-meta">{profile.birthday.slice(5).replace("-", "月")}日 · {profile.breed}{profile.gender}</p>
                </div>
                <button className="cat-avatar-button" type="button" onClick={openProfileEditor}>
                  <img src="/cat-manager/cat-avatar.jpg" alt={`${profile.name}的头像`} />
                  <span>✎</span>
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
                <header><strong>健康记录</strong><button className="cat-date-button" type="button" onClick={() => setModal("calendar")}><img src="/cat-manager/calendar.svg" alt="" />{dateLabel}</button></header>
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
                <button className={`cat-abnormal-button ${abnormalRecords[selectedDate] ? "has-record" : ""}`} type="button" onClick={openAbnormalEditor}>其他异常记录 {abnormalRecords[selectedDate] && <i>已记录</i>}<span>›</span></button>
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
              <div className="cat-list-heading"><strong>囤货清单</strong><button type="button" onClick={() => openInventoryEditor()}>＋</button></div>
              <div className="cat-search-row"><span>搜索名称、品牌</span><button type="button">筛选</button><button type="button">排序</button></div>
              <div className="cat-inventory-list">
                {inventory.map((item) => (
                  <article key={item.id} role="button" tabIndex={0} onClick={() => openInventoryEditor(item)} onKeyDown={(event) => { if (event.key === "Enter") openInventoryEditor(item); }}>
                    <img src={item.image} alt={item.name} />
                    <div><strong>{item.name}</strong><small>{item.category} · {item.tag}</small><span>库存 {item.qty}{item.unit}</span></div>
                    <div className="cat-stepper"><button type="button" onClick={(event) => stopStep(event, item.id, -1)}>−</button><b>{item.qty}</b><button type="button" onClick={(event) => stopStep(event, item.id, 1)}>＋</button></div>
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

      {modal && (
        <div className="cat-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setModal(null); }}>
          <section className="cat-modal" role="dialog" aria-modal="true">
            <header className="cat-modal-header">
              <div><small>CAT MANAGER</small><strong>{modal === "profile" ? "修改猫咪档案" : modal === "calendar" ? "选择记录日期" : modal === "abnormal" ? "其他异常记录" : editingItem.id && inventory.some((item) => item.id === editingItem.id) ? "编辑囤货物品" : "添加囤货物品"}</strong></div>
              <button type="button" onClick={() => setModal(null)} aria-label="关闭">×</button>
            </header>

            {modal === "profile" && (
              <form className="cat-edit-form" onSubmit={saveProfile}>
                <label>名字<input value={profileDraft.name} onChange={(event) => setProfileDraft({ ...profileDraft, name: event.target.value })} required /></label>
                <label>生日<input type="date" value={profileDraft.birthday} onChange={(event) => setProfileDraft({ ...profileDraft, birthday: event.target.value })} required /></label>
                <div className="cat-form-grid">
                  <label>性别<select value={profileDraft.gender} onChange={(event) => setProfileDraft({ ...profileDraft, gender: event.target.value })}><option>妹妹</option><option>弟弟</option></select></label>
                  <label>品种<input value={profileDraft.breed} onChange={(event) => setProfileDraft({ ...profileDraft, breed: event.target.value })} /></label>
                </div>
                <button className="cat-save-button" type="submit">保存档案</button>
              </form>
            )}

            {modal === "calendar" && (
              <div className="cat-calendar-panel">
                <div className="cat-calendar-month"><button type="button">‹</button><strong>2026年 6月</strong><button type="button">›</button></div>
                <div className="cat-calendar-grid cat-calendar-week"><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span><span>日</span></div>
                <div className="cat-calendar-grid">
                  {calendarDays.map((day, index) => day ? (
                    <button className={`${selectedDate.endsWith(`-${String(day).padStart(2, "0")}`) ? "is-selected" : ""} ${abnormalRecords[`2026-06-${String(day).padStart(2, "0")}`] ? "has-note" : ""}`} type="button" key={day} onClick={() => { setSelectedDate(`2026-06-${String(day).padStart(2, "0")}`); setModal(null); }}>{day}</button>
                  ) : <span key={`empty-${index}`} />)}
                </div>
                <p>有圆点的日期包含异常记录。选择日期后可继续补充健康状态。</p>
              </div>
            )}

            {modal === "abnormal" && (
              <form className="cat-edit-form" onSubmit={saveAbnormalRecord}>
                <p className="cat-modal-date">记录日期 <b>{dateLabel}</b></p>
                <label>异常情况<textarea value={abnormalDraft} onChange={(event) => setAbnormalDraft(event.target.value)} placeholder="例如：上午轻微呕吐一次，精神状态正常，已减少零食并持续观察。" rows={5} /></label>
                <button className="cat-save-button" type="submit">保存记录</button>
              </form>
            )}

            {modal === "inventory" && (
              <form className="cat-edit-form" onSubmit={saveInventoryItem}>
                <label>物品名称<input value={editingItem.name} onChange={(event) => setEditingItem({ ...editingItem, name: event.target.value })} placeholder="输入品牌或物品名" required /></label>
                <div className="cat-form-grid">
                  <label>分类<select value={editingItem.category} onChange={(event) => setEditingItem({ ...editingItem, category: event.target.value })}><option>猫粮</option><option>罐头</option><option>猫砂</option><option>零食</option><option>药品</option></select></label>
                  <label>标签<input value={editingItem.tag} onChange={(event) => setEditingItem({ ...editingItem, tag: event.target.value })} /></label>
                  <label>数量<input type="number" min="0" value={editingItem.qty} onChange={(event) => setEditingItem({ ...editingItem, qty: Number(event.target.value) })} /></label>
                  <label>单位<input value={editingItem.unit} onChange={(event) => setEditingItem({ ...editingItem, unit: event.target.value })} /></label>
                </div>
                <div className="cat-modal-actions">
                  {inventory.some((item) => item.id === editingItem.id) && <button className="cat-delete-button" type="button" onClick={() => { setInventory((items) => items.filter((item) => item.id !== editingItem.id)); setModal(null); notify("物品已删除"); }}>删除</button>}
                  <button className="cat-save-button" type="submit">保存物品</button>
                </div>
              </form>
            )}
          </section>
        </div>
      )}

      {toast && <div className="cat-app-toast" role="status">{toast}</div>}
    </div>
  );
}
