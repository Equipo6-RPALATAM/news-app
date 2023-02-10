import { useQuery } from '@tanstack/react-query'

import { fetchTopHeadLinesByQuery } from '../api'

export const useFetchTopHeadLinesByQuery = (q: string) => {
  return useQuery({
    queryKey: ['top-headlines', q],
    queryFn: async () => await fetchTopHeadLinesByQuery(q),
  })
}
