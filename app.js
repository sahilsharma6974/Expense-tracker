const LEGACY_STORAGE_KEY = 'expense-tracker:v1'; // data saved in the browser before login existed
const PREFS_KEY = 'expense-tracker:prefs';

// Line icons (24×24, stroke-based)
const ICONS = {
  wallet: '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
  grid: '<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
  arrows: '<path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/>',
  chart: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  chevL: '<path d="m15 18-6-6 6-6"/>',
  chevR: '<path d="m9 18 6-6-6-6"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  arrowIn: '<path d="M17 7 7 17"/><path d="M17 17H7V7"/>',
  arrowOut: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  trending: '<path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
  utensils: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
  cart: '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
  car: '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',
  fuel: '<path d="M3 22h12"/><path d="M4 9h10"/><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0V9.83a2 2 0 0 0-.59-1.42L18 5"/>',
  home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
  zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
  bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  ticket: '<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/>',
  music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  plane: '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
  book: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>',
  dots: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
  briefcase: '<rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  laptop: '<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>',
  store: '<path d="M3 9h18l-1.5-5h-15z"/><path d="M5 9v11h14V9"/><path d="M10 20v-6h4v6"/>',
  gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C10 3 12 8 12 8s2-5 4.5-5a2.5 2.5 0 0 1 0 5"/>',
  banknote: '<rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
  phone: '<rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/>',
  card: '<rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/>',
  bank: '<path d="M3 22h18"/><path d="M6 18v-7"/><path d="M10 18v-7"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="m12 2 8 5H4z"/>',
};

function icon(name) {
  return `<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.dots}</svg>`;
}

const CATEGORIES = {
  expense: {
    'Food & dining': { icon: 'utensils', color: '#d9902f' },
    'Groceries': { icon: 'cart', color: '#7f9a2b' },
    'Transport': { icon: 'car', color: '#6b5fd3' },
    'Fuel': { icon: 'fuel', color: '#c4622d' },
    'Home & rent': { icon: 'home', color: '#2e8b4f' },
    'Bills & recharge': { icon: 'zap', color: '#2a8fb3' },
    'Shopping': { icon: 'bag', color: '#c2477a' },
    'Health': { icon: 'heart', color: '#c8433b' },
    'Entertainment': { icon: 'ticket', color: '#9a5bd1' },
    'Subscriptions': { icon: 'music', color: '#4f6bd6' },
    'Travel': { icon: 'plane', color: '#3b8fd1' },
    'Education': { icon: 'book', color: '#8a6d3b' },
    'Money sent': { icon: 'arrowOut', color: '#b5562f' },
    'Other': { icon: 'dots', color: '#7b867f' },
  },
  income: {
    'Salary': { icon: 'briefcase', color: '#2e8b4f' },
    'Freelance': { icon: 'laptop', color: '#2a8fb3' },
    'Business': { icon: 'store', color: '#6b5fd3' },
    'Investments': { icon: 'trending', color: '#d9902f' },
    'Gift': { icon: 'gift', color: '#c2477a' },
    'Money back': { icon: 'arrowIn', color: '#2a8f8a' }, // your own money returned; reduces spending, not income
    'Other': { icon: 'dots', color: '#7b867f' },
  },
};

const PAYMENT_MODES = {
  'Cash': { icon: 'banknote', color: '#2e8b4f' },
  'Google Pay': { icon: 'phone', color: '#3b78d8' },
  'PhonePe': { icon: 'phone', color: '#6b46b5' },
  'Paytm': { icon: 'phone', color: '#1c9bd1' },
  'Other UPI': { icon: 'phone', color: '#d9902f' },
  'Debit card': { icon: 'card', color: '#4b6584' },
  'Credit card': { icon: 'card', color: '#c2477a' },
  'Net banking': { icon: 'bank', color: '#2a8f8a' },
  'Bank transfer': { icon: 'arrows', color: '#5f6e65' },
};
const DEFAULT_MODE = 'Cash';
const MONEY_BACK = 'Money back';

// What kind of money movement an entry is, shown as its own column (like the sheet's Category column)
const FLOWS = {
  Received: { color: '#2e8b4f', icon: 'arrowIn' },
  Sent: { color: '#b5562f', icon: 'arrowOut' },
  Spent: { color: '#c8433b', icon: 'banknote' },
  Purchased: { color: '#3b6fd1', icon: 'bag' },
};
const PURCHASE_CATEGORIES = ['Shopping', 'Groceries', 'Subscriptions', 'Bills & recharge', 'Home & rent', 'Education', 'Entertainment'];

// People: "Money sent" and "Money back" entries, keyed by the person in the description.
// "Lunch (Manish Bhai)" counts for Manish Bhai.
const PEOPLE_CATEGORIES = ['Money sent', MONEY_BACK];

function personOf(t) {
  if (!PEOPLE_CATEGORIES.includes(t.category)) return null;
  const inBrackets = t.description.match(/\(([^)]+)\)\s*$/);
  const name = (inBrackets ? inBrackets[1] : t.description).trim().replace(/\s+/g, ' ');
  return name || null;
}

function buildPeople() {
  const people = new Map();
  [...state.transactions]
    .sort((a, b) => a.date.localeCompare(b.date) || a.createdAt - b.createdAt)
    .forEach((t) => {
      const name = personOf(t);
      if (!name) return;
      const key = name.toLowerCase();
      if (!people.has(key)) people.set(key, { key, name, sent: 0, back: 0, entries: [], last: t.date });
      const p = people.get(key);
      p.name = name; // latest spelling wins
      p.last = t.date;
      p.entries.push(t);
      if (t.type === 'expense') p.sent += t.amount;
      else p.back += t.amount;
    });
  return [...people.values()].map((p) => ({ ...p, pending: Math.round((p.sent - p.back) * 100) / 100 }));
}

