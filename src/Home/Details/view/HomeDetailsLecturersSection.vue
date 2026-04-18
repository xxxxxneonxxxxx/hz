<template>
  <section class="home-details-lecturers">
    <div class="home-details-lecturers__container">
      <div class="home-details-lecturers__head">
        <h2 class="home-details-lecturers__title">
          {{ section.title }}
        </h2>

        <p v-if="section.description" class="home-details-lecturers__description">
          {{ section.description }}
        </p>
      </div>

      <div class="home-details-lecturers__carousel">
        <button
          v-if="hasMultiplePages"
          type="button"
          class="home-details-lecturers__nav home-details-lecturers__nav--prev"
          :aria-label="section.controls?.prevLabel || 'Предыдущие лекторы'"
          @click="showPrevPage"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14.5 5.5 8 12l6.5 6.5" />
          </svg>
        </button>

        <div ref="viewportRef" class="home-details-lecturers__viewport">
          <div
            class="home-details-lecturers__track"
            :style="{ transform: `translateX(-${translateX}px)` }"
          >
            <article
              v-for="lecturer in section.items"
              :key="lecturer.id"
              class="home-details-lecturers__card"
            >
              <div class="home-details-lecturers__image-wrap">
                <img
                  :src="lecturer.image"
                  :alt="lecturer.alt"
                  class="home-details-lecturers__image"
                />
              </div>

              <h3 class="home-details-lecturers__name">
                {{ lecturer.name }}
              </h3>

              <p class="home-details-lecturers__role">
                {{ lecturer.role }}
              </p>
            </article>
          </div>
        </div>

        <button
          v-if="hasMultiplePages"
          type="button"
          class="home-details-lecturers__nav home-details-lecturers__nav--next"
          :aria-label="section.controls?.nextLabel || 'Следующие лекторы'"
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

const viewportRef = ref(null)
const currentIndex = ref(0)
const viewportWidth = ref(typeof window === 'undefined' ? 0 : window.innerWidth)

const visibleCards = computed(() => {
  if (viewportWidth.value <= 700) return 1
  if (viewportWidth.value <= 1100) return 2
  return 4
})

const gap = computed(() => {
  if (viewportWidth.value <= 700) return 16
  if (viewportWidth.value <= 1100) return 24
  return 36
})

const maxIndex = computed(() => Math.max(props.section.items.length - visibleCards.value, 0))
const hasMultiplePages = computed(() => props.section.items.length > visibleCards.value)
const translateX = computed(() => {
  const cardWidth = (viewportWidth.value - gap.value * (visibleCards.value - 1)) / visibleCards.value
  return currentIndex.value * (cardWidth + gap.value)
})

function showPrevPage() {
  if (!props.section.items.length) return
  currentIndex.value = currentIndex.value <= 0 ? maxIndex.value : currentIndex.value - 1
}

function showNextPage() {
  if (!props.section.items.length) return
  currentIndex.value = currentIndex.value >= maxIndex.value ? 0 : currentIndex.value + 1
}

function handleResize() {
  viewportWidth.value = viewportRef.value?.clientWidth ?? window.innerWidth
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.home-details-lecturers {
  padding: var(--size--home-details-section-padding-y) var(--spacing--page-x);
  background: var(--color--home-details-lecturers-bg);
}

.home-details-lecturers__container {
  max-width: 1460px;
  margin: 0 auto;
}

.home-details-lecturers__head {
  margin-bottom: 52px;
  text-align: left;
}

.home-details-lecturers__title {
  margin: 0 0 24px;
  color: var(--color--home-details-lecturers-title);
  font-size: var(--font-size--home-details-lecturers-title);
  font-weight: 700;
  line-height: 1.08;
  text-transform: uppercase;
}

.home-details-lecturers__description {
  max-width: 1180px;
  margin: 0;
  color: var(--color--home-details-lecturers-description);
  font-size: var(--font-size--home-details-lecturers-description);
  line-height: 1.4;
  text-align: justify;
  text-wrap: pretty;
}

.home-details-lecturers__carousel {
  position: relative;
}

.home-details-lecturers__viewport {
  overflow: hidden;
}

.home-details-lecturers__track {
  display: flex;
  gap: 36px;
  transition: transform var(--motion-duration-carousel) var(--motion-ease-carousel);
  will-change: transform;
}

.home-details-lecturers__card {
  flex: 0 0 calc((100% - 108px) / 4);
  text-align: center;
}

.home-details-lecturers__image-wrap {
  overflow: hidden;
  border-radius: 30px;
  aspect-ratio: 0.78 / 1;
  background: var(--color--home-details-lecturers-card-bg);
}

.home-details-lecturers__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home-details-lecturers__name {
  margin: 18px 0 10px;
  color: var(--color--home-details-lecturers-name);
  font-size: var(--font-size--home-details-lecturers-name);
  font-weight: 400;
  line-height: 1.12;
}

.home-details-lecturers__role {
  margin: 0;
  color: var(--color--home-details-lecturers-role);
  font-size: var(--font-size--home-details-lecturers-role);
  line-height: 1.3;
}

.home-details-lecturers__nav {
  position: absolute;
  top: calc(50% - 52px);
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  padding: 0;
  border: 0;
  border-radius: 14px;
  background: var(--color--home-details-lecturers-nav-bg);
  color: var(--color--home-details-lecturers-nav-icon);
  transform: translateY(-50%);
  cursor: pointer;
  transition: var(--motion-transition-surface), color var(--motion-duration-fast) var(--motion-ease-soft);
}

.home-details-lecturers__nav--prev {
  left: 0;
}

.home-details-lecturers__nav--next {
  right: 0;
}

.home-details-lecturers__nav svg {
  width: 18px;
  height: 18px;
  stroke: currentColor;
  stroke-width: 2.4;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}

.home-details-lecturers__nav:hover {
  background: rgba(0, 0, 0, 0.34);
}

@media (max-width: 1100px) {
  .home-details-lecturers__track {
    gap: 24px;
  }

  .home-details-lecturers__card {
    flex-basis: calc((100% - 24px) / 2);
  }
}

@media (max-width: 900px) {
  .home-details-lecturers {
    padding: var(--size--home-details-section-padding-y-mobile) var(--spacing--page-x-mobile);
  }

  .home-details-lecturers__head {
    margin-bottom: 36px;
  }

  .home-details-lecturers__title {
    margin-bottom: 18px;
    font-size: var(--font-size--home-details-lecturers-title-mobile);
    text-align: center;
  }

  .home-details-lecturers__description {
    font-size: var(--font-size--home-details-lecturers-description-mobile);
    text-align: left;
  }

  .home-details-lecturers__name {
    font-size: var(--font-size--home-details-lecturers-name-mobile);
  }

  .home-details-lecturers__role {
    font-size: var(--font-size--home-details-lecturers-role-mobile);
  }
}

@media (max-width: 700px) {
  .home-details-lecturers__track {
    gap: 16px;
  }

  .home-details-lecturers__card {
    flex-basis: 100%;
  }

  .home-details-lecturers__image-wrap {
    border-radius: 24px;
  }
}
</style>
