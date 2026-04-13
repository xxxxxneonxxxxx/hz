import { readonly } from 'vue'
import { HOME_CONSULTATION_FORM } from '../../ConsultationFormSection/config/ff.js'
import {
    HOME_FEATURED_SERIES,
    HOME_HERO_SLIDES,
    HOME_INTRO_SECTION,
    HOME_LECTURERS,
    HOME_LECTURERS_SECTION,
    HOME_PROGRAM_CARDS,
} from '../config/home.config.js'

export function useHomeModel() {
    return {
        consultationForm: readonly(HOME_CONSULTATION_FORM),
        introSection: readonly(HOME_INTRO_SECTION),
        featuredSeries: readonly(HOME_FEATURED_SERIES),
        lecturersSection: readonly(HOME_LECTURERS_SECTION),
        lecturers: readonly(HOME_LECTURERS),
        heroSlides: readonly(HOME_HERO_SLIDES),
        programCards: readonly(HOME_PROGRAM_CARDS),
    }
}
