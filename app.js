// ===== Вершина — общий скрипт для всех страниц (версия для Vercel) =====

const ICONS = {
  mountain: '<path d="M3 20 L9 8 L13 14 L16 9 L21 20 Z"/>',
  waterfall: '<path d="M6 3 v6 M12 3 v10 M18 3 v6 M4 13 h16 M6 13 v8 M12 13 v8 M18 13 v8"/>',
  castle: '<path d="M4 21 V10 h4 V7 h4 V10 h4 V7 h4 V21 Z M9 21 v-6 h6 v6"/>',
  temple: '<path d="M12 3 L20 9 H4 Z M6 9 v12 M18 9 v12 M6 21 h12 M9 12 v9 M15 12 v9"/>',
  spring: '<circle cx="12" cy="12" r="8"/><path d="M12 8 v8 M8 12 h8"/>',
  lake: '<path d="M3 15 q3 -4 6 0 t6 0 t6 0"/><path d="M3 19 q3 -4 6 0 t6 0 t6 0"/>',
  monastery: '<path d="M12 3 v4 M8 7 h8 M6 21 V9 h12 v12 Z M10 21 v-6 h4 v6"/>',
  forest: '<path d="M12 2 L18 11 H6 Z M12 8 L17 16 H7 Z M12 16 v6"/>',
  factory: '<path d="M3 21 V10 l5 3 V10 l5 3 V8 h4 v13 Z"/>'
};
function icon(name){ return '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">'+(ICONS[name]||ICONS.mountain)+'</svg>'; }

// Список маршрутов. Чтобы добавить/убрать/поменять экскурсию — редактируйте прямо
// этот список (можно прямо в GitHub, в браузере, без каких-либо программ).
const routes = [
  {title:'Кисловодск обзорная + Замок Коварства и Любви', icon:'castle', category:'kmv', days:['пн','чт','сб','вс']},
  {title:'Медовые водопады + Кольцо-гора + Чайный домик', icon:'waterfall', category:'kbr', days:['пн','вт','ср','чт','пт','сб','вс']},
  {title:'Домбай заповедный', icon:'mountain', category:'gorges', days:['вт','чт','сб','вс']},
  {title:'Пятигорск: Лермонтовский + Обзорная', icon:'monastery', category:'kmv', days:['ср','пт','сб']},
  {title:'КБР водопады + Голубое озеро + купание Аушигер + Замок Эркен + Ущелье Безенги', icon:'lake', category:'kbr', days:[]},
  {title:'Железноводск + Ессентуки', icon:'spring', category:'kmv', days:['вт','пт']},
  {title:'Эльбрус + Чегет', icon:'mountain', category:'elbrus', days:[]},
  {title:'Суворовский источник (купание)', icon:'spring', category:'kmv', days:['пн','ср','пт']},
  {title:'Архыз: комплекс храмов + Лик Христа + Романтик', icon:'temple', category:'arkhyz', days:[]},
  {title:'Долина нарзанов', icon:'spring', category:'kmv', days:['пн','вт','ср','чт','пт','сб','вс']},
  {title:'Северная Осетия «Куртата»', icon:'mountain', category:'arkhyz', days:[]},
  {title:'Монастыри КМВ Мужской + Женский', icon:'monastery', category:'kmv', days:['пн']},
  {title:'Грозный + Шали + Аргун', icon:'mountain', category:'far', days:[]},
  {title:'Джилы-Су', icon:'mountain', category:'gorges', days:[]},
  {title:'Актопрак', icon:'forest', category:'gorges', days:[]},
  {title:'Фабрика меха и кожи «Melich»', icon:'factory', category:'kmv', days:[]},
];

const DAY_LABELS = {'пн':'Пн','вт':'Вт','ср':'Ср','чт':'Чт','пт':'Пт','сб':'Сб','вс':'Вс'};

