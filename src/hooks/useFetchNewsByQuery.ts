import { useQuery } from '@tanstack/react-query'

import { fetchNewsByQuery } from '../api'

export const useFetchNewsByQuery = (q: string) => {
  return useQuery({
    queryKey: ['todos', q],
    queryFn: async () => await fetchNewsByQuery(q),
  })
}
