<template>
  <div class="school-page__content">
    <section
      v-for="section in page.sections"
      :key="section.id"
      :class="[
        'school-page__section',
        `school-page__section--${section.type}`,
      ]"
    >
      <div class="school-page__container">
        <template v-if="section.type === 'split'">
          <div
            :class="[
              'school-page__split',
              {
                'school-page__split--image-right':
                  section.imagePosition === 'right',
              },
            ]"
          >
            <div class="school-page__media">
              <img
                :src="section.image"
                :alt="section.imageAlt"
                class="school-page__image"
              />
            </div>

            <div class="school-page__copy">
              <h2
                v-if="section.title"
                class="school-page__section-title"
              >
                {{ section.title }}
              </h2>

              <p
                v-for="paragraph in section.paragraphs"
                :key="paragraph"
                class="school-page__text"
              >
                {{ paragraph }}
              </p>
            </div>
          </div>
        </template>

        <template v-else-if="section.type === 'accent'">
          <div class="school-page__accent-block">
            <h2 class="school-page__accent-title">{{ section.title }}</h2>

            <p
              v-for="paragraph in section.paragraphs"
              :key="paragraph"
              class="school-page__accent-text"
            >
              {{ paragraph }}
            </p>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>

<script setup>
defineProps({
  page: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.school-page__content {
  background: var(--color--school-page-bg);
}

.school-page__container {
  width: 100%;
  max-width: var(--size--school-container);
  margin: 0 auto;
}

.school-page__section {
  padding: var(--spacing--school-section-y) var(--spacing--page-x);
}

.school-page__split {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 48px;
  align-items: center;
}

.school-page__split--image-right .school-page__media {
  order: 2;
}

.school-page__split--image-right .school-page__copy {
  order: 1;
}

.school-page__media {
  width: 100%;
}

.school-page__image {
  display: block;
  width: 100%;
  height: var(--size--school-image-height);
  object-fit: cover;
  border-radius: var(--radius--school-image);
}

.school-page__copy {
  width: 100%;
}

.school-page__section-title {
  margin: 0 0 26px;
  color: var(--color--school-section-title);
  font-size: var(--font-size--school-section-title);
  font-weight: 700;
  line-height: 1.1;
  text-transform: uppercase;
}

.school-page__text {
  margin: 0 0 24px;
  color: var(--color--school-text);
  font-size: var(--font-size--school-text);
  line-height: var(--line-height--school-text);
  text-align: justify;
  text-wrap: pretty;
}

.school-page__text:last-child {
  margin-bottom: 0;
}

.school-page__section--accent {
  background: var(--color--school-accent-bg);
}

.school-page__accent-block {
  max-width: 1400px;
  margin: 0 auto;
}

.school-page__accent-title {
  margin: 0 0 28px;
  color: var(--color--school-text-on-accent);
  font-size: var(--font-size--school-section-title);
  font-weight: 700;
  line-height: 1.1;
  text-align: left;
  text-transform: uppercase;
}

.school-page__accent-text {
  margin: 0 0 24px;
  color: var(--color--school-text-on-accent);
  font-size: var(--font-size--school-text);
  line-height: var(--line-height--school-text);
  text-align: justify;
  text-wrap: pretty;
}

.school-page__accent-text:last-child {
  margin-bottom: 0;
}

@media (max-width: 1100px) {
  .school-page__split {
    grid-template-columns: 1fr;
  }

  .school-page__split--image-right .school-page__media,
  .school-page__split--image-right .school-page__copy {
    order: initial;
  }
}

@media (max-width: 900px) {
  .school-page__section {
    padding: var(--spacing--school-section-y-mobile) var(--spacing--page-x-mobile);
  }

  .school-page__section-title,
  .school-page__accent-title {
    font-size: var(--font-size--school-section-title-mobile);
    text-align: center;
  }

  .school-page__text,
  .school-page__accent-text {
    font-size: var(--font-size--school-text-mobile);
    text-align: left;
  }

  .school-page__image {
    height: auto;
    aspect-ratio: 1.2 / 1;
  }
}
</style>