function pendingPill(pending) {
  if (pending > 0) return `<span class="flow-pill" style="--f:${FLOWS.Received.color}">Gets back ${formatMoney(pending)}</span>`;
  if (pending < 0) return `<span class="flow-pill" style="--f:${FLOWS.Spent.color}">You owe ${formatMoney(-pending)}</span>`;
  return '<span class="flow-pill" style="--f:#7b867f">Settled</span>';
}

function initials(name) {
  return name.split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
}

function renderPeople() {
  const people = buildPeople();
  const owed = people.filter((p) => p.pending > 0);
  const owe = people.filter((p) => p.pending < 0);
  animateMoney($('peopleOwed'), sum(owed.map((p) => ({ amount: p.pending }))));
  animateMoney($('peopleOwe'), sum(owe.map((p) => ({ amount: -p.pending }))));
  $('peopleOwedSub').textContent = owed.length ? `From ${owed.length} ${owed.length === 1 ? 'person' : 'people'}` : 'Nobody owes you right now';
  $('peopleOweSub').textContent = owe.length ? `To ${owe.length} ${owe.length === 1 ? 'person' : 'people'}` : "You don't owe anyone";
  $('peopleCount').textContent = people.length;
  const settled = people.filter((p) => p.pending === 0).length;
  $('peopleCountSub').textContent = `${settled} settled`;

  $('peopleList').innerHTML = people.map((p) => `<option value="${escapeHtml(p.name)}">`).join('');

  const q = $('peopleSearch').value.trim().toLowerCase();
  const rows = people
    .filter((p) => !q || p.key.includes(q))
    .sort((a, b) => b.pending - a.pending || b.last.localeCompare(a.last));

  if (!people.length) {
    $('peopleTable').innerHTML = `<div class="empty"><p>No people yet. Add an entry with the <strong>Money sent</strong> or <strong>Money back</strong> category and the person's name.</p><button type="button" class="btn btn-primary btn-sm" data-send-money>${icon('arrowOut')}Send money</button></div>`;
  } else if (!rows.length) {
    $('peopleTable').innerHTML = '<div class="empty"><p>No one matches your search.</p></div>';
  } else {
    $('peopleTable').innerHTML = '<div class="tx-row person-row tx-head"><span>Person</span><span>Sent</span><span>Got back</span><span>Pending</span></div>' +
      rows.map((p) => `<div class="tx-row person-row tx-item ${p.key === selectedPerson ? 'selected' : ''}" data-person="${escapeHtml(p.key)}" role="button" tabindex="0" aria-label="Open ${escapeHtml(p.name)}">
        <div class="tx-name">
          <span class="person-avatar">${escapeHtml(initials(p.name))}</span>
          <div><strong>${escapeHtml(p.name)}</strong><small>Last: ${shortDate(p.last)}<span class="tx-sub">Sent ${formatMoney(p.sent)}, got back ${formatMoney(p.back)}</span></small></div>
        </div>
        <span class="tx-num">${formatMoney(p.sent)}</span>
        <span class="tx-num">${formatMoney(p.back)}</span>
        <span class="tx-amt">${pendingPill(p.pending)}</span>
      </div>`).join('');
  }

  if (!people.some((p) => p.key === selectedPerson)) selectedPerson = rows[0] ? rows[0].key : null;
  document.querySelectorAll('[data-person]').forEach((el) => el.classList.toggle('selected', el.dataset.person === selectedPerson));
  renderPersonDetail(people.find((p) => p.key === selectedPerson));
}

function renderPersonDetail(p) {
  const el = $('personDetail');
  if (!p) {
    el.innerHTML = '<div class="empty"><p>Select a person to see every amount you sent and got back.</p></div>';
    return;
  }
  const status = p.pending > 0
    ? `<strong>${escapeHtml(p.name)}</strong> still has to return <strong class="pos">${formatMoney(p.pending)}</strong>.`
    : p.pending < 0
      ? `You got back <strong class="neg">${formatMoney(-p.pending)}</strong> more than you sent to <strong>${escapeHtml(p.name)}</strong>.`
      : `All settled with <strong>${escapeHtml(p.name)}</strong>.`;
  el.innerHTML = `
    <div class="person-head">
      <span class="person-avatar big">${escapeHtml(initials(p.name))}</span>
      <div><h2>${escapeHtml(p.name)}</h2><p class="card-sub">${p.entries.length} ${p.entries.length === 1 ? 'entry' : 'entries'}, all months</p></div>
    </div>
    <p class="person-status">${status}</p>
    <div class="person-totals">
      <div><small>Sent</small><strong>${formatMoney(p.sent)}</strong></div>
      <div><small>Got back</small><strong>${formatMoney(p.back)}</strong></div>
      <div><small>Pending</small><strong>${formatMoney(Math.abs(p.pending))}</strong></div>
    </div>
    <div class="person-actions">
      <button type="button" class="btn btn-primary btn-sm" data-person-back="${escapeHtml(p.name)}">${icon('arrowIn')}Record money back</button>
      <button type="button" class="btn btn-outline btn-sm" data-person-send="${escapeHtml(p.name)}">${icon('arrowOut')}Send money</button>
    </div>
    <ul class="person-timeline">
      ${[...p.entries].reverse().map((t) => `<li class="tx-item" data-id="${t.id}" role="button" tabindex="0" aria-label="Edit entry">
        <span class="flow-icon" style="--f:${t.type === 'expense' ? FLOWS.Sent.color : FLOWS.Received.color}">${icon(t.type === 'expense' ? 'arrowOut' : 'arrowIn')}</span>
        <span class="pt-main"><strong>${t.type === 'expense' ? 'Sent' : 'Got back'}</strong><small>${shortDate(t.date)} ${t.date.slice(0, 4)}, ${escapeHtml(t.mode)}${t.description.toLowerCase() !== p.key ? `, ${escapeHtml(t.description)}` : ''}</small></span>
        <span class="tx-amt ${t.type}">${t.type === 'expense' ? '−' : '+'}${formatMoney(t.amount)}</span>
      </li>`).join('')}
    </ul>`;
}

