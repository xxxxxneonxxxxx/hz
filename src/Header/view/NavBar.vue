<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled, 'navbar--menu-open': isMenuOpen }">
    <div class="navbar__container">

      <!-- Логотип -->
      <a :href="logo.href" class="navbar__logo" @click="$emit('closeMenu')">
        <img
            :src="logo.src"
            :alt="logo.alt"
            :width="logo.width"
            :height="logo.height"
            class="navbar__logo-img"
        />
      </a>

      <!-- Десктоп навигация -->
      <ul class="navbar__nav">
        <li v-for="link in navLinks" :key="link.id" class="navbar__nav-item">
          <a
              :href="link.href"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener noreferrer' : undefined"
              class="navbar__nav-link"
              :class="{ 'navbar__nav-link--active': isActive(link.href) }"
          >
            {{ link.label }}
          </a>
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
    <Transition name="mobile-menu">
      <div v-if="isMenuOpen" class="navbar__mobile-menu">
        <ul class="navbar__mobile-nav">
          <li v-for="link in navLinks" :key="link.id">
            <a
                :href="link.href"
                :target="link.external ? '_blank' : undefined"
                :rel="link.external ? 'noopener noreferrer' : undefined"
                class="navbar__mobile-link"
                @click="$emit('closeMenu')"
            >
              {{ link.label }}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </Transition>

  </nav>
</template>

<script setup>
const props = defineProps({
  logo:       { type: Object,  required: true },
  navLinks:   { type: Array,   required: true },
  isMenuOpen: { type: Boolean, default: false },
  isScrolled: { type: Boolean, default: false },
})

defineEmits(['toggleMenu', 'closeMenu'])

function isActive(href) {
  if (typeof window === 'undefined') return false
  return window.location.pathname === href
}
</script>

<style scoped>
.navbar {
  --nav-height: var(--size--header-navbar-height);
  --accent: #c9a96e;
  --border: #ebebeb;
  --text: var(--color--header-text);
  background: var(--color--header-navbar);
  position: relative;
  z-index: 1100;
  transition: box-shadow 0.3s, background-color 0.3s;
}
.navbar--scrolled {
  --nav-height: var(--size--header-navbar-height-scrolled);
  box-shadow: 0 2px 24px rgba(0, 0, 0, 0.10);
}

.navbar__container {
  width: 100%;
  margin: 0;
  padding: 0 50px;
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.navbar__logo { display: flex; align-items: center; flex-shrink: 0; text-decoration: none; }
.navbar__logo-img {
  height: var(--size--header-logo-height);
  width: auto;
  object-fit: contain;
  display: block;
  transition: height 0.25s ease;
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
  flex: 1;
  justify-content: flex-start;
  margin-left: 56px;
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
  transition: color 0.2s;
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
  transition: transform 0.25s ease;
}
.navbar__nav-link:hover { color: var(--accent); }
.navbar__nav-link:hover::after { transform: scaleX(1); }
.navbar__nav-link--active { color: var(--accent); }
.navbar__nav-link--active::after { transform: scaleX(1); }

.navbar__actions { display: flex; align-items: center; gap: 4px; flex-shrink: 0; }

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
}
.navbar__burger-line {
  display: block;
  height: 2px;
  width: 22px;
  background: var(--color--header-text);
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
}
.navbar__burger--active .navbar__burger-line:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.navbar__burger--active .navbar__burger-line:nth-child(2) { opacity: 0; transform: scaleX(0); }
.navbar__burger--active .navbar__burger-line:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

.navbar__mobile-menu {
  border-top: 1px solid var(--border);
  background: var(--color--header-navbar);
  overflow: hidden;
}
.navbar__mobile-nav { list-style: none; margin: 0; padding: 8px 0; }
.navbar__mobile-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 20px;
  color: var(--text);
  font-size: var(--font-size--header-navbar-mobile-link);
  font-weight: 500;
  text-decoration: none;
  border-bottom: 1px solid #f5f5f5;
  transition: color 0.2s, padding-left 0.2s;
}
.navbar__mobile-link svg {
  width: 16px;
  height: 16px;
  color: var(--color--header-text);
  transition: color 0.2s;
}
.navbar__mobile-link:hover { color: var(--accent); padding-left: 28px; }
.navbar__mobile-link:hover svg { color: var(--accent); }

.mobile-menu-enter-active,
.mobile-menu-leave-active { transition: max-height 0.32s ease, opacity 0.32s ease; max-height: 500px; }
.mobile-menu-enter-from,
.mobile-menu-leave-to { max-height: 0; opacity: 0; }

@media (max-width: 960px) {
  .navbar__container {
    padding: 0 var(--spacing--page-x-mobile);
  }

  .navbar__nav { display: none; }
  .navbar__burger { display: flex; }
}
@media (max-width: 480px) {
  .navbar {
    --nav-height: 78px;
  }
  .navbar--scrolled {
    --nav-height: 68px;
  }
  .navbar__logo-img { height: 50px; }
  .navbar--scrolled .navbar__logo-img { height: 42px; }
}
</style>
