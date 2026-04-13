<template>
  <div class="student-works-reviews">
    <button
        v-if="showNavigation"
        type="button"
        class="student-works-reviews__nav student-works-reviews__nav--prev"
        aria-label="Предыдущие отзывы"
        @click="showPrev"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.5 5.5 8 12l6.5 6.5" />
      </svg>
    </button>

    <div ref="viewportRef" class="student-works-reviews__viewport">
      <div
          class="student-works-reviews__track"
          :style="trackStyle"
          @transitionend="handleTransitionEnd"
      >
        <article
            v-for="(review, index) in trackReviews"
            :key="`${review.id}-${index}`"
            class="student-works-reviews__card"
            :style="{ width: `${cardWidth}px` }"
        >
          <a
              :href="review.href"
              target="_blank"
              rel="noopener noreferrer"
              class="student-works-reviews__media"
              :aria-label="`Открыть отзыв: ${review.name}`"
          >
            <img
                :src="review.image"
                :alt="review.alt"
                class="student-works-reviews__image"
            />
            <span class="student-works-reviews__overlay" />
            <span class="student-works-reviews__play" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M8 6.5v11l9-5.5-9-5.5Z" />
              </svg>
            </span>
          </a>

          <p class="student-works-reviews__text">
            <strong>{{ review.name }}</strong>, {{ review.description }}
          </p>
        </article>
      </div>
    </div>

    <button
        v-if="showNavigation"
        type="button"
        class="student-works-reviews__nav student-works-reviews__nav--next"
        aria-label="Следующие отзывы"
        @click="showNext"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9.5 5.5 16 12l-6.5 6.5" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  reviews: {
    type: Array,
    required: true,
  },
})

const currentIndex = ref(0)
const viewportWidth = ref(0)
const viewportRef = ref(null)
const isTransitionEnabled = ref(true)
let resizeObserver = null

const visibleCards = computed(() => (viewportWidth.value <= 1100 ? 3 : 4))
const safeVisibleCards = computed(() => Math.max(Math.min(visibleCards.value, props.reviews.length || 1), 1))
const gap = computed(() => (viewportWidth.value <= 700 ? 12 : viewportWidth.value <= 1100 ? 18 : 24))
const showNavigation = computed(() => props.reviews.length > safeVisibleCards.value)
const leadingClones = computed(() => props.reviews.slice(-safeVisibleCards.value))
const trailingClones = computed(() => props.reviews.slice(0, safeVisibleCards.value))
const trackReviews = computed(() => [...leadingClones.value, ...props.reviews, ...trailingClones.value])
const cardWidth = computed(() => {
  const width = viewportWidth.value - gap.value * (safeVisibleCards.value - 1)
  return Math.max(width / safeVisibleCards.value, 0)
})
const translateX = computed(() => currentIndex.value * (cardWidth.value + gap.value))
const trackStyle = computed(() => ({
  transform: `translateX(-${translateX.value}px)`,
  gap: `${gap.value}px`,
  transition: isTransitionEnabled.value ? 'transform 0.35s ease' : 'none',
}))

function syncViewportWidth() {
  const measuredWidth = viewportRef.value?.getBoundingClientRect().width ?? 0
  viewportWidth.value = measuredWidth > 0 ? measuredWidth : Math.max(window.innerWidth - 96, 320)
}

function showPrev() {
  if (!showNavigation.value) return
  isTransitionEnabled.value = true
  currentIndex.value -= 1
}

function showNext() {
  if (!showNavigation.value) return
  isTransitionEnabled.value = true
  currentIndex.value += 1
}

function resetToRealIndex(index) {
  isTransitionEnabled.value = false
  currentIndex.value = index

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      isTransitionEnabled.value = true
    })
  })
}

function handleTransitionEnd() {
  if (!showNavigation.value) return

  if (currentIndex.value < safeVisibleCards.value) {
    resetToRealIndex(currentIndex.value + props.reviews.length)
    return
  }

  if (currentIndex.value >= props.reviews.length + safeVisibleCards.value) {
    resetToRealIndex(currentIndex.value - props.reviews.length)
  }
}

onMounted(() => {
  syncViewportWidth()
  currentIndex.value = safeVisibleCards.value
  resizeObserver = new ResizeObserver(() => {
    syncViewportWidth()
  })
  if (viewportRef.value) {
    resizeObserver.observe(viewportRef.value)
  }
  window.addEventListener('resize', syncViewportWidth, { passive: true })

  requestAnimationFrame(() => {
    syncViewportWidth()
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', syncViewportWidth)
  resizeObserver?.disconnect()
})

watch(safeVisibleCards, (value) => {
  currentIndex.value = value
  isTransitionEnabled.value = false

  requestAnimationFrame(() => {
    isTransitionEnabled.value = true
  })
})
</script>

<style scoped>
.student-works-reviews {
  margin-bottom: 50px;
  position: relative;
}

.student-works-reviews__viewport {
  overflow: hidden;
}

.student-works-reviews__track {
  display: flex;
  will-change: transform;
}

.student-works-reviews__card {
  flex: 0 0 auto;
  min-width: 0;
}

.student-works-reviews__media {
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 22px;
  background: var(--color--student-works-script-room-card-bg);
  aspect-ratio: 0.72 / 1;
}

.student-works-reviews__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.student-works-reviews__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, var(--color--student-works-script-room-card-overlay) 100%);
}

.student-works-reviews__play {
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: clamp(56px, 5vw, 86px);
  height: clamp(56px, 5vw, 86px);
  border-radius: 50%;
  background: var(--color--student-works-script-room-play-bg);
  transform: translate(-50%, -50%);
}

.student-works-reviews__play svg {
  width: 34%;
  height: 34%;
  fill: var(--color--student-works-script-room-play-icon);
}

.student-works-reviews__text {
  margin: 22px 0 0;
  color: var(--color--student-works-script-room-card-text);
  font-size: var(--font-size--student-works-script-room-card-text);
  line-height: 1.45;
}

.student-works-reviews__text strong {
  color: var(--color--student-works-script-room-name-text);
  font-size: var(--font-size--student-works-script-room-name);
  font-weight: 700;
}

.student-works-reviews__nav {
  position: absolute;
  top: calc(50% - 42px);
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: var(--color--student-works-script-room-nav-bg);
  color: var(--color--student-works-script-room-nav-icon);
  transform: translateY(-50%);
  cursor: pointer;
}

.student-works-reviews__nav--prev {
  left: 0;
}

.student-works-reviews__nav--next {
  right: 0;
}

.student-works-reviews__nav svg {
  width: 18px;
  height: 18px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}

@media (max-width: 1100px) {
  .student-works-reviews__nav--prev {
    left: 0;
  }

  .student-works-reviews__nav--next {
    right: 0;
  }
}

@media (max-width: 900px) {
  .student-works-reviews__media {
    border-radius: 18px;
  }

  .student-works-reviews__text {
    margin-top: 16px;
    font-size: var(--font-size--student-works-script-room-card-text-mobile);
  }

  .student-works-reviews__text strong {
    font-size: var(--font-size--student-works-script-room-name-mobile);
  }
}

@media (max-width: 700px) {
  .student-works-reviews__media {
    border-radius: 14px;
  }

  .student-works-reviews__nav {
    width: 52px;
    height: 52px;
    top: calc(50% - 34px);
  }

  .student-works-reviews__nav--prev {
    left: 0;
  }

  .student-works-reviews__nav--next {
    right: 0;
  }
}
</style>
