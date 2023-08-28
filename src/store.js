import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useUserStore = create((set) => ({
  isLoggedIn: false,
  Account: null,
  cartItems: [],
  OrdersHistory: [],

  setIsLoggedIn: (newState) => set((state) => ({ ...state, isLoggedIn: newState })),
  setAccount: (Account) => set((state) => ({ ...state, Account: Account })),
  setCartItems: (newCartItems) => set((state) => ({ cartItems: [newCartItems, ...state.cartItems] })),
  removeCartItem: (courseId) => set((state) => ({ cartItems: state.cartItems.filter((item) => item.id !== courseId) })),
}))
