<template>
  <section class="featured-series">
    <div class="featured-series__container">
      <div class="featured-series__content">
        <h2 class="featured-series__title">{{ section.title }}</h2>
        <p
            v-for="paragraph in section.paragraphs"
            :key="paragraph"
            class="featured-series__text"
        >
          {{ paragraph }}
        </p>
      </div>

      <div class="featured-series__media">
        <iframe
            v-if="section.video.embedUrl"
            :src="section.video.embedUrl"
            :title="section.video.title"
            class="featured-series__iframe"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            allowfullscreen
        />

        <div v-else class="featured-series__placeholder">
          <div class="featured-series__vk-badge">VK</div>
          <p class="featured-series__placeholder-title">Видео из VK</p>
          <p class="featured-series__placeholder-text">
            Здесь будет embed-плеер. Пока поставил заглушку, чтобы потом можно было просто вставить ссылку в конфиг.
          </p>
          <a
              :href="section.video.fallbackUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="featured-series__placeholder-link"
          >
            {{ section.video.fallbackLabel }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  section: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.featured-series {
  padding: var(--size--home-featured-padding-y) var(--spacing--page-x);
  background: var(--color--home-featured-bg);
}

.featured-series__container {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  gap: var(--size--home-featured-gap);
  align-items: start;
  max-width: var(--size--home-featured-container-max);
  margin: 0 auto;
}

.featured-series__title {
  max-width: 900px;
  margin: 0 0 28px;
  color: var(--color--home-featured-title-text);
  font-size: var(--font-size--home-featured-title);
  font-weight: 700;
  line-height: 1.08;
  text-transform: uppercase;
}

.featured-series__text {
  max-width: 920px;
  margin: 0 0 30px;
  color: var(--color--home-featured-text);
  font-size: var(--font-size--home-featured-text);
  line-height: 1.55;
  text-align: justify;
  text-wrap: pretty;
}

.featured-series__media {
  aspect-ratio: 1.18 / 1;
  background: var(--color--home-featured-media-bg);
}

.featured-series__iframe,
.featured-series__placeholder {
  width: 100%;
  height: 100%;
}

.featured-series__iframe {
  border: 0;
}

.featured-series__placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--size--home-featured-placeholder-gap);
  padding: var(--size--home-featured-placeholder-padding);
  text-align: center;
  background: var(--color--home-featured-media-bg);
}

.featured-series__vk-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: var(--color--home-featured-vk-badge-bg);
  color: var(--color--home-featured-vk-badge-text);
  font-size: var(--font-size--home-featured-vk-badge);
  font-weight: 700;
}

.featured-series__placeholder-title {
  margin: 0;
  color: var(--color--home-featured-placeholder-title-text);
  font-size: var(--font-size--home-featured-placeholder-title);
  font-weight: 700;
}

.featured-series__placeholder-text {
  max-width: 430px;
  margin: 0;
  color: var(--color--home-featured-placeholder-text);
  font-size: var(--font-size--home-featured-placeholder-text);
  line-height: 1.5;
}

.featured-series__placeholder-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: var(--size--home-featured-link-min-width);
  min-height: var(--size--home-featured-link-min-height);
  padding: 0 24px;
  border-radius: var(--size--home-featured-link-radius);
  background: var(--color--home-featured-placeholder-link-bg);
  color: var(--color--home-featured-placeholder-link-text);
  text-decoration: none;
  font-size: var(--font-size--home-featured-placeholder-link);
  font-weight: 700;
}

@media (max-width: 1100px) {
  .featured-series__container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 900px) {
  .featured-series {
    padding: var(--size--home-featured-padding-y-mobile) var(--spacing--page-x-mobile);
  }

  .featured-series__title {
    font-size: var(--font-size--home-featured-title-mobile);
    text-align: center;
  }

  .featured-series__text {
    font-size: var(--font-size--home-featured-text-mobile);
    text-align: left;
  }
}
</style>
