<!-- header/view/TopBar.vue -->
<template>
  <div class="top-bar" :class="{ 'top-bar--hidden': isScrolled }">
    <div class="top-bar__container">

      <!-- Соцсети -->
      <div class="top-bar__socials">
        <a
            v-for="s in socials"
            :key="s.id"
            :href="s.href"
            :aria-label="s.label"
            target="_blank"
            rel="noopener noreferrer"
            class="top-bar__social"
        >
          <!-- VK -->
          <svg v-if="s.icon === 'vk'" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2zm3.08 13.5h-1.68c-.63 0-.82-.5-1.95-1.63-1-.96-1.44-.82-1.44.14v1.49c0 .44-.14.7-1.3.7-1.9 0-4-1.15-5.47-3.3C4.7 10.1 4 8.12 4 7.68c0-.18.07-.36.38-.36h1.68c.28 0 .38.13.49.43.54 1.56 1.44 2.93 1.81 2.93.14 0 .2-.07.2-.43V8.4c-.04-1.03-.6-1.12-.6-1.49 0-.15.12-.3.32-.3h2.64c.23 0 .3.12.3.37v3.14c0 .25.11.34.18.34.14 0 .26-.09.52-.35 1.6-1.79 2.74-4.55 2.74-4.55.08-.18.26-.36.57-.36h1.68c.5 0 .61.26.5.57-.84 1.98-2.95 5.63-2.95 5.63-.13.2-.18.29 0 .51.13.17.55.53.83.85.6.67 1.06 1.24 1.18 1.63.13.4-.08.61-.5.61z"/>
          </svg>
          <!-- Telegram -->
          <svg v-else-if="s.icon === 'telegram'" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8-1.68 7.92c-.12.54-.46.67-.93.42l-2.58-1.9-1.24 1.19c-.14.14-.25.25-.51.25l.18-2.56 4.7-4.24c.2-.18-.04-.28-.32-.1L7.93 15.15l-2.52-.79c-.55-.17-.56-.55.12-.81l9.84-3.8c.45-.17.85.1.27.25z"/>
          </svg>
          <!-- YouTube -->
          <svg v-else-if="s.icon === 'youtube'" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.58 7.19c-.23-.87-.92-1.56-1.79-1.79C18.25 5 12 5 12 5s-6.25 0-7.79.4c-.87.23-1.56.92-1.79 1.79C2 8.73 2 12 2 12s0 3.27.42 4.81c.23.87.92 1.56 1.79 1.79C5.75 19 12 19 12 19s6.25 0 7.79-.4c.87-.23 1.56-.92 1.79-1.79C22 15.27 22 12 22 12s0-3.27-.42-4.81zM10 15V9l5.2 3-5.2 3z"/>
          </svg>
          <!-- Rutube -->
          <svg v-else-if="s.icon === 'rutube'" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h4c1.66 0 3 1.34 3 3s-1.34 3-3 3h-2v2zm0-4h2c.55 0 1-.45 1-1s-.45-1-1-1h-2v2z"/>
          </svg>
          <!-- Instagram -->
          <svg v-else-if="s.icon === 'instagram'" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <!-- Яндекс Дзен -->
          <svg v-else-if="s.icon === 'zen'" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm.5 10.5c0 2.485-1.567 4.627-3.781 5.46-.141.052-.219-.13-.096-.225 1.074-.831 1.877-2.496 1.877-5.235v-.5c0-2.739-.803-4.404-1.877-5.235-.123-.095-.045-.277.096-.225C10.933 7.373 12.5 9.515 12.5 12v.5z"/>
          </svg>
        </a>
      </div>

      <!-- Контакты -->
      <div class="top-bar__contacts">
        <a :href="contacts.phone.href" class="top-bar__contact">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
          {{ contacts.phone.label }}
        </a>
        <a :href="contacts.email.href" class="top-bar__contact">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
          {{ contacts.email.label }}
        </a>
        <a :href="contacts.whatsapp.href" target="_blank" rel="noopener noreferrer" class="top-bar__contact top-bar__contact--wa">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          {{ contacts.whatsapp.label }}
        </a>
      </div>

    </div>
  </div>
</template>

<script setup>
defineProps({
  socials:  { type: Array,  required: true },
  contacts: { type: Object, required: true },
  isScrolled: { type: Boolean, default: false },
})
</script>

<style scoped>
.top-bar {
  background: var(--color--header-topbar);
  border-bottom: 1px solid #2d2d2d;
  max-height: var(--size--header-topbar-height);
  padding: 10px 0;
  overflow: hidden;
  transition: max-height 0.28s ease, opacity 0.22s ease, padding 0.28s ease, border-color 0.28s ease;
}
.top-bar--hidden {
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
  opacity: 0;
  border-bottom-color: transparent;
}
.top-bar__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

/* Соцсети */
.top-bar__socials { display: flex; align-items: center; gap: 12px; }
.top-bar__social {
  color: var(--color--header-text);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  transition: color 0.2s;
  text-decoration: none;
}
.top-bar__social:hover { color: #c9a96e; }
.top-bar__social svg { width: 20px; height: 20px; flex-shrink: 0; }

/* Контакты */
.top-bar__contacts { display: flex; align-items: center; gap: 18px; flex-wrap: wrap; }
.top-bar__contact {
  color: var(--color--header-text);
  font-size: var(--font-size--header-topbar-contact);
  font-family: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.2s;
  white-space: nowrap;
}
.top-bar__contact svg { width: 14px; height: 14px; flex-shrink: 0; }
.top-bar__contact:hover { color: #c9a96e; }
.top-bar__contact--wa { color: #25D366; }
.top-bar__contact--wa:hover { color: #1ebe5d; }

@media (max-width: 600px) {
  .top-bar__contacts { gap: 10px; }
  .top-bar__contact { font-size: var(--font-size--header-topbar-contact-mobile); }
}
</style>
