<template>
  <section class="home-details-stages">
    <div class="home-details-stages__container">
      <article
        v-for="(step, stepIndex) in section.steps"
        :key="step.id"
        class="home-details-stages__step"
      >
        <div class="home-details-stages__step-meta">
          <span class="home-details-stages__step-number">
            {{ step.label || `${stepIndex + 1} шаг` }}
          </span>
        </div>

        <div class="home-details-stages__step-content">
          <div class="home-details-stages__step-text">
            <h2 class="home-details-stages__step-title">
              {{ step.title }}
            </h2>

            <div
              v-for="topic in step.topics"
              :key="topic.title"
              class="home-details-stages__topic"
            >
              <h3 class="home-details-stages__topic-title">
                {{ topic.title }}
              </h3>

              <ul v-if="topic.items?.length" class="home-details-stages__topic-list">
                <li
                  v-for="item in topic.items"
                  :key="item"
                  class="home-details-stages__topic-item"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div
          v-if="step.carousel?.enabled && step.carousel?.slides?.length"
          class="home-details-stages__step-carousel"
        >
          <AppCarouselSection
            :section="step.carousel"
            compact
          />
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import AppCarouselSection from '../../../Carousel/view/AppCarouselSection.vue'

defineProps({
  section: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.home-details-stages {
  padding: 96px var(--spacing--page-x) 110px;
  background: var(--color--home-details-stages-bg);
}

.home-details-stages__container {
  max-width: 1460px;
  margin: 0 auto;
}

.home-details-stages__step {
  display: grid;
  grid-template-columns: 320px minmax(0, 1fr);
  gap: 56px;
  align-items: start;
}

.home-details-stages__step + .home-details-stages__step {
  margin-top: 72px;
}

.home-details-stages__step-meta {
  display: flex;
  justify-content: flex-start;
  padding-top: 8px;
}

.home-details-stages__step-number {
  color: var(--color--home-details-stages-step-number);
  font-size: var(--font-size--home-details-stages-step-number);
  font-weight: 300;
  line-height: 0.94;
}

.home-details-stages__step-content {
  display: flex;
  flex-direction: column;
}

.home-details-stages__step-text {
  padding-left: 40px;
  border-left: 8px solid var(--color--home-details-stages-divider);
}

.home-details-stages__step-carousel {
  grid-column: 1 / -1;
  margin-top: 12px;
}

.home-details-stages__step-title {
  margin: 0 0 40px;
  color: var(--color--home-details-stages-step-title);
  font-size: var(--font-size--home-details-stages-step-title);
  font-weight: 400;
  line-height: 1.08;
  text-transform: uppercase;
}

.home-details-stages__topic + .home-details-stages__topic {
  margin-top: 34px;
}

.home-details-stages__topic-title {
  margin: 0;
  color: var(--color--home-details-stages-topic-title);
  font-size: var(--font-size--home-details-stages-topic-title);
  font-weight: 700;
  line-height: 1.24;
}

.home-details-stages__topic-list {
  margin: 18px 0 0;
  padding-left: 34px;
}

.home-details-stages__topic-item {
  color: var(--color--home-details-stages-topic-text);
  font-size: var(--font-size--home-details-stages-topic-text);
  line-height: 1.48;
}

.home-details-stages__topic-item + .home-details-stages__topic-item {
  margin-top: 12px;
}

@media (max-width: 1100px) {
  .home-details-stages__step {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .home-details-stages__step-content {
    padding-left: 0;
  }

  .home-details-stages__step-text {
    padding-left: 28px;
  }
}

@media (max-width: 900px) {
  .home-details-stages {
    padding: 72px var(--spacing--page-x-mobile) 80px;
  }

  .home-details-stages__step + .home-details-stages__step {
    margin-top: 56px;
  }

  .home-details-stages__step-number {
    font-size: var(--font-size--home-details-stages-step-number-mobile);
  }

  .home-details-stages__step-text {
    padding-left: 20px;
    border-left-width: 5px;
  }

  .home-details-stages__step-title {
    margin-bottom: 28px;
    font-size: var(--font-size--home-details-stages-step-title-mobile);
  }

  .home-details-stages__topic-title {
    font-size: var(--font-size--home-details-stages-topic-title-mobile);
  }

  .home-details-stages__topic-item {
    font-size: var(--font-size--home-details-stages-topic-text-mobile);
  }
}
</style>
