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

        <AppMultiCardCarousel
          :items="page.scriptRoomSection.reviews"
          :visible-cards="{ mobile: 1, tablet: 2, desktop: 5 }"
          :gap="{ mobile: 0, tablet: 18, desktop: 20 }"
          prev-aria-label="Предыдущие отзывы"
          next-aria-label="Следующие отзывы"
        >
          <template #card="{ item }">
            <article class="student-works-reviews__card">
              <a
                :href="item.href"
                target="_blank"
                rel="noopener noreferrer"
                class="student-works-reviews__media"
                :aria-label="`Открыть отзыв: ${item.name}`"
              >
                <img
                  :src="item.image"
                  :alt="item.alt"
                  class="student-works-reviews__image"
                />
                <span class="student-works-reviews__overlay" />
                <span class="student-works-reviews__play" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M8 6.5v11l9-5.5-9-5.5Z" />
                  </svg>
                </span>
              </a>

              <p class="student-works-reviews__text">
                <strong>{{ item.name }}</strong>, {{ item.description }}
              </p>
            </article>
          </template>
        </AppMultiCardCarousel>
      </div>
    </section>

    <ProgramCardsSection :cards="HOME_PROGRAM_CARDS" />

    <AppConsultationForm :section="HOME_CONSULTATION_FORM" />
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { HOME_CONSULTATION_FORM } from '../../ConsultationFormSection/config/ff.js'
import { STUDENT_WORKS_PAGE as page } from '../config/studentWorks.config.js'
import { HOME_PROGRAM_CARDS } from '../../Home/config/home.config.js'

import StudentWorksContent from './StudentWorksContent.vue'
import AppMultiCardCarousel from '../../Carousel/view/AppMultiCardCarousel.vue'
import ProgramCardsSection from '../../Home/view/ProgramCardsSection.vue'
import AppConsultationForm from '../../ConsultationFormSection/view/ConsultationFormSection.vue'
</script>

<style scoped>
.student-works-reviews__card {
  flex: 0 0 auto;
  min-width: 0;
}

.student-works-reviews__media {
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 22px;
  background: var(--color--student-works-script-room-card-bg);
  aspect-ratio: 0.72 / 1;
}

.student-works-reviews__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.student-works-reviews__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, var(--color--student-works-script-room-card-overlay) 100%);
}

.student-works-reviews__play {
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: clamp(56px, 5vw, 86px);
  height: clamp(56px, 5vw, 86px);
  border-radius: 50%;
  background: var(--color--student-works-script-room-play-bg);
  transform: translate(-50%, -50%);
}

.student-works-reviews__play svg {
  width: 34%;
  height: 34%;
  fill: var(--color--student-works-script-room-play-icon);
}

.student-works-reviews__text {
  margin: 22px 0 0;
  color: var(--color--student-works-script-room-card-text);
  font-size: var(--font-size--student-works-script-room-card-text);
  line-height: 1.45;
}

.student-works-reviews__text strong {
  color: var(--color--student-works-script-room-name-text);
  font-size: var(--font-size--student-works-script-room-name);
  font-weight: 700;
}

@media (min-width: 1200px) {
  .student-works-reviews__card {
    max-width: 250px;
  }

  .student-works-reviews__media {
    aspect-ratio: 0.84 / 1;
    border-radius: 18px;
  }

  .student-works-reviews__text {
    margin-top: 12px;
    font-size: clamp(14px, 0.85vw, var(--font-size--student-works-script-room-card-text));
  }

  .student-works-reviews__text strong {
    font-size: clamp(18px, 1vw, var(--font-size--student-works-script-room-name));
  }
}
</style>

<style scoped>
.student-works-page__hero {
  padding: var(--size--header-current-offset) var(--spacing--page-x) var(--size--page-hero-padding-bottom);
  background: var(--color--student-works-hero-bg, var(--color--surface));
}

.student-works-page__container {
  max-width: 1460px;
  margin: 0 auto;
}

.student-works-page__title {
  margin: 0 0 20px;
  text-align: center;
  font-size: 72px;
  font-weight: 700;
  line-height: 1.05;
  color: var(--color--student-works-hero-title, var(--color--black));
}

.student-works-page__breadcrumbs {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 0;
  font-size: 16px;
  line-height: 1.4;
  color: var(--color--student-works-breadcrumbs, var(--color--black));
}

.student-works-page__breadcrumb-link {
  color: inherit;
  text-decoration: none;
}

.student-works-page__breadcrumb-link:hover {
  text-decoration: underline;
}

.student-works-page__script-room {
  padding: var(--size--page-section-padding-y) var(--spacing--page-x);
  background: var(--color--student-works-script-room-bg);
}

.student-works-page__section-title {
  margin: 0 0 18px;
  color: var(--color--student-works-script-room-title-text);
  font-size: var(--font-size--student-works-script-room-title);
  font-weight: 700;
  line-height: 1.1;
  text-transform: uppercase;
  text-align: left;
}

.student-works-page__section-description {
  max-width: 1240px;
  margin: 0 0 44px;
  color: var(--color--student-works-script-room-description-text);
  font-size: var(--font-size--student-works-script-room-description);
  line-height: 1.4;
  text-align: justify;
  text-wrap: pretty;
}

@media (max-width: 900px) {
  .student-works-page__hero {
    padding: var(--size--header-current-offset) var(--spacing--page-x-mobile) var(--size--page-hero-padding-bottom-mobile);
  }

  .student-works-page__script-room {
    padding: var(--size--page-section-padding-y-mobile) var(--spacing--page-x-mobile);
  }

  .student-works-page__title {
    font-size: 42px;
    text-align: center;
  }

  .student-works-page__section-title {
    font-size: var(--font-size--student-works-script-room-title-mobile);
    text-align: center;
  }

  .student-works-page__section-description {
    margin-bottom: 32px;
    font-size: var(--font-size--student-works-script-room-description-mobile);
    text-align: left;
  }
}
</style>
