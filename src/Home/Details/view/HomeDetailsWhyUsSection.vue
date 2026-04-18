<template>
  <section class="home-details-why-us">
    <div class="home-details-why-us__container">
      <h2 class="home-details-why-us__title">
        {{ section.title }}
      </h2>

      <p class="home-details-why-us__subtitle">
        {{ section.subtitle }}
      </p>

      <div class="home-details-why-us__grid">
        <article
          v-for="item in section.items"
          :key="item.id"
          class="home-details-why-us__card"
        >
          <div class="home-details-why-us__icon" aria-hidden="true">
            <img
              :src="item.icon.src"
              :alt="item.icon.alt"
              class="home-details-why-us__icon-image"
            />
          </div>

          <h3 class="home-details-why-us__card-title">
            {{ item.title }}
          </h3>

          <p class="home-details-why-us__text">
            {{ item.text }}
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
.home-details-why-us {
  padding: var(--size--home-details-section-padding-y) var(--spacing--page-x);
  background: linear-gradient(
    180deg,
    var(--color--home-details-why-us-bg-start) 0%,
    var(--color--home-details-why-us-bg-end) 100%
  );
  color: var(--color--home-details-why-us-text);
}

.home-details-why-us__container {
  max-width: 1460px;
  margin: 0 auto;
}

.home-details-why-us__title {
  margin: 0;
  font-size: 56px;
  font-weight: 700;
  line-height: 1.05;
  text-align: left;
  text-transform: uppercase;
}

.home-details-why-us__subtitle {
  max-width: 980px;
  margin: 28px 0 64px;
  font-size: 30px;
  line-height: 1.35;
  text-align: justify;
  text-wrap: pretty;
}

.home-details-why-us__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 72px 88px;
}

.home-details-why-us__card {
  text-align: center;
}

.home-details-why-us__card:last-child:nth-child(odd) {
  grid-column: 1 / -1;
  max-width: calc((100% - 88px) / 2);
  justify-self: center;
}

.home-details-why-us__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 94px;
  height: 94px;
  margin: 0 auto 26px;
}

.home-details-why-us__icon-image {
  width: 84px;
  height: 84px;
  object-fit: contain;
}

.home-details-why-us__card-title {
  margin: 0 0 20px;
  font-size: 34px;
  font-weight: 400;
  line-height: 1.12;
  text-transform: uppercase;
}

.home-details-why-us__text {
  margin: 0;
  font-size: 24px;
  line-height: 1.6;
}

@media (max-width: 1100px) {
  .home-details-why-us__grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .home-details-why-us__card:last-child:nth-child(odd) {
    max-width: none;
  }
}

@media (max-width: 900px) {
  .home-details-why-us {
    padding: var(--size--home-details-section-padding-y-mobile) var(--spacing--page-x-mobile);
  }

  .home-details-why-us__title {
    font-size: 38px;
    text-align: center;
  }

  .home-details-why-us__subtitle {
    margin: 20px auto 40px;
    font-size: 24px;
    text-align: left;
  }

  .home-details-why-us__card-title {
    font-size: 28px;
  }

  .home-details-why-us__text {
    font-size: 20px;
  }
}
</style>
