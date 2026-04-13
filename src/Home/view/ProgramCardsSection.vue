<template>
  <section class="program-cards">
    <div class="program-cards__container">
      <article
          v-for="card in cards"
          :key="card.id"
          class="program-card"
      >
        <RouterLink
            v-if="isInternalProgramLink(card.href)"
            :to="card.href"
            class="program-card__link"
        >
          <div class="program-card__media">
            <img
                :src="card.image"
                :alt="card.alt"
                class="program-card__image"
            />
            <div class="program-card__overlay" />
          </div>
          <h2 class="program-card__title">{{ card.title }}</h2>
        </RouterLink>

        <a
            v-else
            :href="card.href"
            target="_blank"
            rel="noopener noreferrer"
            class="program-card__link"
        >
          <div class="program-card__media">
            <img
                :src="card.image"
                :alt="card.alt"
                class="program-card__image"
            />
            <div class="program-card__overlay" />
          </div>
          <h2 class="program-card__title">{{ card.title }}</h2>
        </a>
      </article>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  cards: {
    type: Array,
    required: true,
  },
})

function isInternalProgramLink(href) {
  return typeof href === 'string' && href.startsWith('/')
}
</script>

<style scoped>
.program-cards {
  padding: 56px var(--spacing--page-x) 72px;
  background: var(--color--home-program-cards-bg);
}

.program-cards__container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 34px;
  max-width: 1450px;
  margin: 0 auto;
}

.program-card__link {
  display: block;
  text-decoration: none;
}

.program-card__media {
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  aspect-ratio: 0.72 / 1;
  background: var(--color--home-program-cards-card-bg);
}

.program-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform 0.45s ease;
}

.program-card__overlay {
  position: absolute;
  inset: 0;
  background: rgba(128, 128, 128, 0);
  transition: background-color 0.45s ease;
}

.program-card__link:hover .program-card__image {
  transform: scale(1.1);
}

.program-card__link:hover .program-card__overlay {
  background: var(--color--home-program-cards-card-hover-overlay);
}

.program-card__title {
  margin: 16px 0 0;
  text-align: center;
  color: var(--color--home-program-cards-title-text);
  font-size: var(--font-size--home-program-cards-title);
  font-weight: 400;
  line-height: 1.15;
}

@media (max-width: 1300px) {
  .program-cards__container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .program-cards {
    padding: 40px var(--spacing--page-x-mobile) 56px;
  }

  .program-cards__container {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .program-card__title {
    font-size: var(--font-size--home-program-cards-title-mobile);
  }
}
</style>
