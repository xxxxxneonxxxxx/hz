<template>
  <section class="home-page">
    <AppCarouselSection :section="heroCarouselSection" variant="hero" />
    <ProgramCardsSection :cards="programCards" />
    <HomeIntroSection :section="introSection" />
    <FeaturedSeriesSection :section="featuredSeries" />
    <LecturersSection :section="lecturersSection" :lecturers="lecturers" />
    <ConsultationFormSection :section="consultationForm" />
  </section>
</template>

<script setup>
import { computed } from 'vue'
import ConsultationFormSection from '../../ConsultationFormSection/view/ConsultationFormSection.vue'
import AppCarouselSection from '../../Carousel/view/AppCarouselSection.vue'
import { useHomeModel } from '../model/homeModel.js'
import FeaturedSeriesSection from './FeaturedSeriesSection.vue'
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

const heroCarouselSection = computed(() => ({
  ariaLabel: 'Главный слайдер',
  intervalMs: 20000,
  slides: heroSlides.map((slide) => ({
    ...slide,
    action: {
      label: 'Подробнее',
      to: slide.href,
    },
  })),
}))
</script>

<style scoped>
.home-page {
  width: 100%;
  background: var(--color--home-page-bg);
}
</style>
