<template>
  <section class="home-details-schedule-preview">
    <div class="home-details-schedule-preview__container">
      <h2 class="home-details-schedule-preview__title">
        {{ section.title }}
      </h2>

      <div class="home-details-schedule-preview__image-wrap">
        <img
          :src="section.image"
          :alt="section.alt"
          class="home-details-schedule-preview__image"
        />
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
.home-details-schedule-preview {
  padding: var(--size--home-details-section-padding-y) var(--spacing--page-x);
  background: var(--color--home-details-schedule-preview-bg);
}

.home-details-schedule-preview__container {
  max-width: 1240px;
  margin: 0 auto;
}

.home-details-schedule-preview__title {
  margin: 0 0 40px;
  color: var(--color--home-details-schedule-preview-title);
  font-size: var(--font-size--home-details-schedule-preview-title);
  font-weight: 700;
  line-height: 1.08;
  text-align: left;
  text-transform: uppercase;
}

.home-details-schedule-preview__image-wrap {
  overflow: hidden;
}

.home-details-schedule-preview__image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

@media (max-width: 900px) {
  .home-details-schedule-preview {
    padding: var(--size--home-details-section-padding-y-mobile) var(--spacing--page-x-mobile);
  }

  .home-details-schedule-preview__title {
    margin-bottom: 24px;
    font-size: var(--font-size--home-details-schedule-preview-title-mobile);
    text-align: center;
  }
}
</style>
