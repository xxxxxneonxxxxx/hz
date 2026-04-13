import { computed, ref } from 'vue'
import { HOME_DETAILS_PAGE } from '../config/homeDetails.config.js'

export function useHomeDetailsPage() {
  const pageId = ref('screenwriting')

  function load(id) {
    pageId.value = HOME_DETAILS_PAGE[id] ? id : 'screenwriting'
  }

  const page = computed(() => HOME_DETAILS_PAGE[pageId.value])

  return {
    load,
    page,
  }
}
