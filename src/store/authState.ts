import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User } from '../interfaces'

interface AuthState {
  user: User
  setUser: (user: User) => void
  isAuthenticated: boolean
  setIsAuthenticated: (value: boolean) => void
}

export const useAuthState = create<AuthState>()(
  persist(
    (set) => ({
      user: {
        id: '',
        name: '',
        email: '',
        photo: '',
      },
      setUser: (user) => {
        set({ user })
      },
      isAuthenticated: false,
      setIsAuthenticated: (value) => {
        set({
          isAuthenticated: value,
        })
      },
    }),
    {
      name: 'authState',
    },
  ),
)
