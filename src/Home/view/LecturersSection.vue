<template>
  <section class="lecturerSection">
    <div class="lecturers-section__container">
      <div class="lecturers-section__head">
        <div>
          <h2 class="lecturers-section__title">{{ section.title }}</h2>
          <p class="lecturers-section__description">{{ section.description }}</p>
        </div>
      </div>

      <div class="lecturers-section__carousel">
        <button
            type="button"
            class="lecturers-section__nav-button lecturers-section__nav-button--prev"
            aria-label="Предыдущие лекторы"
            @click="showPrevPage"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14.5 5.5 8 12l6.5 6.5" />
          </svg>
        </button>

        <button
            type="button"
            class="lecturers-section__nav-button lecturers-section__nav-button--next"
            aria-label="Следующие лекторы"
            @click="showNextPage"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9.5 5.5 16 12l-6.5 6.5" />
          </svg>
        </button>

        <div class="lecturers-section__viewport">
        <div
            ref="trackRef"
            class="lecturers-section__track"
            :style="{ transform: `translateX(-${translateX}px)` }"
        >
          <article
              v-for="lecturer in lecturers"
              :key="lecturer.id"
              class="lecturer-card"
          >
            <div class="lecturer-card__image-wrap">
              <img
                  :src="lecturer.image"
                  :alt="lecturer.alt"
                  class="lecturer-card__image"
              />
            </div>
            <h3 class="lecturer-card__name">{{ lecturer.name }}</h3>
            <p class="lecturer-card__role">{{ lecturer.role }}</p>
          </article>
        </div>
      </div>
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
  lecturers: {
    type: Array,
    required: true,
  },
})

const visibleCards = 3
const currentIndex = ref(0)
const viewportWidth = ref(typeof window === 'undefined' ? 0 : window.innerWidth)
const trackRef = ref(null)

const gap = computed(() => (viewportWidth.value <= 700 ? 12 : viewportWidth.value <= 900 ? 18 : 36))
const maxIndex = computed(() => Math.max(props.lecturers.length - visibleCards, 0))
const cardWidth = computed(() => {
  const availableWidth = viewportWidth.value - gap.value * (visibleCards - 1)
  return Math.max(availableWidth / visibleCards, 0)
})
const translateX = computed(() => currentIndex.value * (cardWidth.value + gap.value))

function showPrevPage() {
  if (!props.lecturers.length) return
  currentIndex.value = currentIndex.value <= 0 ? maxIndex.value : currentIndex.value - 1
}

function showNextPage() {
  if (!props.lecturers.length) return
  currentIndex.value = currentIndex.value >= maxIndex.value ? 0 : currentIndex.value + 1
}

function handleResize() {
  const viewportElement = trackRef.value?.parentElement
  viewportWidth.value = viewportElement?.clientWidth ?? window.innerWidth
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
.lecturerSection {
  padding:
    var(--size--home-lecturers-padding-y)
    var(--spacing--page-x)
    var(--size--home-lecturers-padding-y);
  background: var(--color--home-lecturers-bg);
}

.lecturers-section__container {
  max-width: var(--size--home-lecturers-container-max);
  margin: 0 auto;
}

.lecturers-section__head {
  margin-bottom: var(--size--home-lecturers-head-offset);
}

.lecturers-section__title {
  margin: 0 0 22px;
  color: var(--color--home-lecturers-title-text);
  font-size: var(--font-size--home-lecturers-title);
  font-weight: 700;
  line-height: 1.08;
  text-transform: uppercase;
}

.lecturers-section__description {
  margin: 0;
  color: var(--color--home-lecturers-description-text);
  font-size: var(--font-size--home-lecturers-description);
  line-height: 1.4;
  text-align: justify;
  text-wrap: pretty;
}

.lecturers-section__carousel {
  position: relative;
}

.lecturers-section__nav-button {
  position: absolute;
  top: 50%;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 23px;
  height: 23px;
  padding: 0;
  border: 0;
  background: var(--color--home-lecturers-nav-bg);
  color: var(--color--home-lecturers-nav-icon);
  transform: translateY(-50%);
  cursor: pointer;
  transition: var(--motion-transition-surface), color var(--motion-duration-fast) var(--motion-ease-soft);
}

.lecturers-section__nav-button--prev {
  left: 0;
}

.lecturers-section__nav-button--next {
  right: 0;
}

.lecturers-section__nav-button svg {
  width: 10px;
  height: 10px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}

.lecturers-section__viewport {
  overflow: hidden;
}

.lecturers-section__track {
  display: flex;
  gap: var(--size--home-lecturers-track-gap);
  transition: transform var(--motion-duration-carousel) var(--motion-ease-carousel);
  will-change: transform;
}

.lecturers-section__nav-button:hover {
  background: rgba(0, 0, 0, 0.34);
}

.lecturer-card {
  flex: 0 0 calc((100% - 72px) / 3);
  text-align: center;
}

.lecturer-card__image-wrap {
  overflow: hidden;
  border-radius: var(--size--home-lecturers-card-radius);
  aspect-ratio: 0.78 / 1;
  background: var(--color--home-lecturers-card-bg);
}

.lecturer-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.lecturer-card__name {
  margin: 20px 0 12px;
  color: var(--color--home-lecturers-name-text);
  font-size: var(--font-size--home-lecturers-name);
  font-weight: 400;
  line-height: 1.15;
}

.lecturer-card__role {
  margin: 0;
  color: var(--color--home-lecturers-role-text);
  font-size: var(--font-size--home-lecturers-role);
  line-height: 1.35;
}

@media (max-width: 900px) {
  .lecturers-section {
    padding:
      var(--size--home-lecturers-padding-y-mobile)
      var(--spacing--page-x-mobile)
      var(--size--home-lecturers-padding-y-mobile);
  }

  .lecturers-section__head {
    margin-bottom: var(--size--home-lecturers-head-offset-mobile);
  }

  .lecturers-section__title {
    font-size: var(--font-size--home-lecturers-title-mobile);
    text-align: center;
  }

  .lecturers-section__description {
    font-size: var(--font-size--home-lecturers-description-mobile);
    text-align: left;
  }

  .lecturers-section__track { gap: var(--size--home-lecturers-track-gap-tablet); }

  .lecturer-card { flex-basis: calc((100% - 36px) / 3); }

  .lecturers-section__nav-button--prev {
    left: 0;
  }

  .lecturers-section__nav-button--next {
    right: 0;
  }

  .lecturer-card__image-wrap {
    border-radius: var(--size--home-lecturers-card-radius-tablet);
  }

  .lecturer-card__name {
    margin: 14px 0 8px;
    font-size: 18px;
  }

  .lecturer-card__role {
    font-size: 14px;
    line-height: 1.25;
  }
}

@media (max-width: 700px) {
  .lecturers-section__track { gap: var(--size--home-lecturers-track-gap-mobile); }

  .lecturer-card { flex-basis: calc((100% - 24px) / 3); }

  .lecturers-section__nav-button--prev {
    left: 0;
  }

  .lecturers-section__nav-button--next {
    right: 0;
  }

  .lecturer-card__image-wrap {
    border-radius: var(--size--home-lecturers-card-radius-mobile);
    aspect-ratio: 0.72 / 1;
  }

  .lecturer-card__name {
    margin: 10px 0 6px;
    font-size: 14px;
    line-height: 1.1;
  }

  .lecturer-card__role {
    font-size: 11px;
    line-height: 1.2;
  }
}
</style>
