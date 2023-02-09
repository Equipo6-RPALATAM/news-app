import axios from 'axios'
import type { News } from '../interfaces'

const api = axios.create({
  baseURL: `https://newsapi.org/v2/top-headlines?apiKey=${
    import.meta.env.VITE_APP_NEWS_API_KEY
  }`,
})

// export default api

export const fetchNews = async () => {
  const { data } = await api<{ articles: News[] }>({
    url: '',
    params: {
      country: 'co',
      pageSize: 10,
    },
  })
  return data.articles
}