function flowOf(t) {
  if (t.type === 'income') return 'Received';
  if (t.category === 'Money sent') return 'Sent';
  return PURCHASE_CATEGORIES.includes(t.category) ? 'Purchased' : 'Spent';
}

// Older category / mode names → current names
const RENAMES = {
  'Money received': 'Money back',
  'Food': 'Food & dining', 'Rent': 'Home & rent', 'Bills & Utilities': 'Bills & recharge', 'Bills & Recharge': 'Bills & recharge',
  'Debit Card': 'Debit card', 'Credit Card': 'Credit card', 'Net Banking': 'Net banking', 'Bank Transfer': 'Bank transfer',
};

const VIEWS = {
  overview: { title: 'Monthly overview', sub: 'A clearer picture of what came in and where it went.' },
  people: { title: 'People', sub: 'Money you sent to people, what came back, and what is still pending.' },
  transactions: { title: 'Transactions', sub: 'Every entry for the month, searchable and filterable.' },
  insights: { title: 'Insights', sub: 'How you paid, where it went, and how close you are to your budget.' },
};

const $ = (id) => document.getElementById(id);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const prefs = loadPrefs();
const state = { transactions: [], budgets: {} };

let db = null;
let user = null;
let currentMonth = todayISO().slice(0, 7);
let currentView = 'overview';
let selectedPerson = null; // lower-cased person key on the People page
let editingId = null;
let lastSavedId = null;
let toastTimer = null;
let undoAction = null;

function loadPrefs() {
  const defaults = { lastMode: DEFAULT_MODE };
  try {
    return { ...defaults, ...JSON.parse(localStorage.getItem(PREFS_KEY)) };
  } catch (e) {
    return defaults;
  }
}

function savePrefs() {
  try { localStorage.setItem(PREFS_KEY, JSON.stringify(prefs)); } catch (e) { /* private mode */ }
}

// Helpers

const money = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 2, maximumFractionDigits: 2 });
function formatMoney(n) {
  return money.format(n);
}

function toISO(d) {
  const local = new Date(d);
  local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
  return local.toISOString().slice(0, 10);
}

function todayISO() {
  return toISO(new Date());
}

function shiftMonth(month, delta) {
  const [y, m] = month.split('-').map(Number);
  const d = new Date(y, m - 1 + delta, 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

function monthName(month) {
  const [y, m] = month.split('-').map(Number);
  return new Date(y, m - 1, 1).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
}

function shortDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
}

function categoryInfo(type, name) {
  return (CATEGORIES[type] && CATEGORIES[type][name]) || { icon: 'dots', color: '#7b867f' };
}

function modeInfo(name) {
  return PAYMENT_MODES[name] || { icon: 'dots', color: '#7b867f' };
}

function sum(list) {
  return list.reduce((s, t) => s + t.amount, 0);
}

function countLabel(n, word) {
  return `${n} ${word} ${n === 1 ? 'entry' : 'entries'}`;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}

function fillIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach((el) => {
    if (!el.firstElementChild) el.innerHTML = icon(el.dataset.icon);
  });
}

// Counts a number up/down to its new value so changes are noticeable
function animateMoney(el, to) {
  const from = el._value ?? to;
  el._value = to;
  if (reduceMotion || from === to) {
    el.textContent = formatMoney(to);
    return;
  }
  const duration = 450;
  let start = null;
  cancelAnimationFrame(el._raf);
  const step = (now) => {
    if (start === null) start = now;
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = formatMoney(p < 1 ? from + (to - from) * eased : to);
    if (p < 1) el._raf = requestAnimationFrame(step);
  };
  el._raf = requestAnimationFrame(step);
  // Guarantee the final value even if animation frames are throttled (e.g. background tab)
  clearTimeout(el._done);
  el._done = setTimeout(() => {
    cancelAnimationFrame(el._raf);
    el.textContent = formatMoney(el._value);
  }, duration + 100);
}

// Data layer (Supabase)

const TX_COLUMNS = 'id, type, amount, description, category, mode, date, created_at';

function fromRow(r) {
  return {
    id: r.id,
    type: r.type,
    amount: Number(r.amount),
    description: r.description,
    category: RENAMES[r.category] || r.category,
    mode: RENAMES[r.mode] || r.mode || DEFAULT_MODE,
    date: r.date,
    createdAt: Date.parse(r.created_at),
  };
}

async function loadUserData() {
  const [txRes, budgetRes] = await Promise.all([
    db.from('transactions').select(TX_COLUMNS).order('date', { ascending: false }),
    db.from('budgets').select('month, amount'),
  ]);
  if (txRes.error) throw txRes.error;
  if (budgetRes.error) throw budgetRes.error;
  state.transactions = txRes.data.map(fromRow);
  state.budgets = Object.fromEntries(budgetRes.data.map((b) => [b.month, Number(b.amount)]));
}

async function insertTransaction(data) {
  const { data: row, error } = await db.from('transactions')
    .insert({ ...data, user_id: user.id })
    .select(TX_COLUMNS)
    .single();
  if (error) throw error;
  return fromRow(row);
}

async function updateTransaction(id, data) {
  const { data: row, error } = await db.from('transactions')
    .update(data)
    .eq('id', id)
    .select(TX_COLUMNS)
    .single();
  if (error) throw error;
  return fromRow(row);
}

