const createIconDataUrl = (svg) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`

const DIRECTING_ICONS = {
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

export const REZHISSURA_IGROVOGO_KINO_PAGE = {
  id: 'directing',
  slug: 'directing',
  title: 'Режиссура игрового кино',
  hero: {
    titleLines: ['Режиссура', 'игрового кино'],
    description: 'снимайте кино под руководством практикующих режиссеров, операторов и кураторов школы',
    action: {
      label: 'НАЧАТЬ',
      href: 'https://wa.me/79675556082',
      external: true,
    },
    image: 'https://images.pexels.com/photos/8106770/pexels-photo-8106770.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Оператор работает с камерой на площадке',
  },
  whyUsSection: {
    title: 'Почему мы?',
    subtitle: 'Потому что всё, что мы делаем, мы делаем хорошо',
    items: [
      {
        id: 'why-practice',
        icon: {
          src: DIRECTING_ICONS.whyPractice,
          alt: 'Иконка практики',
        },
        title: 'Реальная практика',
        text: 'На наших курсах Вы не просто слушаете теорию, а сразу применяете её в работе над сценами, этюдами и режиссёрскими задачами шаг за шагом.',
      },
      {
        id: 'why-conditions',
        icon: {
          src: DIRECTING_ICONS.whyConditions,
          alt: 'Иконка условий',
        },
        title: 'Условия',
        text: 'Основной курс длится 3 месяца, а после его завершения у Вас остаётся дополнительный доступ к материалам, платформе, чату и обратной связи от кураторов.',
      },
      {
        id: 'why-involvement',
        icon: {
          src: DIRECTING_ICONS.whyInvolvement,
          alt: 'Иконка вовлеченности',
        },
        title: 'Вовлеченность',
        text: 'Мы внимательно относимся к каждому студенту: смотрим работы, обсуждаем решения, даём рекомендации и сопровождаем на протяжении всего обучения.',
      },
      {
        id: 'why-networking',
        icon: {
          src: DIRECTING_ICONS.whyNetworking,
          alt: 'Иконка знакомств',
        },
        title: 'Знакомства',
        text: 'Во время обучения Вы попадаете в активную профессиональную среду, знакомитесь с единомышленниками, актёрами, сценаристами и режиссёрами, с которыми можно запускать проекты.',
      },
    ],
  },
  benefits: {
    items: [
      {
        id: 'language',
        icon: {
          src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Icons8%20flat%20film%20reel.svg',
          alt: 'Иконка кинопленки',
        },
        title: 'Язык кадра',
        paragraphs: [
          'Научитесь выстраивать визуальное решение сцены, работать с мизансценой и ритмом.',
          'Поймете, как доносить историю через изображение, а не только через диалоги.',
        ],
      },
      {
        id: 'set',
        icon: {
          src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Icons8%20flat%20camcorder.svg',
          alt: 'Иконка камеры',
        },
        title: 'Съемочная практика',
        paragraphs: [
          'Познакомитесь с реальной работой режиссера на площадке и взаимодействием со всей группой.',
          'Сможете пройти путь от разбора сценария до постановки собственной сцены.',
        ],
      },
      {
        id: 'career',
        icon: {
          src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Icons8%20flat%20clapperboard.svg',
          alt: 'Иконка хлопушки',
        },
        title: 'Профессия',
        paragraphs: [
          'Получите возможность собрать режиссерское портфолио и снять учебные работы в команде.',
          'Лучшие студенты получают рекомендации, стажировки и доступ к реальным проектам школы.',
        ],
      },
    ],
    action: {
      label: 'КАК ПОПАСТЬ НА КУРС?',
    },
  },
  learningProcessSection: {
    title: 'КАК ПРОХОДИТ ОБУЧЕНИЕ?',
    items: [
      {
        id: 'video-lessons',
        icon: {
          src: DIRECTING_ICONS.camera,
          alt: 'Иконка видеокамеры',
        },
        title: 'ВИДЕО-УРОКИ',
        paragraphs: [
          'Будете смотреть специально подготовленные уроки и разборы сцен с примерами из мирового кино.',
          'Материал устроен так, чтобы вы видели режиссёрские решения не абстрактно, а на конкретных фильмах.',
        ],
      },
      {
        id: 'creative-tasks',
        icon: {
          src: DIRECTING_ICONS.document,
          alt: 'Иконка документа',
        },
        title: 'ТВОРЧЕСКИЕ ЗАДАНИЯ',
        paragraphs: [
          'После каждого урока будут задания на анализ, постановку и режиссёрское мышление.',
          'Кураторы помогают доработать идеи и превратить их в ясные визуальные и постановочные решения.',
        ],
      },
      {
        id: 'workshops',
        icon: {
          src: DIRECTING_ICONS.masterclass,
          alt: 'Иконка мастер-классов',
        },
        title: 'МАСТЕР-КЛАССЫ',
        paragraphs: [
          'Будете посещать мастерские, лекции и мастер-классы с практикующими режиссёрами и продюсерами.',
          'Если пропустите встречу, сможете посмотреть запись и вернуться к материалу позже.',
        ],
      },
    ],
  },
  learningSection: {
    title: 'КАК УЧИМСЯ?',
    items: [
      {
        id: 'theory',
        icon: {
          src: DIRECTING_ICONS.laptop,
          alt: 'Иконка ноутбука',
        },
        title: 'ТЕОРИЯ',
        paragraphs: [
          'Будете посещать онлайн мастерские, лекции, разборы фильмов и творческие встречи с практикующими режиссерами.',
          'Даже если пропустите занятие, материалы и записи будут доступны на платформе в удобное время.',
        ],
      },
      {
        id: 'practice',
        icon: {
          src: DIRECTING_ICONS.chair,
          alt: 'Иконка режиссерского кресла',
        },
        title: 'ПРАКТИКА',
        paragraphs: [
          'С первого модуля будете выполнять практические задания, разбирать сцены и собирать режиссерские решения.',
          'Кураторы помогут превратить идеи в конкретные постановочные планы и визуальный язык проекта.',
        ],
      },
      {
        id: 'industry-path',
        icon: {
          src: DIRECTING_ICONS.camera,
          alt: 'Иконка кинокамеры',
        },
        title: 'ИНДУСТРИЯ',
        paragraphs: [
          'Получите обратную связь от профессионалов индустрии и понимание, как развивать проект дальше.',
          'Лучшие студенты смогут войти в реальные команды, стажировки и продакшен-процессы школы.',
        ],
      },
    ],
  },
  audienceSection: {
    title: 'ДЛЯ КОГО СОЗДАН КУРС?',
    items: [
      {
        id: 'audience-1',
        title: '1 Сценарист',
        points: [
          'Новичок.',
          'Любите писать и хотите лучше понимать, как текст превращается в изображение.',
          'Хотите глубже разбираться в драматургии.',
          'Ищете путь в кино через историю и работу с материалом.',
        ],
      },
      {
        id: 'audience-2',
        title: '2 Режиссер',
        points: [
          'Новичок.',
          'Мечтаете снять свой фильм.',
          'Любите смотреть фильмы и говорить о них.',
          'Хотите попробовать себя в роли режиссёра.',
          'Режиссура близка сердцу, но вы не понимаете, с чего начать.',
        ],
      },
      {
        id: 'audience-3',
        title: '3 Не определился',
        points: [
          'Вы влюблены в кинематограф.',
          'Хотите связать с ним жизнь.',
          'Пока не понимаете, какая именно профессия в кино вам ближе, и хотите попробовать разные роли.',
        ],
      },
    ],
  },
  carouselSection: {
    title: 'РАЗБИРАЕМ РЕЖИССУРУ',
    action: {
      label: 'ХОЧУ СТАТЬ РЕЖИССЕРОМ',
      event: 'open-consultation',
    },
    slides: [
      {
        id: 'directing-carousel-1',
        image: 'https://images.pexels.com/photos/8107226/pexels-photo-8107226.jpeg?auto=compress&cs=tinysrgb&w=1800',
        alt: 'Оператор и режиссер работают на съемках',
      },
      {
        id: 'directing-carousel-2',
        image: 'https://images.pexels.com/photos/8106770/pexels-photo-8106770.jpeg?auto=compress&cs=tinysrgb&w=1800',
        alt: 'Команда киношников обсуждает кадр',
      },
      {
        id: 'directing-carousel-3',
        image: 'https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&w=1800',
        alt: 'Кинокамера крупным планом',
      },
    ],
  },
  stagesSection: {
    steps: [
      {
        id: 'directing-step-1',
        number: 1,
        label: '1 шаг',
        title: 'Осваиваем визуальное мышление',
        topics: [
          {
            title: 'Тема №1 Режиссёр и его язык',
            items: [
              'Изображение как способ рассказа',
              'Мизансцена и точка зрения',
              'Как режиссёр управляет вниманием зрителя',
            ],
          },
          {
            title: 'Тема №2 Анализ сцены',
            items: [
              'Разбор драматического действия',
              'Конфликт внутри эпизода',
              'Задача кадра',
            ],
          },
        ],
        carousel: {
          enabled: true,
          slides: [
            {
              id: '1',
              key: '1-1',
              image: 'https://images.pexels.com/photos/8107226/pexels-photo-8107226.jpeg?auto=compress&cs=tinysrgb&w=1600',
              alt: 'Режиссёр и оператор работают на съёмке',
            },
            {
              id: '1',
              key: '1-2',
              image: 'https://images.pexels.com/photos/8106770/pexels-photo-8106770.jpeg?auto=compress&cs=tinysrgb&w=1600',
              alt: 'Команда обсуждает кадр',
            },
          ],
        },
      },
      {
        id: 'directing-step-2',
        number: 2,
        label: '2 шаг',
        title: 'Работаем со сценарием',
        topics: [
          {
            title: 'Тема №3 Разбор сценария для постановки',
            items: [
              'Сверхзадача сцены',
              'Темпоритм',
              'Что выносить в кадр, а что оставлять за кадром',
            ],
          },
          {
            title: 'Тема №4 Режиссёрская экспликация',
            items: [
              'Визуальные референсы',
              'Смысловые акценты',
              'Подготовка режиссёрского видения проекта',
            ],
          },
        ],
        carousel: {
          enabled: false,
          slides: [],
        },
      },
      {
        id: 'directing-step-3',
        number: 3,
        label: '3 шаг',
        title: 'Строим работу с актёром',
        topics: [
          {
            title: 'Тема №5 Актёрский разбор',
            items: [
              'Психология персонажа',
              'Задачи и действия',
              'Как разговаривать с актёром на площадке',
            ],
          },
          {
            title: 'Тема №6 Репетиции',
            items: [
              'Подготовка до съёмок',
              'Импровизация и точность',
              'Поиск правды в сцене',
            ],
          },
        ],
        carousel: {
          enabled: false,
          slides: [],
        },
      },
      {
        id: 'directing-step-4',
        number: 4,
        label: '4 шаг',
        title: 'Выходим на площадку',
        topics: [
          {
            title: 'Тема №7 Работа с оператором и художником',
            items: [
              'Свет и композиция',
              'Пространство кадра',
              'Согласование решений команды',
            ],
          },
          {
            title: 'Тема №8 Постановка сцены',
            items: [
              'Блокинг',
              'Режиссёрские задачи в процессе съёмки',
              'Контроль эмоций и ритма',
            ],
          },
        ],
        carousel: {
          enabled: false,
          slides: [],
        },
      },
      {
        id: 'directing-step-5',
        number: 5,
        label: '5 шаг',
        title: 'Собираем фильм на монтаже',
        topics: [
          {
            title: 'Тема №9 Монтажное мышление',
            items: [
              'Выбор дублей',
              'Ритм сцены после съёмки',
              'Как монтаж меняет смысл',
            ],
          },
          {
            title: 'Тема №10 Звук и музыкальное решение',
            items: [
              'Работа со звуковой атмосферой',
              'Музыка как драматургический инструмент',
              'Финальный тон сцены',
            ],
          },
        ],
        carousel: {
          enabled: false,
          slides: [],
        },
      },
      {
        id: 'directing-step-6',
        number: 6,
        label: '6 шаг',
        title: 'Готовим проект к показу',
        topics: [
          {
            title: 'Тема №11 Упаковка режиссёрской работы',
            items: [
              'Как представить свою работу',
              'Фестивальная и индустриальная перспектива',
              'Сбор портфолио режиссёра',
            ],
          },
          {
            title: 'Тема №12 Дальнейший маршрут в профессии',
            items: [
              'Командная работа на реальных проектах',
              'Стажировки и коллаборации',
              'Следующие шаги после обучения',
            ],
          },
        ],
        carousel: {
          enabled: false,
          slides: [],
        },
      },
    ],
  },
  lecturersSection: {
    title: 'ВСЕ ЛЕКТОРЫ ШКОЛЫ',
    description:
      'Кто проводил и проводит лекции, мастер-классы и встречи в TheOneFilm',
    items: [
      {
        id: 'directing-lecturer-1',
        name: 'Ирина Волкова',
        role: 'режиссер, монтажер',
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Ирина Волкова',
      },
      {
        id: 'directing-lecturer-2',
        name: 'Егор Чичканов',
        role: 'сценарист, режиссер',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Егор Чичканов',
      },
      {
        id: 'directing-lecturer-3',
        name: 'Александр Бородянский',
        role: 'сценарист, актер, режиссер, продюсер',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Александр Бородянский',
      },
      {
        id: 'directing-lecturer-4',
        name: 'Дмитрий Астрахан',
        role: 'актер, режиссер, продюсер',
        image: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Дмитрий Астрахан',
      },
      {
        id: 'directing-lecturer-5',
        name: 'Михаил Богомазов',
        role: 'оператор-постановщик',
        image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Михаил Богомазов',
      },
      {
        id: 'directing-lecturer-6',
        name: 'Наташа Меркулова',
        role: 'сценарист, режиссер',
        image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Наташа Меркулова',
      },
    ],
  },
  lecturerProjectsSection: {
    title: 'Некоторые проекты, на которых работали наши лекторы',
    controls: {
      prevLabel: 'Предыдущие проекты лекторов',
      nextLabel: 'Следующие проекты лекторов',
    },
    items: [
      {
        id: 'directing-project-1',
        image: 'https://picsum.photos/seed/directing-dialogi/600/900',
        alt: 'Постер драматического проекта',
      },
      {
        id: 'directing-project-2',
        image: 'https://picsum.photos/seed/directing-comedy/600/900',
        alt: 'Постер комедийного проекта',
      },
      {
        id: 'directing-project-3',
        image: 'https://picsum.photos/seed/directing-sci-fi/600/900',
        alt: 'Постер фантастического проекта',
      },
      {
        id: 'directing-project-4',
        image: 'https://picsum.photos/seed/directing-space/600/900',
        alt: 'Постер космического проекта',
      },
      {
        id: 'directing-project-5',
        image: 'https://picsum.photos/seed/directing-mystery/600/900',
        alt: 'Постер мистического проекта',
      },
      {
        id: 'directing-project-6',
        image: 'https://picsum.photos/seed/directing-biopic/600/900',
        alt: 'Постер биографического проекта',
      },
      {
        id: 'directing-project-7',
        image: 'https://picsum.photos/seed/directing-drama/600/900',
        alt: 'Постер драматического проекта',
      },
      {
        id: 'directing-project-8',
        image: 'https://picsum.photos/seed/directing-noir/600/900',
        alt: 'Постер нуарного проекта',
      },
      {
        id: 'directing-project-9',
        image: 'https://picsum.photos/seed/directing-war/600/900',
        alt: 'Постер военного проекта',
      },
      {
        id: 'directing-project-10',
        image: 'https://picsum.photos/seed/directing-cinema/600/900',
        alt: 'Постер кинопроекта',
      },
    ],
  },
  pricingTableSection: {
    columns: [
      { id: 'feature', label: 'Тарифы' },
      { id: 'amateur', label: '«Любитель»' },
      { id: 'optimal', label: '«Оптимальный»' },
      { id: 'vip', label: '«ВИП»' },
    ],
    rows: [
      { id: 'duration', feature: 'Срок обучения', values: [{ columnId: 'amateur', text: '4 месяца' }, { columnId: 'optimal', text: '5 месяцев' }, { columnId: 'vip', text: '6 месяцев' }] },
      { id: 'access', feature: 'Срок доступа к основным материалам курса после окончания курса', values: [{ columnId: 'amateur', text: '2 месяца' }, { columnId: 'optimal', text: '12 месяцев' }, { columnId: 'vip', text: '12 месяцев' }] },
      { id: 'lectures', feature: 'Онлайн-мастер классы и лекции', values: [{ columnId: 'amateur', text: 'Нет' }, { columnId: 'optimal', text: 'Да, 3 месяца 2-4 раза в неделю' }, { columnId: 'vip', text: 'Да, 6 месяцев 2-4 раза в неделю' }] },
      { id: 'curator', feature: 'Мастерские с куратором. Разбор ваших проектов.', values: [{ columnId: 'amateur', text: 'Нет' }, { columnId: 'optimal', text: '1 раз в неделю, затем 1 раз в 2 недели' }, { columnId: 'vip', text: '1 раз в неделю, затем 1 раз в 2 недели' }] },
      { id: 'knowledge', feature: 'База знаний, лекции киношколы', values: [{ columnId: 'amateur', text: 'Нет' }, { columnId: 'optimal', text: 'Да' }, { columnId: 'vip', text: 'Да' }] },
      { id: 'networking', feature: 'Нетворкинг. Знакомимся с коллегами, преподавателями.', values: [{ columnId: 'amateur', text: 'Нет' }, { columnId: 'optimal', text: 'Да' }, { columnId: 'vip', text: 'Да' }] },
      { id: 'admin', feature: 'Сопровождение администратора', values: [{ columnId: 'amateur', text: 'Нет' }, { columnId: 'optimal', text: 'Да' }, { columnId: 'vip', text: 'Да' }] },
      { id: 'feedback', feature: 'Проверка творческих заданий, письменная обратная связь', values: [{ columnId: 'amateur', text: '1 раз в неделю' }, { columnId: 'optimal', text: '1 раз в 3-4 дня' }, { columnId: 'vip', text: '1 раз в 2 дня' }] },
      { id: 'chat', feature: 'Доступ в закрытый чат киношников «The One»', values: [{ columnId: 'amateur', text: 'Да' }, { columnId: 'optimal', text: 'Да' }, { columnId: 'vip', text: 'Да' }] },
      { id: 'certificate', feature: 'Сертификат о прохождении курса', values: [{ columnId: 'amateur', text: 'Да' }, { columnId: 'optimal', text: 'Да' }, { columnId: 'vip', text: 'Да' }] },
    ],
  },
  guaranteesSection: {
    title: 'Гарантии',
    subtitle: 'Мы берем на себя обязательства и выполняем их',
    items: [
      { id: 'official', icon: { src: DIRECTING_ICONS.guaranteeOfficial, alt: 'Иконка официально' }, title: 'Официально', text: 'Мы официально зарегистрированы и платим налоги с 2018 года.' },
      { id: 'refund', icon: { src: DIRECTING_ICONS.guaranteeRefund, alt: 'Иконка возврата' }, title: 'Возврат', text: 'Мы обязуемся вернуть деньги в соответствии с договором оферты, если Вам не подойдет наша методика.' },
      { id: 'contract', icon: { src: DIRECTING_ICONS.guaranteeContract, alt: 'Иконка договора' }, title: 'Договор', text: 'Мы работаем по договору-оферте. В нем максимально подробно указаны все нюансы обучения.' },
    ],
    action: {
      label: 'Договор оферты',
      href: '#',
    },
  },
  schedulePreviewSection: {
    title: 'ПРИМЕР РАСПИСАНИЯ ОНЛАЙН ВСТРЕЧ',
    image:
      'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1800',
    alt: 'Пример расписания онлайн-встреч',
  },
  ctaBannerSection: {
    titleLines: ['Выбирайте жизнь.', 'Выбирайте будущее.'],
    action: {
      label: 'НАЧАТЬ ЖИТЬ!',
    },
    image:
      'https://images.pexels.com/photos/8108061/pexels-photo-8108061.jpeg?auto=compress&cs=tinysrgb&w=1800',
    alt: 'Кинематографичный герой на драматичном фоне',
  },
  cinematicBlock: {
    titleLines: [
      'Ваш следующий кадр',
      'будет таким же,',
      'как вчера?',
      'Или...',
    ],
    image: 'https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Портрет с контрастным киношным светом',
  },
}

export const REZHISSURA_IGROVOGO_KINO_CONFIG = {
  directing: REZHISSURA_IGROVOGO_KINO_PAGE,
}
