<template>
  <section class="student-wins">
    <div class="student-wins__container">
      <h2 class="student-wins__title">{{ section.title }}</h2>
      <p class="student-wins__description">{{ section.description }}</p>

      <div class="student-wins__grid">
        <article
          v-for="metric in section.metrics"
          :key="metric.id"
          class="student-wins__card"
        >
          <p class="student-wins__value">{{ metric.value }}</p>
          <p class="student-wins__text">{{ metric.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  section: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.student-wins {
  padding: var(--spacing--school-section-y) var(--spacing--page-x);
  background: var(--color--school-page-bg);
}

.student-wins__container {
  max-width: var(--size--school-container);
  margin: 0 auto;
}

.student-wins__title {
  margin: 0 0 28px;
  color: var(--color--school-wins-title);
  font-size: var(--font-size--school-wins-title);
  font-weight: 700;
  line-height: 1.08;
  text-align: left;
  text-transform: uppercase;
}

.student-wins__description {
  max-width: 1480px;
  margin: 0 0 56px;
  color: var(--color--school-wins-text);
  font-size: var(--font-size--school-wins-text);
  line-height: 1.5;
  text-align: justify;
  text-wrap: pretty;
}

.student-wins__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 64px 48px;
}

.student-wins__card {
  text-align: center;
}

.student-wins__value {
  margin: 0 0 12px;
  color: var(--color--school-wins-value);
  font-size: var(--font-size--school-wins-value);
  font-weight: 400;
  line-height: 1;
}

.student-wins__text {
  margin: 0;
  color: var(--color--school-wins-text);
  font-size: var(--font-size--school-wins-text);
  line-height: 1.4;
}

@media (max-width: 1100px) {
  .student-wins__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .student-wins {
    padding: var(--spacing--school-section-y-mobile) var(--spacing--page-x-mobile);
  }

  .student-wins__title {
    font-size: var(--font-size--school-wins-title-mobile);
    text-align: center;
  }

  .student-wins__description,
  .student-wins__text {
    font-size: var(--font-size--school-wins-text-mobile);
  }

  .student-wins__description {
    text-align: left;
  }

  .student-wins__value {
    font-size: var(--font-size--school-wins-value-mobile);
  }

  .student-wins__grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