async function deleteTransaction(id) {
  const { error } = await db.from('transactions').delete().eq('id', id);
  if (error) throw error;
}

async function restoreTransaction(t) {
  const { error } = await db.from('transactions').insert({
    id: t.id, user_id: user.id, type: t.type, amount: t.amount, description: t.description,
    category: t.category, mode: t.mode, date: t.date, created_at: new Date(t.createdAt).toISOString(),
  });
  if (error) throw error;
}

async function saveBudget(month, amount) {
  const { error } = amount > 0
    ? await db.from('budgets').upsert({ user_id: user.id, month, amount }, { onConflict: 'user_id,month' })
    : await db.from('budgets').delete().eq('month', month);
  if (error) throw error;
}

function friendlyError(error) {
  const msg = (error && error.message) || String(error);
  if (/fetch|network/i.test(msg)) return 'Could not reach the server. Check your internet connection and try again.';
  if (/does not exist|Could not find the table/i.test(msg)) return 'Database tables are missing. Run supabase/schema.sql in the Supabase SQL Editor.';
  return msg;
}

// Views

function setView(view) {
  currentView = VIEWS[view] ? view : 'overview';
  document.querySelectorAll('.view').forEach((el) => { el.hidden = el.dataset.view !== currentView; });
  document.querySelectorAll('.nav a, .tabbar a').forEach((a) => {
    const active = a.dataset.view === currentView;
    a.classList.toggle('active', active);
    if (active) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
  document.querySelector('.main').dataset.view = currentView;
  $('pageTitle').textContent = VIEWS[currentView].title;
  $('pageSub').textContent = VIEWS[currentView].sub;
}

// Rendering

function monthTransactions() {
  return state.transactions.filter((t) => t.date.startsWith(currentMonth));
}

function render({ bump = false } = {}) {
  const txs = monthTransactions();
  // Money coming back (repayments, refunds) offsets spending instead of counting as income
  const moneyBack = txs.filter((t) => t.type === 'income' && t.category === MONEY_BACK);
  const incomes = txs.filter((t) => t.type === 'income' && t.category !== MONEY_BACK);
  const expenses = txs.filter((t) => t.type === 'expense');
  const backTotal = sum(moneyBack);
  const income = sum(incomes);
  const expense = sum(expenses) - backTotal;
  const remaining = income - expense;
  const month = monthName(currentMonth);

  $('monthLabel').textContent = month;

  animateMoney($('balance'), remaining);
  animateMoney($('totalIncome'), income);
  animateMoney($('totalExpense'), expense);
  $('balanceSub').textContent = `Income less spending for ${month}`;
  $('incomeSub').textContent = countLabel(incomes.length, 'income');
  $('expenseSub').textContent = countLabel(expenses.length, 'expense') + (backTotal ? `, ${formatMoney(backTotal)} back` : '');
  document.querySelector('.stat-remaining').classList.toggle('negative', remaining < 0);

  if (bump) {
    document.querySelectorAll('.stat').forEach((el) => {
      el.classList.remove('bump');
      void el.offsetWidth; // restart animation
      el.classList.add('bump');
    });
  }

  // Income kept / cash flow
  const spentPct = income > 0 ? Math.round((expense / income) * 100) : 0;
  const keptPct = income > 0 ? Math.max(0, 100 - spentPct) : 0;
  $('keptPct').textContent = `${keptPct}%`;
  $('keptBar').style.width = `${keptPct}%`;
  $('keptNote').textContent = income > 0
    ? remaining >= 0
      ? `You have ${formatMoney(remaining)} left from this month's income.`
      : `You've spent ${formatMoney(-remaining)} more than you earned this month.`
    : 'Add your income for this month to see how much you keep.';
  $('spentPct').textContent = income > 0 ? `${spentPct}%` : '–';
  $('spentBar').style.width = `${Math.min(spentPct, 100)}%`;

  // Breakdowns
  const catBars = groupBars(expenses, (t) => t.category, (k) => categoryInfo('expense', k), 'No spending recorded this month.');
  $('ovCategories').innerHTML = catBars;
  $('inCategories').innerHTML = catBars;
  $('inModes').innerHTML = groupBars(expenses, (t) => t.mode, modeInfo, 'Add an expense to see how you paid.');
  $('inIncome').innerHTML = groupBars(incomes, (t) => t.category, (k) => categoryInfo('income', k), 'No income recorded this month.');

  renderFlows(txs);
  renderPeople();
  renderBudget(expense);
  renderTables(txs);
}

function groupBars(list, keyFn, infoFn, emptyText) {
  const total = sum(list);
  const groups = {};
  list.forEach((t) => { groups[keyFn(t)] = (groups[keyFn(t)] || 0) + t.amount; });
  const rows = Object.entries(groups).sort((a, b) => b[1] - a[1]);
  if (!rows.length) return `<li><span class="none">${emptyText}</span></li>`;
  return rows.map(([key, amt]) => {
    const info = infoFn(key);
    const pct = (amt / total) * 100;
    return `<li style="--c:${info.color}">
      <span class="b-icon">${icon(info.icon)}</span>
      <span class="b-name">${escapeHtml(key)}</span>
      <span class="b-amt">${formatMoney(amt)}</span>
      <span class="b-line"><span class="b-track"><span style="width:${pct}%"></span></span><span class="b-pct">${Math.round(pct)}%</span></span>
    </li>`;
  }).join('');
}

function renderFlows(txs) {
  $('flowList').innerHTML = Object.entries(FLOWS).map(([name, f]) => {
    const list = txs.filter((t) => flowOf(t) === name);
    const sign = name === 'Received' ? '+' : '−';
    return `<li style="--f:${f.color}">
      <span class="flow-icon">${icon(f.icon)}</span>
      <span class="flow-name">${name}<small>${list.length} ${list.length === 1 ? 'entry' : 'entries'}</small></span>
      <strong>${list.length ? sign : ''}${formatMoney(sum(list))}</strong>
    </li>`;
  }).join('');
}

function renderBudget(expense) {
  const budget = state.budgets[currentMonth];
  $('budgetInput').value = budget || '';
  if (!budget) {
    $('budgetView').innerHTML = `<p class="budget-note">No budget set for ${monthName(currentMonth)}. Set one below to track how much you can still spend.</p>`;
    return;
  }
  const left = budget - expense;
  const pct = Math.min((expense / budget) * 100, 100);
  $('budgetView').innerHTML = `
    <p class="budget-big">${formatMoney(Math.abs(left))}</p>
    <p class="budget-note">${left >= 0
      ? `left to spend out of ${formatMoney(budget)}.`
      : `<strong class="over">over your ${formatMoney(budget)} budget.</strong>`}</p>
    <div class="track ${pct >= 100 ? 'red' : ''}"><span style="width:${pct}%"></span></div>`;
}

function filterRows(txs, { q, type, category, mode }) {
  q = (q || '').trim().toLowerCase();
  return txs
    .filter((t) => !type || flowOf(t) === type)
    .filter((t) => !category || t.category === category)
    .filter((t) => !mode || t.mode === mode)
    .filter((t) => !q || t.description.toLowerCase().includes(q) || t.category.toLowerCase().includes(q) || t.mode.toLowerCase().includes(q))
    .sort((a, b) => b.date.localeCompare(a.date) || b.createdAt - a.createdAt);
}

function renderTables(txs) {
  const ovRows = filterRows(txs, { q: $('ovSearch').value, type: $('ovType').value });
  $('ovTable').innerHTML = tableHtml(ovRows, txs.length);

  const allRows = filterRows(txs, {
    q: $('txSearch').value, type: $('txType').value, category: $('txCategory').value, mode: $('txMode').value,
  });
  $('txTable').innerHTML = tableHtml(allRows, txs.length);

  if (lastSavedId) {
    document.querySelectorAll(`[data-id="${lastSavedId}"]`).forEach((el) => el.classList.add('flash'));
    lastSavedId = null;
  }
}

function tableHtml(rows, monthCount) {
  if (!rows.length) {
    return monthCount
      ? '<div class="empty"><p>No entries match your search.</p></div>'
      : `<div class="empty"><p>No entries for ${monthName(currentMonth)} yet.</p><button type="button" class="btn btn-primary btn-sm" data-add>${icon('plus')}Add your first entry</button></div>`;
  }
  const head = '<div class="tx-row tx-head"><span>Transaction</span><span>Type</span><span>Payment mode</span><span>Date</span><span>Amount</span></div>';
  return head + rows.map((t) => {
    const cat = categoryInfo(t.type, t.category);
    const mode = modeInfo(t.mode);
    const sign = t.type === 'expense' ? '−' : '+';
    const flow = flowOf(t);
    const flowPill = `<span class="flow-pill" style="--f:${FLOWS[flow].color}">${flow}</span>`;
    return `<div class="tx-row tx-item" data-id="${t.id}" role="button" tabindex="0" aria-label="Edit ${escapeHtml(t.description)}">
      <div class="tx-name">
        <span class="tx-icon ${t.type}">${icon(cat.icon)}</span>
        <div>
          <strong>${escapeHtml(t.description)}</strong>
          <small>${escapeHtml(t.category)}<span class="tx-sub">${flowPill} ${escapeHtml(t.mode)}, ${shortDate(t.date)}</span></small>
        </div>
      </div>
      <span class="tx-flow">${flowPill}</span>
      <span class="tx-mode">${icon(mode.icon)}${escapeHtml(t.mode)}</span>
      <span class="tx-date">${shortDate(t.date)}</span>
      <span class="tx-amt ${t.type}">${sign}${formatMoney(t.amount)}</span>
    </div>`;
  }).join('');
}

// Entry dialog

function fillSelect(el, names, selected, allLabel) {
  el.innerHTML = (allLabel ? `<option value="">${allLabel}</option>` : '') +
    names.map((n) => `<option ${n === selected ? 'selected' : ''}>${escapeHtml(n)}</option>`).join('');
}

function selectedType() {
  return document.querySelector('input[name="type"]:checked').value;
}

function syncTypeFields(category) {
  const type = selectedType();
  fillSelect($('category'), Object.keys(CATEGORIES[type]), category);
  $('modeLabel').textContent = type === 'income' ? 'Received via' : 'Payment mode';
  syncPersonField();
}

function syncPersonField() {
  const isPerson = PEOPLE_CATEGORIES.includes($('category').value);
  $('descLabel').textContent = isPerson ? 'Person' : 'Description';
  $('description').placeholder = isPerson ? 'e.g. Happu jiju' : 'e.g. Groceries';
  if (isPerson) $('description').setAttribute('list', 'peopleList');
  else $('description').removeAttribute('list');
}

// preset: values for a new entry, e.g. { type: 'income', description: '…' }
function openEntry(id = null, preset = {}) {
  const t = id ? state.transactions.find((x) => x.id === id) : null;
  editingId = t ? t.id : null;
  $('entryForm').reset();
  $('entryError').hidden = true;
  document.querySelector(`input[name="type"][value="${t ? t.type : preset.type || 'expense'}"]`).checked = true;
  syncTypeFields(t ? t.category : preset.category);
  fillSelect($('mode'), Object.keys(PAYMENT_MODES), t ? t.mode : preset.mode || prefs.lastMode);
  $('description').value = t ? t.description : preset.description || '';
  $('amount').value = t ? t.amount : '';
  $('date').value = t ? t.date : (currentMonth === todayISO().slice(0, 7) ? todayISO() : `${currentMonth}-01`);
  // "Add income" opens an income-only form without the Expense/Income switch
  const incomeOnly = !t && preset.incomeOnly;
  $('typeGroup').hidden = incomeOnly || (!t && preset.lockType);
  $('entryTitle').textContent = t ? 'Edit entry' : preset.title || (incomeOnly ? 'Add income' : 'Add an entry');
  $('entrySub').textContent = preset.sub || (incomeOnly
    ? `Record money you received in ${monthName(currentMonth)}.`
    : 'Capture money in or out, including how it was paid.');
  $('saveEntry').innerHTML = t ? 'Save changes' : `${icon('plus')}${preset.saveLabel || (incomeOnly ? 'Save income' : 'Save entry')}`;
  $('deleteEntry').hidden = !t;
  $('entryDialog').showModal();
  (preset.description ? $('amount') : $('description')).focus();
}

function closeEntry() {
  $('entryDialog').close();
  editingId = null;
}

function showEntryError(text) {
  $('entryError').textContent = text;
  $('entryError').hidden = !text;
}

$('entryForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    type: selectedType(),
    amount: Math.round(parseFloat($('amount').value) * 100) / 100,
    description: $('description').value.trim(),
    category: $('category').value,
    mode: $('mode').value,
    date: $('date').value,
  };
  if (!data.description) return showEntryError('Add a short description, like "Groceries".');
  if (!(data.amount > 0)) return showEntryError('Enter an amount greater than zero.');
  if (!data.date) return showEntryError('Pick a date for this entry.');

  const btn = $('saveEntry');
  const label = btn.innerHTML;
  btn.disabled = true;
  btn.textContent = 'Saving…';
  const wasEditing = Boolean(editingId);
  try {
    if (editingId) {
      const saved = await updateTransaction(editingId, data);
      Object.assign(state.transactions.find((t) => t.id === editingId), saved);
      lastSavedId = editingId;
    } else {
      const saved = await insertTransaction(data);
      state.transactions.push(saved);
      lastSavedId = saved.id;
    }
  } catch (err) {
    showEntryError(friendlyError(err));
    return;
  } finally {
    btn.disabled = false;
    btn.innerHTML = label;
  }
  prefs.lastMode = data.mode;
  savePrefs();
  currentMonth = data.date.slice(0, 7); // jump to the saved entry's month so it's visible
  closeEntry();
  render({ bump: true });
  const what = data.type === 'income' ? 'Income' : 'Expense';
  showToast(wasEditing ? 'Entry updated.' : `${what} of ${formatMoney(data.amount)} saved.`);
});

