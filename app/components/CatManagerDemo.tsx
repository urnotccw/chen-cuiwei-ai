"use client";
/* eslint-disable react-hooks/set-state-in-effect */

import { ChangeEvent, FormEvent, MouseEvent, PointerEvent as ReactPointerEvent, WheelEvent as ReactWheelEvent, useEffect, useRef, useState } from "react";

type TabKey = "profile" | "inventory" | "medicine" | "album";
type InventoryItem = { id: number; name: string; category: string; qty: number; unit: string; image: string; tag: "爱吃" | "不爱吃" | "未知"; restockReminder: boolean };
type CatProfile = { name: string; birthday: string; gender: string; breed: string; neutered: boolean; avatar: string };
type WeightRecord = { id: number; date: string; weight: number };
type MedicinePlan = { id: number; name: string; medicine: string; usage: string; total: number; done: number };
type AlbumItem = { id: number; date: string; caption: string; image: string };
type ModalState = "profile" | "calendar" | "abnormal" | "inventory" | "weight" | "medicine" | "album" | null;

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
  { id: 1, name: "皇家幼猫粮", category: "猫粮", qty: 4, unit: "袋", image: "/cat-manager/royal-canin.jpg", tag: "爱吃", restockReminder: false },
  { id: 2, name: "Ziwi 主食罐", category: "罐头", qty: 1, unit: "罐", image: "/cat-manager/ziwi.jpg", tag: "爱吃", restockReminder: true },
  { id: 3, name: "Pidan 混合猫砂", category: "猫砂", qty: 2, unit: "袋", image: "/cat-manager/pidan.jpg", tag: "未知", restockReminder: false },
];

const initialProfile: CatProfile = { name: "安安", birthday: "2026-05-01", gender: "妹妹", breed: "虎斑蓝双", neutered: true, avatar: "/cat-manager/cat-avatar.jpg" };
const blankItem: InventoryItem = { id: 0, name: "", category: "猫粮", qty: 1, unit: "袋", image: "/cat-manager/royal-canin.jpg", tag: "未知", restockReminder: false };
const initialWeights: WeightRecord[] = [
  { id: 1, date: "2026-05-12", weight: 1.7 },
  { id: 2, date: "2026-05-13", weight: 1.75 },
  { id: 3, date: "2026-05-15", weight: 1.8 },
  { id: 4, date: "2026-05-21", weight: 1.65 },
];
const initialMedicine: MedicinePlan[] = [
  { id: 1, name: "耳螨治疗", medicine: "耳康灵", usage: "每日早晚各 1 次，每次 2 滴", total: 23, done: 10 },
];
const initialAlbum: AlbumItem[] = [
  { id: 1, date: "2026-06-01", caption: "一起睡觉～", image: "/cat-manager/cat-avatar.jpg" },
  { id: 2, date: "2026-05-30", caption: "第一次体检", image: "/cat-manager/butler.png" },
  { id: 3, date: "2026-05-21", caption: "到家第一天", image: "/cat-manager/cat-avatar.jpg" },
];

