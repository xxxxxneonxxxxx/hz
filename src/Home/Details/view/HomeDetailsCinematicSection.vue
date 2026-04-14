<template>
  <section
    ref="cinematicSection"
    class="home-details-cinematic"
    :style="{
      '--cinematic-image-progress': cinematicImageProgress,
    }"
  >
    <div class="home-details-cinematic__container">
      <div class="home-details-cinematic__layout">
        <div class="home-details-cinematic__content">
          <h2 class="home-details-cinematic__title">
            <span
              v-for="line in section.titleLines"
              :key="line"
              class="home-details-cinematic__line"
            >
              {{ line }}
            </span>
          </h2>
        </div>

        <div
          class="home-details-cinematic__media"
          aria-hidden="true"
          :style="{ '--cinematic-background-image': `url(${section.image})` }"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  section: {
    type: Object,
    required: true,
  },
})

const cinematicSection = ref(null)
const cinematicImageProgress = ref(0)
let cinematicScrollFrame = 0

const updateCinematicImageProgress = () => {
  const sectionElement = cinematicSection.value

  if (!sectionElement || typeof window === 'undefined') {
    cinematicImageProgress.value = 0
    return
  }

  const sectionRect = sectionElement.getBoundingClientRect()
  const viewportHeight = window.innerHeight || 1
  const animationStart = viewportHeight
  const animationEnd = -sectionRect.height * 0.35
  const rawProgress =
    (animationStart - sectionRect.top) / (animationStart - animationEnd)
  const clampedProgress = Math.min(Math.max(rawProgress, 0), 1)

  cinematicImageProgress.value = clampedProgress
}

const queueCinematicImageProgressUpdate = () => {
  if (cinematicScrollFrame) {
    return
  }

  cinematicScrollFrame = window.requestAnimationFrame(() => {
    cinematicScrollFrame = 0
    updateCinematicImageProgress()
  })
}

onMounted(() => {
  nextTick(() => {
    updateCinematicImageProgress()
  })
  window.addEventListener('scroll', queueCinematicImageProgressUpdate, { passive: true })
  window.addEventListener('resize', queueCinematicImageProgressUpdate)
})

watch(
  () => props.section,
  async () => {
    await nextTick()
    updateCinematicImageProgress()
  },
  { deep: true }
)

onBeforeUnmount(() => {
  window.removeEventListener('scroll', queueCinematicImageProgressUpdate)
  window.removeEventListener('resize', queueCinematicImageProgressUpdate)

  if (cinematicScrollFrame) {
    window.cancelAnimationFrame(cinematicScrollFrame)
  }
})
</script>

<style scoped>
.home-details-cinematic {
  position: relative;
  overflow: hidden;
  padding: 96px var(--spacing--page-x);
  background:
    linear-gradient(90deg, rgba(54, 19, 117, 0.94) 0%, rgba(76, 24, 139, 0.78) 34%, rgba(56, 17, 105, 0.22) 68%, rgba(48, 16, 96, 0.12) 100%),
    radial-gradient(circle at 28% 18%, rgba(160, 86, 255, 0.42), transparent 38%),
    linear-gradient(90deg, var(--color--home-details-cinematic-bg-start) 0%, var(--color--home-details-cinematic-bg-end) 100%);
}

.home-details-cinematic__container {
  position: relative;
  z-index: 1;
  max-width: 1460px;
  margin: 0 auto;
}

.home-details-cinematic__layout {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(320px, 1fr);
  align-items: center;
  gap: 48px;
  min-height: 560px;
}

.home-details-cinematic__content {
  position: relative;
  z-index: 1;
}

.home-details-cinematic__title {
  display: flex;
  flex-direction: column;
  margin: 0;
  color: var(--color--home-details-cinematic-title);
  font-size: var(--font-size--home-details-cinematic-title);
  font-weight: 700;
  line-height: 0.96;
  text-transform: uppercase;
}

.home-details-cinematic__line + .home-details-cinematic__line {
  margin-top: 8px;
}

.home-details-cinematic__media {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  width: 100%;
  min-height: 560px;
}

.home-details-cinematic__media::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    var(--cinematic-background-image) 6% 40% / cover no-repeat,
    linear-gradient(90deg, rgba(84, 43, 168, 0.15) 0%, rgba(84, 43, 168, 0) 100%);
  transform: translateY(calc(var(--cinematic-image-progress, 0) * 10%));
  will-change: transform;
  pointer-events: none;
  z-index: 0;
}

@media (max-width: 1100px) {
  .home-details-cinematic__layout {
    grid-template-columns: 1fr;
    gap: 32px;
    min-height: 620px;
  }

  .home-details-cinematic__media {
    min-height: 220px;
  }

  .home-details-cinematic__media::before {
    background-position: 14% 38%, center;
  }
}

@media (max-width: 900px) {
  .home-details-cinematic {
    padding: 72px var(--spacing--page-x-mobile);
    background:
      linear-gradient(180deg, rgba(54, 19, 117, 0.94) 0%, rgba(76, 24, 139, 0.74) 38%, rgba(56, 17, 105, 0.18) 100%),
      radial-gradient(circle at 28% 18%, rgba(160, 86, 255, 0.42), transparent 38%),
      linear-gradient(90deg, var(--color--home-details-cinematic-bg-start) 0%, var(--color--home-details-cinematic-bg-end) 100%);
  }

  .home-details-cinematic__title {
    font-size: var(--font-size--home-details-cinematic-title-mobile);
  }

  .home-details-cinematic__layout {
    min-height: 520px;
  }

  .home-details-cinematic__media {
    min-height: 120px;
  }

  .home-details-cinematic__media::before {
    background-position: 34% 38%, center;
  }
}
</style>
