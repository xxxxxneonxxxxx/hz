<template>
  <section class="home-page">
    <HeroCarousel :slides="heroSlides" />
    <ProgramCardsSection :cards="programCards" />
    <HomeIntroSection :section="introSection" />
    <FeaturedSeriesSection :section="featuredSeries" />
    <LecturersSection :section="lecturersSection" :lecturers="lecturers" />
    <ConsultationFormSection :section="consultationForm" />
  </section>
</template>

<script setup>
import ConsultationFormSection from '../../ConsultationFormSection/view/ConsultationFormSection.vue'
import { useHomeModel } from '../model/homeModel.js'
import FeaturedSeriesSection from './FeaturedSeriesSection.vue'
import HeroCarousel from './HeroCarousel.vue'
import HomeIntroSection from './HomeIntroSection.vue'
import LecturersSection from './LecturersSection.vue'
import ProgramCardsSection from './ProgramCardsSection.vue'

const {
  heroSlides,
  programCards,
  introSection,
  featuredSeries,
  lecturersSection,
  lecturers,
  consultationForm,
} = useHomeModel()
</script>

<style scoped>
.home-page {
  width: 100%;
  background: var(--color--home-page-bg);
}
</style>
