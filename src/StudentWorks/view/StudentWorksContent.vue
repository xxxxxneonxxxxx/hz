<template>
  <section class="student-works-page">
    <div class="student-works-page__content">
      <section
        v-for="(section, index) in page.sections"
        :key="section.id"
        class="student-works-page__section"
      >
        <div class="student-works-page__container">
          <h2
            v-if="index === 0 || index === 1"
            class="student-works-page__section-title"
          >
            {{ index === 0 ? section.title : 'Короткометражные фильмы' }}
          </h2>

          <p
            v-if="index === 0 && section.paragraphs[0]"
            class="student-works-page__section-text student-works-page__section-text--lead"
          >
            {{ section.paragraphs[0] }}
          </p>

          <div
            :class="[
              'student-works-page__section-layout',
              { 'student-works-page__section-layout--aligned': index > 0 },
            ]"
          >
            <div
              :class="[
                'student-works-page__section-copy',
                { 'student-works-page__section-copy--aligned': index > 0 },
              ]"
            >
              <p
                v-for="paragraph in getCopyParagraphs(section, index)"
                :key="paragraph"
                class="student-works-page__section-text"
              >
                {{ paragraph }}
              </p>
            </div>

            <div
              :class="[
                'student-works-page__media',
                { 'student-works-page__media--aligned': index > 0 },
              ]"
            >
              <p
                :class="[
                  'student-works-page__media-caption',
                  { 'student-works-page__media-caption--aligned': index > 0 },
                ]"
              >
                {{ section.subtitle }}
              </p>

              <p
                v-if="getMediaMeta(section, index)"
                class="student-works-page__media-meta"
              >
                {{ getMediaMeta(section, index) }}
              </p>

              <iframe
                v-if="section.embedUrl"
                :src="section.embedUrl"
                :title="section.videoTitle"
                class="student-works-page__iframe"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                allowfullscreen
              />

              <div v-else class="student-works-page__video-placeholder">
                <div class="student-works-page__vk-badge">VK</div>
                <p class="student-works-page__video-title">{{ section.videoTitle }}</p>
                <p class="student-works-page__video-text">
                  Здесь будет embed-плеер. Пока оставил заглушку-ссылку на VK Video.
                </p>
                <a
                  :href="section.fallbackUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="student-works-page__video-link"
                >
                  Открыть видео
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import { STUDENT_WORKS_PAGE as page } from '../config/studentWorks.config.js'

const isMetaParagraph = (paragraph) => paragraph?.startsWith('Режиссёр:')

const getCopyParagraphs = (section, index) => {
  const paragraphs = section.paragraphs.slice(1)

  if (index > 0 && isMetaParagraph(paragraphs[0])) {
    return paragraphs.slice(1)
  }

  return paragraphs
}

const getMediaMeta = (section, index) => {
  if (index === 0) return ''

  const metaParagraph = section.paragraphs.slice(1).find(isMetaParagraph)
  return metaParagraph ?? ''
}
</script>

<style scoped>
.student-works-page {
  background: var(--color--student-works-page-bg);
}

.student-works-page__content {
  display: flex;
  flex-direction: column;
}

.student-works-page__container {
  max-width: 1460px;
  margin: 0 auto;
}

.student-works-page__section {
  padding: 24px var(--spacing--page-x) 68px;
}

.student-works-page__section-title {
  margin: 0 0 18px;
  color: var(--color--student-works-section-title-text);
  font-size: var(--font-size--student-works-section-title);
  font-weight: 500;
  line-height: 1.1;
  text-transform: uppercase;
  text-align: center;
}

.student-works-page__section-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.95fr);
  gap: 48px;
  align-items: start;
}

.student-works-page__section-layout--aligned {
  align-items: center;
}

.student-works-page__section-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 760px;
}

.student-works-page__section-copy--aligned {
  justify-content: center;
}

.student-works-page__section-text {
  width: 100%;
  margin: 0 0 22px;
  color: var(--color--student-works-text);
  font-size: var(--font-size--student-works-text);
  line-height: 1.45;
  text-align: left;
}

.student-works-page__section-text--lead {
  max-width: 1240px;
  margin: 0 auto 28px;
}

.student-works-page__media {
  width: 100%;
}

.student-works-page__media--aligned {
  display: flex;
  flex-direction: column;
}

.student-works-page__media-caption {
  margin: 0 0 16px;
  color: var(--color--student-works-media-caption);
  font-size: var(--font-size--student-works-media-caption);
  line-height: 1.35;
  text-align: center;
}

.student-works-page__media-caption--aligned {
  margin-bottom: 4px;
  text-align: left;
}

.student-works-page__media-meta {
  margin: 0 0 18px;
  color: var(--color--student-works-media-caption);
  font-size: var(--font-size--student-works-media-caption);
  line-height: 1.35;
  text-align: left;
}

.student-works-page__iframe,
.student-works-page__video-placeholder {
  width: 100%;
  aspect-ratio: 1.18 / 1;
}

.student-works-page__iframe {
  border: 0;
}

.student-works-page__video-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding: 32px;
  background: var(--color--student-works-video-bg);
  color: var(--color--student-works-video-text);
  text-align: center;
}

.student-works-page__vk-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background: var(--color--student-works-vk-badge-bg);
  color: var(--color--student-works-vk-badge-text);
  font-size: var(--font-size--student-works-video-badge);
  font-weight: 700;
}

.student-works-page__video-title {
  margin: 0;
  font-size: var(--font-size--student-works-video-title);
  font-weight: 700;
}

.student-works-page__video-text {
  max-width: 420px;
  margin: 0;
  color: var(--color--student-works-video-muted);
  font-size: var(--font-size--student-works-video-text);
  line-height: 1.5;
}

.student-works-page__video-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 240px;
  min-height: 60px;
  padding: 0 24px;
  border-radius: 14px;
  background: var(--color--student-works-video-link-bg);
  color: var(--color--student-works-video-link-text);
  text-decoration: none;
  font-size: var(--font-size--student-works-video-link);
  font-weight: 700;
}

@media (max-width: 1100px) {
  .student-works-page__section-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 900px) {
  .student-works-page__section {
    padding-left: var(--spacing--page-x-mobile);
    padding-right: var(--spacing--page-x-mobile);
  }

  .student-works-page__section-title {
    font-size: var(--font-size--student-works-section-title-mobile);
  }

  .student-works-page__section-text {
    font-size: var(--font-size--student-works-text-mobile);
  }

  .student-works-page__media-caption,
  .student-works-page__media-meta {
    font-size: var(--font-size--student-works-media-caption-mobile);
  }
}
</style>