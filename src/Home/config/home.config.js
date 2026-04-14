import screenwritingHeroImage from '../assets/poster_event_1963225.jpg'
import directingHeroImage from '../assets/slide_video-e1696256900226.jpg'

export const HOME_HERO_SLIDES = [
    {
        id: 'screenwriting',
        title: 'Сценарное мастерство',
        href: '/programs/screenwriting',
        image: screenwritingHeroImage,
        alt: 'Съемочная площадка',
    },
    {
        id: 'directing',
        title: 'Режиссура игрового кино',
        href: '/programs/directing',
        image: directingHeroImage,
        alt: 'Кинокамера и катушки пленки',
    },
]

export const HOME_PROGRAM_CARDS = [
    {
        id: 'screenwriting',
        title: 'Сценарное мастерство',
        href: '/programs/screenwriting',
        image: 'https://theoneschool.ru/wp-content/uploads/2022/06/s1.jpg',
        alt: 'Человек печатает сценарий на печатной машинке',
    },
    {
        id: 'directing',
        title: 'Режиссура игрового кино',
        href: '/programs/directing',
        image: 'https://theoneschool.ru/wp-content/uploads/2022/02/faculty02.jpg',
        alt: 'Оператор работает с камерой',
    },
    {
        id: 'producing',
        title: 'Основы продюсирования',
        href: '/programs/producing',
        image: 'https://theoneschool.ru/wp-content/uploads/2022/06/s4.jpg',
        alt: 'Режиссерское кресло и хлопушка',
    },
    {
        id: 'all-courses',
        title: 'Все курсы школы',
        href: '/vse-kursy-shkoly',
        image: 'https://theoneschool.ru/wp-content/uploads/2022/06/faculty04.jpg',
        alt: 'Съемочная команда на площадке',
    },
]

export const HOME_INTRO_SECTION = {
    title: 'Школа кино в Москве',
    paragraphs: [
        'Мы команда киношколы TheOneFilm. Наша миссия находить и обучать влюбленных в кино, неравнодушных, неугомонных, неутомимых, гениальных. Учим писать сценарии, снимать сериалы и фильмы, работаем в качестве школы кино, продюсерского центра и сценарного агентства. Давайте познакомимся? Оставьте заявку на консультацию.',
        'Кстати, знаете ли, что значит TheOneFilm? Расскажите нам свою версию и если она попадет в точку мы подарим вам видео-урок о кино и скидку на курсы школы в 20%.',
    ],
    action: {
        label: 'Получить консультацию',
        href: 'https://theoneschool.ru/',
    },
}

export const HOME_FEATURED_SERIES = {
    title: 'Пилотная серия сериала «Я никогда не умру!» (1 серия)',
    paragraphs: [
        'Проект снятый продюсерским центром TheOneStudio, кинокомпанией Better Production, при поддержке кинопроекта TheOneFilm, студентов киношколы и Института развития интернета | ИРИ',
        'История о ценности жизни',
        'Артем попадается на краже и его отправляют на обязательные работы в медицинское учреждение. Здесь, неожиданно для себя, он обретает родных людей, которых больше не захочет потерять. Но стоит ли строить близкие отношения, если они точно продлятся очень недолго...',
        'В ролях Саша Алексеев, Полина Ватага, Евдокия Германова, Татьяна Кречетова, Сергей Загребнев, Александр Красовский, Ирина Обидина, Юля Сиринько, Максим Громов, Данил Завьялов.',
    ],
    video: {
        title: 'VK Video',
        embedUrl: '',
        fallbackUrl: 'https://vkvideo.ru/',
        fallbackLabel: 'Открыть видео во VK',
    },
}

export const HOME_LECTURERS_SECTION = {
    title: 'Лекторы нашей школы кино',
    description: 'Кто проводил и проводит лекции, мастер-классы и встречи в школе кино TheOneFilm',
}

export const HOME_LECTURERS = [
    {
        id: 'astrakhan',
        name: 'Дмитрий Астрахан',
        role: 'актер, режиссер, продюсер',
        image: 'https://theoneschool.ru/wp-content/uploads/2022/04/astrakhan.jpg',
        alt: 'Портрет Дмитрия Астрахана',
    },
    {
        id: 'borodyansky',
        name: 'Александр Бородянский',
        role: 'сценарист, актер, режиссер, продюсер',
        image: 'https://theoneschool.ru/wp-content/uploads/2022/04/aleksandr-borodyanskij.jpg',
        alt: 'Портрет Александра Бородянского',
    },
    {
        id: 'chichkanov',
        name: 'Егор Чичканов',
        role: 'сценарист, режиссер',
        image: 'https://theoneschool.ru/wp-content/uploads/2022/05/egor-chichkanov.jpg',
        alt: 'Портрет Егора Чичканова',
    },
    {
        id: 'volkova',
        name: 'Ирина Волкова',
        role: 'режиссер, монтажер',
        image: 'https://theoneschool.ru/wp-content/uploads/2022/05/irina-volkova.jpg',
        alt: 'Портрет Ирины Волковой',
    },
]
