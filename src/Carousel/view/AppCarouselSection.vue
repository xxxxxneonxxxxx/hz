<template>
  <section
    class="app-carousel"
    :class="{ 'app-carousel--compact': compact }"
    :aria-label="section.ariaLabel || section.title || 'Карусель'"
  >
    <div class="app-carousel__container">

      <div class="app-carousel__viewport">
        <Transition name="app-carousel-fade" mode="out-in">
          <figure
            v-if="activeSlide"
            :key="activeSlide.key || activeSlide.id || activeIndex"
            class="app-carousel__slide"
          >
            <img
              :src="activeSlide.image"
              :alt="activeSlide.alt"
              class="app-carousel__image"
            />
          </figure>
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

      <div v-if="section.action" class="app-carousel__actions">
        <component
          :is="actionTag"
          v-bind="actionAttrs"
          class="app-carousel__button"
          @click="handleActionClick"
        >
          {{ section.action.label }}
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
})

const emit = defineEmits(['action'])
const defaults = CAROUSEL_DEFAULTS
const slidesRef = computed(() => props.section.slides ?? [])
const intervalMsRef = computed(() => props.section.intervalMs)
const { activeIndex, activeSlide, hasMultipleSlides, showNextSlide, showPrevSlide } =
  useCarousel(slidesRef, intervalMsRef)

const actionTag = computed(() => {
  if (props.section.action?.to) {
    return RouterLink
  }

  if (props.section.action?.href) {
    return 'a'
  }

  return 'button'
})

const actionAttrs = computed(() => {
  const action = props.section.action

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
  if (props.section.action?.event) {
    emit('action', props.section.action.event)
  }
}
</script>

<style scoped>
.app-carousel {
  padding: 96px var(--spacing--page-x) 110px;
  background: var(--color--app-carousel-bg);
}

.app-carousel--compact {
  padding: 36px 0 0;
  background: transparent;
}

.app-carousel__container {
  max-width: 650px;
  margin: 0 auto;
}

.app-carousel--compact .app-carousel__container {
  max-width: 900px;
  margin: 0 auto;
}

.app-carousel__title {
  margin: 0 0 24px;
  color: var(--color--app-carousel-title);
  font-size: var(--font-size--app-carousel-title);
  font-weight: 500;
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

.app-carousel--compact .app-carousel__viewport {
  padding: 0 56px;
}

.app-carousel__slide {
  margin: 0;
}

.app-carousel__image {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 0.82;
  object-fit: cover;
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
}

.app-carousel-fade-enter-active,
.app-carousel-fade-leave-active {
  transition: opacity 0.35s ease;
}

.app-carousel-fade-enter-from,
.app-carousel-fade-leave-to {
  opacity: 0;
}

@media (max-width: 1100px) {
  .app-carousel__button {
    min-width: 220px;
    min-height: 54px;
  }
}

@media (max-width: 900px) {
  .app-carousel {
    padding: 72px var(--spacing--page-x-mobile) 80px;
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
}
</style>
