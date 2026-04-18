<template>
  <section v-if="page && newsItem" class="news-item">
    <header class="news-item__hero">
      <div class="news-item__container">
        <h1 class="news-item__title">{{ newsItem.title }}</h1>

        <p class="news-item__breadcrumbs">
          <RouterLink to="/" class="news-item__breadcrumb-link">
            {{ page.breadcrumbHomeLabel }}
          </RouterLink>
          <span>/</span>
          <RouterLink to="/news" class="news-item__breadcrumb-link">
            {{ page.breadcrumbCurrentLabel }}
          </RouterLink>
          <span>/</span>
          <span>{{ newsItem.title }}</span>
        </p>
      </div>
    </header>

    <section class="news-item__content">
      <div class="news-item__container news-item__container--narrow">
        <img
          :src="newsItem.image"
          :alt="newsItem.alt"
          class="news-item__image"
        />

        <p class="news-item__date">{{ newsItem.date }}</p>

        <p
          v-for="paragraph in newsItem.content"
          :key="paragraph"
          class="news-item__text"
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
import '../../config/news.style-config.css'
import { useNewsItemPage } from '../model/useNewsItemPage.js'

const route = useRoute()
const { load, page, newsItem } = useNewsItemPage()

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
.news-item {
  background: var(--color--news-page-bg);
}

.news-item__hero {
  padding: var(--size--header-current-offset) var(--spacing--page-x) var(--size--page-hero-padding-bottom);
  background: var(--color--news-hero-bg);
  text-align: left;
}

.news-item__container {
  max-width: 1460px;
  margin: 0 auto;
}

.news-item__container--narrow {
  max-width: 980px;
}

.news-item__title {
  margin: 0 0 24px;
  color: var(--color--news-title-text);
  font-size: var(--font-size--news-title);
  font-weight: 700;
  line-height: 1.05;
}

.news-item__breadcrumbs {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin: 0;
  color: var(--color--news-breadcrumb-text);
  font-size: var(--font-size--news-breadcrumbs);
  line-height: 1.4;
}

.news-item__breadcrumb-link {
  color: var(--color--news-breadcrumb-link);
  text-decoration: none;
}

.news-item__content {
  padding: var(--size--page-section-padding-y) var(--spacing--page-x);
}

.news-item__image {
  display: block;
  width: 100%;
  margin-bottom: 24px;
  aspect-ratio: 1 / 0.58;
  object-fit: cover;
}

.news-item__date {
  margin: 0 0 24px;
  color: var(--color--news-card-date);
  font-size: var(--font-size--news-card-date);
  line-height: 1.3;
}

.news-item__text {
  margin: 0 0 24px;
  color: var(--color--news-text);
  font-size: var(--font-size--news-text);
  line-height: 1.55;
  text-align: justify;
  text-wrap: pretty;
}

.news-item__text:last-child {
  margin-bottom: 0;
}

@media (max-width: 900px) {
  .news-item__hero {
    padding: var(--size--header-current-offset) var(--spacing--page-x-mobile) var(--size--page-hero-padding-bottom-mobile);
    text-align: center;
  }

  .news-item__title {
    font-size: var(--font-size--news-title-mobile);
    text-align: center;
  }

  .news-item__breadcrumbs {
    gap: 6px;
    font-size: var(--font-size--news-breadcrumbs-mobile);
    justify-content: center;
  }

  .news-item__content {
    padding: var(--size--page-section-padding-y-mobile) var(--spacing--page-x-mobile);
  }

  .news-item__date {
    font-size: var(--font-size--news-card-date-mobile);
  }

  .news-item__text {
    font-size: var(--font-size--news-text-mobile);
    text-align: left;
  }
}
</style>
