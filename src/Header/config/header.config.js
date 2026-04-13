import { CONTACTS, SOCIALS } from '../../config/app.config.js'
// ─── Контакты (из shared) ──────────────────────────────────
export const HEADER_CONTACTS = CONTACTS

// ─── Соцсети (из shared) ───────────────────────────────────
export const HEADER_SOCIALS = SOCIALS

// ─── Навигация (уникальна для header) ──────────────────────
export const NAV_LINKS = [
    { id: 'about',    label: 'О проекте',         href: '/about' },
    { id: 'works',    label: 'Работы студентов',  href: '/raboty-studentov' },
    { id: 'faculty',  label: 'Факультеты',        href: '/fakultety' },
    { id: 'articles', label: 'Статьи',            href: '/stati' },
    { id: 'news',     label: 'Новости',           href: '/news' },
    { id: 'jobs',     label: 'Вакансии',          href: 'https://theonefilm.ru/vacancy', external: true },
]