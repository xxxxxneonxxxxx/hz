import { ARTICLES_PAGE, ARTICLES_SITE_CONFIG } from '../config/articles.config.js'

export async function fetchArticlesPage() {
  return {
    page: ARTICLES_SITE_CONFIG,
    articles: ARTICLES_PAGE.articles,
  }
}

export async function fetchArticleById(id) {
  const article = ARTICLES_PAGE.articles.find((item) => item.id === id) ?? null

  return {
    page: ARTICLES_SITE_CONFIG,
    article,
  }
}
