<template>
  <section class="recognition">
    <div class="recognition__container">
      <h2 class="recognition__title">Наши звездные преподаватели</h2>
      <AboutUsRecognitionCarousel :cards="cards" />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import AboutUsRecognitionCarousel from './AboutUsRecognitionCarousel.vue'

const props = defineProps({
  groups: {
    type: Array,
    required: true,
  },
})

const cards = computed(() => props.groups.flatMap((group) => group.cards ?? []))
</script>

<style scoped>
.recognition {
  padding: var(--spacing--school-section-y) var(--spacing--page-x);
  background: var(--color--school-page-bg);
}

.recognition__container {
  max-width: var(--size--school-container);
  margin: 0 auto;
}

.recognition__title {
  max-width: 1120px;
  margin: 0 0 48px;
  color: var(--color--school-recognition-title);
  font-size: var(--font-size--school-recognition-title);
  font-weight: 700;
  line-height: 1.08;
  text-align: left;
}

@media (max-width: 900px) {
  .recognition {
    padding: var(--spacing--school-section-y-mobile) var(--spacing--page-x-mobile);
  }

  .recognition__title {
    margin-bottom: 36px;
    font-size: var(--font-size--school-recognition-title-mobile);
    text-align: center;
  }
}
</style>
