import { computed, ref } from 'vue'
import { fetchArticlesPage } from '../api/articles.api.js'

const state = ref({
  page: null,
  articles: [],
})

let isLoaded = false

export function useArticlesPage() {
  async function load() {
    if (isLoaded) return
    state.value = await fetchArticlesPage()
    isLoaded = true
  }

  return {
    load,
    page: computed(() => state.value.page),
    articles: computed(() => state.value.articles),
  }
}
