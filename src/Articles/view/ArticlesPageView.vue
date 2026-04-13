<template>
  <section v-if="page" class="articles-page">
    <header class="articles-page__hero">
      <div class="articles-page__container">
        <h1 class="articles-page__title">{{ page.title }}</h1>

        <p class="articles-page__breadcrumbs">
          <RouterLink to="/" class="articles-page__breadcrumb-link">
            {{ page.breadcrumbHomeLabel }}
          </RouterLink>
          <span>/</span>
          <span>{{ page.breadcrumbCurrentLabel }}</span>
        </p>
      </div>
    </header>

    <section class="articles-page__grid">
      <div class="articles-page__container">
        <div class="articles-page__list">
          <RouterLink
            v-for="article in articles"
            :key="article.id"
            :to="`/stati/${article.id}`"
            class="articles-page__card"
          >
            <div class="articles-page__image-wrap">
              <img
                :src="article.image"
                :alt="article.alt"
                class="articles-page__image"
              />
              <span class="articles-page__overlay" />
            </div>

            <div class="articles-page__content">
              <h2 class="articles-page__card-title">{{ article.title }}</h2>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import '../config/articles.style-config.css'
import { useArticlesPage } from '../model/useArticlesPage.js'

const { load, page, articles } = useArticlesPage()

onMounted(() => {
  load()
})
</script>

<style scoped>
.articles-page {
  background: var(--color--articles-page-bg);
}

.articles-page__hero {
  padding: var(--size--header-current-offset) var(--spacing--page-x) 64px;
  background: var(--color--articles-hero-bg);
  text-align: center;
}

.articles-page__container {
  max-width: 1460px;
  margin: 0 auto;
}

.articles-page__title {
  margin: 0 0 24px;
  color: var(--color--articles-title-text);
  font-size: var(--font-size--articles-title);
  font-weight: 300;
  line-height: 1.05;
}

.articles-page__breadcrumbs {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  color: var(--color--articles-breadcrumb-text);
  font-size: var(--font-size--articles-breadcrumbs);
  line-height: 1.4;
}

.articles-page__breadcrumb-link {
  color: var(--color--articles-breadcrumb-link);
  text-decoration: none;
}

.articles-page__grid {
  padding: 56px var(--spacing--page-x) 96px;
}

.articles-page__list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 36px;
}

.articles-page__card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--color--articles-card-border);
  background: var(--color--articles-card-bg);
  color: inherit;
  text-decoration: none;
}

.articles-page__image-wrap {
  position: relative;
}

.articles-page__image {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 0.74;
  object-fit: cover;
}

.articles-page__overlay {
  position: absolute;
  inset: 0;
  background: var(--color--articles-card-overlay);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.articles-page__card:hover .articles-page__overlay {
  opacity: 1;
}

.articles-page__content {
  padding: 20px 18px 26px;
}

.articles-page__card-title {
  margin: 0;
  color: var(--color--articles-card-title);
  font-size: var(--font-size--articles-card-title);
  font-weight: 400;
  line-height: 1.25;
}

@media (max-width: 1100px) {
  .articles-page__list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .articles-page__hero {
    padding: var(--size--header-current-offset) var(--spacing--page-x-mobile) 40px;
  }

  .articles-page__title {
    font-size: var(--font-size--articles-title-mobile);
  }

  .articles-page__breadcrumbs {
    gap: 6px;
    font-size: var(--font-size--articles-breadcrumbs-mobile);
  }

  .articles-page__grid {
    padding: 32px var(--spacing--page-x-mobile) 64px;
  }

  .articles-page__list {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .articles-page__card-title {
    font-size: var(--font-size--articles-card-title-mobile);
  }
}
</style>
