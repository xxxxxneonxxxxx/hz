const createIconDataUrl = (svg) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`

const PRODUCING_ICONS = {
  camera: createIconDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none">
      <rect x="20" y="34" width="42" height="28" rx="6" stroke="#8B2CC3" stroke-width="4"/>
      <path d="M62 42l14-8v28L62 54" stroke="#8B2CC3" stroke-width="4" stroke-linejoin="round"/>
      <circle cx="34" cy="28" r="8" stroke="#8B2CC3" stroke-width="4"/>
      <circle cx="48" cy="28" r="8" stroke="#8B2CC3" stroke-width="4"/>
      <circle cx="34" cy="48" r="3" fill="#8B2CC3"/>
      <circle cx="42" cy="48" r="3" fill="#8B2CC3"/>
      <circle cx="50" cy="48" r="3" fill="#8B2CC3"/>
    </svg>
  `),
  document: createIconDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none">
      <path d="M28 18h28l12 12v48H28z" stroke="#8B2CC3" stroke-width="4" stroke-linejoin="round"/>
      <path d="M56 18v16h16" stroke="#8B2CC3" stroke-width="4" stroke-linejoin="round"/>
      <path d="M38 46h20M38 56h20M38 66h14" stroke="#8B2CC3" stroke-width="4" stroke-linecap="round"/>
      <rect x="38" y="30" width="8" height="8" rx="1" stroke="#8B2CC3" stroke-width="4"/>
    </svg>
  `),
  masterclass: createIconDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none">
      <circle cx="48" cy="24" r="9" stroke="#8B2CC3" stroke-width="4"/>
      <path d="M22 62c2-10 11-16 20-16h12c9 0 18 6 20 16" stroke="#8B2CC3" stroke-width="4" stroke-linecap="round"/>
      <path d="M12 70c1-8 8-13 15-13h4c7 0 14 5 15 13" stroke="#8B2CC3" stroke-width="4" stroke-linecap="round"/>
      <path d="M50 70c1-8 8-13 15-13h4c7 0 14 5 15 13" stroke="#8B2CC3" stroke-width="4" stroke-linecap="round"/>
      <path d="M20 30c5-8 13-12 28-12 15 0 23 4 28 12" stroke="#8B2CC3" stroke-width="4" stroke-dasharray="3 5" stroke-linecap="round"/>
    </svg>
  `),
  laptop: createIconDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none">
      <rect x="24" y="24" width="48" height="32" rx="4" stroke="#8B2CC3" stroke-width="4"/>
      <path d="M16 62h64v6a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4z" stroke="#8B2CC3" stroke-width="4" stroke-linejoin="round"/>
      <path d="M42 62h12" stroke="#8B2CC3" stroke-width="4" stroke-linecap="round"/>
    </svg>
  `),
  chair: createIconDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none">
      <path d="M34 16v36M62 16v36M34 22h28M34 42h28" stroke="#8B2CC3" stroke-width="4" stroke-linecap="round"/>
      <path d="M28 50h40v12H28z" stroke="#8B2CC3" stroke-width="4"/>
      <path d="M28 62l20 16M68 62L48 78" stroke="#8B2CC3" stroke-width="4" stroke-linecap="round"/>
    </svg>
  `),
  whyPractice: createIconDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none">
      <path d="M24 44V28a6 6 0 0 1 6-6h8v24" stroke="#fff" stroke-width="4" stroke-linejoin="round"/>
      <path d="M38 46V22a5 5 0 0 1 10 0v18" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
      <path d="M48 44V26a5 5 0 0 1 10 0v18" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
      <path d="M58 46V32a5 5 0 0 1 10 0v22a12 12 0 0 1-12 12H38L24 52" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M66 16l2-6M76 22l6-2M72 12l4-4" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
    </svg>
  `),
  whyConditions: createIconDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none">
      <path d="M18 30a6 6 0 0 1 6-6h34l20 14v28a6 6 0 0 1-6 6H24a6 6 0 0 1-6-6z" stroke="#fff" stroke-width="4" stroke-linejoin="round"/>
      <path d="M58 42h16a8 8 0 0 1 0 16H58a8 8 0 0 1 0-16Z" stroke="#fff" stroke-width="4"/>
      <circle cx="66" cy="50" r="2" fill="#fff"/>
      <path d="M44 24 58 10l10 18" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `),
  whyInvolvement: createIconDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none">
      <circle cx="38" cy="26" r="10" stroke="#fff" stroke-width="4"/>
      <circle cx="58" cy="26" r="10" stroke="#fff" stroke-width="4"/>
      <rect x="24" y="42" width="32" height="24" rx="4" stroke="#fff" stroke-width="4"/>
      <path d="M56 48 74 40v28L56 60" stroke="#fff" stroke-width="4" stroke-linejoin="round"/>
      <path d="M34 54h12M34 60h12" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
    </svg>
  `),
  whyNetworking: createIconDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none">
      <circle cx="32" cy="38" r="8" stroke="#fff" stroke-width="4"/>
      <circle cx="64" cy="38" r="8" stroke="#fff" stroke-width="4"/>
      <path d="M24 74V58a8 8 0 0 1 8-8h0a8 8 0 0 1 8 8v16" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
      <path d="M56 74V58a8 8 0 0 1 8-8h0a8 8 0 0 1 8 8v16" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
      <path d="M40 30 48 20l8 10" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M48 20v20" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
      <path d="M44 14l-2-6M52 14l2-6M58 18l6-4" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
    </svg>
  `),
  guaranteeOfficial: createIconDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none">
      <path d="M30 14h26l18 18v40a8 8 0 0 1-8 8H30a8 8 0 0 1-8-8V22a8 8 0 0 1 8-8Z" stroke="#fff" stroke-width="4" stroke-linejoin="round"/>
      <path d="M56 14v18h18M38 44h20M38 56h20M38 68h16" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `),
  guaranteeRefund: createIconDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none">
      <circle cx="48" cy="34" r="16" stroke="#fff" stroke-width="4"/>
      <path d="M48 24v20M54 28c0-2.5-3-4-6-4s-6 1.5-6 4 3 4 6 4 6 1.5 6 4-3 4-6 4-6-1.5-6-4" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
      <path d="M18 70h16l8-6h12l18-10a5 5 0 0 1 5 9L58 76H34l-16-2z" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `),
  guaranteeContract: createIconDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none">
      <path d="M24 14h34l14 14v46a8 8 0 0 1-8 8H24a8 8 0 0 1-8-8V22a8 8 0 0 1 8-8Z" stroke="#fff" stroke-width="4" stroke-linejoin="round"/>
      <path d="M58 14v14h14M32 44h22M32 56h22M32 68h16" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m58 62 12-12a6 6 0 0 1 8 8L66 70l-12 4z" stroke="#fff" stroke-width="4" stroke-linejoin="round"/>
    </svg>
  `),
}

export const OSNOVY_PRODYUSIROVANIYA_PAGE = {
  id: 'producing',
  slug: 'producing',
  title: 'Основы продюсирования',
  hero: {
    titleLines: ['Основы', 'продюсирования'],
    description: 'ПРИОБРЕТИТЕ ПРОФЕССИЮ И НЕЗАВИСИМОСТЬ',
    action: {
      label: 'НАЧАТЬ',
      href: 'https://wa.me/79675556082',
      external: true,
    },
    image: 'https://theoneschool.ru/wp-content/uploads/2022/07/osnovy-prodyusirovaniya.jpg',
    alt: 'Обложка курса «Основы продюсирования»',
  },
  benefits: {
    items: [
      {
        id: 'budget',
        icon: { src: PRODUCING_ICONS.document, alt: 'Иконка сметы' },
        title: 'СМЕТА',
        paragraphs: ['Сделаете смету своего проекта.'],
      },
      {
        id: 'funding',
        icon: { src: PRODUCING_ICONS.camera, alt: 'Иконка финансирования' },
        title: 'ФИНАНСИРОВАНИЕ',
        paragraphs: ['Определитесь, где взять финансирование на ваш проект.'],
      },
      {
        id: 'copyright',
        icon: { src: PRODUCING_ICONS.masterclass, alt: 'Иконка авторского права' },
        title: 'АВТОРСКОЕ ПРАВО',
        paragraphs: ['Защитите свои права.'],
      },
      {
        id: 'portfolio',
        icon: { src: PRODUCING_ICONS.laptop, alt: 'Иконка портфолио' },
        title: 'ПОРТФОЛИО',
        paragraphs: ['Создадите портфолио.'],
      },
    ],
    action: {
      label: 'ХОЧУ СТАТЬ ПРОДЮСЕРОМ',
    },
  },
  learningSection: {
    title: 'КАК ПРОХОДИТ ОБУЧЕНИЕ?',
    items: [
      {
        id: 'video-lessons',
        icon: { src: PRODUCING_ICONS.camera, alt: 'Иконка видео-уроков' },
        title: 'ВИДЕО-УРОКИ',
        paragraphs: ['Творческие видео-уроки. Более 37 тем.'],
      },
      {
        id: 'tasks',
        icon: { src: PRODUCING_ICONS.document, alt: 'Иконка практики' },
        title: 'КАК ПРОБИТЬСЯ?',
        paragraphs: ['Практические задания. Преподаватель будет проверять каждое задание.'],
      },
      {
        id: 'masterclasses',
        icon: { src: PRODUCING_ICONS.masterclass, alt: 'Иконка мастер-классов' },
        title: 'МАСТЕР-КЛАССЫ',
        paragraphs: ['Лекции и мастер-классы. Если не сможете прийти — все встречи записываются.'],
      },
    ],
  },
  audienceSection: {
    title: 'ЭТОТ КУРС ДЛЯ ВАС, ЕСЛИ…',
    items: [
      {
        id: 'audience-producer',
        title: 'ПРОДЮСЕР',
        points: [
          'Начинающий кинопродюсер.',
          'Хотите развиваться в продюсировании и работать продюсером или поступать на профильный курс в вуз.',
          'Хотите разобраться, кто такой продюсер, какие бывают продюсеры и в чем их функциональные обязанности.',
          'Хотите понять, как взаимодействовать с продюсерами.',
        ],
      },
      {
        id: 'audience-author',
        title: 'АВТОР ПРОЕКТА',
        points: [
          'Независимый продюсер, режиссер или сценарист, который только начинает развиваться в сфере кинопроизводства.',
          'Хотите разобраться в нюансах продюсирования с самых основ.',
          'У Вас есть конкретные вопросы по вашему проекту и Вы хотите задать их действующим кинопродюсерам.',
        ],
      },
      {
        id: 'audience-director',
        title: 'РЕЖИССЕР / СЦЕНАРИСТ',
        points: [
          'У Вас пока нет продюсера и команды, и Вы все делаете самостоятельно.',
          'Хотите понять, можете ли вы совмещать работу автора и продюсера.',
          'Хотите разобраться, можете ли самостоятельно продюсировать свой проект.',
          'Хотите понять, на что обращают внимание продюсеры, рассматривая Ваш проект.',
        ],
      },
    ],
  },
  whyUsSection: {
    title: 'ПОЧЕМУ МЫ?',
    subtitle: 'Потому что всё, что мы делаем, мы делаем хорошо',
    items: [
      {
        id: 'why-practice',
        icon: { src: PRODUCING_ICONS.whyPractice, alt: 'Иконка практики' },
        title: 'РЕАЛЬНАЯ ПРАКТИКА',
        text: 'На наших курсах Вы не просто послушаете лекции. Вы освоите основы продюсирования и реально шаг за шагом разберетесь в данной теме.',
      },
      {
        id: 'why-conditions',
        icon: { src: PRODUCING_ICONS.whyConditions, alt: 'Иконка условий' },
        title: 'УСЛОВИЯ',
        text: 'Основной курс длится 5 месяцев. После его завершения у Вас остается 60 дней доступа к видео-урокам, платформе, чату, закрытой группе и ответам преподавателей.',
      },
      {
        id: 'why-involvement',
        icon: { src: PRODUCING_ICONS.whyInvolvement, alt: 'Иконка вовлеченности' },
        title: 'ВОВЛЕЧЕННОСТЬ',
        text: 'Мы относимся с трепетом и заботой к каждому студенту. Читаем каждое творческое задание. При необходимости замораживаем курс, созваниваемся, общаемся и всегда на связи.',
      },
      {
        id: 'why-networking',
        icon: { src: PRODUCING_ICONS.whyNetworking, alt: 'Иконка знакомств' },
        title: 'ЗНАКОМСТВА',
        text: 'Вы приобретете нетворкинг, знакомства и связи. Каждый месяц проходят закрытые Zoom-вечеринки, где студенты и действующие кинематографисты знакомятся, общаются и делятся проектами.',
      },
    ],
  },
  stagesSection: {
    steps: [
      {
        id: 'producing-module-1',
        label: '1 МОДУЛЬ',
        title: 'ВВЕДЕНИЕ В ПРОДЮСИРОВАНИЕ',
        topics: [
          { title: 'Тема №1-7', items: ['Задачи и роль продюсера', 'Этапы разработки проекта', 'Финансовое планирование проекта и показатели', 'Дистрибуция, маркетинг и презентация проекта'] },
        ],
        carousel: { enabled: false, slides: [] },
      },
      {
        id: 'producing-module-2',
        label: '2 МОДУЛЬ',
        title: 'АВТОРСКОЕ ПРАВО',
        topics: [
          { title: 'Тема №8-12', items: ['Интеллектуальная собственность', 'Виды прав на интеллектуальную собственность', 'Методы защиты интеллектуальной собственности в кино', 'Договор возмездного оказания услуг'] },
        ],
        carousel: { enabled: false, slides: [] },
      },
      {
        id: 'producing-module-3',
        label: '3 МОДУЛЬ',
        title: 'ФИНАНСИРОВАНИЕ ПРОЕКТОВ',
        topics: [
          { title: 'Тема №13-18', items: ['Финансирование кинопроектов', 'Негосударственные фонды и питчинги', 'Иные способы финансирования', 'Бизнес-план проекта'] },
        ],
        carousel: { enabled: false, slides: [] },
      },
      {
        id: 'producing-module-4',
        label: '4 МОДУЛЬ',
        title: 'СМЕТА',
        topics: [
          { title: 'Тема №19-24', items: ['Кинопроизводство как экономический феномен', 'Модели продюсерской деятельности', 'Смета кинопроекта и специфика расходов', 'Разделы сметы 4-13'] },
        ],
        carousel: { enabled: false, slides: [] },
      },
      {
        id: 'producing-module-5',
        label: '5 МОДУЛЬ',
        title: 'ОРГАНИЗАЦИЯ СЪЕМОЧНОГО ПРОЦЕССА',
        topics: [
          { title: 'Тема №25-29', items: ['Продюсерские вопросы до начала производства', 'Этапы разработки проекта', 'Девелопмент и позиционирование', 'Съемочная группа и организация съемочного процесса'] },
        ],
        carousel: { enabled: false, slides: [] },
      },
      {
        id: 'producing-module-6',
        label: '6 МОДУЛЬ',
        title: 'КО-ПРОДЮСИРОВАНИЕ. РАБОТА ЗАГРАНИЦЕЙ',
        topics: [
          { title: 'Тема №30-37', items: ['Основы ко-продюсирования', 'Международная терминология', 'Поддержка совместного производства', 'Как представить фильм международным продюсерам', 'Главные международные тренинги и программы нетворкинга'] },
        ],
        carousel: { enabled: false, slides: [] },
      },
    ],
  },
  lecturersSection: {
    title: 'АВТОР И ПРЕПОДАВАТЕЛЬ КУРСА',
    description: 'Курс ведет действующий продюсер школы TheOneFilm.',
    items: [
      {
        id: 'producing-lecturer-1',
        name: 'Элина Касаткина',
        role: 'продюсер',
        image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Элина Касаткина',
      },
    ],
  },
  pricingTableSection: {
    columns: [
      { id: 'feature', label: 'ТАРИФЫ' },
      { id: 'mini', label: '«МИНИ»' },
      { id: 'optimal', label: '«ОПТИМАЛЬНЫЙ»' },
      { id: 'optimal-plus', label: '«ОПТИМАЛЬНЫЙ +»' },
    ],
    rows: [
      { id: 'networking', feature: 'Нетворкинг', values: [{ columnId: 'mini', text: 'Да, встречи 1 раз в месяц' }, { columnId: 'optimal', text: 'Да, встречи 1 раз в месяц' }, { columnId: 'optimal-plus', text: 'Да, встречи 1 раз в месяц' }] },
      { id: 'admin', feature: 'Сопровождение администратора', values: [{ columnId: 'mini', text: 'Да' }, { columnId: 'optimal', text: 'Да' }, { columnId: 'optimal-plus', text: 'Да' }] },
      { id: 'curator', feature: 'Сопровождение куратора', values: [{ columnId: 'mini', text: 'Нет' }, { columnId: 'optimal', text: 'Да' }, { columnId: 'optimal-plus', text: 'Да' }] },
      { id: 'feedback', feature: 'Проверка творческих заданий, письменная обратная связь', values: [{ columnId: 'mini', text: 'Нет' }, { columnId: 'optimal', text: 'В течение 2-5 дней' }, { columnId: 'optimal-plus', text: 'В течение 2-5 дней' }] },
      { id: 'lectures', feature: 'Онлайн мастер-классы и лекции', values: [{ columnId: 'mini', text: 'Нет' }, { columnId: 'optimal', text: 'Нет' }, { columnId: 'optimal-plus', text: 'Да, 1 раз в 2-4 недели' }] },
      { id: 'chat', feature: 'Доступ в закрытый чат киношников «The One»', values: [{ columnId: 'mini', text: 'Да' }, { columnId: 'optimal', text: 'Да' }, { columnId: 'optimal-plus', text: 'Да' }] },
      { id: 'group', feature: 'Доступ в закрытую группу школы «The One» в VK', values: [{ columnId: 'mini', text: 'Да' }, { columnId: 'optimal', text: 'Да' }, { columnId: 'optimal-plus', text: 'Да' }] },
      { id: 'tasks', feature: 'Творческие задания после каждой темы', values: [{ columnId: 'mini', text: 'Да' }, { columnId: 'optimal', text: 'Да' }, { columnId: 'optimal-plus', text: 'Да' }] },
      { id: 'support', feature: 'Полное сопровождение на платформе обучения', values: [{ columnId: 'mini', text: 'Нет' }, { columnId: 'optimal', text: '5 месяцев' }, { columnId: 'optimal-plus', text: '5 месяцев' }] },
      { id: 'discount', feature: 'Скидка на продолжение обучения на других курсах TheOneFilm', values: [{ columnId: 'mini', text: '25%' }, { columnId: 'optimal', text: '25%' }, { columnId: 'optimal-plus', text: '25%' }] },
      { id: 'certificate', feature: 'Сертификат о прохождении курса от The One Film', values: [{ columnId: 'mini', text: 'Да' }, { columnId: 'optimal', text: 'Да' }, { columnId: 'optimal-plus', text: 'Да' }] },
    ],
  },
  guaranteesSection: {
    title: 'Гарантии',
    subtitle: 'Мы берем на себя обязательства и выполняем их',
    items: [
      { id: 'official', icon: { src: PRODUCING_ICONS.guaranteeOfficial, alt: 'Иконка официально' }, title: 'Официально', text: 'Мы официальная компания с 2018 года. Мы платим налоги и сборы.' },
      { id: 'refund', icon: { src: PRODUCING_ICONS.guaranteeRefund, alt: 'Иконка возврата' }, title: 'Возврат', text: 'Мы обязуемся вернуть деньги в соответствии с договором оферты, в случае, если Вам не подойдет наша методика.' },
      { id: 'contract', icon: { src: PRODUCING_ICONS.guaranteeContract, alt: 'Иконка договора' }, title: 'Договор', text: 'Мы работаем по договору. Вы платите юридическому лицу.' },
    ],
    action: {
      label: 'ДОГОВОР ОФЕРТЫ',
      href: 'https://theoneschool.ru/oferta/',
    },
  },
  ctaBannerSection: {
    titleLines: ['Выбирайте жизнь.', 'Выбирайте будущее.'],
    action: {
      label: 'НАЧАТЬ ЖИТЬ!',
    },
    image: 'https://theoneschool.ru/wp-content/uploads/2022/06/252.png',
    alt: 'Сертификат курса основы продюсирования',
  },
  cinematicBlock: {
    titleLines: ['ВАШЕ ЗАВТРА', 'БУДЕТ ТАКИМ ЖЕ', 'КАК СЕГОДНЯ?', 'ИЛИ...'],
    image: 'https://theoneschool.ru/wp-content/uploads/2022/07/osnovy-prodyusirovaniya.jpg',
    alt: 'Курс основы продюсирования',
  },
}

export const OSNOVY_PRODYUSIROVANIYA_CONFIG = {
  producing: OSNOVY_PRODYUSIROVANIYA_PAGE,
}
