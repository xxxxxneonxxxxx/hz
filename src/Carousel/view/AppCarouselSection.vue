<template>
  <section
    class="app-carousel"
    :class="{
      'app-carousel--compact': compact,
      'app-carousel--hero': isHero,
    }"
    :aria-label="section.ariaLabel || section.title || activeSlide?.title || 'Карусель'"
  >
    <div class="app-carousel__container">
      <div class="app-carousel__viewport">
        <Transition name="app-carousel-fade" mode="out-in">
          <component
            v-if="activeSlide"
            :key="activeSlide.key || activeSlide.id || activeIndex"
            :is="isHero ? 'article' : 'figure'"
            class="app-carousel__slide"
            :class="{ 'app-carousel__slide--hero': isHero }"
            :style="slideStyle"
          >
            <template v-if="isHero">
              <div class="app-carousel__hero-overlay">
                <div class="app-carousel__hero-content">
                  <h1 v-if="activeSlide.title" class="app-carousel__title app-carousel__title--hero">
                    {{ activeSlide.title }}
                  </h1>

                  <component
                    :is="actionTag"
                    v-if="resolvedAction"
                    v-bind="actionAttrs"
                    class="app-carousel__button app-carousel__button--hero"
                    @click="handleActionClick"
                  >
                    {{ resolvedAction.label }}
                  </component>
                </div>
              </div>
            </template>

            <img
              v-else
              :src="activeSlide.image"
              :alt="activeSlide.alt"
              class="app-carousel__image"
            />
          </component>
        </Transition>

        <button
          v-if="hasMultipleSlides"
          type="button"
          class="app-carousel__nav app-carousel__nav--prev"
          :aria-label="section.controls?.prevLabel || defaults.prevAriaLabel"
          @click="showPrevSlide"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14.5 5.5 8 12l6.5 6.5" />
          </svg>
        </button>

        <button
          v-if="hasMultipleSlides"
          type="button"
          class="app-carousel__nav app-carousel__nav--next"
          :aria-label="section.controls?.nextLabel || defaults.nextAriaLabel"
          @click="showNextSlide"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9.5 5.5 16 12l-6.5 6.5" />
          </svg>
        </button>
      </div>

      <div v-if="resolvedAction && !isHero" class="app-carousel__actions">
        <component
          :is="actionTag"
          v-bind="actionAttrs"
          class="app-carousel__button"
          @click="handleActionClick"
        >
          {{ resolvedAction.label }}
        </component>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { CAROUSEL_DEFAULTS } from '../config/carousel.config.js'
import '../config/carousel.style-config.css'
import { useCarousel } from '../model/useCarousel.js'

const props = defineProps({
  section: {
    type: Object,
    required: true,
  },
  compact: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: 'default',
  },
})

const emit = defineEmits(['action'])
const defaults = CAROUSEL_DEFAULTS
const slidesRef = computed(() => props.section.slides ?? [])
const intervalMsRef = computed(() => props.section.intervalMs)
const { activeIndex, activeSlide, hasMultipleSlides, showNextSlide, showPrevSlide } =
  useCarousel(slidesRef, intervalMsRef)
const isHero = computed(() => props.variant === 'hero')
const resolvedAction = computed(() => activeSlide.value?.action ?? props.section.action ?? null)
const slideStyle = computed(() => {
  if (!isHero.value || !activeSlide.value?.image) {
    return undefined
  }

  return {
    backgroundImage: `url('${activeSlide.value.image}')`,
  }
})

const actionTag = computed(() => {
  if (resolvedAction.value?.to) {
    return RouterLink
  }

  if (resolvedAction.value?.href) {
    return 'a'
  }

  return 'button'
})

const actionAttrs = computed(() => {
  const action = resolvedAction.value

  if (!action) {
    return {}
  }

  if (action.to) {
    return { to: action.to }
  }

  if (action.href) {
    return {
      href: action.href,
      target: action.external ? '_blank' : undefined,
      rel: action.external ? 'noopener noreferrer' : undefined,
    }
  }

  return { type: 'button' }
})

