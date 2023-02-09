import { shallow } from 'zustand/shallow'

import { useAuthState } from '../store'

export const useAuthStore = () =>
  useAuthState((state) => ({ ...state }), shallow)
