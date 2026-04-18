<template>
  <div class="app-multi-card-carousel">
    <button
      v-if="showNavigation"
      type="button"
      class="app-multi-card-carousel__nav app-multi-card-carousel__nav--prev"
      :aria-label="prevAriaLabel"
      @click="showPrev"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.5 5.5 8 12l6.5 6.5" />
      </svg>
    </button>

    <div ref="viewportRef" class="app-multi-card-carousel__viewport">
      <div
        class="app-multi-card-carousel__track"
        :style="trackStyle"
        @transitionend="handleTransitionEnd"
      >
        <slot
          v-for="(item, index) in trackItems"
          :key="`${item.id}-${index}`"
          :item="item"
          :index="index"
          name="card"
        />
      </div>
    </div>

    <button
      v-if="showNavigation"
      type="button"
      class="app-multi-card-carousel__nav app-multi-card-carousel__nav--next"
      :aria-label="nextAriaLabel"
      @click="showNext"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9.5 5.5 16 12l-6.5 6.5" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  visibleCards: {
    type: [Number, Object],
    default: 1,
  },
  gap: {
    type: [Number, Object],
    default: 24,
  },
  prevAriaLabel: {
    type: String,
    default: 'Предыдущие элементы',
  },
  nextAriaLabel: {
    type: String,
    default: 'Следующие элементы',
  },
})

const viewportRef = ref(null)
const cardWidth = ref(0)
const currentIndex = ref(0)
const isTransitioning = ref(false)
const viewportWidth = ref(0)

function getResponsiveValue(value, defaultValue) {
  if (typeof value === 'number') return value
  if (typeof value === 'object') {
    if (viewportWidth.value <= 900) return value.mobile || defaultValue
    if (viewportWidth.value <= 1100) return value.tablet || value.mobile || defaultValue
    return value.desktop || value.tablet || value.mobile || defaultValue
  }
  return defaultValue
}

const computedVisibleCards = computed(() => getResponsiveValue(props.visibleCards, 1))
const computedGap = computed(() => getResponsiveValue(props.gap, 24))
const safeVisibleCards = computed(() => Math.max(Math.min(computedVisibleCards.value, props.items.length || 1), 1))
const showNavigation = computed(() => props.items.length > safeVisibleCards.value)

const trackItems = computed(() => {
  if (!props.items.length) return []

  const items = [...props.items]
  const visible = safeVisibleCards.value

  // Add clones for infinite loop
  const leadingClones = items.slice(-visible)
  const trailingClones = items.slice(0, visible)

  return [...leadingClones, ...items, ...trailingClones]
})

const trackStyle = computed(() => {
  const offset = -(currentIndex.value + safeVisibleCards.value) * (cardWidth.value + computedGap.value)
  return {
    transform: `translateX(${offset}px)`,
    transition: isTransitioning.value ? 'transform 0.5s ease' : 'none',
    gap: `${computedGap.value}px`,
  }
})

function updateCardWidth() {
  if (!viewportRef.value) return

  viewportWidth.value = viewportRef.value.offsetWidth
  const totalGap = computedGap.value * (safeVisibleCards.value - 1)
  cardWidth.value = (viewportWidth.value - totalGap) / safeVisibleCards.value
}

function showPrev() {
  if (isTransitioning.value) return

  currentIndex.value--
  isTransitioning.value = true
}

function showNext() {
  if (isTransitioning.value) return

  currentIndex.value++
  isTransitioning.value = true
}

function handleTransitionEnd() {
  isTransitioning.value = false

  const maxIndex = props.items.length - 1
  if (currentIndex.value < 0) {
    currentIndex.value = maxIndex
  } else if (currentIndex.value > maxIndex) {
    currentIndex.value = 0
  }

  // Reset position without transition
  nextTick(() => {
    isTransitioning.value = false
  })
}

let resizeObserver = null

onMounted(() => {
  updateCardWidth()
  currentIndex.value = safeVisibleCards.value

  resizeObserver = new ResizeObserver(() => {
    updateCardWidth()
  })

  if (viewportRef.value) {
    resizeObserver.observe(viewportRef.value)
  }
})

onUnmounted(() => {
  if (resizeObserver) {
    resizeObserver.disconnect()
  }
})

watch(() => safeVisibleCards.value, (value) => {
  currentIndex.value = value
  isTransitioning.value = false

  nextTick(() => {
    isTransitioning.value = true
  })
})
</script>

<style scoped>
.app-multi-card-carousel {
  position: relative;
  width: 100%;
}

.app-multi-card-carousel__viewport {
  overflow: hidden;
  width: 100%;
}

.app-multi-card-carousel__track {
  display: flex;
  will-change: transform;
}

.app-multi-card-carousel__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.app-multi-card-carousel__nav:hover {
  background: rgba(255, 255, 255, 1);
}

.app-multi-card-carousel__nav--prev {
  left: -24px;
}

.app-multi-card-carousel__nav--next {
  right: -24px;
}

.app-multi-card-carousel__nav svg {
  width: 24px;
  height: 24px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
}
</style>
