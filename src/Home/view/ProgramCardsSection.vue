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
  padding:
    var(--size--home-program-cards-padding-y)
    var(--spacing--page-x)
    var(--size--home-program-cards-padding-y);
  background: var(--color--home-program-cards-bg);
}

.program-cards__container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--size--home-program-cards-gap);
  max-width: var(--size--home-program-cards-container-max);
  margin: 0 auto;
}

.program-card__link {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  transition: transform var(--motion-duration-base) var(--motion-ease-standard);
}

.program-card__media {
  position: relative;
  overflow: hidden;
  border-radius: var(--size--home-program-cards-media-radius) var(--size--home-program-cards-media-radius) 0 0;
  aspect-ratio: 0.72 / 1;
  background: var(--color--home-program-cards-card-bg);
}

.program-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform var(--motion-duration-slow) var(--motion-ease-standard), filter var(--motion-duration-base) var(--motion-ease-soft);
}

.program-card__overlay {
  position: absolute;
  inset: 0;
  background: transparent;
  transition: background-color var(--motion-duration-base) var(--motion-ease-soft), opacity var(--motion-duration-base) var(--motion-ease-soft);
}

.program-card__link:hover {
  transform: translateY(-4px);
}

.program-card__link:hover .program-card__image {
  transform: scale(1.06);
  filter: saturate(1.04);
}

.program-card__link:hover .program-card__overlay {
  background: var(--color--home-program-cards-card-hover-overlay);
}

.program-card__title {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 0 auto;
  min-height: 124px;
  margin: 0;
  padding: 20px 24px;
  border-radius: 0 0 var(--size--home-program-cards-media-radius) var(--size--home-program-cards-media-radius);
  background: var(--color--purple);
  text-align: center;
  color: var(--color--white);
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
    padding:
      var(--size--home-program-cards-padding-y-mobile)
      var(--spacing--page-x-mobile)
      var(--size--home-program-cards-padding-y-mobile);
  }

  .program-cards__container {
    grid-template-columns: 1fr;
    gap: var(--size--home-program-cards-gap-mobile);
  }

  .program-card__title {
    min-height: 108px;
    padding: 18px 20px;
    font-size: var(--font-size--home-program-cards-title-mobile);
  }
}
</style>
