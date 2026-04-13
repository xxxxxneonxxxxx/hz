import { computed, ref } from 'vue'
import { fetchArticleById } from '../../api/articles.api.js'

export function useArticlePage() {
  const state = ref({
    page: null,
    article: null,
  })

  async function load(id) {
    state.value = await fetchArticleById(id)
  }

  return {
    load,
    page: computed(() => state.value.page),
    article: computed(() => state.value.article),
  }
}
