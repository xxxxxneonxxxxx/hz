<template>
  <section class="home-details-learning-process">
    <div class="home-details-learning-process__container">
      <h2 class="home-details-learning-process__title">
        {{ section.title }}
      </h2>

      <div class="home-details-learning-process__grid">
        <article
          v-for="item in section.items"
          :key="item.id"
          class="home-details-learning-process__card"
        >
          <div class="home-details-learning-process__icon-wrap" aria-hidden="true">
            <img
              :src="item.icon.src"
              :alt="item.icon.alt"
              class="home-details-learning-process__icon"
            />
          </div>

          <h3 class="home-details-learning-process__card-title">
            {{ item.title }}
          </h3>

          <p
            v-for="paragraph in item.paragraphs"
            :key="paragraph"
            class="home-details-learning-process__text"
          >
            {{ paragraph }}
          </p>
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
.home-details-learning-process {
  padding: 96px var(--spacing--page-x) 110px;
  background: var(--color--home-details-learning-process-bg);
}

.home-details-learning-process__container {
  max-width: 1460px;
  margin: 0 auto;
}

.home-details-learning-process__title {
  margin: 0 0 56px;
  color: var(--color--home-details-learning-process-title);
  font-size: var(--font-size--home-details-learning-process-title);
  font-weight: 500;
  line-height: 1.08;
  text-align: center;
  text-transform: uppercase;
}

.home-details-learning-process__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 56px;
}

.home-details-learning-process__card {
  text-align: center;
}

.home-details-learning-process__icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 132px;
  margin-bottom: 24px;
}

.home-details-learning-process__icon {
  width: 94px;
  height: 94px;
  object-fit: contain;
}

.home-details-learning-process__card-title {
  margin: 0 0 20px;
  color: var(--color--home-details-learning-process-card-title);
  font-size: var(--font-size--home-details-learning-process-card-title);
  font-weight: 700;
  line-height: 1.08;
  text-transform: uppercase;
}

.home-details-learning-process__text {
  margin: 0;
  color: var(--color--home-details-learning-process-text);
  font-size: var(--font-size--home-details-learning-process-text);
  line-height: 1.55;
}

.home-details-learning-process__text + .home-details-learning-process__text {
  margin-top: 12px;
}

@media (max-width: 1100px) {
  .home-details-learning-process__grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 900px) {
  .home-details-learning-process {
    padding: 72px var(--spacing--page-x-mobile) 80px;
  }

  .home-details-learning-process__title {
    margin-bottom: 40px;
    font-size: var(--font-size--home-details-learning-process-title-mobile);
  }

  .home-details-learning-process__card-title {
    font-size: var(--font-size--home-details-learning-process-card-title-mobile);
  }

  .home-details-learning-process__text {
    font-size: var(--font-size--home-details-learning-process-text-mobile);
  }
}
</style>
