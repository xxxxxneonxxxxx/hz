<template>
  <section class="recognition">
    <div class="recognition__container">
      <section
        v-for="group in groups"
        :key="group.id"
        class="recognition__group"
      >
        <h2 class="recognition__title">{{ group.title }}</h2>

        <div
          :class="[
            'recognition__grid',
            `recognition__grid--${group.cards.length}`,
          ]"
        >
          <article
            v-for="card in group.cards"
            :key="card.id"
            class="recognition__card"
          >
            <h3 class="recognition__name">{{ card.name }}</h3>

            <img
              :src="card.image"
              :alt="card.alt"
              class="recognition__image"
            />

            <a
              :href="card.href"
              target="_blank"
              rel="noopener noreferrer"
              class="recognition__link"
            >
              {{ card.linkLabel }}
            </a>
          </article>
        </div>
      </section>

      <section class="recognition__preview">
        <p class="recognition__preview-text">
          {{ preview.beforeLink }}
          <RouterLink :to="preview.linkHref" class="recognition__preview-link">
            {{ preview.linkLabel }}
          </RouterLink>
          {{ preview.afterLink }}
        </p>

        <img
          :src="preview.image"
          :alt="preview.imageAlt"
          class="recognition__preview-image"
        />
      </section>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  groups: {
    type: Array,
    required: true,
  },
  preview: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.recognition {
  padding: 56px var(--spacing--page-x) 88px;
  background: var(--color--school-page-bg);
}

.recognition__container {
  max-width: var(--size--school-container);
  margin: 0 auto;
}

.recognition__group + .recognition__group {
  margin-top: 72px;
}

.recognition__title {
  max-width: 1120px;
  margin: 0 auto 48px;
  color: var(--color--school-recognition-title);
  font-size: var(--font-size--school-recognition-title);
  font-weight: 400;
  line-height: 1.08;
  text-align: center;
}

.recognition__grid {
  display: grid;
  gap: 48px;
}

.recognition__grid--3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: start;
}

.recognition__grid--2 {
  justify-content: center;
  grid-template-columns: repeat(2, minmax(0, 390px));
}

.recognition__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
}

.recognition__name {
  margin: 0 0 26px;
  color: var(--color--school-recognition-name);
  font-size: var(--font-size--school-recognition-name);
  font-weight: 400;
  line-height: 1.1;
  text-transform: uppercase;
}

.recognition__grid--3 .recognition__name {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-height: 126px;
}

.recognition__image {
  display: block;
  width: 100%;
  aspect-ratio: 0.75 / 1;
  object-fit: cover;
}

.recognition__grid--2 .recognition__card {
  max-width: 390px;
}

.recognition__link {
  margin-top: 24px;
  color: var(--color--school-recognition-link);
  font-size: var(--font-size--school-recognition-link);
  font-weight: 700;
  line-height: 1;
  text-decoration: none;
  text-transform: uppercase;
}

.recognition__preview {
  margin-top: 72px;
}

.recognition__preview-text {
  margin: 0 0 32px;
  color: var(--color--school-text);
  font-size: var(--font-size--school-text);
  line-height: var(--line-height--school-text);
}

.recognition__preview-link {
  color: var(--color--school-recognition-preview-link);
  text-decoration: none;
}

.recognition__preview-image {
  display: block;
  width: 100%;
  object-fit: cover;
}

@media (max-width: 1100px) {
  .recognition__grid--3,
  .recognition__grid--2 {
    grid-template-columns: 1fr;
  }

  .recognition__card {
    max-width: 360px;
    margin: 0 auto;
  }
}

@media (max-width: 900px) {
  .recognition {
    padding: 40px var(--spacing--page-x-mobile) 64px;
  }

  .recognition__group + .recognition__group {
    margin-top: 56px;
  }

  .recognition__title {
    margin-bottom: 36px;
    font-size: var(--font-size--school-recognition-title-mobile);
  }

  .recognition__name {
    margin-bottom: 18px;
    font-size: var(--font-size--school-recognition-name-mobile);
  }

  .recognition__link {
    margin-top: 18px;
    font-size: var(--font-size--school-recognition-link-mobile);
  }

  .recognition__preview-text {
    font-size: var(--font-size--school-text-mobile);
  }
}
</style>
