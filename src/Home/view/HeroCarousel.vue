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
  height: 70vh;
  min-height: 460px;
  max-height: 720px;
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
  align-items: flex-end;
  width: 100%;
  height: 100%;
  padding: 72px var(--spacing--page-x) 64px;
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
  max-width: 1160px;
}

.hero-carousel__title {
  display: inline-block;
  margin: 0;
  padding: 14px 24px 18px;
  background: var(--color--home-carousel-title-bg);
  color: var(--color--home-carousel-title-text);
  font-size: var(--font-size--home-carousel-title);
  font-weight: 300;
  line-height: 1.05;
}

.hero-carousel__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 222px;
  min-height: 72px;
  margin-top: 40px;
  padding: 0 28px;
  border-radius: 14px;
  background: var(--color--home-carousel-button-bg);
  color: var(--color--home-carousel-button-text);
  text-decoration: none;
  font-size: var(--font-size--home-carousel-button);
  font-weight: 700;
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

.hero-fade-enter-active,
.hero-fade-leave-active {
  transition: opacity 0.45s ease;
}

.hero-fade-enter-from,
.hero-fade-leave-to {
  opacity: 0;
}

@media (max-width: 1280px) {
  .hero-carousel__viewport {
    min-height: 420px;
    height: 64vh;
  }

  .hero-carousel__overlay {
    padding: 64px var(--spacing--page-x) 56px;
  }

  .hero-carousel__title {
    font-size: var(--font-size--home-carousel-title-tablet);
  }
}

@media (max-width: 900px) {
  .hero-carousel__viewport {
    min-height: 360px;
    height: 54vh;
  }

  .hero-carousel__overlay {
    align-items: flex-end;
    padding: 40px var(--spacing--page-x-mobile) 36px;
  }

  .hero-carousel__title {
    padding: 12px 16px 14px;
    font-size: var(--font-size--home-carousel-title-mobile);
  }

  .hero-carousel__button {
    min-width: 170px;
    min-height: 56px;
    margin-top: 20px;
    font-size: var(--font-size--home-carousel-button-mobile);
  }

  .hero-carousel__nav {
    width: 36px;
    height: 36px;
  }

  .hero-carousel__nav svg {
    width: 14px;
    height: 14px;
  }
}
</style>