document.addEventListener('DOMContentLoaded', () => {

  const grid = document.getElementById('routes-grid');
  const loadMoreBtn = document.getElementById('load-more');
  const limitCards = grid ? grid.hasAttribute('data-limit') : false;
  let visibleCount = limitCards ? parseInt(grid.getAttribute('data-limit'), 10) : routes.length;
  let currentDay = 'все';
  let currentCat = 'все';

  function renderRoutes(){
    if (!grid) return;
    grid.innerHTML = '';
    routes.forEach((r) => {
      const card = document.createElement('div');
      card.className = 'route-card';
      card.dataset.days = (r.days||[]).join(',');
      card.dataset.category = r.category;
      const daysHtml = (r.days && r.days.length)
        ? r.days.map(d => `<span>${DAY_LABELS[d]||d}</span>`).join('')
        : `<span class="muted">По запросу</span>`;
      card.innerHTML = `
        <div class="route-icon">${icon(r.icon)}</div>
        <h3>${r.title}</h3>
        <div class="route-days">${daysHtml}</div>
      `;
      grid.appendChild(card);
    });
    applyFilters();
  }

  function applyFilters(){
    if (!grid) return;
    document.querySelectorAll('.route-card').forEach((card, i) => {
      const days = card.dataset.days ? card.dataset.days.split(',').filter(Boolean) : [];
      const cat = card.dataset.category;
      const dayOk = currentDay === 'все' || days.includes(currentDay);
      const catOk = currentCat === 'все' || cat === currentCat;
      const withinLimit = i < visibleCount;
      card.classList.toggle('hidden', !(dayOk && catOk && withinLimit));
    });
    document.querySelectorAll('[data-day-filter] .day-chip, #hero-days .day-chip').forEach(chip => {
      chip.classList.toggle('active', chip.dataset.day === currentDay);
    });
    document.querySelectorAll('[data-cat-filter] .cat-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.cat === currentCat);
    });
  }

  document.querySelectorAll('[data-day-filter] .day-chip').forEach(chip => {
    chip.addEventListener('click', () => { currentDay = chip.dataset.day; applyFilters(); });
  });
  document.querySelectorAll('[data-cat-filter] .cat-tab').forEach(tab => {
    tab.addEventListener('click', () => { currentCat = tab.dataset.cat; applyFilters(); });
  });
  document.querySelectorAll('#hero-days .day-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      currentDay = chip.dataset.day;
      if (grid) {
        grid.scrollIntoView({behavior:'smooth', block:'start'});
        applyFilters();
      } else {
        window.location.href = 'excursions.html';
      }
    });
  });
  if (loadMoreBtn){
    loadMoreBtn.addEventListener('click', () => {
      visibleCount = routes.length;
      applyFilters();
      loadMoreBtn.style.display = 'none';
    });
  }

  renderRoutes();

  // Заполняем выпадающий список маршрутов в форме(ах) заявки на странице
  document.querySelectorAll('.request-route-select').forEach(sel => {
    routes.forEach(r => {
      const opt = document.createElement('option');
      opt.value = r.title;
      opt.textContent = r.title;
      sel.appendChild(opt);
    });
  });

  // Клик по карточке маршрута — подставляет его в форму заявки на этой же странице
  if (grid){
    grid.addEventListener('click', (e) => {
      const card = e.target.closest('.route-card');
      if (!card) return;
      const title = card.querySelector('h3').textContent;
      document.querySelectorAll('.request-route-select').forEach(sel => {
        if ([...sel.options].some(o => o.value === title)) sel.value = title;
      });
      const form = document.getElementById('request');
      if (form) form.scrollIntoView({behavior:'smooth', block:'start'});
    });
  }

  // Отправка формы заявки на серверную функцию /api/request (Vercel)
  document.querySelectorAll('.request-form').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const success = form.querySelector('.f-success');
      const errorBox = form.querySelector('.f-error');
      const submitBtn = form.querySelector('button[type="submit"]');
      const fd = new FormData(form);
      const payload = Object.fromEntries(fd.entries());

      if (submitBtn){ submitBtn.disabled = true; submitBtn.textContent = 'Отправляем…'; }
      if (errorBox) errorBox.classList.remove('show');

      try{
        const res = await fetch('/api/request', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error('bad status');
        if (success) success.classList.add('show');
        form.reset();
      } catch(err){
        if (errorBox){
          errorBox.classList.add('show');
        }
      } finally {
        if (submitBtn){ submitBtn.disabled = false; submitBtn.textContent = 'Отправить заявку'; }
      }
    });
  });

});
