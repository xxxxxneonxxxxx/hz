<template>
  <section class="home-details-hero">
    <div class="home-details-hero__container">
      <div class="home-details-hero__layout">
        <div class="home-details-hero__content">
          <h1 class="home-details-hero__title">
            <span
              v-for="line in hero.titleLines"
              :key="line"
              class="home-details-hero__title-line"
            >
              {{ line }}
            </span>
          </h1>

          <p class="home-details-hero__description">
            {{ hero.description }}
          </p>

          <button
            type="button"
            class="home-details-hero__button"
            @click="$emit('open-consultation')"
          >
            {{ hero.action.label }}
          </button>
        </div>

        <div class="home-details-hero__media">
          <img :src="hero.image" :alt="hero.alt" class="home-details-hero__image" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  hero: {
    type: Object,
    required: true,
  },
})

defineEmits(['open-consultation'])
</script>

<style scoped>
.home-details-hero {
  padding: var(--size--header-current-offset) var(--spacing--page-x) var(--size--page-hero-padding-bottom);
  background: var(--color--home-details-hero-bg);
}

.home-details-hero__container {
  max-width: 1460px;
  margin: 0 auto;
}

.home-details-hero__layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(420px, 736px);
  align-items: center;
  gap: 88px;
  min-height: calc(100vh - var(--size--header-current-offset));
  overflow: visible;
}

.home-details-hero__content {
  max-width: 620px;
}

.home-details-hero__title {
  display: flex;
  flex-direction: column;
  margin: 0;
  color: var(--color--home-details-title-text);
  font-size: var(--font-size--home-details-title);
  font-weight: 700;
  line-height: 0.96;
  text-transform: uppercase;
  align-items: flex-start;
}

.home-details-hero__title-line {
  display: block;
}

.home-details-hero__title-line + .home-details-hero__title-line {
  margin-top: 8px;
}

.home-details-hero__description {
  max-width: 690px;
  margin: 30px 0 0;
  color: var(--color--home-details-description-text);
  font-size: var(--font-size--home-details-description);
  font-weight: 400;
  line-height: 1.38;
  text-align: justify;
  text-wrap: pretty;
}

.home-details-hero__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 194px;
  min-height: 80px;
  margin-top: 44px;
  padding: 0 32px;
  border: 0;
  border-radius: 18px;
  background: var(--color--home-details-button-bg);
  color: var(--color--home-details-button-text);
  text-decoration: none;
  font-size: var(--font-size--home-details-button);
  font-weight: 700;
  letter-spacing: 0.02em;
  cursor: pointer;
}

.home-details-hero__media {
  justify-self: end;
  width: 100%;
  max-width: 736px;
}

.home-details-hero__image {
  width: 100%;
  aspect-ratio: 1 / 0.76;
  border-radius: 24px;
  object-fit: cover;
}

@media (max-width: 1100px) {
  .home-details-hero {
    padding: var(--size--header-current-offset) var(--spacing--page-x) var(--size--page-hero-padding-bottom);
  }

  .home-details-hero__layout {
    grid-template-columns: 1fr;
    gap: 40px;
    min-height: auto;
  }

  .home-details-hero__media {
    justify-self: start;
    max-width: 100%;
  }
}

@media (max-width: 900px) {
  .home-details-hero {
    padding: var(--size--header-current-offset) var(--spacing--page-x-mobile) var(--size--page-hero-padding-bottom-mobile);
  }

  .home-details-hero__title {
    font-size: var(--font-size--home-details-title-mobile);
    align-items: center;
  }

  .home-details-hero__description {
    margin-top: 24px;
    font-size: var(--font-size--home-details-description-mobile);
    text-align: left;
  }

  .home-details-hero__button {
    min-width: 168px;
    min-height: 68px;
    margin-top: 32px;
    border-radius: 16px;
    font-size: var(--font-size--home-details-button-mobile);
  }
}
</style>
