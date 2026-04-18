<template>
  <section class="vse-kursy-page">
    <header class="vse-kursy-page__hero">
      <div class="vse-kursy-page__container">
        <h1 class="vse-kursy-page__title">{{ page.title }}</h1>

        <p class="vse-kursy-page__breadcrumbs">
          <RouterLink to="/" class="vse-kursy-page__breadcrumb-link">
            {{ page.breadcrumbHomeLabel }}
          </RouterLink>
          <span>/</span>
          <span>{{ page.breadcrumbCurrentLabel }}</span>
        </p>
      </div>
    </header>

    <section class="vse-kursy-page__table-section">
      <div class="vse-kursy-page__container">
        <div class="vse-kursy-page__table-wrap">
          <table class="vse-kursy-page__table">
            <thead>
              <tr>
                <th
                  v-for="column in page.table.columns"
                  :key="column.id"
                  class="vse-kursy-page__head"
                  scope="col"
                >
                  {{ column.label }}
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="row in page.table.rows"
                :key="row.id"
                class="vse-kursy-page__row"
              >
                <td class="vse-kursy-page__course-cell">
                  <RouterLink
                    v-if="row.href"
                    :to="row.href"
                    class="vse-kursy-page__course-link"
                  >
                    {{ row.title }}
                  </RouterLink>
                  <span v-else class="vse-kursy-page__course-text">
                    {{ row.title }}
                  </span>
                </td>

                <td class="vse-kursy-page__description-cell">
                  <p class="vse-kursy-page__description">
                    {{ row.description }}
                  </p>

                  <button
                    type="button"
                    class="vse-kursy-page__action"
                    @click="isModalOpen = true"
                  >
                    {{ page.table.actionLabel }}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <VseKursyModal
      v-model="isModalOpen"
      :section="VSE_KURSY_MODAL_FORM"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { VSE_KURSY_MODAL_FORM, VSE_KURSY_PAGE as page } from '../config/vseKursy.config.js'
import VseKursyModal from './VseKursyModal.vue'

const isModalOpen = ref(false)
</script>

<style scoped>
.vse-kursy-page {
  background: var(--color--white);
}

.vse-kursy-page__container {
  width: 100%;
  max-width: 1460px;
  margin: 0 auto;
}

.vse-kursy-page__hero {
  padding: var(--size--header-current-offset) var(--spacing--page-x) var(--size--page-hero-padding-bottom);
  background: var(--color--surface);
  text-align: left;
}

.vse-kursy-page__title {
  margin: 0 0 24px;
  color: var(--color--black);
  font-size: 76px;
  font-weight: 700;
  line-height: 1.04;
}

.vse-kursy-page__breadcrumbs {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin: 0;
  color: var(--color--black);
  font-size: 16px;
  line-height: 1.4;
}

.vse-kursy-page__breadcrumb-link {
  text-decoration: none;
}

.vse-kursy-page__table-section {
  padding: var(--size--page-section-padding-y) var(--spacing--page-x);
}

.vse-kursy-page__table-wrap {
  overflow-x: auto;
}

.vse-kursy-page__table {
  width: 100%;
  border-collapse: collapse;
  background: var(--color--white);
}

.vse-kursy-page__head,
.vse-kursy-page__course-cell,
.vse-kursy-page__description-cell {
  border: 1px solid var(--color--border);
}

.vse-kursy-page__head {
  padding: 28px 28px 26px;
  text-align: left;
  background: var(--color--surface);
  color: var(--color--black);
  font-size: 24px;
  font-weight: 700;
}

.vse-kursy-page__course-cell {
  width: 34%;
  padding: 44px 28px;
  vertical-align: middle;
}

.vse-kursy-page__description-cell {
  padding: 44px 28px;
}

.vse-kursy-page__course-link,
.vse-kursy-page__course-text {
  color: var(--color--purple);
  font-size: 28px;
  line-height: 1.3;
  text-decoration: none;
}

.vse-kursy-page__description {
  margin: 0;
  color: var(--color--black);
  font-size: 22px;
  line-height: 1.7;
  text-align: justify;
  text-wrap: pretty;
}

.vse-kursy-page__action {
  margin-top: 22px;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--color--purple);
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
}

@media (max-width: 900px) {
  .vse-kursy-page__hero {
    padding: var(--size--header-current-offset) var(--spacing--page-x-mobile) var(--size--page-hero-padding-bottom-mobile);
    text-align: center;
  }

  .vse-kursy-page__table-section {
    padding: var(--size--page-section-padding-y-mobile) var(--spacing--page-x-mobile);
  }

  .vse-kursy-page__title {
    font-size: 44px;
    text-align: center;
  }

  .vse-kursy-page__breadcrumbs {
    gap: 6px;
    font-size: 14px;
    justify-content: center;
  }

  .vse-kursy-page__head {
    padding: 18px 16px;
    font-size: 18px;
  }

  .vse-kursy-page__course-cell,
  .vse-kursy-page__description-cell {
    padding: 24px 16px;
  }

  .vse-kursy-page__course-link,
  .vse-kursy-page__course-text {
    font-size: 22px;
  }

  .vse-kursy-page__description {
    font-size: 18px;
    text-align: left;
  }

  .vse-kursy-page__action {
    font-size: 18px;
  }
}
</style>
