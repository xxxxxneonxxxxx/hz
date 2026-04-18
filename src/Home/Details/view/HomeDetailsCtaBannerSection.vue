<template>
  <section class="home-details-cta-banner">
    <div class="home-details-cta-banner__media">
      <img
        :src="section.image"
        :alt="section.alt"
        class="home-details-cta-banner__image"
      />
      <div class="home-details-cta-banner__overlay">
        <div class="home-details-cta-banner__content">
          <h2 class="home-details-cta-banner__title">
            <span
              v-for="line in section.titleLines"
              :key="line"
              class="home-details-cta-banner__title-line"
            >
              {{ line }}
            </span>
          </h2>

          <button
            type="button"
            class="home-details-cta-banner__button"
            @click="$emit('open-consultation')"
          >
            {{ section.action.label }}
          </button>
        </div>
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

defineEmits(['open-consultation'])
</script>

<style scoped>
.home-details-cta-banner {
  padding: var(--size--home-details-section-padding-y) var(--spacing--page-x);
  background: var(--color--home-details-cta-banner-bg);
}

.home-details-cta-banner__media {
  position: relative;
  max-width: 1600px;
  margin: 0 auto;
  overflow: hidden;
}

.home-details-cta-banner__image {
  display: block;
  width: 100%;
  min-height: 620px;
  object-fit: cover;
}

.home-details-cta-banner__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px;
  background: var(--color--home-details-cta-banner-overlay);
}

.home-details-cta-banner__content {
  text-align: center;
}

.home-details-cta-banner__title {
  display: flex;
  flex-direction: column;
  margin: 0;
  color: var(--color--home-details-cta-banner-title);
  font-size: var(--font-size--home-details-cta-banner-title);
  font-weight: 700;
  line-height: 1.02;
}

.home-details-cta-banner__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 288px;
  min-height: 80px;
  margin-top: 44px;
  padding: 0 32px;
  border: 0;
  border-radius: 18px;
  background: var(--color--home-details-cta-banner-button-bg);
  color: var(--color--home-details-cta-banner-button-text);
  font-size: var(--font-size--home-details-cta-banner-button);
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
}

@media (max-width: 900px) {
  .home-details-cta-banner {
    padding: var(--size--home-details-section-padding-y-mobile) var(--spacing--page-x-mobile);
  }

  .home-details-cta-banner__image {
    min-height: 420px;
  }

  .home-details-cta-banner__overlay {
    padding: 24px;
  }

  .home-details-cta-banner__title {
    font-size: var(--font-size--home-details-cta-banner-title-mobile);
  }

  .home-details-cta-banner__button {
    min-width: 220px;
    min-height: 64px;
    margin-top: 28px;
    font-size: var(--font-size--home-details-cta-banner-button-mobile);
  }
}
</style>
