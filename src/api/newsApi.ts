import axios from 'axios'

import type { News } from '../interfaces'

const api = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    Authorization: import.meta.env.VITE_APP_NEWS_API_KEY,
    Accept: 'application/json',
  },
})

export const fetchNewsByQuery = async (q: string) => {
  const { data } = await api<{ articles: News[] }>({
    url: '/everything',
    params: {
      q,
      pageSize: 20,
    },
  })
  return data.articles
}

export const fetchTopHeadLines = async () => {
  const { data } = await api<{ articles: News[] }>({
    url: '/top-headlines',
    params: {
      country: 'us',
      pageSize: 10,
    },
  })
  return data.articles
}

export const fetchTopHeadLinesByQuery = async (q: string) => {
  const { data } = await api<{ articles: News[] }>({
    url: '/top-headlines',
    params: {
      q,
      country: 'us',
    },
  })
  return data.articles
}