const resizeImage = (file: File) => new Promise<string>((resolve, reject) => {
  const reader = new FileReader();
  reader.onerror = () => reject(new Error("图片读取失败"));
  reader.onload = () => {
    const image = new Image();
    image.onerror = () => reject(new Error("图片解析失败"));
    image.onload = () => {
      const scale = Math.min(1, 720 / Math.max(image.width, image.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(image.width * scale);
      canvas.height = Math.round(image.height * scale);
      canvas.getContext("2d")?.drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL("image/jpeg", 0.8));
    };
    image.src = String(reader.result);
  };
  reader.readAsDataURL(file);
});

export default function CatManagerDemo() {
  const [activeTab, setActiveTab] = useState<TabKey>("profile");
  const [records, setRecords] = useState({ food: "正常", water: "正常", poop: "正常" });
  const [inventory, setInventory] = useState<InventoryItem[]>(initialInventory);
  const [profile, setProfile] = useState<CatProfile>(initialProfile);
  const [profileDraft, setProfileDraft] = useState<CatProfile>(initialProfile);
  const [selectedDate, setSelectedDate] = useState("2026-06-01");
  const [calendarMonth, setCalendarMonth] = useState("2026-06");
  const [abnormalRecords, setAbnormalRecords] = useState<Record<string, string>>({});
  const [abnormalDraft, setAbnormalDraft] = useState("");
  const [editingItem, setEditingItem] = useState<InventoryItem>(blankItem);
  const [weights, setWeights] = useState<WeightRecord[]>(initialWeights);
  const [weightDraft, setWeightDraft] = useState({ date: "2026-06-01", weight: "" });
  const [medicinePlans, setMedicinePlans] = useState<MedicinePlan[]>(initialMedicine);
  const [medicineDraft, setMedicineDraft] = useState({ name: "", medicine: "", usage: "", total: "14" });
  const [albumItems, setAlbumItems] = useState<AlbumItem[]>(initialAlbum);
  const [albumDraft, setAlbumDraft] = useState({ date: "2026-06-01", caption: "", image: "" });
  const [modal, setModal] = useState<ModalState>(null);
  const [hydrated, setHydrated] = useState(false);
  const [toast, setToast] = useState("");
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const appBodyRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef<{ pointerId: number; startY: number; startScrollTop: number; dragging: boolean } | null>(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("ccw-cat-manager-demo");
      if (saved) {
        const data = JSON.parse(saved);
        if (data.profile) setProfile({ ...initialProfile, ...data.profile });
        if (Array.isArray(data.inventory)) setInventory(data.inventory.map((item: InventoryItem) => ({ ...blankItem, ...item, tag: ["爱吃", "不爱吃", "未知"].includes(item.tag) ? item.tag : "未知" })));
        if (data.abnormalRecords) setAbnormalRecords(data.abnormalRecords);
        if (data.records) setRecords(data.records);
        if (Array.isArray(data.weights)) setWeights(data.weights);
        if (Array.isArray(data.medicinePlans)) setMedicinePlans(data.medicinePlans);
        else if (typeof data.medDone === "number") setMedicinePlans([{ ...initialMedicine[0], done: data.medDone }]);
        if (Array.isArray(data.albumItems)) setAlbumItems(data.albumItems);
      }
    } catch { /* keep the demo defaults if storage is unavailable */ }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem("ccw-cat-manager-demo", JSON.stringify({ profile, inventory, abnormalRecords, records, weights, medicinePlans, albumItems }));
    } catch { /* large uploaded images can exceed private-browser storage limits */ }
  }, [hydrated, profile, inventory, abnormalRecords, records, weights, medicinePlans, albumItems]);

  const notify = (message: string) => {
    setToast(message);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 1800);
  };

  const updateQty = (id: number, delta: number) => setInventory((items) => items.map((item) => item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item));
  const openProfileEditor = () => { setProfileDraft(profile); setModal("profile"); };
  const openInventoryEditor = (item?: InventoryItem) => { setEditingItem(item ? { ...item } : { ...blankItem, id: Date.now() }); setModal("inventory"); };
  const openAbnormalEditor = () => { setAbnormalDraft(abnormalRecords[selectedDate] || ""); setModal("abnormal"); };
  const openWeightEditor = () => { setWeightDraft({ date: selectedDate, weight: "" }); setModal("weight"); };
  const openCalendar = () => { setCalendarMonth(selectedDate.slice(0, 7)); setModal("calendar"); };
  const openMedicineEditor = () => { setMedicineDraft({ name: "", medicine: "", usage: "", total: "14" }); setModal("medicine"); };
  const openAlbumEditor = () => { setAlbumDraft({ date: selectedDate, caption: "", image: "" }); setModal("album"); };

  const handleImage = async (event: ChangeEvent<HTMLInputElement>, target: "profile" | "album") => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const image = await resizeImage(file);
      if (target === "profile") setProfileDraft((draft) => ({ ...draft, avatar: image }));
      else setAlbumDraft((draft) => ({ ...draft, image }));
    } catch { notify("图片读取失败，请换一张试试"); }
  };

  const saveProfile = (event: FormEvent) => { event.preventDefault(); setProfile(profileDraft); setModal(null); notify("猫咪档案已更新"); };
  const saveInventoryItem = (event: FormEvent) => {
    event.preventDefault();
    if (!editingItem.name.trim()) return notify("请填写物品名称");
    setInventory((items) => items.some((item) => item.id === editingItem.id) ? items.map((item) => item.id === editingItem.id ? editingItem : item) : [...items, editingItem]);
    setModal(null); notify("囤货物品已保存");
  };
  const saveAbnormalRecord = (event: FormEvent) => { event.preventDefault(); setAbnormalRecords((current) => ({ ...current, [selectedDate]: abnormalDraft.trim() })); setModal(null); notify("异常记录已保存"); };
  const saveWeight = (event: FormEvent) => {
    event.preventDefault();
    const value = Number(weightDraft.weight);
    if (!value || value <= 0) return notify("请输入正确的体重");
    setWeights((items) => [...items.filter((item) => item.date !== weightDraft.date), { id: Date.now(), date: weightDraft.date, weight: value }].sort((a, b) => a.date.localeCompare(b.date)));
    setSelectedDate(weightDraft.date); setModal(null); notify(`已记录 ${value.toFixed(2)}kg`);
  };
  const saveMedicine = (event: FormEvent) => {
    event.preventDefault();
    if (!medicineDraft.name.trim() || !medicineDraft.medicine.trim() || !medicineDraft.usage.trim()) return notify("请完整填写用药信息");
    setMedicinePlans((items) => [...items, { id: Date.now(), name: medicineDraft.name.trim(), medicine: medicineDraft.medicine.trim(), usage: medicineDraft.usage.trim(), total: Math.max(1, Number(medicineDraft.total) || 1), done: 0 }]);
    setModal(null); notify("用药计划已加入档案提醒");
  };
  const saveAlbum = (event: FormEvent) => {
    event.preventDefault();
    if (!albumDraft.image) return notify("请先选择一张照片");
    setAlbumItems((items) => [{ id: Date.now(), ...albumDraft }, ...items].sort((a, b) => b.date.localeCompare(a.date)));
    setModal(null); notify("照片已加入喵相册");
  };

  const shiftMonth = (delta: number) => {
    const [year, month] = calendarMonth.split("-").map(Number);
    const next = new Date(year, month - 1 + delta, 1);
    setCalendarMonth(`${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, "0")}`);
  };

  const dateLabel = selectedDate.replaceAll("-", "/");
  const [calendarYear, calendarMonthNumber] = calendarMonth.split("-").map(Number);
  const leadingDays = (new Date(calendarYear, calendarMonthNumber - 1, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(calendarYear, calendarMonthNumber, 0).getDate();
  const calendarDays: Array<number | null> = [...Array(leadingDays).fill(null), ...Array.from({ length: daysInMonth }, (_, index) => index + 1)];
  while (calendarDays.length % 7) calendarDays.push(null);
  const latestWeight = weights.length ? weights[weights.length - 1].weight : 0;
  const chartWeights = weights.slice(-4);
  const minWeight = Math.min(...chartWeights.map((item) => item.weight), 1);
  const maxWeight = Math.max(...chartWeights.map((item) => item.weight), minWeight + 0.1);
  const activeMedicine = medicinePlans.find((item) => item.done < item.total);
  const restockCount = inventory.filter((item) => item.restockReminder).length;
  const pendingTagCount = inventory.filter((item) => item.tag === "未知").length;
  const stopStep = (event: MouseEvent<HTMLButtonElement>, id: number, delta: number) => { event.stopPropagation(); updateQty(id, delta); };
  const modalTitle = modal === "profile" ? "修改猫咪档案" : modal === "calendar" ? "选择记录日期" : modal === "abnormal" ? "其他异常记录" : modal === "weight" ? "记录体重" : modal === "medicine" ? "添加用药计划" : modal === "album" ? "添加相册照片" : editingItem.id && inventory.some((item) => item.id === editingItem.id) ? "编辑囤货物品" : "添加囤货物品";
  const handleAppWheel = (event: ReactWheelEvent<HTMLDivElement>) => {
    const scrollArea = appBodyRef.current;
    if (!scrollArea) return;
    const maxScrollTop = scrollArea.scrollHeight - scrollArea.clientHeight;
    const nextScrollTop = Math.min(maxScrollTop, Math.max(0, scrollArea.scrollTop + event.deltaY));
    if (nextScrollTop === scrollArea.scrollTop) return;
    event.preventDefault();
    scrollArea.scrollTop = nextScrollTop;
  };
  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    if ((event.target as HTMLElement).closest("button, input, textarea, select, label, a")) return;
    const scrollArea = appBodyRef.current;
    if (!scrollArea || scrollArea.scrollHeight <= scrollArea.clientHeight) return;
    dragStateRef.current = { pointerId: event.pointerId, startY: event.clientY, startScrollTop: scrollArea.scrollTop, dragging: false };
    scrollArea.setPointerCapture(event.pointerId);
  };
  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const scrollArea = appBodyRef.current;
    const dragState = dragStateRef.current;
    if (!scrollArea || !dragState || dragState.pointerId !== event.pointerId) return;
    const distance = event.clientY - dragState.startY;
    if (Math.abs(distance) < 3 && !dragState.dragging) return;
    dragState.dragging = true;
    event.preventDefault();
    scrollArea.scrollTop = Math.min(scrollArea.scrollHeight - scrollArea.clientHeight, Math.max(0, dragState.startScrollTop - distance));
  };
  const handlePointerEnd = (event: ReactPointerEvent<HTMLDivElement>) => {
    const scrollArea = appBodyRef.current;
    const dragState = dragStateRef.current;
    if (!scrollArea || !dragState || dragState.pointerId !== event.pointerId) return;
    if (scrollArea.hasPointerCapture(event.pointerId)) scrollArea.releasePointerCapture(event.pointerId);
    dragStateRef.current = null;
  };

  return (
    <div className="cat-app-shell">
      <div className="cat-status-bar" aria-hidden="true"><span>1:25</span><span>●●● 5G ▰</span></div>
      <div ref={appBodyRef} className="cat-app-body" onWheel={handleAppWheel} onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerEnd} onPointerCancel={handlePointerEnd} tabIndex={0} aria-label="小程序内容，可使用鼠标滚轮或按住拖动浏览">
        {activeTab === "profile" && (
          <section className="cat-app-page cat-profile-page" aria-label="喵档案">
            <div className="cat-profile-hero">
              <header className="cat-profile-main">
                <div><p className="cat-profile-name">{profile.name}</p><p className="cat-profile-meta">{profile.birthday.slice(5).replace("-", "月")}日 · {profile.breed}{profile.gender}</p></div>
                <button className="cat-avatar-button" type="button" onClick={openProfileEditor}><img src={profile.avatar} alt={`${profile.name}的头像`} /><span>✎</span></button>
              </header>
              <div className="cat-profile-tools">
                <button className="cat-butler" type="button" onClick={() => notify("喵管家正在整理今日任务")} aria-label="打开喵管家"><img src="/cat-manager/butler.png" alt="" /></button>
                <div className="cat-overview-card"><strong>今日概览</strong><div><span><b>良好</b><small>健康</small></span><span><b>28天</b><small>猫粮</small></span><span><b>{latestWeight ? `${latestWeight.toFixed(2)}kg` : "--"}</b><small>体重</small></span></div></div>
              </div>
            </div>
            <div className="cat-page-content">
              <article className="cat-task-card">
                <header><div><small>今日待办</small><strong>{activeMedicine ? "按时完成用药" : "按时完成照护"}</strong></div><span>{activeMedicine ? "1项" : "0项"}</span></header>
                {activeMedicine ? <button type="button" onClick={() => setActiveTab("medicine")}><img src="/cat-manager/pill.svg" alt="" /><span><b>{activeMedicine.name} · {activeMedicine.medicine}</b><small>{activeMedicine.usage}</small></span><i>打卡</i></button> : <button type="button" onClick={() => notify("今天没有待完成的用药计划")}><img src="/cat-manager/shield.svg" alt="" /><span><b>今日照护已完成</b><small>继续保持规律记录</small></span><i>查看</i></button>}
              </article>
              <article className="cat-health-card"><header><strong>健康状况</strong><span>{activeMedicine ? "治疗中 ●" : "状态良好 ●"}</span></header><div className="cat-health-tags"><span>{profile.neutered ? "已绝育" : "未绝育"}</span><span>上次驱虫 11天</span><span>疫苗正常</span></div></article>
              <article className="cat-record-card">
                <header><strong>健康记录</strong><button className="cat-date-button" type="button" onClick={openCalendar}><img src="/cat-manager/calendar.svg" alt="" />{dateLabel}</button></header>
                {(Object.keys(recordOptions) as Array<keyof typeof recordOptions>).map((key) => <div className="cat-record-row" key={key}><span className="cat-record-label"><img src={recordMeta[key].icon} alt="" />{recordMeta[key].label}</span><div>{recordOptions[key].map((option) => <button className={records[key] === option ? "is-selected" : ""} type="button" key={option} onClick={() => setRecords((current) => ({ ...current, [key]: option }))}>{option}</button>)}</div></div>)}
                <button className={`cat-abnormal-button ${abnormalRecords[selectedDate] ? "has-record" : ""}`} type="button" onClick={openAbnormalEditor}>其他异常记录 {abnormalRecords[selectedDate] && <i>已记录</i>}<span>›</span></button>
              </article>
              <article className="cat-weight-card">
                <header><strong>体重记录</strong><button type="button" onClick={openWeightEditor}>＋</button></header>
                <div className="cat-weight-chart" aria-label="体重趋势图">{chartWeights.map((item, index) => <span key={item.id} title={item.date} style={{ left: `${8 + index * (84 / Math.max(1, chartWeights.length - 1))}%`, bottom: `${24 + ((item.weight - minWeight) / (maxWeight - minWeight)) * 44}%` }}>{item.weight.toFixed(2)}</span>)}<i /></div>
              </article>
            </div>
          </section>
        )}

        {activeTab === "inventory" && (
          <section className="cat-app-page cat-inventory-page" aria-label="喵囤囤">
            <header className="cat-subpage-header"><img src={profile.avatar} alt={profile.name} /><div><strong>{profile.name}的食物柜</strong><small>共 {inventory.reduce((sum, item) => sum + item.qty, 0)} 件库存 · {restockCount} 件需要处理</small></div></header>
            <div className="cat-inventory-summary"><header><strong>库存提醒</strong><span>{restockCount}件待处理</span></header><div><span><b>0</b><small>临期/过期</small></span><span><b>{restockCount}</b><small>需要补货</small></span><span><b>{pendingTagCount}</b><small>待尝试</small></span></div></div>
            <div className="cat-page-content">
              <button className="cat-current-food" type="button" onClick={() => notify("已打开剩余日期计算器")}><img src="/cat-manager/soup.svg" alt="" /><span><small>当前猫粮</small><strong>皇家幼猫粮</strong><i>预计还可食用 28 天</i></span><b>调整</b></button>
              <div className="cat-list-heading"><strong>囤货清单</strong><button type="button" onClick={() => openInventoryEditor()}>＋</button></div>
              <div className="cat-search-row"><span>搜索名称、品牌</span><button type="button">筛选</button><button type="button">排序</button></div>
              <div className="cat-inventory-list">{inventory.map((item) => <div className="cat-inventory-item" key={item.id} role="button" tabIndex={0} onClick={() => openInventoryEditor(item)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") openInventoryEditor(item); }}><img src={item.image} alt={item.name} /><div><strong>{item.name}</strong><small>{item.category} · {item.tag}</small><span>库存 {item.qty}{item.unit}{item.restockReminder && <em className="cat-restock-badge">补货提醒</em>}</span></div><div className="cat-stepper"><button type="button" onClick={(event) => stopStep(event, item.id, -1)}>−</button><b>{item.qty}</b><button type="button" onClick={(event) => stopStep(event, item.id, 1)}>＋</button></div></div>)}</div>
            </div>
          </section>
        )}

        {activeTab === "medicine" && (
          <section className="cat-app-page cat-medicine-page" aria-label="喵药箱">
            <header className="cat-subpage-header"><img src={profile.avatar} alt={profile.name} /><div><strong>{profile.name}的喵药箱</strong><small>防护与用药记录</small></div></header>
            <div className="cat-protection-grid"><article><img src="/cat-manager/protect-deworm.png" alt="" /><span><small>体外驱虫</small><strong>还有 7 天</strong><i>下次 2026-06-08</i></span></article><article><img src="/cat-manager/protect-vaccine.png" alt="" /><span><small>疫苗</small><strong>还有 28 天</strong><i>下次 2026-06-29</i></span></article></div>
            <div className="cat-page-content">
              <div className="cat-list-heading"><strong>用药计划</strong><button type="button" onClick={openMedicineEditor}>＋</button></div>
              <div className="cat-med-list">{medicinePlans.map((plan) => <article className="cat-med-card" key={plan.id}><header><img src="/cat-manager/pill.svg" alt="" /><div><strong>{plan.name}</strong><small>{plan.medicine} · {plan.usage}</small></div><span>{plan.done >= plan.total ? "已完成" : "进行中"}</span></header><div className="cat-med-progress"><span style={{ width: `${Math.min(100, plan.done / plan.total * 100)}%` }} /></div><p>进度 {plan.done}/{plan.total} 次 <b>{Math.round(plan.done / plan.total * 100)}%</b></p><button type="button" disabled={plan.done >= plan.total} onClick={() => { setMedicinePlans((items) => items.map((item) => item.id === plan.id ? { ...item, done: Math.min(item.total, item.done + 1) } : item)); notify("今日用药已打卡"); }}>{plan.done >= plan.total ? "疗程已完成" : "今日打卡 +1"}</button></article>)}</div>
              <article className="cat-med-tip"><img src="/cat-manager/heart-pulse.svg" alt="" /><span><strong>档案页同步提醒</strong><small>{activeMedicine ? `${activeMedicine.medicine}：${activeMedicine.usage}` : "当前没有待完成的用药计划。"}</small></span></article>
            </div>
          </section>
        )}

        {activeTab === "album" && (
          <section className="cat-app-page cat-album-page" aria-label="喵相册">
            <div className="cat-album-top"><button type="button" onClick={openProfileEditor}><img src={profile.avatar} alt={profile.name} /><span>✎</span></button><article><small>去年今日</small><strong>还没有去年的回忆哦</strong></article></div>
            <button className="cat-add-photo" type="button" onClick={openAlbumEditor}>＋ 添加照片</button>
            <div className="cat-album-timeline"><aside><strong>{albumItems[0]?.date.slice(0, 4) || "2026"}</strong><span>MEMORY</span><span>DAILY</span></aside><div>{albumItems.map((item) => <article key={item.id}><img src={item.image} alt={item.caption || `${profile.name}的照片`} /><span><b>{new Date(`${item.date}T00:00:00`).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</b><small>{item.date.replaceAll("-", "/")}<br />{item.caption || "一条新的成长记录"}</small></span></article>)}</div></div>
          </section>
        )}
      </div>

      <nav className="cat-tab-bar" aria-label="小程序页面切换">{tabs.map((tab) => <button className={activeTab === tab.key ? "is-active" : ""} type="button" key={tab.key} onClick={() => setActiveTab(tab.key)}><img src={`/cat-manager/tab-${tab.icon}${activeTab === tab.key ? "-active" : ""}.png`} alt="" /><span>{tab.label}</span></button>)}</nav>

      {modal && (
        <div className="cat-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setModal(null); }}>
          <section className="cat-modal" role="dialog" aria-modal="true">
            <header className="cat-modal-header"><div><small>CAT MANAGER</small><strong>{modalTitle}</strong></div><button type="button" onClick={() => setModal(null)} aria-label="关闭">×</button></header>
            {modal === "profile" && <form className="cat-edit-form" onSubmit={saveProfile}><label className="cat-upload-field"><span>猫咪头像</span><img className="cat-upload-preview is-avatar" src={profileDraft.avatar} alt="头像预览" /><input type="file" accept="image/*" onChange={(event) => handleImage(event, "profile")} /><i>选择新照片</i></label><label>名字<input value={profileDraft.name} onChange={(event) => setProfileDraft({ ...profileDraft, name: event.target.value })} required /></label><label>生日<input type="date" value={profileDraft.birthday} onChange={(event) => setProfileDraft({ ...profileDraft, birthday: event.target.value })} required /></label><div className="cat-form-grid"><label>性别<select value={profileDraft.gender} onChange={(event) => setProfileDraft({ ...profileDraft, gender: event.target.value })}><option>妹妹</option><option>弟弟</option></select></label><label>品种<input value={profileDraft.breed} onChange={(event) => setProfileDraft({ ...profileDraft, breed: event.target.value })} /></label></div><label className="cat-check-row"><input type="checkbox" checked={profileDraft.neutered} onChange={(event) => setProfileDraft({ ...profileDraft, neutered: event.target.checked })} /><span>已绝育</span></label><button className="cat-save-button" type="submit">保存档案</button></form>}

            {modal === "calendar" && <div className="cat-calendar-panel"><div className="cat-calendar-month"><button type="button" onClick={() => shiftMonth(-1)}>‹</button><strong>{calendarYear}年 {calendarMonthNumber}月</strong><button type="button" onClick={() => shiftMonth(1)}>›</button></div><div className="cat-calendar-grid cat-calendar-week"><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span><span>日</span></div><div className="cat-calendar-grid">{calendarDays.map((day, index) => day ? (() => { const date = `${calendarMonth}-${String(day).padStart(2, "0")}`; return <button className={`${selectedDate === date ? "is-selected" : ""} ${abnormalRecords[date] ? "has-note" : ""}`} type="button" key={date} onClick={() => { setSelectedDate(date); setModal(null); }}>{day}</button>; })() : <span key={`empty-${index}`} />)}</div><p>使用左右箭头切换月份；有圆点的日期包含异常记录。</p></div>}

            {modal === "abnormal" && <form className="cat-edit-form" onSubmit={saveAbnormalRecord}><p className="cat-modal-date">记录日期 <b>{dateLabel}</b></p><label>异常情况<textarea value={abnormalDraft} onChange={(event) => setAbnormalDraft(event.target.value)} placeholder="例如：上午轻微呕吐一次，精神状态正常，已减少零食并持续观察。" rows={5} /></label><button className="cat-save-button" type="submit">保存记录</button></form>}

            {modal === "weight" && <form className="cat-edit-form" onSubmit={saveWeight}><label>记录日期<input type="date" value={weightDraft.date} onChange={(event) => setWeightDraft({ ...weightDraft, date: event.target.value })} required /></label><label>体重（kg）<input type="number" min="0.1" max="30" step="0.01" inputMode="decimal" value={weightDraft.weight} onChange={(event) => setWeightDraft({ ...weightDraft, weight: event.target.value })} placeholder="例如 1.85" required /></label><button className="cat-save-button" type="submit">保存体重记录</button></form>}

            {modal === "inventory" && <form className="cat-edit-form" onSubmit={saveInventoryItem}><label>物品名称<input value={editingItem.name} onChange={(event) => setEditingItem({ ...editingItem, name: event.target.value })} placeholder="输入品牌或物品名" required /></label><div className="cat-form-grid"><label>分类<select value={editingItem.category} onChange={(event) => setEditingItem({ ...editingItem, category: event.target.value })}><option>猫粮</option><option>罐头</option><option>猫砂</option><option>零食</option><option>药品</option></select></label><label>喜爱标签<select value={editingItem.tag} onChange={(event) => setEditingItem({ ...editingItem, tag: event.target.value as InventoryItem["tag"] })}><option>爱吃</option><option>不爱吃</option><option>未知</option></select></label><label>数量<input type="number" min="0" value={editingItem.qty} onChange={(event) => setEditingItem({ ...editingItem, qty: Number(event.target.value) })} /></label><label>单位<input value={editingItem.unit} onChange={(event) => setEditingItem({ ...editingItem, unit: event.target.value })} /></label></div><label className="cat-check-row"><input type="checkbox" checked={editingItem.restockReminder} onChange={(event) => setEditingItem({ ...editingItem, restockReminder: event.target.checked })} /><span>需要提醒补货</span></label><div className="cat-modal-actions">{inventory.some((item) => item.id === editingItem.id) && <button className="cat-delete-button" type="button" onClick={() => { setInventory((items) => items.filter((item) => item.id !== editingItem.id)); setModal(null); notify("物品已删除"); }}>删除</button>}<button className="cat-save-button" type="submit">保存物品</button></div></form>}

            {modal === "medicine" && <form className="cat-edit-form" onSubmit={saveMedicine}><label>计划名称<input value={medicineDraft.name} onChange={(event) => setMedicineDraft({ ...medicineDraft, name: event.target.value })} placeholder="例如：耳螨治疗" required /></label><label>吃什么药<input value={medicineDraft.medicine} onChange={(event) => setMedicineDraft({ ...medicineDraft, medicine: event.target.value })} placeholder="药品名称" required /></label><label>怎么使用<textarea value={medicineDraft.usage} onChange={(event) => setMedicineDraft({ ...medicineDraft, usage: event.target.value })} placeholder="例如：每日早晚各 1 次，每次 2 滴" rows={3} required /></label><label>计划总次数<input type="number" min="1" value={medicineDraft.total} onChange={(event) => setMedicineDraft({ ...medicineDraft, total: event.target.value })} required /></label><button className="cat-save-button" type="submit">创建计划并同步提醒</button></form>}

            {modal === "album" && <form className="cat-edit-form" onSubmit={saveAlbum}><label className="cat-upload-field"><span>选择照片</span>{albumDraft.image ? <img className="cat-upload-preview" src={albumDraft.image} alt="相册照片预览" /> : <b className="cat-upload-placeholder">＋</b>}<input type="file" accept="image/*" onChange={(event) => handleImage(event, "album")} /><i>{albumDraft.image ? "更换照片" : "从设备选择"}</i></label><label>拍摄日期<input type="date" value={albumDraft.date} onChange={(event) => setAlbumDraft({ ...albumDraft, date: event.target.value })} required /></label><label>照片说明<input value={albumDraft.caption} onChange={(event) => setAlbumDraft({ ...albumDraft, caption: event.target.value })} placeholder="记录这一刻发生了什么" /></label><button className="cat-save-button" type="submit">加入喵相册</button></form>}
          </section>
        </div>
      )}
      {toast && <div className="cat-app-toast" role="status">{toast}</div>}
    </div>
  );
}
