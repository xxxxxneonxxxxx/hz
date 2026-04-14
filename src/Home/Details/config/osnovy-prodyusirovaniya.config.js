import { DETAIL_PHOTO_ICONS } from './detail-photo-icons.config.js'

const PRODUCING_ICONS = DETAIL_PHOTO_ICONS

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
        text: 'Основной курс длится 5 месяцев. После завершения у Вас остается 60 дней доступа к видео-урокам, платформе, чату, закрытой группе и ответам преподавателей.',
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
        text: 'На закрытых встречах и Zoom-вечеринках Вы знакомитесь со студентами, преподавателями и действующими кинематографистами, обмениваетесь проектами и собираете профессиональные связи.',
      },
    ],
  },
  benefits: {
    title: 'ВАШИ РЕЗУЛЬТАТЫ ПОСЛЕ КУРСА',
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
  learningProcessSection: {
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
  learningSection: {
    title: 'КАК УЧИМСЯ?',
    items: [
      {
        id: 'theory',
        icon: { src: PRODUCING_ICONS.laptop, alt: 'Иконка теории' },
        title: 'ТЕОРИЯ',
        paragraphs: [
          'Будете смотреть видео-уроки по продюсированию, финансированию, праву, смете и организации кинопроизводства.',
          'Курс охватывает более 37 тем и дает системное понимание профессии от разработки проекта до дистрибуции.',
        ],
      },
      {
        id: 'practice',
        icon: { src: PRODUCING_ICONS.chair, alt: 'Иконка практики' },
        title: 'ПРАКТИКА',
        paragraphs: [
          'После тем выполняете практические задания, которые проверяет преподаватель.',
          'По итогу соберете смету, портфолио и рабочее понимание, как упаковывать и продвигать свой проект.',
        ],
      },
      {
        id: 'industry',
        icon: { src: PRODUCING_ICONS.camera, alt: 'Иконка индустрии' },
        title: 'ИНДУСТРИЯ',
        paragraphs: [
          'Разберетесь, где искать финансирование, как защищать права и как общаться с продюсерами, фондами и рынком.',
          'Параллельно войдете в среду школы через лекции, мастер-классы и закрытое кино-сообщество.',
        ],
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
  carouselSection: {
    title: 'ПОПАДАЙТЕ В КИНО-СООБЩЕСТВО THEONE',
    action: {
      label: 'ХОЧУ СТАТЬ ПРОДЮСЕРОМ',
      event: 'open-consultation',
    },
    slides: [
      {
        id: 'producing-community-1',
        image: 'https://theoneschool.ru/wp-content/uploads/2022/07/osnovy-prodyusirovaniya.jpg',
        alt: 'Обложка курса основы продюсирования',
      },
      {
        id: 'producing-community-2',
        image: 'https://theoneschool.ru/wp-content/uploads/2022/06/252.png',
        alt: 'Сертификат курса основы продюсирования',
      },
      {
        id: 'producing-community-3',
        image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1800',
        alt: 'Команда обсуждает проект',
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
  lecturerProjectsSection: {
    title: 'НЕКОТОРЫЕ ПРОЕКТЫ И ВИЗУАЛЬНЫЕ РЕФЕРЕНСЫ ПО КУРСУ',
    controls: {
      prevLabel: 'Предыдущие материалы курса',
      nextLabel: 'Следующие материалы курса',
    },
    items: [
      {
        id: 'producing-project-1',
        image: 'https://theoneschool.ru/wp-content/uploads/2022/07/osnovy-prodyusirovaniya.jpg',
        alt: 'Обложка курса основы продюсирования',
      },
      {
        id: 'producing-project-2',
        image: 'https://theoneschool.ru/wp-content/uploads/2022/06/252.png',
        alt: 'Сертификат курса',
      },
      {
        id: 'producing-project-3',
        image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Команда продюсеров обсуждает проект',
      },
      {
        id: 'producing-project-4',
        image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Работа с документами и бюджетом проекта',
      },
      {
        id: 'producing-project-5',
        image: 'https://images.pexels.com/photos/8111886/pexels-photo-8111886.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Продюсерская работа на съемочной площадке',
      },
      {
        id: 'producing-project-6',
        image: 'https://images.pexels.com/photos/8108078/pexels-photo-8108078.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Подготовка кинопроекта к производству',
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
  schedulePreviewSection: {
    title: 'ПРИМЕР РАСПИСАНИЯ ОНЛАЙН ВСТРЕЧ',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1800',
    alt: 'Пример расписания онлайн-встреч',
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
