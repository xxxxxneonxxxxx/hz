<template>
  <header class="app-header" :class="{ 'app-header--menu-open': isHeaderExpanded }">
    <TopBar
        :socials="socials"
        :contacts="contacts"
        :is-scrolled="isScrolled"
    />
    <NavBar
        :logo="logo"
        :nav-links="navLinks"
        :is-menu-open="isMenuOpen"
        :is-search-open="isSearchOpen"
        :is-scrolled="isScrolled"
        @toggle-menu="toggleMenu"
        @close-menu="closeMenu"
        @toggle-search="toggleSearch"
        @menu-transition-start="handleMenuTransitionStart"
        @menu-transition-end="handleMenuTransitionEnd"
    />
  </header>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useHeaderModel } from '../model/headerModel.js'
import TopBar from './TopBar.vue'
import NavBar from './NavBar.vue'

const {
  logo,
  contacts,
  socials,
  navLinks,
  isMenuOpen,
  isSearchOpen,
  isScrolled,
  toggleMenu,
  closeMenu,
  toggleSearch,
  initScrollWatcher,
} = useHeaderModel()

const isMenuAnimating = ref(false)
const isHeaderExpanded = computed(() => isMenuOpen.value || isMenuAnimating.value)

let destroyScrollWatcher

function handleMenuTransitionStart() {
  isMenuAnimating.value = true
}

function handleMenuTransitionEnd() {
  isMenuAnimating.value = false
}

onMounted(() => {
  destroyScrollWatcher = initScrollWatcher()
})

onUnmounted(() => {
  destroyScrollWatcher?.()
})
</script>

<style scoped>
.app-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  overflow: hidden;
  background: var(--color--header-navbar);
  transition:
    border-bottom-left-radius var(--motion-duration-base) var(--motion-ease-standard),
    border-bottom-right-radius var(--motion-duration-base) var(--motion-ease-standard),
    box-shadow var(--motion-duration-base) var(--motion-ease-standard);
}

.app-header::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--color--header-navbar);
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--motion-duration-menu-surface) var(--motion-ease-menu-surface);
}

.app-header > * {
  position: relative;
  z-index: 1;
}

.app-header--menu-open {
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
}

.app-header--menu-open::before {
  opacity: 1;
}
</style>
