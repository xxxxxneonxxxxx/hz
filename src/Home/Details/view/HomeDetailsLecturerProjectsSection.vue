<template>
  <section class="home-details-lecturer-projects">
    <div class="home-details-lecturer-projects__container">
      <h2 class="home-details-lecturer-projects__title">
        {{ section.title }}
      </h2>

      <div class="home-details-lecturer-projects__carousel">
        <button
          v-if="hasMultiplePages"
          type="button"
          class="home-details-lecturer-projects__nav home-details-lecturer-projects__nav--prev"
          :aria-label="section.controls?.prevLabel || 'Предыдущие проекты'"
          @click="showPrevPage"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14.5 5.5 8 12l6.5 6.5" />
          </svg>
        </button>

        <div class="home-details-lecturer-projects__viewport">
          <div
            class="home-details-lecturer-projects__track"
            :style="{ transform: `translateX(-${currentPage * 100}%)` }"
          >
            <div
              v-for="(pageItems, pageIndex) in pages"
              :key="`page-${pageIndex}`"
              class="home-details-lecturer-projects__page"
              :style="{ '--projects-columns': visibleCards }"
            >
              <article
                v-for="item in pageItems"
                :key="item.id"
                class="home-details-lecturer-projects__card"
              >
                <img
                  :src="item.image"
                  :alt="item.alt"
                  class="home-details-lecturer-projects__image"
                />
              </article>
            </div>
          </div>
        </div>

        <button
          v-if="hasMultiplePages"
          type="button"
          class="home-details-lecturer-projects__nav home-details-lecturer-projects__nav--next"
          :aria-label="section.controls?.nextLabel || 'Следующие проекты'"
          @click="showNextPage"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9.5 5.5 16 12l-6.5 6.5" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  section: {
    type: Object,
    required: true,
  },
})

const currentPage = ref(0)
const viewportWidth = ref(typeof window === 'undefined' ? 1280 : window.innerWidth)
let autoplayId = null

const visibleCards = computed(() => (viewportWidth.value <= 900 ? 4 : 5))

const pages = computed(() => {
  const result = []

  for (let index = 0; index < props.section.items.length; index += visibleCards.value) {
    result.push(props.section.items.slice(index, index + visibleCards.value))
  }

  return result
})

const hasMultiplePages = computed(() => pages.value.length > 1)

function showPrevPage() {
  if (!hasMultiplePages.value) return
  currentPage.value = currentPage.value <= 0 ? pages.value.length - 1 : currentPage.value - 1
  restartAutoplay()
}

function showNextPage() {
  if (!hasMultiplePages.value) return
  currentPage.value = currentPage.value >= pages.value.length - 1 ? 0 : currentPage.value + 1
}

function handleResize() {
  viewportWidth.value = window.innerWidth

  if (currentPage.value >= pages.value.length) {
    currentPage.value = Math.max(pages.value.length - 1, 0)
  }
}

function stopAutoplay() {
  if (autoplayId) {
    window.clearInterval(autoplayId)
    autoplayId = null
  }
}

function startAutoplay() {
  stopAutoplay()

  if (!hasMultiplePages.value) return

  autoplayId = window.setInterval(() => {
    showNextPage()
  }, 5000)
}

function restartAutoplay() {
  startAutoplay()
}

onMounted(() => {
  window.addEventListener('resize', handleResize, { passive: true })
  startAutoplay()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  stopAutoplay()
})
</script>

<style scoped>
.home-details-lecturer-projects {
  padding: 96px var(--spacing--page-x) 110px;
  background: var(--color--home-details-page-bg);
}

.home-details-lecturer-projects__container {
  max-width: 1460px;
  margin: 0 auto;
}

.home-details-lecturer-projects__title {
  max-width: 1200px;
  margin: 0 auto 48px;
  color: var(--color--home-details-schedule-preview-title);
  font-size: var(--font-size--home-details-schedule-preview-title);
  font-weight: 500;
  line-height: 1.18;
  text-align: center;
  text-transform: uppercase;
}

.home-details-lecturer-projects__carousel {
  position: relative;
}

.home-details-lecturer-projects__viewport {
  overflow: hidden;
}

.home-details-lecturer-projects__track {
  display: flex;
  transition: transform 0.45s ease;
  will-change: transform;
}

.home-details-lecturer-projects__page {
  flex: 0 0 100%;
  display: grid;
  grid-template-columns: repeat(var(--projects-columns), minmax(0, 1fr));
  gap: 20px;
  align-items: start;
}

.home-details-lecturer-projects__card {
  overflow: hidden;
  background: #ddd;
}

.home-details-lecturer-projects__image {
  display: block;
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
}

.home-details-lecturer-projects__nav {
  position: absolute;
  top: 50%;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  padding: 0;
  border: 0;
  background: rgba(33, 33, 37, 0.58);
  color: #ffffff;
  transform: translateY(-50%);
  cursor: pointer;
}

.home-details-lecturer-projects__nav--prev {
  left: -22px;
}

.home-details-lecturer-projects__nav--next {
  right: -22px;
}

.home-details-lecturer-projects__nav svg {
  width: 14px;
  height: 14px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}

@media (max-width: 900px) {
  .home-details-lecturer-projects {
    padding: 72px var(--spacing--page-x-mobile) 80px;
  }

  .home-details-lecturer-projects__title {
    margin-bottom: 32px;
    font-size: var(--font-size--home-details-schedule-preview-title-mobile);
  }

  .home-details-lecturer-projects__page {
    gap: 12px;
  }

  .home-details-lecturer-projects__nav--prev {
    left: 8px;
  }

  .home-details-lecturer-projects__nav--next {
    right: 8px;
  }
}
</style>
