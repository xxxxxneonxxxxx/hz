import { computed, ref } from 'vue'
import { fetchNewsPage, fetchNewsPageChunk } from '../api/news.api.js'

const state = ref({
  page: null,
  total: 0,
})

let isLoaded = false

export function useNewsPage() {
  const pageSize = 15

  async function load() {
    if (!isLoaded) {
      state.value = await fetchNewsPage()
      isLoaded = true
    }
  }

  async function pageProvider(pageNumber, providerPageSize) {
    return fetchNewsPageChunk(pageNumber, providerPageSize)
  }

  return {
    load,
    pageProvider,
    pageSize,
    page: computed(() => state.value.page),
    total: computed(() => state.value.total),
  }
}