$('deleteEntry').addEventListener('click', async () => {
  const id = editingId;
  const index = state.transactions.findIndex((t) => t.id === id);
  if (index < 0) return;
  $('deleteEntry').disabled = true;
  try {
    await deleteTransaction(id);
  } catch (err) {
    showEntryError(friendlyError(err));
    return;
  } finally {
    $('deleteEntry').disabled = false;
  }
  const [removed] = state.transactions.splice(index, 1);
  closeEntry();
  render({ bump: true });
  showToast(`Deleted “${removed.description}”.`, async () => {
    try {
      await restoreTransaction(removed);
      state.transactions.push(removed);
      render({ bump: true });
    } catch (err) {
      showToast(friendlyError(err));
    }
  });
});

document.querySelectorAll('input[name="type"]').forEach((r) => r.addEventListener('change', () => syncTypeFields()));
$('closeDialog').addEventListener('click', closeEntry);
$('cancelEntry').addEventListener('click', closeEntry);
$('entryDialog').addEventListener('click', (e) => { if (e.target === $('entryDialog')) closeEntry(); });

function showToast(text, onUndo) {
  clearTimeout(toastTimer);
  undoAction = onUndo || null;
  $('toastText').textContent = text;
  $('toastUndo').hidden = !onUndo;
  $('toast').hidden = false;
  toastTimer = setTimeout(() => { $('toast').hidden = true; undoAction = null; }, 5000);
}

