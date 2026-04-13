<template>
  <section v-if="page" class="home-details-page">
    <HomeDetailsHeroSection
      :hero="page.hero"
      @open-consultation="isConsultationModalOpen = true"
    />
    <HomeDetailsWhyUsSection
      v-if="page.whyUsSection"
      :section="page.whyUsSection"
    />
    <HomeDetailsBenefitsSection
      v-if="page.benefits"
      :benefits="page.benefits"
      @open-consultation="isConsultationModalOpen = true"
    />
    <HomeDetailsCinematicSection
      v-if="page.cinematicBlock"
      :section="page.cinematicBlock"
    />
    <ConsultationFormModal
      v-model="isConsultationModalOpen"
      :section="HOME_CONSULTATION_FORM"
    />
  
    <HomeDetailsStagesSection
      v-if="page.stagesSection"
      :section="page.stagesSection"
    />
    <HomeDetailsLecturersSection
      v-if="page.lecturersSection"
      :section="page.lecturersSection"
    />
    <HomeDetailsLecturerProjectsSection
      v-if="page.lecturerProjectsSection"
      :section="page.lecturerProjectsSection"
    />
    <HomeDetailsSchedulePreviewSection
      v-if="page.schedulePreviewSection"
      :section="page.schedulePreviewSection"
    />
    <HomeDetailsLearningSection
      v-if="page.learningSection"
      :section="page.learningSection"
    />
    <HomeDetailsAudienceSection
      v-if="page.audienceSection"
      :section="page.audienceSection"
    />
    <HomeDetailsCinematicSection
      v-if="page.cinematicBlock"
      :section="page.cinematicBlock"
    />
    <HomeDetailsPricingTableSection
      v-if="page.pricingTableSection"
      :section="page.pricingTableSection"
    />
    <HomeDetailsGuaranteesSection
      v-if="page.guaranteesSection"
      :section="page.guaranteesSection"
    />
    <ConsultationFormSection :section="HOME_CONSULTATION_FORM" />
  </section>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { HOME_CONSULTATION_FORM } from '../../../ConsultationFormSection/config/ff.js'
import ConsultationFormSection from '../../../ConsultationFormSection/view/ConsultationFormSection.vue'
import ConsultationFormModal from '../../../ConsultationFormSection/view/ConsultationFormModal.vue'
import '../../config/home.style-config.css'
import '../config/homeDetails.style-config.css'
import { useHomeDetailsPage } from '../model/useHomeDetailsPage.js'
import HomeDetailsBenefitsSection from './HomeDetailsBenefitsSection.vue'
import HomeDetailsCinematicSection from './HomeDetailsCinematicSection.vue'
import HomeDetailsHeroSection from './HomeDetailsHeroSection.vue'
import HomeDetailsLearningSection from './HomeDetailsLearningSection.vue'
import HomeDetailsLecturerProjectsSection from './HomeDetailsLecturerProjectsSection.vue'
import HomeDetailsLecturersSection from './HomeDetailsLecturersSection.vue'
import HomeDetailsSchedulePreviewSection from './HomeDetailsSchedulePreviewSection.vue'
import HomeDetailsStagesSection from './HomeDetailsStagesSection.vue'
import HomeDetailsAudienceSection from './HomeDetailsAudienceSection.vue'
import HomeDetailsGuaranteesSection from './HomeDetailsGuaranteesSection.vue'
import HomeDetailsPricingTableSection from './HomeDetailsPricingTableSection.vue'
import HomeDetailsWhyUsSection from './HomeDetailsWhyUsSection.vue'

const route = useRoute()
const { load, page } = useHomeDetailsPage()
const isConsultationModalOpen = ref(false)

onMounted(() => {
  load(route.params.id)
})

watch(
  () => route.params.id,
  (id) => {
    load(id)
  }
)
</script>

<style scoped>
.home-details-page {
  background: var(--color--home-details-page-bg);
  overflow-x: clip;
}
</style>
