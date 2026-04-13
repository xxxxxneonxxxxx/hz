<template>
  <section class="school-page">
    <AboutUsHeroSection :page="page" />
    <AboutUsContent :page="page" />
    <AboutUsRecognitionSection
      :groups="page.recognitionSections"
      :preview="page.lecturersPreview"
    />
    <AboutUsStudentWinsSection :section="page.studentWins" />
    <AboutUsPitchingsSection :section="page.pitchingsSection" />
    <ConsultationFormSection :section="HOME_CONSULTATION_FORM" />
  </section>
</template>

<script setup>
import '../config/aboutUs.style-config.css'
import { HOME_CONSULTATION_FORM } from '../../ConsultationFormSection/config/ff.js'
import { useSchoolPage } from '../model/useAboutUsPage.js'
import ConsultationFormSection from '../../ConsultationFormSection/view/ConsultationFormSection.vue'
import AboutUsContent from './AboutUsContent.vue'
import AboutUsHeroSection from './AboutUsHeroSection.vue'
import AboutUsPitchingsSection from './AboutUsPitchingsSection.vue'
import AboutUsRecognitionSection from './AboutUsRecognitionSection.vue'
import AboutUsStudentWinsSection from './AboutUsStudentWinsSection.vue'

const { page } = useSchoolPage()
</script>

<style scoped>
.school-page {
  background: var(--color--school-page-bg);
}
</style>
