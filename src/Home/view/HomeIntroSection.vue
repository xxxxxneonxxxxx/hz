<template>
  <section class="home-intro">
    <div class="home-intro__container">
      <h2 class="home-intro__title">{{ section.title }}</h2>
      <p
          v-for="paragraph in section.paragraphs"
          :key="paragraph"
          class="home-intro__text"
      >
        {{ paragraph }}
      </p>
      <a
          :href="section.action.href"
          target="_blank"
          rel="noopener noreferrer"
          class="home-intro__button"
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
.home-intro {
  padding:
    var(--size--home-intro-padding-y)
    var(--spacing--page-x)
    var(--size--home-intro-padding-y);
  background: var(--color--home-intro-bg);
}

.home-intro__container {
  max-width: var(--size--home-intro-container-max);
  margin: 0;
}

.home-intro__title {
  margin: 0 0 28px;
  color: var(--color--home-intro-title-text);
  font-size: var(--font-size--home-intro-title);
  font-weight: 700;
  line-height: 1.12;
}

.home-intro__text {
  max-width: var(--size--home-intro-text-max);
  margin: 0 0 28px;
  color: var(--color--home-intro-text);
  font-size: var(--font-size--home-intro-text);
  line-height: 1.65;
}

.home-intro__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: var(--size--home-intro-button-min-width);
  min-height: var(--size--home-intro-button-min-height);
  margin-top: 12px;
  padding: 0 32px;
  border-radius: var(--size--home-intro-button-radius);
  background: var(--color--home-intro-button-bg);
  color: var(--color--home-intro-button-text);
  text-decoration: none;
  font-size: var(--font-size--home-intro-button);
  font-weight: 700;
  text-transform: uppercase;
}

@media (max-width: 900px) {
  .home-intro {
    padding:
      var(--size--home-intro-padding-y-mobile)
      var(--spacing--page-x-mobile)
      var(--size--home-intro-padding-y-mobile);
  }

  .home-intro__title {
    font-size: var(--font-size--home-intro-title-mobile);
  }

  .home-intro__text {
    font-size: var(--font-size--home-intro-text-mobile);
  }

  .home-intro__button {
    min-width: 100%;
    min-height: var(--size--home-intro-button-min-height-mobile);
    font-size: var(--font-size--home-intro-button-mobile);
  }
}
</style>
