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
  factory: '<path d="M3 21 V10 l5 3 V10 l5 3 V8 h4 v13 Z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7 v5 l3 3"/>',
  pin: '<path d="M12 21 s7 -6.5 7 -12 a7 7 0 0 0 -14 0 c0 5.5 7 12 7 12 Z"/><circle cx="12" cy="9" r="2.5"/>',
  people: '<circle cx="9" cy="8" r="3"/><path d="M3 20 c0 -4 3 -6 6 -6 s6 2 6 6"/><circle cx="17" cy="9" r="2.3"/><path d="M15.5 14 c2.5 0 4.5 2 4.5 6"/>'
};
function icon(name){ return '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">'+(ICONS[name]||ICONS.mountain)+'</svg>'; }

const DAY_LABELS = {'пн':'Пн','вт':'Вт','ср':'Ср','чт':'Чт','пт':'Пт','сб':'Сб','вс':'Вс'};
const STD_INCLUDED = ['Проезд на комфортабельном автобусе', 'Услуги гида', 'Сопровождение по маршруту'];
const STD_PACKING = 'Удобная закрытая обувь, вода, головной убор, солнцезащитный крем, лёгкая ветровка — в горах прохладнее, наличные на доп. расходы и сувениры.';
const STD_SAFETY = 'Пристёгивайтесь ремнём безопасности, не покидайте группу без разрешения гида, следуйте инструкциям водителя и гида на смотровых площадках и горных участках.';

