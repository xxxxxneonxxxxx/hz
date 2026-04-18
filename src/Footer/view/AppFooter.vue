<template>
  <footer class="App-footer">
    <div class="footer__main">
      <div class="footer__container">
        <component
          :is="isInternalLink(logo.href) ? RouterLink : 'a'"
          :to="isInternalLink(logo.href) ? logo.href : undefined"
          :href="isInternalLink(logo.href) ? undefined : logo.href"
          class="footer__logo"
        >
          <img
              :src="logo.src"
              :alt="logo.alt"
              :width="logo.width"
              :height="logo.height"
          />
        </component>

        <div class="footer__columns">
          <div v-for="col in columns" :key="col.id" class="footer__col">
            <h4 class="footer__title">{{ col.title }}</h4>

            <ul class="footer__list">
              <li
                v-for="(item, index) in col.items"
                :key="`${col.id}-${index}-${item.text ?? 'spacer'}`"
                :class="{ 'footer__list-item--spacer': item.spacer }"
                class="footer__list-item"
              >
                <template v-if="!item.spacer">
                  <component
                    v-if="item.href"
                    :is="isInternalLink(item.href) && !item.external ? RouterLink : 'a'"
                    :to="isInternalLink(item.href) && !item.external ? item.href : undefined"
                    :href="isInternalLink(item.href) && !item.external ? undefined : item.href"
                    :target="item.external ? '_blank' : undefined"
                    :rel="item.external ? 'noopener noreferrer' : undefined"
                    class="footer__link"
                  >
                    {{ item.text }}
                  </component>
                  <span v-else class="footer__text">
                    {{ item.text }}
                  </span>
                </template>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="footer__container footer__bottom-container">
        <div class="footer__copyright">
          {{ bottom.copyright }}
        </div>

        <div class="footer__socials">
          <a
            v-for="social in bottom.socials"
            :key="social.id"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.label"
            class="footer__social"
          >
            <svg v-if="social.icon === 'vk'" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.8 7.4c.12 5.9 3.08 9.46 8.26 9.46h.3v-3.4c1.9.18 3.34 1.56 3.92 3.4H19c-.74-2.7-2.68-4.18-3.9-4.74 1.22-.7 2.92-2.4 3.32-4.72h-2.48c-.52 1.88-2.08 3.58-3.58 3.74V7.4h-2.48v6.42c-1.52-.38-3.44-2.22-3.52-6.42H3.8Z" />
            </svg>
            <svg v-else-if="social.icon === 'telegram'" viewBox="0 0 24 24" fill="currentColor">
              <path d="m20.7 4.3-3 14.2c-.22 1-.82 1.26-1.66.78l-4.6-3.4-2.22 2.14c-.24.24-.46.46-.92.46l.32-4.68 8.52-7.7c.38-.34-.08-.54-.58-.2L6.04 12.5l-4.52-1.42c-.98-.3-1-.98.2-1.44l17.66-6.8c.82-.3 1.54.2 1.32 1.46Z" />
            </svg>
            <svg v-else-if="social.icon === 'youtube'" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.58 7.2a2.98 2.98 0 0 0-2.1-2.1C17.64 4.6 12 4.6 12 4.6s-5.64 0-7.48.5a2.98 2.98 0 0 0-2.1 2.1c-.5 1.84-.5 4.8-.5 4.8s0 2.96.5 4.8a2.98 2.98 0 0 0 2.1 2.1c1.84.5 7.48.5 7.48.5s5.64 0 7.48-.5a2.98 2.98 0 0 0 2.1-2.1c.5-1.84.5-4.8.5-4.8s0-2.96-.5-4.8ZM9.9 15.14V8.86L15.34 12 9.9 15.14Z" />
            </svg>
            <svg v-else-if="social.icon === 'rutube'" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 5h8.56c3.1 0 5.24 1.94 5.24 4.76 0 2.06-1.14 3.6-3.1 4.26L19 19h-4.18l-2.82-4.42H9.1V19H5V5Zm4.1 6.3h3.76c1.1 0 1.78-.56 1.78-1.46 0-.92-.68-1.5-1.78-1.5H9.1v2.96Z" />
            </svg>
            <svg v-else-if="social.icon === 'instagram'" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.8 3h8.4A4.8 4.8 0 0 1 21 7.8v8.4a4.8 4.8 0 0 1-4.8 4.8H7.8A4.8 4.8 0 0 1 3 16.2V7.8A4.8 4.8 0 0 1 7.8 3Zm0 1.8A3 3 0 0 0 4.8 7.8v8.4a3 3 0 0 0 3 3h8.4a3 3 0 0 0 3-3V7.8a3 3 0 0 0-3-3H7.8Zm8.85 1.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 1.8A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3Z" />
            </svg>
            <svg v-else-if="social.icon === 'zen'" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2c2.38 0 3.57 0 4.48.46a4.5 4.5 0 0 1 1.96 1.96C18.9 5.33 18.9 6.52 18.9 8.9c0 2.38 0 3.57-.46 4.48a4.5 4.5 0 0 1-1.96 1.96c-.9.46-2.1.46-4.48.46-2.38 0-3.57 0-4.48-.46a4.5 4.5 0 0 1-1.96-1.96C5.1 12.47 5.1 11.28 5.1 8.9c0-2.38 0-3.57.46-4.48a4.5 4.5 0 0 1 1.96-1.96C8.43 2 9.62 2 12 2Zm0 2.1c-1.28 0-2.06.02-2.64.1a6.72 6.72 0 0 0 2.54 2.54c.08-.58.1-1.36.1-2.64Zm-4.44.92c-.5.5-.8 1.1-.94 1.84.7-.1 1.66-.1 3.02-.1A8.82 8.82 0 0 1 7.56 5.02Zm8.88 0a8.82 8.82 0 0 1-2.08 2.08c1.36 0 2.32 0 3.02.1-.14-.74-.44-1.34-.94-1.84ZM6.52 9.86c.1.7.1 1.66.1 3.02a8.82 8.82 0 0 1 2.08-2.08c-1.36 0-2.32 0-3.02-.1Zm10.96 0c-.7.1-1.66.1-3.02.1a8.82 8.82 0 0 1 2.08 2.08c0-1.36 0-2.32.1-3.02Zm-5.58 1.04a6.72 6.72 0 0 0-2.54 2.54c.58.08 1.36.1 2.64.1 0-1.28-.02-2.06-.1-2.64Zm.2 2.64c1.28 0 2.06-.02 2.64-.1a6.72 6.72 0 0 0-2.54-2.54c-.08.58-.1 1.36-.1 2.64Zm-4.54 2.46c.5.5 1.1.8 1.84.94-.1-.7-.1-1.66-.1-3.02a8.82 8.82 0 0 1-2.08 2.08Zm8.88 0a8.82 8.82 0 0 1-2.08-2.08c0 1.36 0 2.32-.1 3.02.74-.14 1.34-.44 1.84-.94Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useFooterModel } from '../model/footerModel'

