import { create } from 'zustand'
export const useLoginStore = create((set) => ({
  isLoggedIn: false,
  userName: '',
  setIsLoggedIn: (newState) => set((state) => ({ ...state, isLoggedIn: newState })),
  setUserNameStore: (newUserName) => set((state) => ({ ...state, userName: newUserName })),
}))