// Полное описание всех 16 экскурсий — по брошюре и анкете, согласованной с клиентом.
const tours = [
  {
    slug:'kislovodsk-obzornaya', icon:'castle', category:'kmv',
    title:'Кисловодск обзорная + Замок Коварства и Любви',
    city:'Кисловодск', days:['пн','чт','сб','вс'], time:'14:00–17:30', duration:'≈ 3,5 часа',
    priceAdult:1400, priceChild:1300,
    short:'Прогулка по историческому центру Кисловодска с Курортным парком и легендарным Замком Коварства и Любви.',
    detail:'Обзорная экскурсия по главному курорту Кавказских Минеральных Вод — от Кисловодской крепости XIX века до романтичной скалы «Замок Коварства и Любви» на окраине города. По дороге — Курортный парк, один из крупнейших рукотворных парков Европы, и источник знаменитого нарзана, давшего городу имя.',
    sights:['Кисловодская крепость XIX века','Свято-Никольский собор','Курортный парк и Колоннада','Зеркальный пруд и водопад «Стеклянная струя»','Красные камни','Источник нарзана','Скала «Замок Коварства и Любви»'],
    notIncluded:'',
  },
  {
    slug:'medovye-vodopady', icon:'waterfall', category:'kbr',
    title:'Медовые водопады + Кольцо-гора + Чайный домик',
    city:'Кисловодск / КБР', days:['пн','вт','ср','чт','пт','сб','вс'], time:'14:00–18:00', duration:'≈ 4 часа',
    priceAdult:'1800 (база) / 2000 (расширенный вариант)', priceChild:'1700 (база) / 1900 (расширенный вариант)',
    short:'Каскад медовых водопадов, гора Кольцо с её знаменитым сквозным отверстием и чаепитие в Чайном домике.',
    detail:'Маршрут в ущелье реки Аликоновки к каскаду из пяти водопадов и на гору Кольцо — скалу с круглым сквозным отверстием, образованным ветром и эрозией песчаника. По пути — этнографический музей кавказского быта с двориком животных, а в конце — чаепитие с горным мёдом и травяными чаями в Чайном домике. В отдельные дни маршрут дополняется заездом в Замок Коварства и Любви — уточняйте при бронировании.',
    sights:['Гора Кольцо','Каскад Медовых водопадов в ущелье Аликоновки','Этнографический музей «Карачаевское подворье»','Чайный домик'],
    notIncluded:'≈ 300 ₽ — вход в этнографический музей и дегустация в Чайном домике.',
  },
  {
    slug:'dombai', icon:'mountain', category:'gorges',
    title:'Домбай заповедный',
    city:'Карачаево-Черкесия', days:['вт','чт','сб','вс'], time:'7:00–19:00', duration:'≈ 12 часов',
    priceAdult:3300, priceChild:3100,
    short:'Целый день в сердце Тебердинского заповедника — с подъёмом на канатке к панораме Домбайской поляны.',
    detail:'Дальняя горная экскурсия через перевал Гум-Баши в один из самых живописных уголков Северного Кавказа. По пути — аулы Верхняя и Нижняя Мара, средневековый Сентинский храм X века, озеро Кара-Кёль. В Домбае по желанию можно подняться по канатной дороге на гору Мусса-Ачитара, откуда открывается панорама ледников Главного Кавказского хребта.',
    sights:['Перевал Гум-Баши','Аулы Верхняя и Нижняя Мара','Сентинский храм X века','Озеро Кара-Кёль','Домбайская поляна','Канатная дорога на гору Мусса-Ачитара (по желанию)'],
    notIncluded:'≈ 2700 ₽ — канатная дорога на Мусса-Ачитару (по желанию), ≈ 400 ₽ — обед.',
  },
  {
    slug:'pyatigorsk', icon:'monastery', category:'kmv',
    title:'Пятигорск: Лермонтовский + Обзорная',
    city:'Пятигорск', days:['ср','пт','сб'], time:'14:00–19:00', duration:'≈ 5 часов',
    priceAdult:2000, priceChild:1900,
    short:'Лермонтовский Пятигорск — от места дуэли поэта до знаменитого голубого озера «Провал».',
    detail:'Обзорная экскурсия по городу-курорту, неразрывно связанному с именем М.Ю. Лермонтова: домик, где поэт написал последние произведения, место его дуэли у подножия горы Машук, парк «Цветник» и мистическое озеро «Провал» — подземный грот с водой бирюзового цвета.',
    sights:['Дом-музей Лермонтова','Место дуэли Лермонтова','Парк «Цветник»','Грот «Провал»'],
    notIncluded:'≈ 300 ₽ — вход в дом-музей Лермонтова и грот «Провал».',
  },
  {
    slug:'kbr-vodopady-goluboe-ozero', icon:'lake', category:'kbr',
    title:'КБР водопады + Голубое озеро + купание Аушигер + Замок Эркен + Ущелье Безенги',
    city:'Кабардино-Балкария', days:['вт','чт','сб','вс'], time:'6:00–19:00', duration:'≈ 13 часов',
    priceAdult:3300, priceChild:3100,
    short:'Насыщенный день по Кабардино-Балкарии — от бездонного Голубого озера до термальных источников Аушигера.',
    detail:'Большой маршрут по Кабардино-Балкарии: карстовое озеро Церик-Кёль (Голубое озеро) с незамерзающей бирюзовой водой, стилизованный под средневековье замок Эркен, купание в термальных источниках посёлка Аушигер и виды на одно из самых глубоких горных ущелий Кавказа — Безенгийское.',
    sights:['Голубое озеро (Церик-Кёль)','Замок Эркен','Термальные источники Аушигера','Ущелье Безенги'],
    notIncluded:'≈ 1100 ₽ — вход на термальные источники Аушигера и другие локации маршрута.',
    packingExtra:'Купальник/плавки и полотенце для купания в термальных источниках.',
  },
  {
    slug:'zheleznovodsk-essentuki', icon:'spring', category:'kmv',
    title:'Железноводск + Ессентуки',
    city:'Железноводск, Ессентуки', days:['вт','пт'], time:'14:00–19:00', duration:'≈ 5 часов',
    priceAdult:2000, priceChild:1900,
    short:'Два курортных города КМВ за одну поездку — Каскадная лестница Железноводска и питьевые галереи Ессентуков.',
    detail:'Компактная экскурсия по двум курортам Кавминвод. В Железноводске — прогулка по Каскадной лестнице и курортному парку у подножия горы Железной. В Ессентуках — питьевые галереи минеральных источников и центральный курортный парк.',
    sights:['Каскадная лестница и парк Железноводска','Гора Железная','Питьевые галереи Ессентуков','Курортный парк Ессентуков'],
    notIncluded:'',
  },
  {
    slug:'elbrus-cheget', icon:'mountain', category:'elbrus',
    title:'Эльбрус + Чегет',
    city:'Приэльбрусье', days:['ср','пт','вс'], time:'6:00–19:00', duration:'≈ 13 часов',
    priceAdult:3300, priceChild:3100,
    short:'Баксанское ущелье, поляны Чегет и Азау и панорама Эльбруса — высочайшей вершины Европы.',
    detail:'Путешествие вдоль Баксанского ущелья к подножию Эльбруса. По пути — Поляна нарзанов с минеральными источниками, поляна Чегет, откуда открывается панорама Эльбруса и ледника «Семёрка», и поляна Азау, откуда по канатной дороге можно подняться на высоту 3500 м, на станцию «Мир».',
    sights:['Баксанское ущелье','Поляна нарзанов','Поляна Чегет','Поляна Азау','Канатная дорога на Эльбрус до станции «Мир» (3500 м, по желанию)'],
    notIncluded:'≈ 3100 ₽ — канатная дорога до станции «Мир» (по желанию), ≈ 1100 ₽ — обед.',
    safetyExtra:'Высокогорный маршрут — с осторожностью относитесь к поездке при сердечно-сосудистых заболеваниях, возьмите тёплые вещи даже летом.',
  },
  {
    slug:'suvorovsky-istochnik', icon:'spring', category:'kmv',
    title:'Суворовский источник (купание)',
    city:'Кисловодск', days:['пн','ср','пт'], time:'19:00–22:00', duration:'≈ 3 часа',
    priceAdult:900, priceChild:800,
    short:'Вечернее купание в тёплом минеральном источнике под открытым небом.',
    detail:'Короткая вечерняя поездка к Суворовскому минеральному источнику — популярному месту для купания в тёплой минерализованной воде под открытым небом.',
    sights:['Суворовский минеральный источник'],
    notIncluded:'≈ 700 ₽ — вход на территорию источника.',
    packingExtra:'Купальник/плавки, полотенце, сменная обувь.',
  },
  {
    slug:'arkhyz', icon:'temple', category:'arkhyz',
    title:'Архыз: комплекс храмов + Лик Христа + Романтик',
    city:'Карачаево-Черкесия', days:['сб'], time:'6:00–19:00', duration:'≈ 13 часов',
    priceAdult:3300, priceChild:3100,
    short:'Древние аланские храмы X века и загадочный наскальный Лик Христа в горах Архыза.',
    detail:'Поездка в один из красивейших горных курортов Карачаево-Черкесии — Архыз. Маршрут проходит через Нижне-Архызское городище с тремя древними аланскими храмами X века — одними из старейших христианских построек на территории России, — и к наскальному образу, известному как Лик Христа.',
    sights:['Нижне-Архызское городище','Северный, Южный и Средний Зеленчукские храмы (X век)','Наскальный Лик Христа'],
    notIncluded:'≈ 600 ₽ и ≈ 2800 ₽ — дополнительные локации и опции маршрута, уточняйте при бронировании.',
  },
  {
    slug:'dolina-narzanov', icon:'spring', category:'kmv',
    title:'Долина нарзанов',
    city:'Кисловодск', days:['пн','вт','ср','чт','пт','сб','вс'], time:'14:00–18:00', duration:'≈ 4 часа',
    priceAdult:2000, priceChild:'',
    short:'Живописное ущелье в 35 км от Кисловодска с выходами минеральной воды прямо из-под земли.',
    detail:'Короткая поездка в Долину нарзанов — живописное лесное ущелье, известное своим особым микроклиматом и природными источниками минеральной воды.',
    sights:['Ущелье и источники Долины нарзанов'],
    notIncluded:'≈ 300 ₽ — доп. расходы на месте.',
  },
  {
    slug:'severnaya-osetia', icon:'mountain', category:'arkhyz',
    title:'Северная Осетия «Куртата»',
    city:'Северная Осетия', days:['ср','вс'], time:'6:00–20:00', duration:'≈ 14 часов',
    priceAdult:5000, priceChild:4700,
    short:'Куртатинское ущелье Северной Осетии — древние сторожевые башни, склепы и осетинские пироги.',
    detail:'Дальняя экскурсия в Северную Осетию — Куртатинское ущелье с родовыми сторожевыми башнями и средневековыми святилищами, где до сих пор ощущается суровый горный колорит Кавказа. Маршрут обычно включает знакомство с осетинской кухней.',
    sights:['Куртатинское ущелье','Средневековые сторожевые башни и святилища'],
    notIncluded:'≈ 850 ₽ — доп. расходы на месте.',
  },
  {
    slug:'monastyri-kmv', icon:'monastery', category:'kmv',
    title:'Монастыри КМВ Мужской + Женский',
    city:'КМВ', days:['пт'], time:'14:00–18:00', duration:'≈ 4 часа',
    priceAdult:2000, priceChild:1900,
    short:'Два православных монастыря Кавминвод — мужской и женский — за одну поездку.',
    detail:'Паломническая экскурсия к двум действующим монастырям Кавказских Минеральных Вод — мужскому и женскому.',
    sights:[],
    notIncluded:'',
  },
  {
    slug:'groznyy-shali-argun', icon:'mountain', category:'far',
    title:'Грозный + Шали + Аргун',
    city:'Чеченская Республика', days:['ср','сб','вс'], time:'5:00–22:00 (по воскресеньям уточняйте время у менеджера)', duration:'≈ 17 часов',
    priceAdult:5000, priceChild:4700,
    short:'Современный Грозный, крупнейшая мечеть Европы в Шали и живописный Аргунский район.',
    detail:'Дальняя экскурсия в Чеченскую Республику: центр Грозного с его небоскрёбами и мечетью «Сердце Чечни», город Шали с одной из крупнейших мечетей Европы, и Аргун с окрестными горными видами.',
    sights:['Центр Грозного','Мечеть «Сердце Чечни»','Мечеть в Шали','Город Аргун'],
    notIncluded:'≈ 700 ₽ — доп. расходы на месте.',
    safetyExtra:'Для посещения мечетей — закрытая одежда, у женщин head-платок с собой.',
  },
  {
    slug:'dzhily-su', icon:'mountain', category:'gorges',
    title:'Джилы-Су',
    city:'Кабардино-Балкария', days:['пн','вт','ср','чт','пт','сб','вс'], time:'7:00–18:00', duration:'≈ 11 часов',
    priceAdult:4500, priceChild:'',
    short:'Урочище на северном склоне Эльбруса с водопадами, нарзанами и видом на снежную вершину.',
    detail:'Поездка на высокогорное урочище Джилы-Су у подножия северного склона Эльбруса — с водопадами, минеральными источниками и одними из самых близких видов на вершину горы.',
    sights:['Водопады и нарзанные источники Джилы-Су','Панорама северного склона Эльбруса'],
    notIncluded:'≈ 600 ₽ — доп. расходы на месте.',
  },
  {
    slug:'aktoprak', icon:'forest', category:'gorges',
    title:'Актопрак',
    city:'Кабардино-Балкария', days:['пн','вт','ср','чт','пт','сб','вс'], time:'7:00–19:00', duration:'≈ 12 часов',
    priceAdult:5000, priceChild:'',
    short:'Горный перевал Актопрак с панорамой Кабардино-Балкарии.',
    detail:'Экскурсия на перевал Актопрак — один из живописных горных перевалов Кабардино-Балкарии.',
    sights:[],
    notIncluded:'',
  },
  {
    slug:'melich-factory', icon:'factory', category:'kmv',
    title:'Фабрика меха и кожи «Melich»',
    city:'Кисловодск', days:['пн','вт','ср','чт','пт','сб','вс'], time:'14:30', duration:'—',
    priceAdult:'по запросу', priceChild:'по запросу',
    short:'Посещение одной из крупнейших меховых и кожевенных фабрик юга России.',
    detail:'Экскурсия на фабрику «Melich» — одно из крупнейших предприятий по производству меховых и кожаных изделий на юге России, с возможностью приобрести продукцию напрямую от производителя.',
    sights:['Производство и магазин фабрики «Melich»'],
    notIncluded:'',
  },
];