const { logo, columns, bottom } = useFooterModel()

function isInternalLink(href) {
  return typeof href === 'string' && href.startsWith('/')
}
</script>

<style scoped>
.App-footer {
  background: transparent;
  color: var(--color--footer-text);
  margin-top: 0;
}

.footer__main {
  background: var(--color--footer-bg);
  padding:
    var(--size--footer-main-padding-top)
    0
    var(--size--footer-main-padding-bottom);
}

.footer__container {
  max-width: var(--size--footer-container-max);
  margin: 0 auto;
  padding: 0 var(--size--footer-container-padding-x);
  display: flex;
  gap: var(--size--footer-main-gap);
  align-items: flex-start;
}

.footer__logo {
  display: inline-block;
  flex: 0 0 300px;
}

.footer__logo img {
  display: block;
  width: 260px;
  height: auto;
}

.footer__columns {
  display: flex;
  gap: var(--size--footer-columns-gap);
  flex: 1;
}

.footer__col {
  min-width: 0;
  flex: 1;
}

.footer__title {
  font-size: var(--font-size--footer-title);
  margin: 0 0 28px;
  color: var(--color--footer-title);
  font-weight: 700;
  line-height: 1.15;
  text-transform: uppercase;
}

.footer__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer__list-item {
  margin: 0;
}

