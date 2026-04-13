<template>
  <header class="app-header">
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
    />
  </header>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
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

let destroyScrollWatcher

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
}
</style>