$('toastUndo').addEventListener('click', () => {
  const undo = undoAction;
  undoAction = null;
  $('toast').hidden = true;
  if (undo) undo();
});

function exportCsv() {
  if (!state.transactions.length) {
    showToast('Add an entry before exporting.');
    return;
  }
  const header = ['Date', 'Type', 'Description', 'Category', 'Payment mode', 'Amount'];
  const quote = (v) => `"${String(v).replace(/"/g, '""')}"`;
  const lines = [...state.transactions]
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((t) => [t.date, t.type, t.description, t.category, t.mode, t.amount].map(quote).join(','));
  const blob = new Blob([[header.join(','), ...lines].join('\n')], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `expenses-${todayISO()}.csv`;
  a.click();
  URL.revokeObjectURL(a.href);
  showToast('CSV exported.');
}

// Importing data saved in this browser before login existed

function legacyTransactions() {
  try {
    const legacy = JSON.parse(localStorage.getItem(LEGACY_STORAGE_KEY));
    return legacy && Array.isArray(legacy.transactions) ? legacy.transactions : [];
  } catch (e) {
    return [];
  }
}

function showImportBanner() {
  const n = legacyTransactions().length;
  $('importBanner').hidden = n === 0;
  $('importText').textContent = `This browser has ${n} ${n === 1 ? 'entry' : 'entries'} saved from before you logged in.`;
}

async function importLegacy() {
  const rows = legacyTransactions().map((t) => {
    const type = t.type === 'income' ? 'income' : 'expense';
    const category = RENAMES[t.category] || t.category;
    const mode = RENAMES[t.mode] || t.mode;
    return {
      user_id: user.id,
      type,
      amount: Number(t.amount),
      description: String(t.description || 'Untitled').slice(0, 80),
      category: CATEGORIES[type][category] ? category : 'Other',
      mode: PAYMENT_MODES[mode] ? mode : DEFAULT_MODE,
      date: t.date,
    };
  }).filter((r) => r.amount > 0 && /^\d{4}-\d{2}-\d{2}$/.test(r.date));

  $('importBtn').disabled = true;
  try {
    const { error } = await db.from('transactions').insert(rows);
    if (error) throw error;
    localStorage.removeItem(LEGACY_STORAGE_KEY);
    await loadUserData();
    $('importBanner').hidden = true;
    render({ bump: true });
    showToast(`Imported ${rows.length} ${rows.length === 1 ? 'entry' : 'entries'} to your account.`);
  } catch (err) {
    showToast(friendlyError(err));
  } finally {
    $('importBtn').disabled = false;
  }
}

// Auth: passwordless email one-time code

let authEmail = '';
let resendTimer = null;

// Steps: 'email' (enter address) → 'sent' (click the link in the email) → optional 'code' (type a code)
function setAuthStep(step) {
  const sent = step === 'sent' || step === 'code';
  $('authTitle').textContent = sent ? 'Check your email' : 'Log in or sign up';
  $('authSub').textContent = step === 'code'
    ? `Enter the code from the email we sent to ${authEmail}.`
    : step === 'sent'
      ? `We sent a login link to ${authEmail}. Open the email on this device and click "Sign in". This page will log you in automatically.`
      : "Enter your email and we'll send you a login link. No password needed.";
  $('emailField').hidden = sent;
  $('codeField').hidden = step !== 'code';
  $('authSubmit').hidden = step === 'sent';
  $('authSubmit').textContent = step === 'code' ? 'Verify and continue' : 'Send login link';
  $('codeActions').hidden = !sent;
  $('haveCodeBtn').hidden = step !== 'sent';
  $('authCode').value = '';
  setAuthMessage('');
  if (step === 'code') $('authCode').focus();
  if (step === 'email') $('authEmail').focus();
}

function setAuthMessage(text, ok = false) {
  $('authMsg').textContent = text;
  $('authMsg').classList.toggle('ok', ok);
  $('authMsg').hidden = !text;
}

// Supabase allows one code per email every 60 seconds
function startResendCooldown(seconds = 60) {
  clearInterval(resendTimer);
  let left = seconds;
  const btn = $('resendBtn');
  btn.disabled = true;
  btn.textContent = `Resend email in ${left}s`;
  resendTimer = setInterval(() => {
    left -= 1;
    if (left <= 0) {
      clearInterval(resendTimer);
      btn.disabled = false;
      btn.textContent = 'Resend email';
    } else {
      btn.textContent = `Resend email in ${left}s`;
    }
  }, 1000);
}

async function sendCode(email) {
  const { error } = await db.auth.signInWithOtp({
    email,
    // The default Supabase email contains a sign-in link; it brings the user back here, already logged in
    options: { shouldCreateUser: true, emailRedirectTo: location.origin + location.pathname },
  });
  if (error) throw error;
}

function authErrorMessage(err) {
  const msg = (err && err.message) || '';
  if (/expired|invalid/i.test(msg) && /token|otp/i.test(msg)) return 'That code is wrong or has expired. Check the latest email or resend a new code.';
  if (/rate limit|security purposes|after \d+ seconds/i.test(msg)) return 'Too many requests. Wait a minute, then try again.';
  return friendlyError(err);
}

function showScreen(name) {
  document.body.classList.remove('booting');
  $('setupScreen').hidden = name !== 'setup';
  $('authScreen').hidden = name !== 'auth';
  $('appShell').hidden = name !== 'app';
}

async function enterApp(sessionUser) {
  user = sessionUser;
  const email = user.email || '';
  $('avatar').textContent = email.charAt(0) || 'P';
  $('accountName').textContent = email.split('@')[0] || 'Personal account';
  $('accountEmail').textContent = email || 'Private workspace';
  setView(location.hash.slice(1));
  showScreen('app');
  render();
  try {
    await loadUserData();
    render();
    showImportBanner();
  } catch (err) {
    showToast(friendlyError(err));
  }
}

function leaveApp() {
  user = null;
  state.transactions = [];
  state.budgets = {};
  ['totalIncome', 'totalExpense', 'balance'].forEach((id) => { $(id)._value = undefined; });
  $('accountMenu').hidden = true;
  if ($('entryDialog').open) $('entryDialog').close();
  showScreen('auth');
  setAuthStep('email');
}

$('authForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = $('authSubmit');
  const onCodeStep = !$('codeField').hidden;


  if (!onCodeStep) {
    const email = $('authEmail').value.trim().toLowerCase();
    if (!/^\S+@\S+\.\S+$/.test(email)) return setAuthMessage('Enter a valid email address.');
    btn.disabled = true;
    btn.textContent = 'Sending…';
    try {
      await sendCode(email);
      authEmail = email;
      setAuthStep('sent');
      startResendCooldown();
    } catch (err) {
      setAuthMessage(authErrorMessage(err));
      btn.textContent = 'Send login link';
    } finally {
      btn.disabled = false;
    }
    return;
  }

  const token = $('authCode').value.replace(/\s/g, '');
  if (!/^\d{6,10}$/.test(token)) return setAuthMessage('Enter the code from your email.');
  btn.disabled = true;
  btn.textContent = 'Verifying…';
  try {
    const { error } = await db.auth.verifyOtp({ email: authEmail, token, type: 'email' });
    if (error) throw error;
    // onAuthStateChange takes over and opens the app
  } catch (err) {
    setAuthMessage(authErrorMessage(err));
  } finally {
    btn.disabled = false;
    btn.textContent = 'Verify and continue';
  }
});

