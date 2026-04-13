<template>
  <section v-if="page" class="news-page">
    <header class="news-page__hero">
      <div class="news-page__container">
        <h1 class="news-page__title">{{ page.title }}</h1>

        <p class="news-page__breadcrumbs">
          <RouterLink to="/" class="news-page__breadcrumb-link">
            {{ page.breadcrumbHomeLabel }}
          </RouterLink>
          <span>/</span>
          <span>{{ page.breadcrumbCurrentLabel }}</span>
        </p>
      </div>
    </header>

    <section class="news-page__grid">
      <div class="news-page__container">
        <Grid
          class="news-page__list"
          :length="total"
          :page-provider="pageProvider"
          :page-size="pageSize"
          :page-provider-debounce-time="120"
          :respect-scroll-to-on-resize="true"
        >
          <template #probe>
            <article class="news-page__card news-page__card--probe">
              <div class="news-page__image-wrap">
                <div class="news-page__image news-page__image--placeholder" />
              </div>

              <div class="news-page__content">
                <h2 class="news-page__card-title">
                  Заголовок новости в две строки
                </h2>
                <p class="news-page__card-date">11.04.2026</p>
              </div>
            </article>
          </template>

          <template #placeholder="{ style, index }">
            <article
              :style="style"
              :data-index="index"
              class="news-page__card news-page__card--placeholder"
            >
              <div class="news-page__image-wrap">
                <div class="news-page__image news-page__image--placeholder" />
              </div>

              <div class="news-page__content">
                <div class="news-page__line news-page__line--title" />
                <div class="news-page__line news-page__line--date" />
              </div>
            </article>
          </template>

          <template #default="{ item, style }">
            <RouterLink
              :style="style"
              :to="`/news/${item.id}`"
              class="news-page__card"
            >
              <div class="news-page__image-wrap">
                <img
                  :src="item.image"
                  :alt="item.alt"
                  class="news-page__image"
                />
                <span class="news-page__overlay" />
              </div>

              <div class="news-page__content">
                <h2 class="news-page__card-title">{{ item.title }}</h2>
                <p class="news-page__card-date">{{ item.date }}</p>
              </div>
            </RouterLink>
          </template>
        </Grid>
      </div>
    </section>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import Grid from 'vue-virtual-scroll-grid'
import '../config/news.style-config.css'
import { useNewsPage } from '../model/useNewsPage.js'

const { load, page, pageProvider, pageSize, total } = useNewsPage()

onMounted(() => {
  load()
})
</script>

<style scoped>
.news-page {
  background: var(--color--news-page-bg);
}

.news-page__hero {
  padding: var(--size--header-current-offset) var(--spacing--page-x) 64px;
  background: var(--color--news-hero-bg);
  text-align: center;
}

.news-page__container {
  max-width: 1460px;
  margin: 0 auto;
}

.news-page__title {
  margin: 0 0 24px;
  color: var(--color--news-title-text);
  font-size: var(--font-size--news-title);
  font-weight: 300;
  line-height: 1.05;
}

.news-page__breadcrumbs {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  color: var(--color--news-breadcrumb-text);
  font-size: var(--font-size--news-breadcrumbs);
  line-height: 1.4;
}

.news-page__breadcrumb-link {
  color: var(--color--news-breadcrumb-link);
  text-decoration: none;
}

.news-page__grid {
  padding: 56px var(--spacing--page-x) 96px;
}

.news-page__list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 36px;
  grid-auto-rows: min-content;
  height: 78vh;
  overflow-y: auto;
  align-content: start;
}

.news-page__card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--color--news-card-border);
  background: var(--color--news-card-bg);
  color: inherit;
  text-decoration: none;
}

.news-page__card--probe,
.news-page__card--placeholder {
  pointer-events: none;
}

.news-page__image-wrap {
  position: relative;
}

.news-page__image {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 0.74;
  object-fit: cover;
}

.news-page__image--placeholder {
  background: #ececf3;
}

.news-page__overlay {
  position: absolute;
  inset: 0;
  background: var(--color--news-card-overlay);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.news-page__card:hover .news-page__overlay {
  opacity: 1;
}

.news-page__content {
  padding: 20px 18px 26px;
}

.news-page__line {
  background: #ececf3;
}

.news-page__line--title {
  width: 82%;
  height: 28px;
  margin-bottom: 12px;
}

.news-page__line--date {
  width: 34%;
  height: 20px;
}

.news-page__card-title {
  margin: 0 0 12px;
  color: var(--color--news-card-title);
  font-size: var(--font-size--news-card-title);
  font-weight: 400;
  line-height: 1.25;
}

.news-page__card-date {
  margin: 0;
  color: var(--color--news-card-date);
  font-size: var(--font-size--news-card-date);
  line-height: 1.3;
}

@media (max-width: 1100px) {
  .news-page__list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .news-page__hero {
    padding: var(--size--header-current-offset) var(--spacing--page-x-mobile) 40px;
  }

  .news-page__title {
    font-size: var(--font-size--news-title-mobile);
  }

  .news-page__breadcrumbs {
    gap: 6px;
    font-size: var(--font-size--news-breadcrumbs-mobile);
  }

  .news-page__grid {
    padding: 32px var(--spacing--page-x-mobile) 64px;
  }

  .news-page__list {
    grid-template-columns: 1fr;
    gap: 24px;
    height: 70vh;
  }

  .news-page__card-title {
    font-size: var(--font-size--news-card-title-mobile);
  }

  .news-page__card-date {
    font-size: var(--font-size--news-card-date-mobile);
  }
}
</style>
