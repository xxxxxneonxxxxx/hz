<template>
  <section class="home-details-benefits">
    <div class="home-details-benefits__container">
      <div class="home-details-benefits__grid">
        <article
          v-for="item in benefits.items"
          :key="item.id"
          class="home-details-benefits__item"
        >
          <div class="home-details-benefits__icon" aria-hidden="true">
            <img
              :src="item.icon.src"
              :alt="item.icon.alt"
              class="home-details-benefits__icon-image"
            />
          </div>

          <h2 class="home-details-benefits__title">
            {{ item.title }}
          </h2>

          <p
            v-for="paragraph in item.paragraphs"
            :key="paragraph"
            class="home-details-benefits__text"
          >
            {{ paragraph }}
          </p>
        </article>
      </div>

      <button
        type="button"
        class="home-details-benefits__button"
        @click="$emit('open-consultation')"
      >
        {{ benefits.action.label }}
      </button>
    </div>
  </section>
</template>

<script setup>
defineProps({
  benefits: {
    type: Object,
    required: true,
  },
})

defineEmits(['open-consultation'])
</script>

<style scoped>
.home-details-benefits {
  padding: var(--size--home-details-section-padding-y) var(--spacing--page-x);
  background: var(--color--home-details-benefits-bg);
}

.home-details-benefits__container {
  max-width: 1460px;
  margin: 0 auto;
}

.home-details-benefits__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 56px;
}

.home-details-benefits__item {
  text-align: center;
}

.home-details-benefits__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 92px;
  height: 92px;
  margin: 0 auto 30px;
  color: var(--color--home-details-benefits-icon);
}

.home-details-benefits__icon-image {
  width: 72px;
  height: 72px;
  object-fit: contain;
}

.home-details-benefits__title {
  margin: 0 0 18px;
  color: var(--color--home-details-benefits-title);
  font-size: var(--font-size--home-details-benefits-title);
  font-weight: 700;
  line-height: 1.08;
  text-transform: uppercase;
}

.home-details-benefits__text {
  margin: 0;
  color: var(--color--home-details-benefits-text);
  font-size: var(--font-size--home-details-benefits-text);
  line-height: 1.55;
}

.home-details-benefits__text + .home-details-benefits__text {
  margin-top: 14px;
}

.home-details-benefits__button {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 420px;
  min-height: 86px;
  margin: 64px auto 0;
  padding: 0 32px;
  border: 0;
  border-radius: 18px;
  background: var(--color--home-details-benefits-action-bg);
  color: var(--color--home-details-benefits-action-text);
  font-size: var(--font-size--home-details-benefits-action);
  font-weight: 700;
  cursor: pointer;
}

@media (max-width: 1100px) {
  .home-details-benefits__grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 900px) {
  .home-details-benefits {
    padding: var(--size--home-details-section-padding-y-mobile) var(--spacing--page-x-mobile);
  }

  .home-details-benefits__title {
    font-size: var(--font-size--home-details-benefits-title-mobile);
  }

  .home-details-benefits__text {
    font-size: var(--font-size--home-details-benefits-text-mobile);
  }

  .home-details-benefits__button {
    width: 100%;
    min-width: 0;
    min-height: 72px;
    margin-top: 40px;
    font-size: var(--font-size--home-details-benefits-action-mobile);
  }
}
</style>
