<template>
  <section class="facultiesPage">
    <header class="faculties-page__hero">
      <div class="faculties-page__container">
        <h1 class="faculties-page__title">{{ page.title }}</h1>

        <p class="faculties-page__breadcrumbs">
          <RouterLink to="/" class="faculties-page__breadcrumb-link">
            {{ page.breadcrumbHomeLabel }}
          </RouterLink>
          <span>/</span>
          <span>{{ page.breadcrumbCurrentLabel }}</span>
        </p>
      </div>
    </header>

    <section class="faculties-page__programs">
      <div class="faculties-page__container">
        <ProgramCardsSection :cards="HOME_PROGRAM_CARDS" />
      </div>
    </section>

    <section class="faculties-page__form">
      <div class="faculties-page__container">
        <AppConsultationForm :section="HOME_CONSULTATION_FORM" />
      </div>
    </section>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { HOME_CONSULTATION_FORM } from '../../ConsultationFormSection/config/ff.js'
import { HOME_PROGRAM_CARDS } from '../../Home/config/home.config.js'
import { FACULTIES_PAGE as page } from '../config/faculties.config.js'

import ProgramCardsSection from '../../Home/view/ProgramCardsSection.vue'
import AppConsultationForm from '../../ConsultationFormSection/view/ConsultationFormSection.vue'
</script>

<style scoped>
.facultiesPage {
  background: var(--color--faculties-page-bg, #f3f3f5);
}

.faculties-page__container {
  max-width: 1460px;
  margin: 0 auto;
  width: 100%;
}

.faculties-page__hero {
  padding: var(--size--header-current-offset) var(--spacing--page-x) 64px;
  background: var(--color--faculties-hero-bg, #f3f3f5);
  text-align: center;
}

.faculties-page__title {
  margin: 0 0 24px;
  color: var(--color--faculties-title-text, #111);
  font-size: var(--font-size--faculties-title, 72px);
  font-weight: 300;
  line-height: 1.05;
}

.faculties-page__breadcrumbs {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  color: var(--color--faculties-breadcrumb-text, #2b2b2b);
  font-size: var(--font-size--faculties-breadcrumbs, 16px);
  line-height: 1.4;
}

.faculties-page__breadcrumb-link {
  color: var(--color--faculties-breadcrumb-link, inherit);
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.faculties-page__breadcrumb-link:hover {
  opacity: 0.7;
}

.faculties-page__programs {
  padding: 24px var(--spacing--page-x) 56px;
}

.faculties-page__form {
  padding: 0 var(--spacing--page-x) 96px;
}

@media (max-width: 900px) {
  .faculties-page__hero {
    padding: var(--size--header-current-offset) var(--spacing--page-x-mobile) 40px;
  }

  .faculties-page__programs {
    padding: 16px var(--spacing--page-x-mobile) 40px;
  }

  .faculties-page__form {
    padding: 0 var(--spacing--page-x-mobile) 72px;
  }

  .faculties-page__title {
    font-size: var(--font-size--faculties-title-mobile, 42px);
  }

  .faculties-page__breadcrumbs {
    gap: 6px;
    font-size: var(--font-size--faculties-breadcrumbs-mobile, 14px);
  }
}
</style>
