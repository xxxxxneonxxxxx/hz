<template>
  <section class="AppConsultationForm">
    <div class="consultation-form__container">
      <ConsultationFormBody :section="section" />
    </div>
  </section>
</template>

<script setup>
import ConsultationFormBody from './ConsultationFormBody.vue'

defineProps({
  section: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.AppConsultationForm{
  padding:
    var(--size--consultation-section-padding-y)
    var(--spacing--page-x)
    var(--size--consultation-section-padding-y);
  background: var(--color--consultation-form-bg);
}

.consultation-form__container {
  max-width: none;
  margin: 0 auto;
}

@media (max-width: 900px) {
  .AppConsultationForm {
    padding:
      var(--size--consultation-section-padding-y-mobile)
      var(--spacing--page-x-mobile)
      var(--size--consultation-section-padding-y-mobile);
  }
}
</style>