$('authCode').addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/\D/g, '');
});

$('resendBtn').addEventListener('click', async () => {
  try {
    await sendCode(authEmail);
    setAuthMessage(`A new email is on its way to ${authEmail}.`, true);
    startResendCooldown();
  } catch (err) {
    setAuthMessage(authErrorMessage(err));
  }
});

$('haveCodeBtn').addEventListener('click', () => setAuthStep('code'));

// If the link was opened in another tab, this tab picks up the session when it regains focus
window.addEventListener('focus', async () => {
  if (!db || user || $('authScreen').hidden) return;
  const { data } = await db.auth.getSession();
  if (data.session) enterApp(data.session.user);
});

$('changeEmailBtn').addEventListener('click', () => {
  clearInterval(resendTimer);
  setAuthStep('email');
});

$('accountBtn').addEventListener('click', (e) => {
  e.stopPropagation();
  const open = $('accountMenu').hidden;
  $('accountMenu').hidden = !open;
  $('accountBtn').setAttribute('aria-expanded', String(open));
});
document.addEventListener('click', (e) => {
  if (!$('accountMenu').hidden && !e.target.closest('.account')) $('accountMenu').hidden = true;
});
$('logoutBtn').addEventListener('click', () => db.auth.signOut());
$('mobileLogout').addEventListener('click', () => db.auth.signOut());

