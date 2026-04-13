<template>
  <section class="pitchings">
    <div class="pitchings__container">
      <h2 class="pitchings__title">{{ section.title }}</h2>

      <div class="pitchings__content">
        <p
          v-for="item in section.items"
          :key="item.id"
          class="pitchings__text"
        >
          <template v-if="item.prefix">
            <strong>{{ item.prefix }}</strong>
          </template>
          {{ item.text }}
          <template v-if="item.linkLabel">
            <a
              :href="item.linkHref"
              class="pitchings__link"
            >
              {{ item.linkLabel }}
            </a>
          </template>
          {{ item.suffix ?? '' }}
        </p>
      </div>

      <aside class="pitchings__note">
        <p class="pitchings__note-text">
          {{ section.note }}
        </p>
      </aside>
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
.pitchings {
  padding: 56px var(--spacing--page-x) 72px;
  background: var(--color--school-page-bg);
}

.pitchings__container {
  max-width: var(--size--school-container);
  margin: 0 auto;
}

.pitchings__title {
  margin: 0 0 36px;
  color: var(--color--school-pitchings-title);
  font-size: var(--font-size--school-pitchings-title);
  font-weight: 400;
  line-height: 1.08;
  text-align: center;
  text-transform: uppercase;
}

.pitchings__content {
  display: flex;
  flex-direction: column;
  gap: 34px;
}

.pitchings__text {
  margin: 0;
  color: var(--color--school-pitchings-text);
  font-size: var(--font-size--school-pitchings-text);
  line-height: 1.5;
}

.pitchings__text strong {
  font-weight: 700;
}

.pitchings__link {
  color: var(--color--school-pitchings-link);
  text-decoration: none;
}

.pitchings__note {
  margin-top: 42px;
  padding: 34px 42px;
  border-left: 6px solid var(--color--school-pitchings-note-border);
  background: var(--color--school-pitchings-note-bg);
}

.pitchings__note-text {
  margin: 0;
  color: var(--color--school-pitchings-text);
  font-size: var(--font-size--school-pitchings-text);
  line-height: 1.5;
}

@media (max-width: 900px) {
  .pitchings {
    padding: 40px var(--spacing--page-x-mobile) 56px;
  }

  .pitchings__title {
    font-size: var(--font-size--school-pitchings-title-mobile);
  }

  .pitchings__text,
  .pitchings__note-text {
    font-size: var(--font-size--school-pitchings-text-mobile);
  }

  .pitchings__content {
    gap: 24px;
  }

  .pitchings__note {
    margin-top: 30px;
    padding: 24px 22px;
  }
}
</style>
