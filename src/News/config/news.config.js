export const NEWS_SITE_CONFIG = {
  title: 'Новости',
  breadcrumbHomeLabel: 'Главная',
  breadcrumbCurrentLabel: 'Новости',
}

const baseNews = [
    {
      id: 'gelos-award',
      title: 'Проект «Домовая» победитель на VII Международный комедийный кинофестиваль «Гелос»',
      date: '11.04.2026',
      image:
        'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Постер кинофестиваля и награды',
      content: [
        'Проект «Домовая» получил награду на международном комедийном кинофестивале «Гелос». Для команды это важный шаг и подтверждение, что короткая форма может ярко работать на фестивальной площадке.',
        'Мы рассматриваем эту победу как сильный кейс для студентов и выпускников, которые уже начинают двигаться в профессиональной среде.',
      ],
    },
    {
      id: 'first-reading-shortlist',
      title: 'Шорт лист конкурса драматургии «Первая читка»',
      date: '10.04.2026',
      image:
        'https://images.pexels.com/photos/7234216/pexels-photo-7234216.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Афиша конкурса драматургии',
      content: [
        'Несколько наших авторов вошли в шорт-лист конкурса драматургии «Первая читка». Это важный этап для сценаристов, которые переходят от учебных работ к реальному индустриальному вниманию.',
        'Мы продолжаем поддерживать авторов в доработке материалов и подготовке к следующим этапам участия.',
      ],
    },
    {
      id: 'radio-live',
      title: 'Прямой эфир на радио «Тебя»',
      date: '08.04.2026',
      image:
        'https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Микрофон и радиоэфир',
      content: [
        'В эфире обсудили современное кинообразование, сценарную практику и то, как студенту начать формировать профессиональное портфолио ещё во время обучения.',
        'Такие выходы в медиа помогают рассказывать о студенческих проектах широкой аудитории и расширяют профессиональные связи.',
      ],
    },
    {
      id: 'saint-anna',
      title: 'Участие в фестивале «Святая Анна»',
      date: '07.04.2026',
      image:
        'https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Фестиваль и кинопоказ',
      content: [
        'Работы студентов были заявлены на фестиваль «Святая Анна», который традиционно остаётся одной из главных площадок для дебютных короткометражных работ.',
        'Для нас это важный показатель: проекты доходят до профессиональных индустриальных витрин.',
      ],
    },
    {
      id: 'gelos-selection',
      title: 'Отбор в конкурсную программу GELIOS',
      date: '05.04.2026',
      image:
        'https://images.pexels.com/photos/6896221/pexels-photo-6896221.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Иллюстрация фестивального отбора',
      content: [
        'Одна из студенческих работ прошла в конкурсную программу фестиваля GELIOS. Это расширяет траекторию проекта и открывает путь к следующему кругу показов.',
        'Мы сопровождаем авторов не только в производстве, но и в стратегии фестивального движения.',
      ],
    },
    {
      id: 'industry-meeting',
      title: 'Индустриальная встреча с продюсерами платформ',
      date: '03.04.2026',
      image:
        'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Профессиональная встреча киноиндустрии',
      content: [
        'Провели закрытую встречу со студентами и приглашёнными продюсерами онлайн-платформ. Разбирали, как сегодня развиваются сериальные заявки, питчинги и командная работа в девелопменте.',
        'Такие встречи дают студентам прямой контакт с тем, как устроена живая индустрия.',
      ],
    },
    {
      id: 'student-pitch',
      title: 'Студенты представили проекты на внутреннем питчинге',
      date: '01.04.2026',
      image:
        'https://images.pexels.com/photos/7234258/pexels-photo-7234258.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Презентация проектов на питчинге',
      content: [
        'На внутреннем питчинге участники представили сериальные, полнометражные и короткие проекты. Обсуждали логлайны, конфликты, целевую аудиторию и потенциал дальнейшего развития.',
        'Лучшие заявки пойдут в следующую стадию редакторской доработки.',
      ],
    },
    {
      id: 'editing-lab',
      title: 'Запустили лабораторию по монтажу короткого метра',
      date: '29.03.2026',
      image:
        'https://images.pexels.com/photos/8106770/pexels-photo-8106770.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Монтаж и работа с материалом',
      content: [
        'Новая лаборатория посвящена ритму сцены, драматургии монтажа и работе с черновыми версиями короткого метра.',
        'Участники работают с реальным материалом и учатся принимать редакторские решения на постпродакшне.',
      ],
    },
    {
      id: 'writing-room',
      title: 'Сценарная комната взяла в работу два новых проекта',
      date: '26.03.2026',
      image:
        'https://images.pexels.com/photos/3194524/pexels-photo-3194524.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Работа сценарной комнаты',
      content: [
        'Студенты и кураторы начали совместную разработку двух новых проектов в сценарной комнате. Один ориентирован на драмеди, второй — на формат короткого жанрового сериала.',
        'Это продолжение практической модели, где обучение сразу связано с живой разработкой.',
      ],
    },
    {
      id: 'festival-roadmap',
      title: 'Подготовили фестивальную дорожную карту для выпускных работ',
      date: '22.03.2026',
      image:
        'https://images.pexels.com/photos/7991310/pexels-photo-7991310.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Планирование фестивальной стратегии',
      content: [
        'Для выпускных проектов составили индивидуальные дорожные карты по отправке на фестивали: сроки, требования премьерности, списки площадок и стратегию первых заявок.',
        'Это помогает авторам не терять время после завершения постпродакшна и запускать проект более осмысленно.',
      ],
    },
]

const newsImages = [
  'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/7234216/pexels-photo-7234216.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/6896221/pexels-photo-6896221.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/7234258/pexels-photo-7234258.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/8106770/pexels-photo-8106770.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3194524/pexels-photo-3194524.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/7991310/pexels-photo-7991310.jpeg?auto=compress&cs=tinysrgb&w=1200',
]

const generatedNews = Array.from({ length: 40 }, (_, index) => {
  const itemNumber = index + 11
  const day = String(((index + 1) % 28) + 1).padStart(2, '0')
  const month = String(((index + 3) % 12) + 1).padStart(2, '0')

  return {
    id: `news-${itemNumber}`,
    title: `Тестовая новость ${itemNumber}: событие киношколы TheOneFilm`,
    date: `${day}.${month}.2026`,
    image: newsImages[index % newsImages.length],
    alt: `Иллюстрация к тестовой новости ${itemNumber}`,
    content: [
      `Это тестовая новость ${itemNumber}. Она добавлена для наполнения ленты и проверки механики автоподгрузки на странице новостей.`,
      'Карточка содержит изображение, дату, заголовок и текст детальной страницы, чтобы поведение списка и страницы новости было одинаково рабочим для всех элементов.',
    ],
  }
})

export const NEWS_PAGE = {
  news: [...baseNews, ...generatedNews],
}
