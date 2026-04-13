import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { CAROUSEL_DEFAULTS } from '../config/carousel.config.js'

export function useCarousel(slidesRef, intervalMsRef) {
  const activeIndex = ref(0)
  let intervalId = null

  const slides = computed(() => slidesRef.value ?? [])
  const activeSlide = computed(() => slides.value[activeIndex.value] ?? slides.value[0] ?? null)
  const hasMultipleSlides = computed(() => slides.value.length > 1)
  const resolvedIntervalMs = computed(() => intervalMsRef.value ?? CAROUSEL_DEFAULTS.intervalMs)

  function stopAutoplay() {
    if (intervalId === null) {
      return
    }

    window.clearInterval(intervalId)
    intervalId = null
  }

  function startAutoplay() {
    stopAutoplay()

    if (typeof window === 'undefined' || !hasMultipleSlides.value) {
      return
    }

    intervalId = window.setInterval(() => {
      activeIndex.value = (activeIndex.value + 1) % slides.value.length
    }, resolvedIntervalMs.value)
  }

  function restartAutoplay() {
    stopAutoplay()
    startAutoplay()
  }

  function setSlide(index) {
    if (!slides.value.length) {
      return
    }

    activeIndex.value = ((index % slides.value.length) + slides.value.length) % slides.value.length
    restartAutoplay()
  }

  function showNextSlide() {
    setSlide(activeIndex.value + 1)
  }

  function showPrevSlide() {
    setSlide(activeIndex.value - 1)
  }

  watch(
    slides,
    (currentSlides) => {
      if (!currentSlides.length) {
        activeIndex.value = 0
        stopAutoplay()
        return
      }

      if (activeIndex.value > currentSlides.length - 1) {
        activeIndex.value = 0
      }

      restartAutoplay()
    },
    { immediate: true }
  )

  watch(intervalMsRef, () => {
    restartAutoplay()
  })

  onMounted(() => {
    startAutoplay()
  })

  onBeforeUnmount(() => {
    stopAutoplay()
  })

  return {
    activeIndex,
    activeSlide,
    hasMultipleSlides,
    showNextSlide,
    showPrevSlide,
  }
}
