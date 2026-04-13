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
  padding: 72px var(--spacing--page-x) 96px;
  background: var(--color--consultation-form-bg);
}

.consultation-form__container {
  max-width: 1080px;
  margin: 0 auto;
}

@media (max-width: 900px) {
  .AppConsultationForm {
    padding: 56px var(--spacing--page-x-mobile) 72px;
  }
}
</style>
