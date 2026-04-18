<template>
  <section class="home-details-pricing-table">
    <div class="home-details-pricing-table__container">
      <div class="home-details-pricing-table__table-wrap">
        <table class="home-details-pricing-table__table">
          <thead>
            <tr>
              <th
                v-for="column in section.columns"
                :key="column.id"
                scope="col"
                class="home-details-pricing-table__head"
              >
                {{ column.label }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in section.rows" :key="row.id">
              <th scope="row" class="home-details-pricing-table__feature">
                {{ row.feature }}
              </th>
              <td
                v-for="value in row.values"
                :key="`${row.id}-${value.columnId}`"
                class="home-details-pricing-table__cell"
              >
                {{ value.text }}
              </td>
            </tr>
          </tbody>
        </table>
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
.home-details-pricing-table {
  padding: var(--size--home-details-section-padding-y) var(--spacing--page-x);
  background: var(--color--home-details-pricing-table-bg);
}

.home-details-pricing-table__container {
  max-width: 1460px;
  margin: 0 auto;
}

.home-details-pricing-table__table-wrap {
  overflow-x: auto;
}

.home-details-pricing-table__table {
  width: 100%;
  min-width: 1100px;
  border-collapse: collapse;
}

.home-details-pricing-table__head,
.home-details-pricing-table__feature,
.home-details-pricing-table__cell {
  border: 1px solid var(--color--home-details-pricing-table-border);
  padding: 22px 28px;
  color: var(--color--home-details-pricing-table-text);
  font-size: 22px;
  line-height: 1.45;
  text-align: left;
  vertical-align: top;
}

.home-details-pricing-table__head,
.home-details-pricing-table__feature {
  font-weight: 700;
}

.home-details-pricing-table__head {
  font-size: 24px;
  text-transform: uppercase;
}

.home-details-pricing-table__feature {
  width: 34%;
}

@media (max-width: 900px) {
  .home-details-pricing-table {
    padding: var(--size--home-details-section-padding-y-mobile) var(--spacing--page-x-mobile);
  }

  .home-details-pricing-table__head,
  .home-details-pricing-table__feature,
  .home-details-pricing-table__cell {
    padding: 18px 20px;
    font-size: 18px;
  }

  .home-details-pricing-table__head {
    font-size: 19px;
  }
}
</style>
