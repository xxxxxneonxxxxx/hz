<template>
  <section ref="cinematicSection" class="home-details-cinematic">
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

        <div class="home-details-cinematic__media">
          <div class="home-details-cinematic__image-frame">
            <img
              :src="section.image"
              :alt="section.alt"
              class="home-details-cinematic__image"
              :style="{ '--cinematic-image-progress': cinematicImageProgress }"
            />
          </div>
        </div>
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

  cinematicImageProgress.value = clampedProgress.toFixed(4)
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
  overflow-x: clip;
  padding: 96px var(--spacing--page-x);
  background:
    radial-gradient(circle at 28% 18%, var(--color--home-details-cinematic-bg-start), transparent 38%),
    linear-gradient(90deg, var(--color--home-details-cinematic-bg-start) 0%, var(--color--home-details-cinematic-bg-end) 100%);
}

.home-details-cinematic__container {
  max-width: 1460px;
  margin: 0 auto;
}

.home-details-cinematic__layout {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(420px, 780px);
  align-items: center;
  gap: 48px;
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
  justify-self: end;
  width: 100%;
  max-width: 780px;
  transform: translateX(120px);
}

.home-details-cinematic__image-frame {
  overflow: hidden;
  min-height: 520px;
}

.home-details-cinematic__image {
  display: block;
  width: 100%;
  height: 110%;
  min-height: 572px;
  object-fit: cover;
  transform: translateY(calc(var(--cinematic-image-progress, 0) * -10%));
  will-change: transform;
}

@media (max-width: 1100px) {
  .home-details-cinematic__layout {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .home-details-cinematic__media {
    justify-self: start;
    max-width: 100%;
    transform: none;
  }

  .home-details-cinematic__image-frame {
    min-height: 460px;
  }

  .home-details-cinematic__image {
    min-height: 506px;
  }
}

@media (max-width: 900px) {
  .home-details-cinematic {
    padding: 72px var(--spacing--page-x-mobile);
  }

  .home-details-cinematic__title {
    font-size: var(--font-size--home-details-cinematic-title-mobile);
  }

  .home-details-cinematic__image-frame {
    min-height: 320px;
  }

  .home-details-cinematic__image {
    min-height: 352px;
  }
}
</style>
