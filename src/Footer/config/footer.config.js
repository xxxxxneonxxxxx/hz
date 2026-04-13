import { LOGO, SOCIALS } from '../../config/app.config.js'

export const FOOTER_LOGO = {
  ...LOGO,
  width: 260,
  height: 136,
}

export const FOOTER_COLUMNS = [
  {
    id: 'school',
    title: 'Киношкола TheOneFilm',
    items: [
      { text: 'ИП НАКУШНОВ В.Ю.' },
      { text: 'ИНН 631626661580' },
      { text: 'ОГРН 318631300173237' },
      { spacer: true },
      { text: 'Лицензия на образовательную деятельность' },
      { text: '№ Л035-01213-63/00738259' },
      { spacer: true },
      { text: 'info@theoneschool.ru', href: 'mailto:info@theoneschool.ru' },
      { spacer: true },
      { text: 'Договор оферты', href: 'https://theoneschool.ru/oferta/', external: true },
      { text: 'Согласие на обработку данных', href: '#' },
    ],
  },
  {
    id: 'requisites',
    title: 'РЕКВИЗИТЫ',
    items: [
      { text: 'Р/с 40802810200000861220' },
      { text: 'К/с 30101810145250000974' },
      { text: 'Наименование банка:' },
      { text: 'АО «Тинькофф Банк»' },
      { text: 'БИК 044525974' },
      { spacer: true },
      { text: 'Р/с 40802810238000114762' },
      { text: 'К/с 30101810400000000225' },
      { text: 'Наименование банка:' },
      { text: 'ПАО Сбербанк' },
      { text: 'БИК 044525225' },
    ],
  },
  {
    id: 'projects',
    title: 'НАШИ ПРОЕКТЫ',
    items: [
      { text: 'Киношкола TheOneFilm', href: '/' },
      { text: 'Кинофестиваль TheOneFest', href: '#' },
      { text: 'Ютуб канал о кино', href: 'https://www.youtube.com/channel/UCjVxXA936tn0vTxmbdWDgpg', external: true },
      { spacer: true },
      { text: 'Платформа короткометражных фильмов TheOneShort', href: '#' },
      { text: 'Фотостудия', href: '#' },
    ],
  },
]

export const FOOTER_BOTTOM = {
  copyright: 'Copyright © 2026 The One School Все права защищены',
  socials: SOCIALS,
}
