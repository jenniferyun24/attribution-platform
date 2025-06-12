import { create } from 'zustand'
import { User, DashboardData } from './types'

interface StoreState {
  user: User | null
  connectedAPIs: Record<string, boolean>
  dashboardData: DashboardData | null
  setUser: (user: User | null) => void
  setConnectedAPIs: (apis: Record<string, boolean>) => void
  setDashboardData: (data: DashboardData) => void
}

const useStore = create<StoreState>((set) => ({
  user: null,
  connectedAPIs: {},
  dashboardData: null,
  setUser: (user) => set({ user }),
  setConnectedAPIs: (apis) => set({ connectedAPIs: apis }),
  setDashboardData: (data) => set({ dashboardData: data })
}))

export default useStore 