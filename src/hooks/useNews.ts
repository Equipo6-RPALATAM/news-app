import { useQuery } from '@tanstack/react-query'

import { fetchNews } from '../api'

export const useFetchNews = () => {
  return useQuery({
    queryKey: ['news'],
    queryFn: fetchNews,
  })
}