.footer__list-item + .footer__list-item {
  margin-top: 10px;
}

.footer__list-item--spacer {
  height: 18px;
}

.footer__link,
.footer__text {
  display: block;
  color: var(--color--footer-text);
  text-decoration: none;
  font-size: var(--font-size--footer-link);
  line-height: 1.45;
}

.footer__link:hover {
  color: var(--color--footer-accent);
}

.footer__bottom {
  background: var(--color--footer-surface);
}

.footer__bottom-container {
  justify-content: space-between;
  align-items: center;
  gap: var(--size--footer-bottom-gap);
  padding-top: 18px;
  padding-bottom: 18px;
}

.footer__copyright {
  font-size: var(--font-size--footer-bottom);
  color: var(--color--footer-muted);
  line-height: 1.4;
}

.footer__socials {
  display: flex;
  align-items: center;
  gap: 18px;
}

.footer__social {
  color: var(--color--footer-social);
  transition: opacity 0.2s ease, color 0.2s ease;
}

.footer__social:hover {
  color: var(--color--footer-accent);
  opacity: 0.82;
}

.footer__social svg {
  width: 24px;
  height: 24px;
  display: block;
}

@media (max-width: 1200px) {
  .footer__container {
    flex-direction: column;
    gap: var(--size--footer-main-gap-tablet);
  }

  .footer__logo {
    flex-basis: auto;
  }

  .footer__columns {
    width: 100%;
    gap: var(--size--footer-columns-gap-tablet);
    flex-wrap: wrap;
  }
}

@media (max-width: 900px) {
  .footer__main {
    padding:
      var(--size--footer-main-padding-top-mobile)
      0
      var(--size--footer-main-padding-bottom-mobile);
  }

  .footer__container {
    padding: 0 var(--size--footer-container-padding-x-mobile);
    gap: var(--size--footer-main-gap-mobile);
  }

  .footer__columns {
    flex-direction: column;
    gap: var(--size--footer-columns-gap-mobile);
  }

  .footer__logo img {
    width: 180px;
  }

  .footer__title {
    margin-bottom: 14px;
    font-size: 17px;
  }

  .footer__link,
  .footer__text {
    font-size: 14px;
    line-height: 1.35;
  }

  .footer__list-item + .footer__list-item {
    margin-top: 8px;
  }

  .footer__list-item--spacer {
    height: 10px;
  }

  .footer__bottom-container {
    flex-direction: column;
    align-items: flex-start;
    padding: 14px var(--size--footer-container-padding-x-mobile);
    gap: var(--size--footer-bottom-gap-mobile);
  }

  .footer__socials {
    gap: 14px;
  }

  .footer__social svg {
    width: 22px;
    height: 22px;
  }
}

@media (max-width: 480px) {
  .footer__main {
    padding:
      var(--size--footer-main-padding-top-phone)
      0
      var(--size--footer-main-padding-bottom-phone);
  }

  .footer__container {
    padding: 0 var(--size--footer-container-padding-x-phone);
    gap: var(--size--footer-main-gap-phone);
  }

  .footer__logo {
    width: 100%;
  }

  .footer__logo img {
    width: 148px;
  }

  .footer__columns {
    gap: var(--size--footer-columns-gap-phone);
  }

  .footer__title {
    margin-bottom: 12px;
    font-size: 15px;
  }

  .footer__link,
  .footer__text {
    font-size: 12px;
    line-height: 1.3;
  }

  .footer__bottom-container {
    padding: 12px var(--size--footer-container-padding-x-phone);
    gap: var(--size--footer-bottom-gap-phone);
  }

  .footer__copyright {
    width: 100%;
    font-size: 11px;
    line-height: 1.35;
    white-space: normal;
    overflow-wrap: anywhere;
  }

  .footer__socials {
    width: 100%;
    justify-content: flex-start;
    gap: 12px;
  }

  .footer__social svg {
    width: 20px;
    height: 20px;
  }
}
</style>
