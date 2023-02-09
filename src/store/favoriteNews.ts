import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface favoriteNewsState {
  favoriteNewsIds: number[]
  addFavoriteNew: (id: number) => void
  removeFavoriteNew: (id: number) => void
}

export const useFavoriteNewsStore = create<favoriteNewsState>()(
  persist(
    (set) => ({
      favoriteNewsIds: [],
      addFavoriteNew: (id: number) => {
        set((state) => ({ favoriteNewsIds: [...state.favoriteNewsIds, id] }))
      },
      removeFavoriteNew: (id: number) => {
        set((state) => ({
          favoriteNewsIds: state.favoriteNewsIds.filter(
            (repoId) => repoId !== id,
          ),
        }))
      },
    }),
    {
      name: 'favoriteNews',
    },
  ),
)
