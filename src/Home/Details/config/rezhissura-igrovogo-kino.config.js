import { DETAIL_PHOTO_ICONS } from './detail-photo-icons.config.js'

const DIRECTING_ICONS = DETAIL_PHOTO_ICONS

export const REZHISSURA_IGROVOGO_KINO_PAGE = {
  id: 'directing',
  slug: 'directing',
  title: 'Режиссура игрового кино',
  hero: {
    titleLines: ['Режиссура', 'игрового кино'],
    description: 'снимите свой фильм и начните карьеру в кино',
    action: {
      label: 'НАЧАТЬ',
      href: 'https://wa.me/79675556082',
      external: true,
    },
    image: 'https://images.pexels.com/photos/8106770/pexels-photo-8106770.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Оператор работает с камерой на площадке',
  },
  whyUsSection: {
    title: 'ПОЧЕМУ МЫ?',
    subtitle: 'Потому что всё, что мы делаем, мы делаем хорошо',
    items: [
      {
        id: 'why-practice',
        icon: {
          src: DIRECTING_ICONS.whyPractice,
          alt: 'Иконка практики',
        },
        title: 'РЕАЛЬНАЯ ПРАКТИКА',
        text: 'На наших курсах Вы не просто послушаете лекции. Вы освоите основы драматургии и сценарного мастерства и реально, шаг за шагом, напишете свой сценарий.',
      },
      {
        id: 'why-conditions',
        icon: {
          src: DIRECTING_ICONS.whyConditions,
          alt: 'Иконка условий',
        },
        title: 'УСЛОВИЯ',
        text: 'Основной курс длится 3 месяца. Но даже по окончанию этих 90 дней у Вас остается 60 дней доступа к видео-урокам, платформе, чату, закрытой группе и ответам преподавателей.',
      },
      {
        id: 'why-involvement',
        icon: {
          src: DIRECTING_ICONS.whyInvolvement,
          alt: 'Иконка вовлеченности',
        },
        title: 'ВОВЛЕЧЕННОСТЬ',
        text: 'Мы относимся с трепетом и заботой к каждому нашему студенту. Читаем каждое творческое задание. При необходимости «замораживаем» курс, созваниваемся, общаемся и всегда на связи.',
      },
      {
        id: 'why-networking',
        icon: {
          src: DIRECTING_ICONS.whyNetworking,
          alt: 'Иконка знакомств',
        },
        title: 'ЗНАКОМСТВА',
        text: 'Называйте как хотите — нетворкинг, знакомства, связи. На закрытых Zoom-вечеринках Вы знакомитесь, общаетесь, делитесь проектами, обмениваетесь сценариями и находите актеров и коллег.',
      },
    ],
  },
  benefits: {
    title: 'ТВОИ РЕЗУЛЬТАТЫ ПОСЛЕ КУРСА',
    items: [
      {
        id: 'script',
        icon: {
          src: DIRECTING_ICONS.document,
          alt: 'Иконка сценария',
        },
        title: 'СЦЕНАРИЙ',
        paragraphs: [
          'Напишете сценарий своего короткометражного фильма.',
        ],
      },
      {
        id: 'film',
        icon: {
          src: DIRECTING_ICONS.camera,
          alt: 'Иконка фильма',
        },
        title: 'ФИЛЬМ',
        paragraphs: [
          'Снимите свой этюд или короткометражный фильм.',
        ],
      },
      {
        id: 'network',
        icon: {
          src: DIRECTING_ICONS.masterclass,
          alt: 'Иконка связей',
        },
        title: 'СВЯЗИ',
        paragraphs: [
          'Заведете знакомства.',
          'Станете частью мира кино.',
        ],
      },
      {
        id: 'portfolio',
        icon: {
          src: DIRECTING_ICONS.laptop,
          alt: 'Иконка портфолио',
        },
        title: 'ПОРТФОЛИО',
        paragraphs: [
          'Создадите портфолио.',
          'Получите сертификат.',
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
          'Будете смотреть специально подготовленные, качественные, творческие видео-уроки с примерами из фильмов.',
          'Разберете как классику мирового кино, так и последние новинки, уже ставшие хитами.',
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
          'После каждого видео-урока есть творческие задания.',
          'Будете их выполнять и шаг за шагом писать свой сценарий. Преподаватель будет проверять каждое задание, давать обратную связь, помогать и подсказывать.',
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
          'Будете посещать мастерские, лекции и мастер-классы. Лекторы поделятся опытом и помогут развить ваш проект.',
          'Такие встречи проходят от 2 раз в неделю. Если не сможете прийти — все встречи записываются и остаются на платформе обучения.',
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
          'Изучите основы драматургии, сценарного мастерства, режиссуры, монтажа, света, цвета и организации съемочного процесса.',
          'Все темы построены по авторской методологии и собраны в удобной онлайн-платформе.',
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
          'Шаг за шагом разработаете сценарий, пройдете предпродакшн, снимете и смонтируете свой фильм.',
          'Кураторы и преподаватели проверяют задания, дают обратную связь и помогают довести проект до результата.',
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
          'Поймете, как искать актеров, собирать команду, готовить КПП, работать с продюсером и выходить на питчинги.',
          'После курса сможете двигаться в сторону профессии, фестивалей, стажировок и реальных проектов.',
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
          'Журналист, копирайтер, литератор, писатель, блогер или просто любите писать.',
          'Хотите попробовать себя в роли сценариста.',
          'Сценаристика для Вас далекий, неизведанный, но интересный мир.',
        ],
      },
      {
        id: 'audience-2',
        title: '2 Режиссер',
        points: [
          'Новичок.',
          'Мечтаете снять свой фильм.',
          'Любите смотреть фильмы и говорить о них.',
          'Хотите попробовать себя в роли режиссера.',
          'Режиссура близка сердцу, но Вы не понимаете, с чего начать.',
        ],
      },
      {
        id: 'audience-3',
        title: '3 Не определился',
        points: [
          'Вы влюблены в кинематограф.',
          'Хотите связать с ним жизнь.',
          'Ещё не знаете точно хотите быть сценаристом, режиссером, видеомонтажером или кем-то другим. Но главное — в кино.',
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
        title: 'СЦЕНАРНОЕ МАСТЕРСТВО',
        topics: [
          {
            title: 'Тема №1-8 Сценарий',
            items: [
              'Идея, разработка идеи, логлайн и high-концепт',
              'Писатель и сценарист, типичные ошибки, конфликт и герой',
              'Трехактная структура, синопсис, оформление сценария',
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
        title: 'ПРЕДПРОДАКШН / ПРОДАКШН. ТВОРЧЕСКАЯ ЧАСТЬ',
        topics: [
          {
            title: 'Тема №9-18 Творческая часть',
            items: [
              'Кадр, постановка кадра, внутрикадровый монтаж',
              'Принципы комфортного монтажа, цвет и работа со светом',
              'Кастинг, работа с актером и режиссерский сценарий',
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
        title: 'ПРЕДПРОДАКШН / ПРОДАКШН. ТЕХНИЧЕСКАЯ ЧАСТЬ',
        topics: [
          {
            title: 'Тема №19-23 Техника',
            items: [
              'Камеры, объективы и другое оборудование',
              'Экспозиция, диафрагма, выдержка, ISO и баланс белого',
              'Типы света и технические параметры съемки',
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
        title: 'ПРЕДПРОДАКШН / ПРОДАКШН. ОРГАНИЗАЦИОННАЯ ЧАСТЬ',
        topics: [
          {
            title: 'Тема №24-26 Организация',
            items: [
              'Съемочная группа, вызывные листы и КПП',
              'Календарно-постановочный план, бюджет и договор',
              'Продвижение, продюсер, питчинг, кинокомпании',
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
        title: 'ФИНАЛ',
        topics: [
          {
            title: 'Итоговый результат',
            items: [
              'Снимаем и монтируем фильм',
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
        title: 'ДОПОЛНИТЕЛЬНЫЕ ТЕМЫ',
        topics: [
          {
            title: 'После основной программы',
            items: [
              'Разборы кинофильмов и профессия режиссера',
              'Режиссерский сценарий и монтажные решения для передачи замысла',
              'Реклама, документальное кино и тренды сегодняшнего кино',
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
        name: 'Даниил Фомичев',
        role: 'оператор',
        image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Даниил Фомичев',
      },
      {
        id: 'directing-lecturer-2',
        name: 'Валентина Беспалая',
        role: 'сценарист, режиссер',
        image: 'https://theoneschool.ru/wp-content/uploads/2022/05/valentina-bespalaya.jpg',
        alt: 'Валентина Беспалая',
      },
      {
        id: 'directing-lecturer-3',
        name: 'Андрей Гаряж',
        role: 'сценарист, писатель',
        image: 'https://theoneschool.ru/wp-content/uploads/2022/05/andrej-garyazh.jpg',
        alt: 'Андрей Гаряж',
      },
      {
        id: 'directing-lecturer-4',
        name: 'Леонид Немцев',
        role: 'писатель, сценарист, филолог',
        image: 'https://theoneschool.ru/wp-content/uploads/2022/05/leonid-nemcev.jpg',
        alt: 'Леонид Немцев',
      },
      {
        id: 'directing-lecturer-5',
        name: 'Михаил Богомазов',
        role: 'кинооператор, художник по свету, фотограф',
        image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Михаил Богомазов',
      },
      {
        id: 'directing-lecturer-6',
        name: 'Дарья Карпова',
        role: 'сценарист, режиссер',
        image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Дарья Карпова',
      },
      {
        id: 'directing-lecturer-7',
        name: 'Андрей Корф',
        role: 'режиссер, звукорежиссер',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Андрей Корф',
      },
      {
        id: 'directing-lecturer-8',
        name: 'Александра Натарова',
        role: 'сценарист, продюсер',
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Александра Натарова',
      },
      {
        id: 'directing-lecturer-9',
        name: 'Кирилл Кузнецов',
        role: 'сценарист, редактор, кинодоктор',
        image: 'https://theoneschool.ru/wp-content/uploads/2022/05/kirill-kuznecov.jpg',
        alt: 'Кирилл Кузнецов',
      },
      {
        id: 'directing-lecturer-10',
        name: 'Радик Кагиров',
        role: 'сценарист',
        image: 'https://theoneschool.ru/wp-content/uploads/2022/05/radik-kagirov.jpg',
        alt: 'Радик Кагиров',
      },
      {
        id: 'directing-lecturer-11',
        name: 'Ирина Волкова',
        role: 'режиссер, монтажер',
        image: 'https://theoneschool.ru/wp-content/uploads/2022/05/irina-volkova.jpg',
        alt: 'Ирина Волкова',
      },
      {
        id: 'directing-lecturer-12',
        name: 'Егор Чичканов',
        role: 'сценарист, режиссер',
        image: 'https://theoneschool.ru/wp-content/uploads/2022/05/egor-chichkanov.jpg',
        alt: 'Егор Чичканов',
      },
      {
        id: 'directing-lecturer-13',
        name: 'Александр Бородянский',
        role: 'сценарист, актер, режиссер, продюсер',
        image: 'https://theoneschool.ru/wp-content/uploads/2022/04/aleksandr-borodyanskij.jpg',
        alt: 'Александр Бородянский',
      },
      {
        id: 'directing-lecturer-14',
        name: 'Дмитрий Астрахан',
        role: 'актер, режиссер, продюсер',
        image: 'https://theoneschool.ru/wp-content/uploads/2022/04/astrakhan.jpg',
        alt: 'Дмитрий Астрахан',
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
      { id: 'refund', icon: { src: DIRECTING_ICONS.guaranteeRefund, alt: 'Иконка возврата' }, title: 'Возврат', text: 'Мы обязуемся вернуть деньги в соответствии с договором оферты, в случае, если Вам не подойдет наша методика. Изучите договор оферты.' },
      { id: 'contract', icon: { src: DIRECTING_ICONS.guaranteeContract, alt: 'Иконка договора' }, title: 'Договор', text: 'Мы работаем по договору-оферты. В нем максимально подробно указаны все нюансы обучения.' },
    ],
    action: {
      label: 'Договор оферты',
      href: 'https://theoneschool.ru/oferta/',
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
      'ТВОЕ ЗАВТРА БУДЕТ',
      'ТАКИМ ЖЕ КАК',
      'СЕГОДНЯ?',
      'ИЛИ...',
    ],
    image: 'https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Портрет с контрастным киношным светом',
  },
}

export const REZHISSURA_IGROVOGO_KINO_CONFIG = {
  directing: REZHISSURA_IGROVOGO_KINO_PAGE,
}
