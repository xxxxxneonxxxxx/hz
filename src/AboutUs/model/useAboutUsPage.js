import { computed } from 'vue'
import { SCHOOL_PAGE } from '../config/aboutUs.config.js'

export function useSchoolPage() {
  const page = computed(() => SCHOOL_PAGE)

  const splitSections = computed(() =>
    page.value.sections.filter((section) => section.type === 'split')
  )

  const accentSections = computed(() =>
    page.value.sections.filter((section) => section.type === 'accent')
  )

  return {
    page,
    splitSections,
    accentSections,
  }
}