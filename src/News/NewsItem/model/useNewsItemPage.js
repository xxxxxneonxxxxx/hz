import { computed, ref } from 'vue'
import { fetchNewsById } from '../../api/news.api.js'

export function useNewsItemPage() {
  const state = ref({
    page: null,
    newsItem: null,
  })

  async function load(id) {
    state.value = await fetchNewsById(id)
  }

  return {
    load,
    page: computed(() => state.value.page),
    newsItem: computed(() => state.value.newsItem),
  }
}
