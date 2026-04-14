import { DETAIL_PHOTO_ICONS } from './detail-photo-icons.config.js'
import cinematicImage from '../assets/165.jpg'

const SCREENWRITING_ICONS = DETAIL_PHOTO_ICONS

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
    image: cinematicImage,
    alt: 'Визуальный блок курса «Сценарное мастерство»',
  },
}

export const SCENARNOE_MASTERSTVO_CONFIG = {
  screenwriting: SCENARNOE_MASTERSTVO_PAGE,
}