function handleActionClick() {
  if (resolvedAction.value?.event) {
    emit('action', resolvedAction.value.event)
  }
}
</script>

<style scoped>
.app-carousel {
  padding: var(--size--page-section-padding-y) var(--spacing--page-x);
  background: var(--color--app-carousel-bg);
}

.app-carousel--compact {
  padding: 36px 0 0;
  background: transparent;
}

.app-carousel--hero {
  width: 100%;
  padding: 0;
  background: var(--color--home-carousel-bg);
}

.app-carousel__container {
  max-width: 650px;
  margin: 0 auto;
}

.app-carousel--hero .app-carousel__container {
  max-width: none;
}

.app-carousel--compact .app-carousel__container {
  max-width: 900px;
  margin: 0 auto;
}

.app-carousel__title {
  margin: 0 0 24px;
  color: var(--color--app-carousel-title);
  font-size: var(--font-size--app-carousel-title);
  font-weight: 700;
  line-height: 1.08;
  text-align: center;
  text-transform: uppercase;
}

.app-carousel--compact .app-carousel__title {
  margin-bottom: 28px;
}

.app-carousel__viewport {
  position: relative;
  overflow: hidden;
}

.app-carousel--hero .app-carousel__viewport {
  width: 100%;
  height: 100svh;
  min-height: 720px;
}

.app-carousel--compact .app-carousel__viewport {
  padding: 0 56px;
}

.app-carousel__slide {
  margin: 0;
}

.app-carousel__slide--hero {
  position: absolute;
  inset: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.app-carousel__image {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 0.82;
  object-fit: cover;
}

.app-carousel__hero-overlay {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding:
    calc(var(--size--header-offset) + 40px)
    var(--spacing--page-x)
    96px;
  background:
    linear-gradient(
      90deg,
      var(--color--home-carousel-overlay-start) 0%,
      var(--color--home-carousel-overlay-middle) 42%,
      var(--color--home-carousel-overlay-end) 100%
    );
}

.app-carousel__hero-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 760px;
}

.app-carousel--compact .app-carousel__image {
  aspect-ratio: 1 / 0.74;
}

.app-carousel__nav {
  position: absolute;
  top: 50%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  padding: 0;
  border: 0;
  background: var(--color--app-carousel-nav-bg);
  color: var(--color--app-carousel-nav-icon);
  transform: translateY(-50%);
  cursor: pointer;
  transition: var(--motion-transition-surface), color var(--motion-duration-fast) var(--motion-ease-soft);
}

.app-carousel__nav svg {
  width: 14px;
  height: 14px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}

.app-carousel__nav--prev {
  left: 0;
}

.app-carousel__nav--next {
  right: 0;
}

.app-carousel--compact .app-carousel__nav--prev {
  left: 12px;
}

.app-carousel--compact .app-carousel__nav--next {
  right: 12px;
}

.app-carousel__actions {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}

.app-carousel--compact .app-carousel__actions {
  justify-content: center;
}

.app-carousel__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 240px;
  min-height: 58px;
  padding: 0 20px;
  border: 0;
  border-radius: 12px;
  background: var(--color--app-carousel-button-bg);
  color: var(--color--app-carousel-button-text);
  font-size: var(--font-size--app-carousel-button);
  font-weight: 700;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: var(--motion-transition-surface), color var(--motion-duration-fast) var(--motion-ease-soft);
}

.app-carousel__button:hover {
  transform: translateY(-2px);
}

.app-carousel__title--hero {
  margin: 0;
  color: var(--color--home-carousel-title-text);
  font-size: var(--font-size--home-carousel-title);
  line-height: 0.98;
  text-align: left;
  text-wrap: balance;
  text-shadow: 0 12px 36px rgba(0, 0, 0, 0.32);
}

