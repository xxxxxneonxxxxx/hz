<template>
  <section class="home-details-learning">
    <div class="home-details-learning__container">
      <h2 class="home-details-learning__heading">
        {{ section.title }}
      </h2>

      <div class="home-details-learning__grid">
        <article
          v-for="item in section.items"
          :key="item.id"
          class="home-details-learning__card"
        >
          <div class="home-details-learning__icon-wrap" aria-hidden="true">
            <img
              :src="item.icon.src"
              :alt="item.icon.alt"
              class="home-details-learning__icon"
            />
          </div>

          <h3 class="home-details-learning__title">
            {{ item.title }}
          </h3>

          <p
            v-for="paragraph in item.paragraphs"
            :key="paragraph"
            class="home-details-learning__text"
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
.home-details-learning {
  padding: var(--size--home-details-section-padding-y) var(--spacing--page-x);
  background: var(--color--home-details-learning-bg);
}

.home-details-learning__container {
  max-width: 1460px;
  margin: 0 auto;
}

.home-details-learning__heading {
  margin: 0 0 72px;
  color: var(--color--home-details-learning-heading);
  font-size: var(--font-size--home-details-learning-heading);
  font-weight: 700;
  line-height: 1.08;
  text-align: left;
  text-transform: uppercase;
}

.home-details-learning__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 56px;
}

.home-details-learning__card {
  text-align: center;
}

.home-details-learning__icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 148px;
  margin-bottom: 30px;
}

.home-details-learning__icon {
  width: 128px;
  height: 128px;
  object-fit: contain;
}

.home-details-learning__title {
  margin: 0 0 22px;
  color: var(--color--home-details-learning-title);
  font-size: var(--font-size--home-details-learning-title);
  font-weight: 700;
  line-height: 1.08;
  text-transform: uppercase;
}

.home-details-learning__text {
  margin: 0;
  color: var(--color--home-details-learning-text);
  font-size: var(--font-size--home-details-learning-text);
  line-height: 1.55;
}

.home-details-learning__text + .home-details-learning__text {
  margin-top: 14px;
}

@media (max-width: 1100px) {
  .home-details-learning__grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}

@media (max-width: 900px) {
  .home-details-learning {
    padding: var(--size--home-details-section-padding-y-mobile) var(--spacing--page-x-mobile);
  }

  .home-details-learning__heading {
    margin-bottom: 48px;
    font-size: var(--font-size--home-details-learning-heading-mobile);
    text-align: center;
  }

  .home-details-learning__icon-wrap {
    min-height: 116px;
    margin-bottom: 24px;
  }

  .home-details-learning__icon {
    width: 96px;
    height: 96px;
  }

  .home-details-learning__title {
    font-size: var(--font-size--home-details-learning-title-mobile);
  }

  .home-details-learning__text {
    font-size: var(--font-size--home-details-learning-text-mobile);
  }
}
</style>
