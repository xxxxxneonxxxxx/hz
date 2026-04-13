<template>
  <section class="student-works-page">
    <header class="student-works-page__hero">
      <div class="student-works-page__container">
        <h1 class="student-works-page__title">{{ page.title }}</h1>

        <p class="student-works-page__breadcrumbs">
          <RouterLink to="/" class="student-works-page__breadcrumb-link">
            {{ page.breadcrumbHomeLabel }}
          </RouterLink>
          <span>/</span>
          <span>{{ page.breadcrumbCurrentLabel }}</span>
        </p>
      </div>
    </header>

    <StudentWorksContent />

    <section class="student-works-page__script-room">
      <div class="student-works-page__container">
        <h2 class="student-works-page__section-title">
          {{ page.scriptRoomSection.title }}
        </h2>

        <p class="student-works-page__section-description">
          {{ page.scriptRoomSection.description }}
        </p>

        <StudentWorksReviewsCarousel
          :reviews="page.scriptRoomSection.reviews"
        />

        <ProgramCardsSection :cards="HOME_PROGRAM_CARDS" />

        <AppConsultationForm :section="HOME_CONSULTATION_FORM" />
      </div>
    </section>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { HOME_CONSULTATION_FORM } from '../../ConsultationFormSection/config/ff.js'
import { STUDENT_WORKS_PAGE as page } from '../config/studentWorks.config.js'
import { HOME_PROGRAM_CARDS } from '../../Home/config/home.config.js'

import StudentWorksContent from './StudentWorksContent.vue'
import StudentWorksReviewsCarousel from './StudentWorksReviewsCarousel.vue'
import ProgramCardsSection from '../../Home/view/ProgramCardsSection.vue'
import AppConsultationForm from '../../ConsultationFormSection/view/ConsultationFormSection.vue'
</script>

<style scoped>
.student-works-page__hero {
  padding: var(--size--header-current-offset) var(--spacing--page-x) 72px;
  background: var(--color--student-works-hero-bg, #f3f3f5);
}

.student-works-page__container {
  max-width: 1460px;
  margin: 0 auto;
}

.student-works-page__title {
  margin: 0 0 20px;
  text-align: center;
  font-size: 72px;
  font-weight: 400;
  line-height: 1.05;
  color: var(--color--student-works-hero-title, #111);
}

.student-works-page__breadcrumbs {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 0;
  font-size: 16px;
  line-height: 1.4;
  color: var(--color--student-works-breadcrumbs, #222);
}

.student-works-page__breadcrumb-link {
  color: inherit;
  text-decoration: none;
}

.student-works-page__breadcrumb-link:hover {
  text-decoration: underline;
}

.student-works-page__script-room {
  padding: 24px var(--spacing--page-x) 96px;
  background: var(--color--student-works-script-room-bg);
}

.student-works-page__section-title {
  margin: 0 0 18px;
  color: var(--color--student-works-script-room-title-text);
  font-size: var(--font-size--student-works-script-room-title);
  font-weight: 500;
  line-height: 1.1;
  text-transform: uppercase;
  text-align: center;
}

.student-works-page__section-description {
  max-width: 1240px;
  margin: 0 auto 44px;
  color: var(--color--student-works-script-room-description-text);
  font-size: var(--font-size--student-works-script-room-description);
  line-height: 1.4;
  text-align: center;
}

@media (max-width: 900px) {
  .student-works-page__hero {
    padding: var(--size--header-current-offset) var(--spacing--page-x-mobile) 48px;
  }

  .student-works-page__script-room {
    padding: 24px var(--spacing--page-x-mobile) 72px;
  }

  .student-works-page__title {
    font-size: 42px;
  }

  .student-works-page__section-title {
    font-size: var(--font-size--student-works-script-room-title-mobile);
  }

  .student-works-page__section-description {
    margin-bottom: 32px;
    font-size: var(--font-size--student-works-script-room-description-mobile);
  }
}
</style>
