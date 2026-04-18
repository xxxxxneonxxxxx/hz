<template>
  <div class="recognition-carousel">
    <button
      v-if="showNavigation"
      type="button"
      class="recognition-carousel__nav recognition-carousel__nav--prev"
      aria-label="Предыдущие преподаватели"
      @click="showPrev"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.5 5.5 8 12l6.5 6.5" />
      </svg>
    </button>

    <div ref="viewportRef" class="recognition-carousel__viewport">
      <div
        class="recognition-carousel__track"
        :style="trackStyle"
        @transitionend="handleTransitionEnd"
      >
        <article
          v-for="(card, index) in trackCards"
          :key="`${card.id}-${index}`"
          class="recognition-carousel__card"
          :style="{ width: `${cardWidth}px` }"
        >
          <a
            :href="card.href"
            target="_blank"
            rel="noopener noreferrer"
            class="recognition-carousel__media"
            :aria-label="card.name"
          >
            <img
              :src="card.image"
              :alt="card.alt"
              class="recognition-carousel__image"
            />
          </a>

          <h3 class="recognition-carousel__name">{{ card.name }}</h3>
        </article>
      </div>
    </div>

    <button
      v-if="showNavigation"
      type="button"
      class="recognition-carousel__nav recognition-carousel__nav--next"
      aria-label="Следующие преподаватели"
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
  cards: {
    type: Array,
    required: true,
  },
})

const currentIndex = ref(0)
const viewportWidth = ref(0)
const viewportRef = ref(null)
const isTransitionEnabled = ref(true)
let resizeObserver = null

const visibleCards = computed(() => {
  if (viewportWidth.value <= 900) return 1
  if (viewportWidth.value <= 1100) return 2
  return 4
})
const safeVisibleCards = computed(() => Math.max(Math.min(visibleCards.value, props.cards.length || 1), 1))
const gap = computed(() => {
  if (viewportWidth.value <= 900) return 0
  if (viewportWidth.value <= 1100) return 18
  return 24
})
const showNavigation = computed(() => props.cards.length > safeVisibleCards.value)
const leadingClones = computed(() => props.cards.slice(-safeVisibleCards.value))
const trailingClones = computed(() => props.cards.slice(0, safeVisibleCards.value))
const trackCards = computed(() => [...leadingClones.value, ...props.cards, ...trailingClones.value])
const cardWidth = computed(() => {
  const width = viewportWidth.value - gap.value * (safeVisibleCards.value - 1)
  return Math.max(width / safeVisibleCards.value, 0)
})
const translateX = computed(() => currentIndex.value * (cardWidth.value + gap.value))
const trackStyle = computed(() => ({
  transform: `translateX(-${translateX.value}px)`,
  gap: `${gap.value}px`,
  transition: isTransitionEnabled.value
    ? 'transform var(--motion-duration-carousel) var(--motion-ease-carousel)'
    : 'none',
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
    resetToRealIndex(currentIndex.value + props.cards.length)
    return
  }

  if (currentIndex.value >= props.cards.length + safeVisibleCards.value) {
    resetToRealIndex(currentIndex.value - props.cards.length)
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
.recognition-carousel {
  position: relative;
}

.recognition-carousel__viewport {
  overflow: hidden;
}

.recognition-carousel__track {
  display: flex;
  will-change: transform;
}

.recognition-carousel__card {
  flex: 0 0 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.recognition-carousel__name {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 124px;
  margin: 0;
  padding: 20px 24px;
  border-radius: 0 0 22px 22px;
  background: var(--color--purple);
  color: var(--color--white);
  font-size: 24px;
  font-weight: 400;
  line-height: 1.15;
  text-align: center;
  text-transform: uppercase;
}

.recognition-carousel__media {
  display: block;
  overflow: hidden;
  border-radius: 22px 22px 0 0;
  background: var(--color--surface);
  aspect-ratio: 0.72 / 1;
}

.recognition-carousel__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.recognition-carousel__nav {
  position: absolute;
  top: calc(50% - 62px);
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  padding: 0;
  border: 0;
  background: var(--color--black);
  color: var(--color--white);
  transform: translateY(-50%);
  cursor: pointer;
  transition: var(--motion-transition-surface), color var(--motion-duration-fast) var(--motion-ease-soft);
}

.recognition-carousel__nav--prev {
  left: 0;
}

.recognition-carousel__nav--next {
  right: 0;
}

.recognition-carousel__nav svg {
  width: 18px;
  height: 18px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}

.recognition-carousel__nav:hover {
  background: rgba(0, 0, 0, 0.34);
}

@media (max-width: 900px) {
  .recognition-carousel__name {
    min-height: 108px;
    padding: 18px 20px;
    border-radius: 0 0 18px 18px;
    font-size: 20px;
  }

  .recognition-carousel__media {
    border-radius: 18px 18px 0 0;
  }

  .recognition-carousel__nav {
    width: 52px;
    height: 52px;
    top: calc(50% - 54px);
  }
}

@media (max-width: 700px) {
  .recognition-carousel__media {
    border-radius: 14px 14px 0 0;
  }

  .recognition-carousel__name {
    border-radius: 0 0 14px 14px;
    font-size: 18px;
  }

  .recognition-carousel__nav {
    top: calc(50% - 54px);
  }
}
</style>