document.addEventListener('DOMContentLoaded', () => {

  const grid = document.getElementById('routes-grid');
  const loadMoreBtn = document.getElementById('load-more');
  const limitCards = grid ? grid.hasAttribute('data-limit') : false;
  let visibleCount = limitCards ? parseInt(grid.getAttribute('data-limit'), 10) : tours.length;
  let currentDay = 'все';
  let currentCat = 'все';

  function priceLabel(t){
    if (t.priceAdult === 'по запросу' || !t.priceAdult) return 'По запросу';
    const a = typeof t.priceAdult === 'number' ? t.priceAdult + ' ₽' : t.priceAdult;
    return a;
  }

  function renderRoutes(){
    if (!grid) return;
    grid.innerHTML = '';
    tours.forEach((t) => {
      const card = document.createElement('div');
      card.className = 'route-card';
      card.dataset.days = (t.days||[]).join(',');
      card.dataset.category = t.category;
      card.dataset.slug = t.slug;
      const daysHtml = (t.days && t.days.length)
        ? t.days.map(d => `<span>${DAY_LABELS[d]||d}</span>`).join('')
        : `<span class="muted">По запросу</span>`;
      card.innerHTML = `
        <div class="route-icon">${icon(t.icon)}</div>
        <h3>${t.title}</h3>
        <p class="route-short">${t.short}</p>
        <div class="route-meta">
          <div class="route-price">${priceLabel(t)}<span>взрослый</span></div>
          <div class="route-duration">${t.duration}</div>
        </div>
        <div class="route-days">${daysHtml}</div>
        <span class="route-link">Подробнее →</span>
      `;
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => {
        window.location.href = 'excursion.html?slug=' + encodeURIComponent(t.slug);
      });
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
      visibleCount = tours.length;
      applyFilters();
      loadMoreBtn.style.display = 'none';
    });
  }

  renderRoutes();

  // Заполняем выпадающий список маршрутов в форме(ах) заявки на странице
  document.querySelectorAll('.request-route-select').forEach(sel => {
    tours.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t.title;
      opt.textContent = t.title;
      sel.appendChild(opt);
    });
  });

  // ===== Страница экскурсии (excursion.html) =====
  const excRoot = document.getElementById('exc-root');
  if (excRoot){
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug');
    const t = tours.find(x => x.slug === slug) || tours[0];

    document.title = t.title + ' — Вершина, Кисловодск';

    document.querySelectorAll('.exc-title').forEach(el => el.textContent = t.title);
    document.querySelectorAll('.exc-short').forEach(el => el.textContent = t.short);
    document.querySelectorAll('.exc-detail').forEach(el => el.textContent = t.detail);

    const metaRow = document.querySelector('.exc-meta-row');
    if (metaRow){
      metaRow.innerHTML = `
        <span class="exc-meta-pill">${icon('pin')}${t.city}</span>
        <span class="exc-meta-pill">${icon('clock')}${t.duration}</span>
        <span class="exc-meta-pill">${icon('people')}${(t.days&&t.days.length) ? t.days.map(d=>DAY_LABELS[d]).join(', ') : 'По запросу'}</span>
      `;
    }

    const sightsList = document.querySelector('.exc-sights');
    if (sightsList){
      sightsList.innerHTML = (t.sights && t.sights.length)
        ? t.sights.map(s => `<li>${s}</li>`).join('')
        : '<li>Свяжитесь с нами, чтобы уточнить точки маршрута — постоянно расширяем описания.</li>';
    }

    const inclList = document.querySelector('.exc-included');
    if (inclList){
      inclList.innerHTML = STD_INCLUDED.map(s => `<li>${s}</li>`).join('');
    }

    const notIncl = document.querySelector('.exc-not-included');
    if (notIncl){
      notIncl.textContent = t.notIncluded || 'Дополнительные расходы на этом маршруте не предусмотрены сверх стоимости билета.';
    }

    const packing = document.querySelector('.exc-packing');
    if (packing){
      packing.textContent = [STD_PACKING, t.packingExtra].filter(Boolean).join(' ');
    }

    const safety = document.querySelector('.exc-safety');
    if (safety){
      safety.textContent = [STD_SAFETY, t.safetyExtra].filter(Boolean).join(' ');
    }

    const sidebar = document.querySelector('.exc-sidebar');
    if (sidebar){
      const adultVal = (typeof t.priceAdult === 'number') ? t.priceAdult + ' ₽' : (t.priceAdult || 'по запросу');
      const childVal = (typeof t.priceChild === 'number') ? t.priceChild + ' ₽' : (t.priceChild || '—');
      sidebar.querySelector('.exc-price-adult').textContent = adultVal;
      sidebar.querySelector('.exc-price-child').textContent = childVal;
      sidebar.querySelector('.exc-price-duration').textContent = t.duration;
      const daysMini = sidebar.querySelector('.exc-days-mini');
      daysMini.innerHTML = (t.days && t.days.length)
        ? t.days.map(d => `<span>${DAY_LABELS[d]}</span>`).join('')
        : `<span>По запросу</span>`;
      const bookBtn = sidebar.querySelector('.exc-book-btn');
      if (bookBtn){
        bookBtn.addEventListener('click', () => {
          const sel = document.querySelector('.request-route-select');
          if (sel) sel.value = t.title;
          const form = document.getElementById('request');
          if (form) form.scrollIntoView({behavior:'smooth', block:'start'});
        });
      }
    }
  }

  // Клик по карточке маршрута на других страницах (устаревшее поведение — оставлено
  // на случай отдельных .route-card вне сетки) подставляет его в форму заявки
  if (grid){
    // обработка клика уже назначена выше (переход на excursion.html)
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
