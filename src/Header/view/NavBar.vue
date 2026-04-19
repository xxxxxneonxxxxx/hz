<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled, 'navbar--menu-open': isMenuOpen }">
    <div class="navbar__container">

      <!-- Логотип -->
      <component
        :is="isInternalLink(logo.href) ? RouterLink : 'a'"
        :to="isInternalLink(logo.href) ? logo.href : undefined"
        :href="isInternalLink(logo.href) ? undefined : logo.href"
        class="navbar__logo"
        @click="$emit('closeMenu')"
      >
        <img
            :src="logo.src"
            :alt="logo.alt"
            :width="logo.width"
            :height="logo.height"
            class="navbar__logo-img"
        />
      </component>

      <!-- Десктоп навигация -->
      <ul class="navbar__nav">
        <li v-for="link in navLinks" :key="link.id" class="navbar__nav-item">
          <component
              :is="isInternalLink(link.href) && !link.external ? RouterLink : 'a'"
              :to="isInternalLink(link.href) && !link.external ? link.href : undefined"
              :href="isInternalLink(link.href) && !link.external ? undefined : link.href"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener noreferrer' : undefined"
              class="navbar__nav-link"
              :class="{ 'navbar__nav-link--active': isActive(link.href) }"
          >
            {{ link.label }}
          </component>
        </li>
      </ul>

      <!-- Правая часть -->
      <div class="navbar__actions">

        <!-- Бургер -->
        <button
            class="navbar__burger"
            :class="{ 'navbar__burger--active': isMenuOpen }"
            aria-label="Открыть меню"
            @click="$emit('toggleMenu')"
        >
          <span class="navbar__burger-line" />
          <span class="navbar__burger-line" />
          <span class="navbar__burger-line" />
        </button>

      </div>
    </div>

    <!-- Мобильное меню -->
    <Transition
      name="mobile-menu"
      @before-enter="emit('menu-transition-start')"
      @after-enter="emit('menu-transition-end')"
      @enter-cancelled="emit('menu-transition-end')"
      @before-leave="emit('menu-transition-start')"
      @after-leave="emit('menu-transition-end')"
      @leave-cancelled="emit('menu-transition-end')"
    >
      <div v-if="isMenuOpen" class="navbar__mobile-menu">
        <ul class="navbar__mobile-nav">
          <li v-for="link in navLinks" :key="link.id">
            <component
                :is="isInternalLink(link.href) && !link.external ? RouterLink : 'a'"
                :to="isInternalLink(link.href) && !link.external ? link.href : undefined"
                :href="isInternalLink(link.href) && !link.external ? undefined : link.href"
                :target="link.external ? '_blank' : undefined"
                :rel="link.external ? 'noopener noreferrer' : undefined"
                class="navbar__mobile-link"
                @click="$emit('closeMenu')"
            >
              {{ link.label }}
            </component>
          </li>
        </ul>
      </div>
    </Transition>

  </nav>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'

const props = defineProps({
  logo:       { type: Object,  required: true },
  navLinks:   { type: Array,   required: true },
  isMenuOpen: { type: Boolean, default: false },
  isScrolled: { type: Boolean, default: false },
})

const emit = defineEmits([
  'toggleMenu',
  'closeMenu',
  'menu-transition-start',
  'menu-transition-end',
])
const route = useRoute()

function isActive(href) {
  return isInternalLink(href) && route.path === href
}

function isInternalLink(href) {
  return typeof href === 'string' && href.startsWith('/')
}
</script>

<style scoped>
.navbar {
  --nav-height: var(--size--header-navbar-height);
  --accent: var(--color--white);
  --border: var(--color--border);
  --text: var(--color--header-text);
  background: var(--color--header-navbar);
  position: relative;
  z-index: 1100;
  transition: box-shadow var(--motion-duration-base) var(--motion-ease-standard), background-color var(--motion-duration-base) var(--motion-ease-soft);
}

.navbar--menu-open {
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  overflow: hidden;
}
.navbar--scrolled {
  --nav-height: var(--size--header-navbar-height-scrolled);
  box-shadow: 0 2px 24px var(--color--shadow);
}

.navbar__container {
  width: 100%;
  max-width: 1680px;
  margin: 0 auto;
  padding: 0 50px;
  height: var(--nav-height);
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  gap: 20px;
}

.navbar__logo { display: flex; align-items: center; flex-shrink: 0; text-decoration: none; }
.navbar__logo-img {
  height: var(--size--header-logo-height);
  width: auto;
  object-fit: contain;
  display: block;
  transition: height var(--motion-duration-base) var(--motion-ease-standard), transform var(--motion-duration-base) var(--motion-ease-standard);
}
.navbar--scrolled .navbar__logo-img {
  height: var(--size--header-logo-height-scrolled);
}

