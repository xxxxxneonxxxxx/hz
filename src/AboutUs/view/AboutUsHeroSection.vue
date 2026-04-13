<template>
  <header class="school-page__hero">
    <div class="school-page__container">
      <h1 class="school-page__title">{{ page.title }}</h1>

      <p class="school-page__breadcrumbs">
        <RouterLink to="/" class="school-page__breadcrumb-link">
          {{ page.breadcrumbHomeLabel }}
        </RouterLink>
        <span>/</span>
        <span>{{ page.breadcrumbCurrentLabel }}</span>
      </p>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  page: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.school-page__container {
  width: 100%;
  max-width: var(--size--school-container);
  margin: 0 auto;
}

.school-page__hero {
  padding: var(--size--header-current-offset) var(--spacing--page-x) 56px;
  background: var(--color--school-hero-bg);
  text-align: center;
}

.school-page__title {
  margin: 0 0 24px;
  color: var(--color--school-title-text);
  font-size: var(--font-size--school-page-title);
  font-weight: 300;
  line-height: var(--line-height--school-title);
}

.school-page__breadcrumbs {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  color: var(--color--school-breadcrumb-text);
  font-size: var(--font-size--school-breadcrumbs);
  line-height: 1.4;
}

.school-page__breadcrumb-link {
  color: var(--color--school-breadcrumb-link);
  text-decoration: none;
}

@media (max-width: 900px) {
  .school-page__hero {
    padding: var(--size--header-current-offset) var(--spacing--page-x-mobile) 40px;
  }

  .school-page__title {
    font-size: var(--font-size--school-page-title-mobile);
  }

  .school-page__breadcrumbs {
    font-size: var(--font-size--school-breadcrumbs-mobile);
    gap: 6px;
  }
}
</style>
