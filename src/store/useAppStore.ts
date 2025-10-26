import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface User {
  id: string
  name: string
  email: string
}

interface AppState {
  // User state
  user: User | null
  setUser: (user: User | null) => void

  // Counter example
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void

  // Loading state
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      set => ({
        // User
        user: null,
        setUser: user => set({ user }),

        // Counter
        count: 0,
        increment: () => set(state => ({ count: state.count + 1 })),
        decrement: () => set(state => ({ count: state.count - 1 })),
        reset: () => set({ count: 0 }),

        // Loading
        isLoading: false,
        setIsLoading: loading => set({ isLoading: loading }),
      }),
      {
        name: 'app-storage',
        partialize: state => ({ user: state.user, count: state.count }),
      }
    ),
    { name: 'AppStore' }
  )
)