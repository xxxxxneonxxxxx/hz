<template>
  <section class="student-works-content">
    <div class="student-works-content__container">
      <div class="student-works-content__header">
        <h2 class="student-works-content__title">Подборка работ</h2>
        <p class="student-works-content__lead">
          Небольшая витрина учебных и итоговых проектов студентов: короткометражные фильмы,
          тизеры, документальные и жанровые сцены.
        </p>
      </div>

      <div class="student-works-content__grid">
        <article
          v-for="section in page.sections"
          :key="section.id"
          class="student-works-content__card"
        >
          <div class="student-works-content__media">
            <iframe
              v-if="section.embedUrl"
              :src="section.embedUrl"
              :title="section.videoTitle"
              class="student-works-content__iframe"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowfullscreen
            />

            <div v-else class="student-works-content__video-placeholder">
              <div class="student-works-content__vk-badge">VK</div>
              <p class="student-works-content__video-title">{{ section.videoTitle }}</p>
              <a
                :href="section.fallbackUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="student-works-content__video-link"
              >
                Открыть видео
              </a>
            </div>
          </div>

          <div class="student-works-content__body">
            <p class="student-works-content__eyebrow">{{ section.title }}</p>
            <h3 class="student-works-content__card-title">{{ section.subtitle }}</h3>

            <p
              v-if="getMediaMeta(section)"
              class="student-works-content__meta"
            >
              {{ getMediaMeta(section) }}
            </p>

            <p class="student-works-content__text">
              {{ getPreviewText(section) }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { STUDENT_WORKS_PAGE as page } from '../config/studentWorks.config.js'

const isMetaParagraph = (paragraph) => paragraph?.startsWith('Режиссёр:')

const getMediaMeta = (section) => {
  const metaParagraph = section.paragraphs.find(isMetaParagraph)
  return metaParagraph ?? ''
}

const getPreviewText = (section) =>
  section.paragraphs.find((paragraph) => paragraph && !isMetaParagraph(paragraph)) ?? ''
</script>

<style scoped>
.student-works-content {
  padding: var(--size--page-section-padding-y) var(--spacing--page-x);
  background: var(--color--student-works-page-bg);
}

.student-works-content__container {
  max-width: 1460px;
  margin: 0 auto;
}

.student-works-content__header {
  max-width: 900px;
  margin: 0 0 40px;
  text-align: left;
}

.student-works-content__title {
  margin: 0 0 14px;
  color: var(--color--student-works-section-title-text);
  font-size: var(--font-size--student-works-section-title);
  font-weight: 700;
  line-height: 1.06;
  text-transform: uppercase;
}

.student-works-content__lead {
  margin: 0;
  color: var(--color--student-works-text);
  font-size: var(--font-size--student-works-text);
  line-height: 1.45;
  text-align: justify;
  text-wrap: pretty;
}

.student-works-content__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
}

.student-works-content__card {
  overflow: hidden;
  background: var(--color--white);
  border: 1px solid var(--color--border);
}

.student-works-content__media {
  width: 100%;
}

.student-works-content__iframe,
.student-works-content__video-placeholder {
  width: 100%;
  aspect-ratio: 16 / 10;
}

.student-works-content__iframe {
  border: 0;
}

.student-works-content__video-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
  background: var(--color--student-works-video-bg);
  color: var(--color--student-works-video-text);
  text-align: center;
}

.student-works-content__vk-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: var(--color--student-works-vk-badge-bg);
  color: var(--color--student-works-vk-badge-text);
  font-size: 26px;
  font-weight: 700;
}

.student-works-content__video-title {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
}

.student-works-content__video-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 220px;
  min-height: 54px;
  padding: 0 22px;
  border-radius: 12px;
  background: var(--color--student-works-video-link-bg);
  color: var(--color--student-works-video-link-text);
  text-decoration: none;
  font-size: var(--font-size--student-works-video-link);
  font-weight: 700;
}

.student-works-content__body {
  padding: 24px 24px 26px;
}

.student-works-content__eyebrow {
  margin: 0 0 10px;
  color: var(--color--student-works-media-caption);
  font-size: 15px;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
}

.student-works-content__card-title {
  margin: 0 0 12px;
  color: var(--color--student-works-section-title-text);
  font-size: 28px;
  font-weight: 400;
  line-height: 1.12;
}

.student-works-content__meta {
  margin: 0 0 12px;
  color: var(--color--student-works-media-caption);
  font-size: var(--font-size--student-works-media-caption);
  line-height: 1.35;
}

.student-works-content__text {
  margin: 0;
  color: var(--color--student-works-text);
  font-size: var(--font-size--student-works-text);
  line-height: 1.45;
}

@media (max-width: 1100px) {
  .student-works-content__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 900px) {
  .student-works-content {
    padding: var(--size--page-section-padding-y-mobile) var(--spacing--page-x-mobile);
  }

  .student-works-content__header {
    margin-bottom: 28px;
    text-align: center;
  }

  .student-works-content__lead {
    text-align: left;
  }

  .student-works-content__title {
    font-size: var(--font-size--student-works-section-title-mobile);
  }

  .student-works-content__lead,
  .student-works-content__text {
    font-size: var(--font-size--student-works-text-mobile);
    margin-bottom: 28px;
  }

  .student-works-content__card-title {
    font-size: 24px;
  }

  .student-works-content__meta {
    font-size: var(--font-size--student-works-media-caption-mobile);
  }

  .student-works-content__body {
    padding: 20px 18px 22px;
  }
}
</style>
