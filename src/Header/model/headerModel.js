import { ref, readonly } from 'vue'
import { LOGO } from '../../config/app.config.js'
import { HEADER_CONTACTS, HEADER_SOCIALS, NAV_LINKS } from '../config/header.config.js'

export function useHeaderModel() {

    // ─── UI состояние ──────────────────────────────────────────────────────────
    const isMenuOpen   = ref(false)
    const isSearchOpen = ref(false)
    const isScrolled   = ref(false)

    // ─── Управление меню ───────────────────────────────────────────────────────
    function toggleMenu()  { isMenuOpen.value = !isMenuOpen.value }
    function closeMenu()   { isMenuOpen.value = false }

    // ─── Управление поиском ────────────────────────────────────────────────────
    function toggleSearch() {
        isSearchOpen.value = !isSearchOpen.value
        if (!isSearchOpen.value) isMenuOpen.value = false
    }

    // ─── Слежение за скроллом ──────────────────────────────────────────────────
    function initScrollWatcher() {
        if (typeof window === 'undefined') return
        const root = document.documentElement
        const handler = () => {
            isScrolled.value = window.scrollY > 40
            root.classList.toggle('header-scrolled', isScrolled.value)
        }
        handler()
        window.addEventListener('scroll', handler, { passive: true })
        // возвращаем функцию очистки — вызвать в onUnmounted
        return () => {
            window.removeEventListener('scroll', handler)
            root.classList.remove('header-scrolled')
        }
    }

    return {
        // данные из конфига (только чтение)
        logo:     readonly(LOGO),
        contacts: readonly(HEADER_CONTACTS),
        socials:  readonly(HEADER_SOCIALS),
        navLinks: readonly(NAV_LINKS),

        // UI состояние
        isMenuOpen,
        isSearchOpen,
        isScrolled,

        // действия
        toggleMenu,
        closeMenu,
        toggleSearch,
        initScrollWatcher,
    }
}
