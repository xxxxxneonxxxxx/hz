const createIconDataUrl = (svg) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`

const SCREENWRITING_ICONS = {
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

export const SCENARNOE_MASTERSTVO_PAGE = {
  id: 'screenwriting',
  slug: 'screenwriting',
  title: 'Сценарное мастерство',
  hero: {
    titleLines: ['СЦЕНАРНОЕ', 'МАСТЕРСТВО'],
    description: 'напишите и реализуйте сценарий своего фильма под руководством редакторов',
    action: {
      label: 'НАЧАТЬ',
      href: 'https://wa.me/79675556082',
      external: true,
    },
    image: 'https://theoneschool.ru/wp-content/uploads/2022/07/scenarnoe-masterstvo.jpg',
    alt: 'Обложка курса «Сценарное мастерство»',
  },
  whyUsSection: {
    title: 'ПОЧЕМУ МЫ?',
    subtitle: 'Потому что всё, что мы делаем, мы делаем хорошо',
    items: [
      {
        id: 'why-practice',
        icon: { src: SCREENWRITING_ICONS.whyPractice, alt: 'Иконка практики' },
        title: 'РЕАЛЬНАЯ ПРАКТИКА',
        text: 'Вы освоите не только основы драматургии и сценарного мастерства, но и нестандартные структуры и методы и реально, шаг за шагом, напишете свой сценарий.',
      },
      {
        id: 'why-involvement',
        icon: { src: SCREENWRITING_ICONS.whyInvolvement, alt: 'Иконка вовлеченности' },
        title: 'ВОВЛЕЧЕННОСТЬ',
        text: 'Мы относимся с трепетом и заботой к каждому нашему студенту. Читаем каждое творческое задание. При необходимости «замораживаем» курс. Если Вы заболели или уехали, то Вы можете дважды «заморозить курс» общим сроком на 60 дней.',
      },
      {
        id: 'why-possibilities',
        icon: { src: SCREENWRITING_ICONS.whyNetworking, alt: 'Иконка возможностей' },
        title: 'ВОЗМОЖНОСТИ',
        text: 'Нетворкинг, встречи с продюсером, питчинг, киношколы, сценарная комната. Мы проводим лекции по продвижению ваших сценариев, а также личные онлайн-сессии с продюсером для лучших учеников.',
      },
    ],
  },
  benefits: {
    title: 'СЦЕНАРНАЯ МАСТЕРСКАЯ',
    items: [
      {
        id: 'script',
        icon: { src: SCREENWRITING_ICONS.document, alt: 'Иконка сценария' },
        title: 'СЦЕНАРИЙ',
        paragraphs: [
          'Напишете сценарий своего полнометражного фильма или первую серию сериала.',
          'Каждый этап вашего сценария вычитает редактор и даст рекомендации к улучшению и развитию вашей истории.',
        ],
      },
      {
        id: 'industry',
        icon: { src: SCREENWRITING_ICONS.camera, alt: 'Иконка киноиндустрии' },
        title: 'КИНОИНДУСТРИЯ',
        paragraphs: [
          'Познакомитесь с режиссерами, продюсерами, актерами, писателями и сценаристами.',
          'Получите личную консультацию о своем проекте от продюсера, если будете одним из лучших на потоке.',
        ],
      },
      {
        id: 'professionalism',
        icon: { src: SCREENWRITING_ICONS.masterclass, alt: 'Иконка профессионализма' },
        title: 'ПРОФЕССИОНАЛИЗМ',
        paragraphs: [
          'Получите возможность пройти стажировку в кинокомпании или продюсерском центре.',
          'Сможете попасть на работу в сценарную комнату на реальный проект и заключить договор на реализацию своего сценария через сценарное агентство.',
        ],
      },
    ],
    action: {
      label: 'КАК ПОПАСТЬ НА КУРС?',
    },
  },
  learningProcessSection: {
    title: 'ЧТО ДАЛЬШЕ ?',
    items: [
      {
        id: 'future-1',
        icon: { src: SCREENWRITING_ICONS.camera, alt: 'Иконка стажировки' },
        title: 'СТАЖИРОВКА',
        paragraphs: [
          'Вы можете попасть на стажировку в сценарную комнату и поработать вместе с опытными сценаристами над реальными проектами.',
          'Это сериалы для онлайн-платформ.',
        ],
      },
      {
        id: 'future-2',
        icon: { src: SCREENWRITING_ICONS.document, alt: 'Иконка агентства' },
        title: 'СЦЕНАРНОЕ АГЕНТСТВО',
        paragraphs: [
          'Вы сможете заключить контракт на продвижение вашего сценария через наше сценарное агентство.',
        ],
      },
      {
        id: 'future-3',
        icon: { src: SCREENWRITING_ICONS.masterclass, alt: 'Иконка реальных проектов' },
        title: 'РЕАЛЬНЫЕ ПРОЕКТЫ',
        paragraphs: [
          'Вы можете получить работу над проектами в киностудии TheOneStudio в качестве сценариста или получить проекты от своих наставников и лекторов.',
          'Наши ученики работают на реальных проектах и в сценарных комнатах.',
        ],
      },
    ],
  },
  learningSection: {
    title: 'КАК УЧИМСЯ?',
    items: [
      {
        id: 'theory',
        icon: { src: SCREENWRITING_ICONS.laptop, alt: 'Иконка теории' },
        title: 'ТЕОРИЯ',
        paragraphs: [
          'Будете посещать онлайн мастерские, лекции и мастер-классы. Лекторы поделятся своим опытом.',
          'Такие встречи проходят от 2 до 4 раз в неделю. Если не сможете прийти, все встречи можно посмотреть в записи на нашей платформе обучения.',
        ],
      },
      {
        id: 'practice',
        icon: { src: SCREENWRITING_ICONS.chair, alt: 'Иконка практики' },
        title: 'ПРАКТИКА',
        paragraphs: [
          'Удобная платформа обучения, видео-уроки и практические творческие задания.',
          'Индивидуальный куратор-редактор будет вычитывать все задания и помогать дорабатывать сценарий до готовой версии. В результате, шаг за шагом, Вы напишете первый драфт.',
        ],
      },
      {
        id: 'industry',
        icon: { src: SCREENWRITING_ICONS.camera, alt: 'Иконка индустрии' },
        title: 'ИНДУСТРИЯ',
        paragraphs: [
          'Получите возможность индивидуального разбора вашего проекта от продюсера и рекомендации о дальнейшем продвижении.',
          'Получите информацию о киностудиях и продакшенах, а также возможность попасть в сценарную комнату на реальный проект TheOneFilm Studio.',
        ],
      },
    ],
  },
  audienceSection: {
    title: 'ДЛЯ КОГО СОЗДАН КУРС?',
    items: [
      {
        id: 'audience-screenwriter',
        title: '1 Начинающий сценарист',
        points: [
          'Любите писать и хотите перейти от идеи к профессиональному сценарию.',
          'Хотите разобраться в драматургии, структуре и работе с героями.',
          'Планируете написать полнометражный фильм или первую серию сериала.',
        ],
      },
      {
        id: 'audience-director',
        title: '2 Режиссер или автор проекта',
        points: [
          'Хотите глубже понимать сценарную структуру и лучше работать с материалом.',
          'Ищете способ упаковать свою историю для продюсеров и индустрии.',
          'Хотите доработать проект вместе с редактором и куратором.',
        ],
      },
      {
        id: 'audience-industry',
        title: '3 Тот, кто хочет войти в индустрию',
        points: [
          'Ищете практический вход в киноиндустрию через реальные задания и кураторскую работу.',
          'Хотите попасть в профессиональное сообщество, питчинги и сценарную комнату.',
          'Интересует стажировка, продвижение сценария и реальные проекты.',
        ],
      },
    ],
  },
  carouselSection: {
    title: 'ПОПАДАЙТЕ В ТВОРЧЕСКОЕ КИНО-СООБЩЕСТВО THEONE',
    action: {
      label: 'ЗАРЕГИСТРИРОВАТЬСЯ',
      event: 'open-consultation',
    },
    slides: [
      {
        id: 'community-1',
        image: 'https://theoneschool.ru/wp-content/uploads/2022/05/158.jpg',
        alt: 'Кино-сообщество TheOne',
      },
      {
        id: 'community-2',
        image: 'https://theoneschool.ru/wp-content/uploads/2022/05/214.png',
        alt: 'Сценарная комната и сообщество',
      },
      {
        id: 'community-3',
        image: 'https://theoneschool.ru/wp-content/uploads/2022/05/387.png',
        alt: 'Онлайн-встречи курса',
      },
    ],
  },
  stagesSection: {
    steps: [
      {
        id: 'screenwriting-step-1',
        label: '1 шаг',
        title: 'О КЛАССИЧЕСКИХ ЗНАНИЯХ НЕСТАНДАРТНО',
        topics: [
          { title: 'Тема №1 Замысел. Разработка идеи. Писатель и сценарист. Особенности профессий', items: ['Слово и кинокадр', '«Показывай, а не рассказывай»', 'Реальность и реализм'] },
          { title: 'Тема №2 Сценарный бит', items: ['Закладка. Неопределенность. Саспенс', 'Деталь. Подтекст. Откровение', 'Сцены подготовки и последствий'] },
          { title: 'Тема №3 Логлайн. Нюансы. Особенности. Секреты', items: ['Секреты написания логлайна', 'Как презентовать свой проект', 'Сильный логлайн — твоя визитная карточка'] },
          { title: 'Тема №4 Синопсис. Заявка. Сценарий', items: ['Как написать профессиональный синопсис', 'Как оформлять и подавать заявку на канал', 'Оформление сценария'] },
        ],
        carousel: {
          enabled: true,
          title: 'ХОЧУ СТАТЬ СЦЕНАРИСТОМ',
          slides: [
            { id: 'step-1-1', image: 'https://theoneschool.ru/wp-content/uploads/2022/05/209-1.jpg', alt: 'Кадр для разбора 1' },
            { id: 'step-1-2', image: 'https://theoneschool.ru/wp-content/uploads/2022/05/471.jpg', alt: 'Кадр для разбора 2' },
            { id: 'step-1-3', image: 'https://theoneschool.ru/wp-content/uploads/2022/05/419.jpg', alt: 'Кадр для разбора 3' },
          ],
        },
      },
      {
        id: 'screenwriting-step-2',
        label: '2 шаг',
        title: 'О КЛАССИЧЕСКИХ ЗНАНИЯХ НЕСТАНДАРТНО',
        topics: [
          { title: 'Тема №5 Герой', items: ['Небанально о создании персонажа', 'Почему герои получаются однобокими', 'Как создать интересного антагониста'] },
          { title: 'Тема №6 Мотивация', items: ['Функции персонажей', 'Логика и мотивация героев', 'Многогранность всех персонажей'] },
          { title: 'Тема №7 Конфликт', items: ['Виды конфликтов', 'Драматическая ситуация', 'Как создать цепляющий конфликт'] },
          { title: 'Тема №8 Сценарная запись', items: ['Как верно оформить сценарий', 'Типичные ошибки при оформлении сценария', 'На что обращают внимание профессионалы'] },
          { title: 'Тема №9 Сцена', items: ['Как написать сильную сцену', 'Какие функции выполняет сцена', 'Сценарий от сцены к сцене'] },
        ],
        carousel: {
          enabled: true,
          title: 'СТОИМОСТЬ КУРСА',
          slides: [
            { id: 'step-2-1', image: 'https://theoneschool.ru/wp-content/uploads/2022/05/280.jpg', alt: 'Кадр для разбора 4' },
            { id: 'step-2-2', image: 'https://theoneschool.ru/wp-content/uploads/2022/05/212.png', alt: 'Кадр для разбора 5' },
            { id: 'step-2-3', image: 'https://theoneschool.ru/wp-content/uploads/2022/05/141.jpg', alt: 'Кадр для разбора 6' },
          ],
        },
      },
      {
        id: 'screenwriting-step-3',
        label: '3 шаг',
        title: 'О КЛАССИЧЕСКИХ ЗНАНИЯХ НЕСТАНДАРТНО',
        topics: [
          { title: 'Тема №10 Теория зрительского восприятия', items: ['Знай своего зрителя', 'Как понимать свою аудиторию', 'Как вести диалог со своим зрителем'] },
          { title: 'Тема №11 Сценарные приемы', items: ['Закладка. Неопределенность. Саспенс и проч.', 'Деталь. Подтекст. Откровение и проч.', 'Сцены подготовки и последствий и проч.'] },
          { title: 'Тема №12 Трехактная структура сценария', items: ['Как пользоваться ей без штампов', 'Типы сценарных структур', 'Можно ли нарушать структуры'] },
          { title: 'Тема №13 Акт. Структуры', items: ['Функции актов', 'Сколько актов должно быть и может быть', 'Как работать с актами?'] },
          { title: 'Тема №14 Диалог', items: ['Как написать диалог в который верят', 'Как должен говорить персонаж', 'Диалоги, которые разбирают на цитаты'] },
        ],
        carousel: {
          enabled: true,
          title: 'ХОЧУ СТАТЬ СЦЕНАРИСТОМ',
          slides: [
            { id: 'step-3-1', image: 'https://theoneschool.ru/wp-content/uploads/2022/05/190.jpg', alt: 'Кадр для разбора 7' },
            { id: 'step-3-2', image: 'https://theoneschool.ru/wp-content/uploads/2022/05/409.jpg', alt: 'Кадр для разбора 8' },
            { id: 'step-3-3', image: 'https://theoneschool.ru/wp-content/uploads/2022/05/209-1.jpg', alt: 'Кадр для разбора 9' },
          ],
        },
      },
      {
        id: 'screenwriting-step-4',
        label: '4 шаг',
        title: 'О КЛАССИЧЕСКИХ ЗНАНИЯХ НЕСТАНДАРТНО',
        topics: [
          { title: 'Тема №15 Мифологическая структура', items: ['Путь героя', 'Структура мономифа', 'Стадии приключения'] },
          { title: 'Тема №16 Жанры', items: ['Теория жанров', 'Жанр для автора', 'Жанр для зрителя'] },
          { title: 'Тема №17 Жанры. Структура сценария', items: ['Структура и сценарный анализ', 'Поворотные точки', 'Жанровые события'] },
          { title: 'Тема №18 Нестандартные структуры', items: ['Волшебная сказка', '8 секвенций Гулино', '15 точек Снайдера'] },
        ],
        carousel: {
          enabled: true,
          title: 'СТОИМОСТЬ КУРСА',
          slides: [
            { id: 'step-4-1', image: 'https://theoneschool.ru/wp-content/uploads/2022/05/471.jpg', alt: 'Кадр для разбора 10' },
            { id: 'step-4-2', image: 'https://theoneschool.ru/wp-content/uploads/2022/05/419.jpg', alt: 'Кадр для разбора 11' },
            { id: 'step-4-3', image: 'https://theoneschool.ru/wp-content/uploads/2022/05/280.jpg', alt: 'Кадр для разбора 12' },
          ],
        },
      },
      {
        id: 'screenwriting-step-5',
        label: '5 шаг',
        title: 'ЭКСПЕРТНЫЙ УРОВЕНЬ. РАЗБИВАЕМ ШАБЛОНЫ',
        topics: [
          { title: 'Тема №19 Психология для сценариста', items: ['Теории Фрейда', 'Бессознательное', 'Концепция защитных механизмов'] },
          { title: 'Тема №20 Психология для сценариста', items: ['Кризис идентичности', 'Экзистенциальный конфликт', 'Соционика'] },
          { title: 'Тема №21 Психология для сценариста', items: ['Коллективное бессознательное', 'Архетипы', 'Теория Юнга'] },
          { title: 'Тема №22 Продвижение', items: ['Куда нести сценарий?', 'Как готовиться к питчингам?', 'Где искать продюсера?'] },
          { title: 'Сдача проекта', items: [] },
        ],
        carousel: {
          enabled: false,
          slides: [],
        },
      },
    ],
  },
  lecturersSection: {
    title: 'ОСНОВНЫЕ ЛЕКТОРЫ КУРСА «СЦЕНАРНОЕ МАСТЕРСТВО»',
    description: 'Сценаристы, редакторы, продюсеры и режиссеры, которые ведут курс и разбирают проекты студентов.',
    items: [
      { id: 'lecturer-1', name: 'Валентина Беспалая', role: 'сценарист, режиссер', image: 'https://theoneschool.ru/wp-content/uploads/2022/05/valentina-bespalaya.jpg', alt: 'Валентина Беспалая' },
      { id: 'lecturer-2', name: 'Андрей Гаряж', role: 'сценарист, писатель', image: 'https://theoneschool.ru/wp-content/uploads/2022/05/andrej-garyazh.jpg', alt: 'Андрей Гаряж' },
      { id: 'lecturer-3', name: 'Леонид Немцев', role: 'писатель, сценарист, филолог', image: 'https://theoneschool.ru/wp-content/uploads/2022/05/leonid-nemcev.jpg', alt: 'Леонид Немцев' },
      { id: 'lecturer-4', name: 'Кирилл Кузнецов', role: 'сценарист, редактор, кинодоктор', image: 'https://theoneschool.ru/wp-content/uploads/2022/05/kirill-kuznecov.jpg', alt: 'Кирилл Кузнецов' },
      { id: 'lecturer-5', name: 'Радик Кагиров', role: 'сценарист', image: 'https://theoneschool.ru/wp-content/uploads/2022/05/radik-kagirov.jpg', alt: 'Радик Кагиров' },
      { id: 'lecturer-6', name: 'Элина Касаткина', role: 'продюсер', image: 'https://theoneschool.ru/wp-content/uploads/2022/05/elina-kasatkina.jpg', alt: 'Элина Касаткина' },
      { id: 'lecturer-7', name: 'Ольга Головина (Шебуняева)', role: 'режиссер, сценарист', image: 'https://theoneschool.ru/wp-content/uploads/2022/05/olga-glovina-shebunyaeva.jpg', alt: 'Ольга Головина (Шебуняева)' },
      { id: 'lecturer-8', name: 'Егор Чичканов', role: 'сценарист, режиссер', image: 'https://theoneschool.ru/wp-content/uploads/2022/05/egor-chichkanov.jpg', alt: 'Егор Чичканов' },
      { id: 'lecturer-9', name: 'Александр Бородянский', role: 'сценарист, актер, режиссер, продюсер', image: 'https://theoneschool.ru/wp-content/uploads/2022/04/aleksandr-borodyanskij.jpg', alt: 'Александр Бородянский' },
    ],
  },
  lecturerProjectsSection: {
    title: 'НЕКОТОРЫЕ ПРОЕКТЫ, НА КОТОРЫХ РАБОТАЛИ НАШИ ЛЕКТОРЫ',
    controls: {
      prevLabel: 'Предыдущие проекты лекторов',
      nextLabel: 'Следующие проекты лекторов',
    },
    items: [
      { id: 'project-1', image: 'https://theoneschool.ru/wp-content/uploads/2022/05/209-1.jpg', alt: 'Проект лекторов 1' },
      { id: 'project-2', image: 'https://theoneschool.ru/wp-content/uploads/2022/05/471.jpg', alt: 'Проект лекторов 2' },
      { id: 'project-3', image: 'https://theoneschool.ru/wp-content/uploads/2022/05/419.jpg', alt: 'Проект лекторов 3' },
      { id: 'project-4', image: 'https://theoneschool.ru/wp-content/uploads/2022/05/280.jpg', alt: 'Проект лекторов 4' },
      { id: 'project-5', image: 'https://theoneschool.ru/wp-content/uploads/2022/05/212.png', alt: 'Проект лекторов 5' },
      { id: 'project-6', image: 'https://theoneschool.ru/wp-content/uploads/2022/05/141.jpg', alt: 'Проект лекторов 6' },
      { id: 'project-7', image: 'https://theoneschool.ru/wp-content/uploads/2022/05/190.jpg', alt: 'Проект лекторов 7' },
      { id: 'project-8', image: 'https://theoneschool.ru/wp-content/uploads/2022/05/409.jpg', alt: 'Проект лекторов 8' },
    ],
  },
  pricingTableSection: {
    columns: [
      { id: 'feature', label: 'ТАРИФЫ' },
      { id: 'amateur', label: '«ЛЮБИТЕЛЬ»' },
      { id: 'optimal', label: '«ОПТИМАЛЬНЫЙ»' },
      { id: 'vip', label: '«ВИП»' },
    ],
    rows: [
      { id: 'duration', feature: 'Срок обучения', values: [{ columnId: 'amateur', text: '4 месяца' }, { columnId: 'optimal', text: '5 месяцев' }, { columnId: 'vip', text: '6 месяцев' }] },
      { id: 'access', feature: 'Срок доступа к основным материалам курса (тренингу и видео-урокам) после окончания курса', values: [{ columnId: 'amateur', text: '2 месяца' }, { columnId: 'optimal', text: '12 месяцев' }, { columnId: 'vip', text: '12 месяцев' }] },
      { id: 'lectures', feature: 'Онлайн-мастер классы и лекции (открытые лекции)', values: [{ columnId: 'amateur', text: 'Нет' }, { columnId: 'optimal', text: 'Да, 3 месяца, 2-4 раза в неделю в вечернее время' }, { columnId: 'vip', text: 'Да, 6 месяцев, 2-4 раза в неделю в вечернее время' }] },
      { id: 'workshops', feature: 'Мастерские с куратором. Разбор ваших проектов.', values: [{ columnId: 'amateur', text: 'Нет' }, { columnId: 'optimal', text: '1 раз в неделю (1-3 месяц); 1 раз в 2 недели (4-5 месяцев)' }, { columnId: 'vip', text: '1 раз в неделю (1-3 месяц); 1 раз в 2 недели (4-6 месяцев)' }] },
      { id: 'knowledge', feature: '«База знаний» 250 записей лекций киношколы по теме сценарного мастерства', values: [{ columnId: 'amateur', text: 'Нет' }, { columnId: 'optimal', text: 'Да. На период обучения' }, { columnId: 'vip', text: 'Да. На период обучения' }] },
      { id: 'networking', feature: 'Нетворкинг. Знакомимся с коллегами, преподавателями.', values: [{ columnId: 'amateur', text: 'Нет' }, { columnId: 'optimal', text: 'Да' }, { columnId: 'vip', text: 'Да' }] },
      { id: 'admin', feature: 'Сопровождение администратора', values: [{ columnId: 'amateur', text: 'Нет' }, { columnId: 'optimal', text: 'Да. По техническим вопросам' }, { columnId: 'vip', text: 'Да. По техническим вопросам' }] },
      { id: 'curator-support', feature: 'Сопровождение куратора', values: [{ columnId: 'amateur', text: 'Нет' }, { columnId: 'optimal', text: 'Да' }, { columnId: 'vip', text: 'Да' }] },
      { id: 'tasks', feature: 'Творческие задания', values: [{ columnId: 'amateur', text: 'Да' }, { columnId: 'optimal', text: 'Да' }, { columnId: 'vip', text: 'Да' }] },
      { id: 'feedback', feature: 'Проверка творческих заданий, письменная обратная связь', values: [{ columnId: 'amateur', text: '1 раз в неделю в течение 4 месяцев' }, { columnId: 'optimal', text: '1 раз в 3-4 дня в течение 5 месяцев' }, { columnId: 'vip', text: '1 раз в 2 дня в течение 6 месяцев' }] },
      { id: 'chat', feature: 'Доступ в закрытый чат киношников «The One»', values: [{ columnId: 'amateur', text: 'Да. Чат тарифа «Любитель»' }, { columnId: 'optimal', text: 'Да. Чат своего потока, чат всех режиссеров, общий чат школы' }, { columnId: 'vip', text: 'Да. Чат своего потока, чат всех режиссеров, общий чат школы' }] },
      { id: 'group', feature: 'Доступ в закрытую группу школы «The One»', values: [{ columnId: 'amateur', text: 'Да' }, { columnId: 'optimal', text: 'Да' }, { columnId: 'vip', text: 'Да' }] },
      { id: 'certificate', feature: 'Сертификат о прохождении курса', values: [{ columnId: 'amateur', text: 'Да' }, { columnId: 'optimal', text: 'Да' }, { columnId: 'vip', text: 'Да' }] },
      { id: 'individual', feature: 'Индивидуальные занятия', values: [{ columnId: 'amateur', text: 'Нет' }, { columnId: 'optimal', text: 'Нет' }, { columnId: 'vip', text: '10 индивидуальных встреч' }] },
      { id: 'discount', feature: 'Скидка на продолжение обучения на других курсах TheOneFilm (на тот же пакет обучения)', values: [{ columnId: 'amateur', text: '10%' }, { columnId: 'optimal', text: '35%' }, { columnId: 'vip', text: '55%' }] },
    ],
  },
  guaranteesSection: {
    title: 'ГАРАНТИИ',
    subtitle: 'Мы берем на себя обязательства и выполняем их',
    items: [
      { id: 'official', icon: { src: SCREENWRITING_ICONS.guaranteeOfficial, alt: 'Иконка официальной работы' }, title: 'ОФИЦИАЛЬНО', text: 'Мы официально зарегистрированы и платим налоги с 2018 года.' },
      { id: 'refund', icon: { src: SCREENWRITING_ICONS.guaranteeRefund, alt: 'Иконка возврата' }, title: 'ВОЗВРАТ', text: 'Мы обязуемся вернуть деньги в соответствии с договором оферты, в случае, если Вам не подойдет наша методика. Изучите договор оферты.' },
      { id: 'contract', icon: { src: SCREENWRITING_ICONS.guaranteeContract, alt: 'Иконка договора' }, title: 'ДОГОВОР', text: 'Мы работаем по договору-оферты. В нем максимально подробно указаны все нюансы обучения.' },
    ],
    action: {
      label: 'ДОГОВОР ОФЕРТЫ',
      href: 'https://theoneschool.ru/oferta/',
    },
  },
  schedulePreviewSection: {
    title: 'ПРИМЕР РАСПИСАНИЯ ОНЛАЙН ВСТРЕЧ',
    image: 'https://theoneschool.ru/wp-content/uploads/2022/05/387.png',
    alt: 'Пример расписания онлайн-встреч',
  },
  ctaBannerSection: {
    titleLines: ['ВАШЕ ЗАВТРА БУДЕТ', 'ТАКИМ ЖЕ КАК', 'СЕГОДНЯ?', 'ИЛИ...'],
    action: {
      label: 'ЗАРЕГИСТРИРОВАТЬСЯ',
    },
    image: 'https://theoneschool.ru/wp-content/uploads/2022/05/158.jpg',
    alt: 'Творческое сообщество TheOne',
  },
  cinematicBlock: {
    titleLines: ['ВАШЕ ЗАВТРА', 'БУДЕТ ТАКИМ ЖЕ', 'КАК СЕГОДНЯ?', 'ИЛИ...'],
    image: 'https://theoneschool.ru/wp-content/uploads/2022/05/214.png',
    alt: 'Визуальный блок курса «Сценарное мастерство»',
  },
}

export const SCENARNOE_MASTERSTVO_CONFIG = {
  screenwriting: SCENARNOE_MASTERSTVO_PAGE,
}
