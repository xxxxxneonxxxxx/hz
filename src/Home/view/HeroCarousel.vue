<template>
  <section class="hero-carousel" aria-label="Главный слайдер">
    <div class="hero-carousel__viewport">
      <!-- Показываем только один активный слайд и плавно меняем его -->
      <Transition name="hero-fade" mode="out-in">
        <article
            :key="activeSlide.id"
            class="hero-carousel__slide"
            :style="{ backgroundImage: `url('${activeSlide.image}')` }"
        >
          <div class="hero-carousel__overlay">
            <div class="hero-carousel__content">
              <h1 class="hero-carousel__title">{{ activeSlide.title }}</h1>

              <RouterLink
                  :to="activeSlide.href"
                  class="hero-carousel__button"
              >
                Подробнее
              </RouterLink>
            </div>
          </div>
        </article>
      </Transition>

      <!-- Ручная навигация по слайдам -->
      <button
          type="button"
          class="hero-carousel__nav hero-carousel__nav--prev"
          aria-label="Предыдущий слайд"
          @click="showPrevSlide"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14.5 5.5 8 12l6.5 6.5" />
        </svg>
      </button>

      <button
          type="button"
          class="hero-carousel__nav hero-carousel__nav--next"
          aria-label="Следующий слайд"
          @click="showNextSlide"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9.5 5.5 16 12l-6.5 6.5" />
        </svg>
      </button>
    </div>

  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
  intervalMs: {
    type: Number,
    default: 20000,
  },
})

const activeIndex = ref(0)
let intervalId = null

// Берем текущий слайд по индексу, с безопасным fallback на первый элемент
const activeSlide = computed(() => props.slides[activeIndex.value] ?? props.slides[0] ?? {})

function setSlide(index) {
  if (!props.slides.length) return
  activeIndex.value = index
  restartAutoplay()
}

function showNextSlide() {
  if (!props.slides.length) return
  activeIndex.value = (activeIndex.value + 1) % props.slides.length
  restartAutoplay()
}

function showPrevSlide() {
  if (!props.slides.length) return
  activeIndex.value = (activeIndex.value - 1 + props.slides.length) % props.slides.length
  restartAutoplay()
}

// Автопрокрутка нужна только когда слайдов больше одного
function startAutoplay() {
  if (props.slides.length < 2) return
  stopAutoplay()
  intervalId = window.setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % props.slides.length
  }, props.intervalMs)
}

function stopAutoplay() {
  if (intervalId === null) return
  window.clearInterval(intervalId)
  intervalId = null
}

function restartAutoplay() {
  stopAutoplay()
  startAutoplay()
}

onMounted(() => {
  startAutoplay()
})

onBeforeUnmount(() => {
  stopAutoplay()
})
</script>

<style scoped>
.hero-carousel {
  width: 100%;
  background: var(--color--home-carousel-bg);
}

.hero-carousel__viewport {
  position: relative;
  width: 100%;
  height: 100svh;
  min-height: 720px;
  overflow: hidden;
}

.hero-carousel__slide {
  position: absolute;
  inset: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.hero-carousel__overlay {
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

.hero-carousel__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 760px;
}

.hero-carousel__title {
  margin: 0;
  color: var(--color--home-carousel-title-text);
  font-size: var(--font-size--home-carousel-title);
  font-weight: 700;
  line-height: 0.98;
  text-wrap: balance;
  text-shadow: 0 12px 36px rgba(0, 0, 0, 0.32);
}

.hero-carousel__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 280px;
  min-height: 80px;
  margin-top: 40px;
  padding: 0 34px;
  border-radius: 14px;
  background: var(--color--home-carousel-button-bg);
  color: var(--color--home-carousel-button-text);
  text-decoration: none;
  font-size: var(--font-size--home-carousel-button);
  font-weight: 700;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);
  transition: var(--motion-transition-surface), color var(--motion-duration-fast) var(--motion-ease-soft);
}

.hero-carousel__button:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.24);
}

.hero-carousel__nav {
  position: absolute;
  top: 50%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 0;
  background: var(--color--home-carousel-nav-bg);
  color: var(--color--home-carousel-nav-icon);
  transform: translateY(-50%);
  cursor: pointer;
  transition: var(--motion-transition-surface), color var(--motion-duration-fast) var(--motion-ease-soft);
}

.hero-carousel__nav svg {
  width: 16px;
  height: 16px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  flex: 0 0 auto;
}

.hero-carousel__nav--prev {
  left: 0;
}

.hero-carousel__nav--next {
  right: 0;
}

.hero-carousel__nav:hover {
  background: rgba(0, 0, 0, 0.34);
}

.hero-fade-enter-active,
.hero-fade-leave-active {
  transition:
    opacity var(--motion-duration-carousel) var(--motion-ease-soft),
    transform var(--motion-duration-carousel) var(--motion-ease-carousel),
    filter var(--motion-duration-carousel) var(--motion-ease-soft);
}

.hero-fade-enter-from,
.hero-fade-leave-to {
  opacity: 0;
  transform: scale(1.01);
  filter: saturate(0.96);
}

@media (max-width: 1280px) {
  .hero-carousel__viewport {
    min-height: 640px;
  }

  .hero-carousel__overlay {
    padding:
        calc(var(--size--header-offset) + 28px)
        var(--spacing--page-x)
        72px;
  }

  .hero-carousel__title {
    font-size: var(--font-size--home-carousel-title-tablet);
  }
}

@media (max-width: 900px) {
  .hero-carousel__viewport {
    height: clamp(420px, 58svh, 560px);
    min-height: 420px;
  }

  .hero-carousel__overlay {
    align-items: center;
    padding:
        calc(var(--size--header-offset) + 12px)
        var(--spacing--page-x-mobile)
        28px;
  }

  .hero-carousel__content {
    max-width: 320px;
  }

  .hero-carousel__title {
    max-width: 280px;
    font-size: var(--font-size--home-carousel-title-mobile);
    line-height: 1.06;
    text-wrap: pretty;
  }

  .hero-carousel__nav {
    display: none;
  }
}

@media (max-width: 480px) {
  .hero-carousel__viewport {
    height: clamp(360px, 52svh, 500px);
    min-height: 360px;
  }

  .hero-carousel__overlay {
    padding:
        calc(var(--size--header-offset) + 8px)
        20px
        22px;
  }

  .hero-carousel__content {
    max-width: 260px;
  }

  .hero-carousel__title {
    max-width: 240px;
    font-size: 26px;
  }

  .hero-carousel__button {
    min-width: 170px;
    min-height: 52px;
    margin-top: 18px;
    font-size: 18px;
  }
}

</style>
