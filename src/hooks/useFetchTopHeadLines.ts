import { useQuery } from '@tanstack/react-query'

import { fetchTopHeadLines } from '../api'

export const useFetchTopHeadLines = () => {
  return useQuery({
    queryKey: ['top-headlines'],
    queryFn: fetchTopHeadLines,
  })
}
