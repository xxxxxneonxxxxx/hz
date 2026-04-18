<template>
  <section v-if="page && article" class="article-detail">
    <header class="article-detail__hero">
      <div class="article-detail__container">
        <h1 class="article-detail__title">{{ article.title }}</h1>

        <p class="article-detail__breadcrumbs">
          <RouterLink to="/" class="article-detail__breadcrumb-link">
            {{ page.breadcrumbHomeLabel }}
          </RouterLink>
          <span>/</span>
          <RouterLink to="/stati" class="article-detail__breadcrumb-link">
            {{ page.breadcrumbCurrentLabel }}
          </RouterLink>
          <span>/</span>
          <span>{{ article.title }}</span>
        </p>
      </div>
    </header>

    <section class="article-detail__content">
      <div class="article-detail__container article-detail__container--narrow">
        <img
          :src="article.image"
          :alt="article.alt"
          class="article-detail__image"
        />

        <p
          v-for="paragraph in article.content"
          :key="paragraph"
          class="article-detail__text"
        >
          {{ paragraph }}
        </p>
      </div>
    </section>
  </section>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import '../../config/articles.style-config.css'
import { useArticlePage } from '../model/useArticlePage.js'

const route = useRoute()
const { load, page, article } = useArticlePage()

onMounted(() => {
  load(route.params.id)
})

watch(
  () => route.params.id,
  (id) => {
    load(id)
  }
)
</script>

<style scoped>
.article-detail {
  background: var(--color--articles-page-bg);
}

.article-detail__hero {
  padding: var(--size--header-current-offset) var(--spacing--page-x) var(--size--page-hero-padding-bottom);
  background: var(--color--articles-hero-bg);
  text-align: left;
}

.article-detail__container {
  max-width: 1460px;
  margin: 0 auto;
}

.article-detail__container--narrow {
  max-width: 980px;
}

.article-detail__title {
  margin: 0 0 24px;
  color: var(--color--articles-title-text);
  font-size: var(--font-size--articles-title);
  font-weight: 700;
  line-height: 1.05;
}

.article-detail__breadcrumbs {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin: 0;
  color: var(--color--articles-breadcrumb-text);
  font-size: var(--font-size--articles-breadcrumbs);
  line-height: 1.4;
}

.article-detail__breadcrumb-link {
  color: var(--color--articles-breadcrumb-link);
  text-decoration: none;
}

.article-detail__content {
  padding: var(--size--page-section-padding-y) var(--spacing--page-x);
}

.article-detail__image {
  display: block;
  width: 100%;
  margin-bottom: 32px;
  aspect-ratio: 1 / 0.58;
  object-fit: cover;
}

.article-detail__text {
  margin: 0 0 24px;
  color: var(--color--article-text);
  font-size: var(--font-size--article-text);
  line-height: 1.55;
  text-align: justify;
  text-wrap: pretty;
}

.article-detail__text:last-child {
  margin-bottom: 0;
}

@media (max-width: 900px) {
  .article-detail__hero {
    padding: var(--size--header-current-offset) var(--spacing--page-x-mobile) var(--size--page-hero-padding-bottom-mobile);
    text-align: center;
  }

  .article-detail__title {
    font-size: var(--font-size--articles-title-mobile);
    text-align: center;
  }

  .article-detail__breadcrumbs {
    gap: 6px;
    font-size: var(--font-size--articles-breadcrumbs-mobile);
    justify-content: center;
  }

  .article-detail__content {
    padding: var(--size--page-section-padding-y-mobile) var(--spacing--page-x-mobile);
  }

  .article-detail__text {
    font-size: var(--font-size--article-text-mobile);
    text-align: left;
  }
}
</style>