.app-carousel__button--hero {
  min-width: 280px;
  min-height: 80px;
  margin-top: 40px;
  padding: 0 34px;
  border-radius: 14px;
  background: var(--color--home-carousel-button-bg);
  color: var(--color--home-carousel-button-text);
  font-size: var(--font-size--home-carousel-button);
  text-transform: none;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);
}

.app-carousel__button--hero:hover {
  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.24);
}

.app-carousel--hero .app-carousel__nav {
  width: 44px;
  height: 44px;
  background: var(--color--home-carousel-nav-bg);
  color: var(--color--home-carousel-nav-icon);
}

.app-carousel--hero .app-carousel__nav svg {
  width: 16px;
  height: 16px;
  flex: 0 0 auto;
}

.app-carousel__nav:hover {
  background: rgba(0, 0, 0, 0.34);
}

.app-carousel-fade-enter-active,
.app-carousel-fade-leave-active {
  transition:
    opacity var(--motion-duration-carousel) var(--motion-ease-soft),
    transform var(--motion-duration-carousel) var(--motion-ease-carousel),
    filter var(--motion-duration-carousel) var(--motion-ease-soft);
}

.app-carousel-fade-enter-from,
.app-carousel-fade-leave-to {
  opacity: 0;
  transform: scale(0.992);
  filter: saturate(0.96);
}

@media (max-width: 1100px) {
  .app-carousel__button {
    min-width: 220px;
    min-height: 54px;
  }

  .app-carousel--hero .app-carousel__viewport {
    min-height: 640px;
  }

  .app-carousel__hero-overlay {
    padding:
      calc(var(--size--header-offset) + 28px)
      var(--spacing--page-x)
      72px;
  }

  .app-carousel__title--hero {
    font-size: var(--font-size--home-carousel-title-tablet);
  }
}

@media (max-width: 900px) {
  .app-carousel {
    padding: var(--size--page-section-padding-y-mobile) var(--spacing--page-x-mobile);
  }

  .app-carousel--compact {
    padding: 24px 0 0;
  }

  .app-carousel--compact .app-carousel__viewport {
    padding: 0 34px;
  }

  .app-carousel__title {
    margin-bottom: 18px;
    font-size: var(--font-size--app-carousel-title-mobile);
  }

  .app-carousel__image {
    aspect-ratio: 1 / 0.84;
  }

  .app-carousel__actions {
    margin-top: 18px;
  }

  .app-carousel__button {
    width: 100%;
    min-width: 0;
    min-height: 56px;
    border-radius: 12px;
    font-size: var(--font-size--app-carousel-button-mobile);
  }

  .app-carousel--hero {
    padding: 0;
  }

  .app-carousel--hero .app-carousel__viewport {
    height: clamp(420px, 58svh, 560px);
    min-height: 420px;
  }

  .app-carousel__hero-overlay {
    align-items: center;
    padding:
      calc(var(--size--header-offset) + 12px)
      var(--spacing--page-x-mobile)
      28px;
  }

  .app-carousel__hero-content {
    max-width: 320px;
  }

  .app-carousel__title--hero {
    max-width: 280px;
    font-size: var(--font-size--home-carousel-title-mobile);
    line-height: 1.06;
    text-wrap: pretty;
  }

  .app-carousel--hero .app-carousel__nav {
    display: none;
  }

  .app-carousel__button--hero {
    min-width: 170px;
    min-height: 52px;
    margin-top: 18px;
    padding: 0 24px;
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .app-carousel--hero .app-carousel__viewport {
    height: clamp(360px, 52svh, 500px);
    min-height: 360px;
  }

  .app-carousel__hero-overlay {
    padding:
      calc(var(--size--header-offset) + 8px)
      20px
      22px;
  }

  .app-carousel__hero-content {
    max-width: 260px;
  }

  .app-carousel__title--hero {
    max-width: 240px;
    font-size: 26px;
  }
}
</style>