.navbar__nav {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2px;
  justify-content: center;
  justify-self: center;
}
.navbar__nav-link {
  display: block;
  padding: 10px 12px;
  color: var(--text);
  font-size: var(--font-size--header-navbar-link);
  font-weight: 600;
  letter-spacing: 0.025em;
  text-decoration: none;
  white-space: nowrap;
  position: relative;
  transition: var(--motion-transition-color);
}
.navbar__nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 12px;
  right: 12px;
  height: 2px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform var(--motion-duration-base) var(--motion-ease-standard), opacity var(--motion-duration-fast) var(--motion-ease-soft);
}
.navbar__nav-link:hover { color: var(--accent); }
.navbar__nav-link:hover::after { transform: scaleX(1); }
.navbar__nav-link--active { color: var(--accent); }
.navbar__nav-link--active::after { transform: scaleX(1); }

.navbar__actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  min-width: 180px;
}

.navbar__burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  width: 38px;
  height: 38px;
  transition: transform var(--motion-duration-fast) var(--motion-ease-standard);
}
.navbar__burger-line {
  display: block;
  height: 2px;
  width: 22px;
  background: var(--color--header-text);
  border-radius: 2px;
  transition: transform var(--motion-duration-base) var(--motion-ease-standard), opacity var(--motion-duration-fast) var(--motion-ease-soft), background-color var(--motion-duration-fast) var(--motion-ease-soft);
}
.navbar__burger--active .navbar__burger-line:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.navbar__burger--active .navbar__burger-line:nth-child(2) { opacity: 0; transform: scaleX(0); }
.navbar__burger--active .navbar__burger-line:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

.navbar__mobile-menu {
  border-top: 1px solid var(--border);
  background: var(--color--header-navbar);
  overflow: hidden;
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.18);
  will-change: max-height, opacity;
}
.navbar__mobile-nav {
  list-style: none;
  margin: 0;
  padding: 8px 0 10px;
}
.navbar__mobile-link {
  display: block;
  padding: 13px 20px;
  color: var(--text);
  font-size: var(--font-size--header-navbar-mobile-link);
  font-weight: 500;
  text-decoration: none;
  border-bottom: 1px solid var(--color--border);
  transition: var(--motion-transition-color), transform var(--motion-duration-fast) var(--motion-ease-standard);
}
.navbar__mobile-link:hover {
  color: var(--accent);
  background: rgba(255, 255, 255, 0.06);
  transform: translateX(4px);
}

.navbar__mobile-nav li:last-child .navbar__mobile-link {
  border-bottom: 0;
}


.mobile-menu-enter-active {
  transition:
    max-height var(--motion-duration-menu-enter) var(--motion-ease-menu-enter),
    opacity var(--motion-duration-menu-fade-enter) var(--motion-ease-menu-enter),
    box-shadow var(--motion-duration-menu-enter) var(--motion-ease-menu-enter);
}

.mobile-menu-leave-active {
  transition:
    max-height var(--motion-duration-menu-leave) var(--motion-ease-menu-leave),
    opacity var(--motion-duration-menu-fade-leave) var(--motion-ease-menu-leave),
    box-shadow var(--motion-duration-menu-leave) var(--motion-ease-menu-leave);
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  max-height: 0;
  opacity: 0;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
  max-height: var(--motion-menu-max-height);
  opacity: 1;
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.18);
}

@media (max-width: 960px) {
  .navbar__container {
    max-width: none;
    padding: 0 var(--spacing--page-x-mobile);
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }

  .navbar__nav { display: none; }
  .navbar__burger { display: flex; }
  .navbar__actions { min-width: 0; }
}

@media (max-width: 768px) {
  .navbar__container {
    padding: 0 16px;
  }

  .navbar__logo-img {
    height: var(--size--header-logo-height);
  }

  .navbar--scrolled .navbar__logo-img {
    height: var(--size--header-logo-height-scrolled);
  }

  .navbar__burger {
    width: 34px;
    height: 34px;
    padding: 6px;
  }

  .navbar__burger-line {
    width: 20px;
  }

  .navbar__mobile-link {
    padding: 12px 16px;
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  .navbar__container {
    padding: 0 12px;
  }

  .navbar__logo-img {
    max-width: min(44vw, 180px);
  }

  .navbar__mobile-link {
    padding: 11px 14px;
    font-size: 14px;
  }
}
</style>
