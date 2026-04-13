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
  padding: var(--size--header-current-offset) var(--spacing--page-x) 64px;
  background: var(--color--articles-hero-bg);
  text-align: center;
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
  font-weight: 300;
  line-height: 1.05;
}

.article-detail__breadcrumbs {
  display: inline-flex;
  align-items: center;
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
  padding: 56px var(--spacing--page-x) 96px;
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
}

.article-detail__text:last-child {
  margin-bottom: 0;
}

@media (max-width: 900px) {
  .article-detail__hero {
    padding: var(--size--header-current-offset) var(--spacing--page-x-mobile) 40px;
  }

  .article-detail__title {
    font-size: var(--font-size--articles-title-mobile);
  }

  .article-detail__breadcrumbs {
    gap: 6px;
    font-size: var(--font-size--articles-breadcrumbs-mobile);
  }

  .article-detail__content {
    padding: 32px var(--spacing--page-x-mobile) 64px;
  }

  .article-detail__text {
    font-size: var(--font-size--article-text-mobile);
  }
}
</style>