// App events

document.addEventListener('click', (e) => {
  if (e.target.closest('[data-add]')) openEntry();
  const back = e.target.closest('[data-person-back]');
  if (back) {
    const name = back.dataset.personBack;
    openEntry(null, { type: 'income', lockType: true, category: MONEY_BACK, mode: 'Google Pay', description: name,
      title: 'Record money back', sub: `Money ${name} returned to you.`, saveLabel: 'Save' });
  }
  const send = e.target.closest('[data-person-send], [data-send-money]');
  if (send) {
    const name = send.dataset.personSend || '';
    openEntry(null, { type: 'expense', lockType: true, category: 'Money sent', description: name,
      title: 'Send money', sub: name ? `Money you gave to ${name}.` : 'Money you gave to someone. Type their name as the person.', saveLabel: 'Save' });
  }
  const personRow = e.target.closest('[data-person]');
  if (personRow) {
    selectedPerson = personRow.dataset.person;
    renderPeople();
    if (window.innerWidth <= 1100) $('personDetail').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }
  if (e.target.closest('[data-add-income]')) {
    openEntry(null, { type: 'income', incomeOnly: true, category: 'Salary', mode: 'Bank transfer', description: `Income for ${monthName(currentMonth)}` });
  }
  const row = e.target.closest('.tx-item[data-id]');
  if (row) openEntry(row.dataset.id);
});
document.addEventListener('keydown', (e) => {
  const row = e.target.closest && e.target.closest('.tx-item');
  if (row && (e.key === 'Enter' || e.key === ' ')) {
    e.preventDefault();
    row.click();
  }
});

window.addEventListener('hashchange', () => setView(location.hash.slice(1)));

$('prevMonth').addEventListener('click', () => { currentMonth = shiftMonth(currentMonth, -1); render(); });
$('nextMonth').addEventListener('click', () => { currentMonth = shiftMonth(currentMonth, 1); render(); });

$('category').addEventListener('change', syncPersonField);
$('sendMoneyBtn').dataset.sendMoney = '';
$('peopleSearch').addEventListener('input', renderPeople);

['ovSearch', 'ovType', 'txSearch', 'txType', 'txCategory', 'txMode'].forEach((id) =>
  $(id).addEventListener('input', () => renderTables(monthTransactions())));

$('budgetForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const value = parseFloat($('budgetInput').value);
  try {
    await saveBudget(currentMonth, value > 0 ? value : 0);
  } catch (err) {
    showToast(friendlyError(err));
    return;
  }
  if (value > 0) state.budgets[currentMonth] = value;
  else delete state.budgets[currentMonth];
  render();
  showToast(value > 0 ? 'Budget saved.' : 'Budget removed.');
});

$('exportCsv').addEventListener('click', exportCsv);
$('importBtn').addEventListener('click', importLegacy);
$('importDismiss').addEventListener('click', () => { $('importBanner').hidden = true; });

// Init

function isConfigured(cfg) {
  return cfg && /^https:\/\/.+/.test(cfg.url || '') && cfg.anonKey && !/^YOUR_/.test(cfg.anonKey);
}

function init() {
  fillIcons();
  const allCategories = [...new Set([...Object.keys(CATEGORIES.expense), ...Object.keys(CATEGORIES.income)])];
  fillSelect($('txCategory'), allCategories, null, 'All categories');
  fillSelect($('txMode'), Object.keys(PAYMENT_MODES), null, 'All payment modes');
  const cfg = window.SUPABASE_CONFIG;
  if (!isConfigured(cfg) || !window.supabase) {
    showScreen('setup');
    return;
  }
  db = window.supabase.createClient(cfg.url, cfg.anonKey);

  // Fires on page load (INITIAL_SESSION) and on every login/logout
  db.auth.onAuthStateChange((event, session) => {
    // Defer so Supabase calls made inside don't run within the auth lock
    setTimeout(() => {
      if (session && session.user) {
        if (!user || user.id !== session.user.id) enterApp(session.user);
      } else {
        leaveApp();
      }
    }, 0);
  });
}

init();
