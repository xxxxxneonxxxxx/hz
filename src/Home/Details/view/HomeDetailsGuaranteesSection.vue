<template>
  <section class="home-details-guarantees">
    <div class="home-details-guarantees__container">
      <h2 class="home-details-guarantees__title">
        {{ section.title }}
      </h2>
      <p class="home-details-guarantees__subtitle">
        {{ section.subtitle }}
      </p>

      <div class="home-details-guarantees__grid">
        <article
          v-for="item in section.items"
          :key="item.id"
          class="home-details-guarantees__card"
        >
          <div class="home-details-guarantees__icon" aria-hidden="true">
            <img :src="item.icon.src" :alt="item.icon.alt" class="home-details-guarantees__icon-image" />
          </div>
          <h3 class="home-details-guarantees__card-title">
            {{ item.title }}
          </h3>
          <p class="home-details-guarantees__text">
            {{ item.text }}
          </p>
        </article>
      </div>

      <a
        v-if="section.action"
        :href="section.action.href"
        class="home-details-guarantees__button"
      >
        {{ section.action.label }}
      </a>
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
.home-details-guarantees {
  padding: var(--size--home-details-section-padding-y) var(--spacing--page-x);
  background: linear-gradient(
    180deg,
    var(--color--home-details-guarantees-bg-start) 0%,
    var(--color--home-details-guarantees-bg-end) 100%
  );
  color: var(--color--home-details-guarantees-text);
}

.home-details-guarantees__container {
  max-width: 1460px;
  margin: 0 auto;
}

.home-details-guarantees__title {
  margin: 0;
  font-size: 56px;
  font-weight: 700;
  line-height: 1.08;
  text-align: left;
}

.home-details-guarantees__subtitle {
  max-width: 900px;
  margin: 28px 0 56px;
  font-size: 30px;
  line-height: 1.35;
  text-align: justify;
  text-wrap: pretty;
}

.home-details-guarantees__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 48px;
}

.home-details-guarantees__card {
  text-align: center;
}

.home-details-guarantees__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  margin: 0 auto 24px;
}

.home-details-guarantees__icon-image {
  width: 110px;
  height: 110px;
  object-fit: contain;
}

.home-details-guarantees__card-title {
  margin: 0 0 18px;
  font-size: 32px;
  font-weight: 400;
  line-height: 1.12;
}

.home-details-guarantees__text {
  margin: 0;
  font-size: 22px;
  line-height: 1.55;
}

.home-details-guarantees__button {
  display: flex;
  width: fit-content;
  margin: 56px auto 0;
  padding: 22px 46px;
  border: 3px solid var(--color--home-details-guarantees-button-border);
  border-radius: 18px;
  color: var(--color--home-details-guarantees-text);
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
}

@media (max-width: 1100px) {
  .home-details-guarantees__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 900px) {
  .home-details-guarantees {
    padding: var(--size--home-details-section-padding-y-mobile) var(--spacing--page-x-mobile);
  }

  .home-details-guarantees__title {
    font-size: 40px;
    text-align: center;
  }

  .home-details-guarantees__subtitle {
    margin: 20px auto 40px;
    font-size: 24px;
    text-align: left;
  }

  .home-details-guarantees__card-title {
    font-size: 28px;
  }

  .home-details-guarantees__text {
    font-size: 20px;
  }

  .home-details-guarantees__button {
    width: 100%;
    justify-content: center;
    font-size: 20px;
  }
}
</style>
