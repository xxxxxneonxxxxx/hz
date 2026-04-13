import { NEWS_PAGE, NEWS_SITE_CONFIG } from '../config/news.config.js'

export async function fetchNewsPage() {
  return {
    page: NEWS_SITE_CONFIG,
    total: NEWS_PAGE.news.length,
  }
}

export async function fetchNewsPageChunk(pageNumber, pageSize) {
  const start = pageNumber * pageSize
  const end = start + pageSize

  return NEWS_PAGE.news.slice(start, end)
}

export async function fetchNewsById(id) {
  const newsItem = NEWS_PAGE.news.find((item) => item.id === id) ?? null

  return {
    page: NEWS_SITE_CONFIG,
    newsItem,
  }
}
