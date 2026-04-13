<template>
  <section class="home-details-audience">
    <div class="home-details-audience__container">
      <h2 class="home-details-audience__title">
        {{ section.title }}
      </h2>

      <div class="home-details-audience__grid">
        <article
          v-for="item in section.items"
          :key="item.id"
          class="home-details-audience__card"
        >
          <h3 class="home-details-audience__card-title">
            {{ item.title }}
          </h3>

          <ul class="home-details-audience__list">
            <li
              v-for="point in item.points"
              :key="point"
              class="home-details-audience__item"
            >
              {{ point }}
            </li>
          </ul>
        </article>
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
.home-details-audience {
  padding: 96px var(--spacing--page-x) 110px;
  background: var(--color--home-details-audience-bg);
}

.home-details-audience__container {
  max-width: 1460px;
  margin: 0 auto;
}

.home-details-audience__title {
  margin: 0 0 56px;
  color: var(--color--home-details-audience-title);
  font-size: var(--font-size--home-details-audience-title);
  font-weight: 500;
  line-height: 1.08;
  text-align: center;
  text-transform: uppercase;
}

.home-details-audience__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 56px;
}

.home-details-audience__card-title {
  margin: 0 0 28px;
  color: var(--color--home-details-audience-card-title);
  font-size: var(--font-size--home-details-audience-card-title);
  font-weight: 400;
  line-height: 1.08;
}

.home-details-audience__list {
  margin: 0;
  padding-left: 28px;
}

.home-details-audience__item {
  color: var(--color--home-details-audience-text);
  font-size: var(--font-size--home-details-audience-text);
  line-height: 1.52;
}

.home-details-audience__item + .home-details-audience__item {
  margin-top: 12px;
}

@media (max-width: 1100px) {
  .home-details-audience__grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}

@media (max-width: 900px) {
  .home-details-audience {
    padding: 72px var(--spacing--page-x-mobile) 80px;
  }

  .home-details-audience__title {
    margin-bottom: 40px;
    font-size: var(--font-size--home-details-audience-title-mobile);
  }

  .home-details-audience__card-title {
    font-size: var(--font-size--home-details-audience-card-title-mobile);
  }

  .home-details-audience__item {
    font-size: var(--font-size--home-details-audience-text-mobile);
  }
}
</style>
