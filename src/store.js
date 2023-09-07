import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useUserStore = create((set) => ({
  isLoggedIn: false,
  Account: null,
  cartItems: [],
  cartItemsCount: 0,
  OrdersHistory: [],
  Wishlist: [],
  currentSelectedOrder: null,

  setIsLoggedIn: (newState) => set((state) => ({ ...state, isLoggedIn: newState })),
  setAccount: (Account) => set((state) => ({ ...state, Account: Account })),
  setOrdersHistory: (OrdersHistory) => set((state) => ({ OrdersHistory: OrdersHistory })),
  setCartItems: (newCartItems) => set((state) => ({ cartItems: [newCartItems, ...state.cartItems] })),
  setCartItemsCount: (newCartItemsCount) => set((state) => ({ cartItemsCount: newCartItemsCount })),
  increaseCartCount: () => set((state) => ({ ...state, cartItemsCount: state.cartItemsCount + 1 })),
  decreaseCartCount: () => set((state) => ({ ...state, cartItemsCount: state.cartItemsCount - 1 })),

  setWishlist: (newList) => set((state) => ({ ...state, Wishlist: newList })),
  addToWishlist: (newItem) => set((state) => ({ ...state, Wishlist: [newItem, ...state.Wishlist] })),
  removeFromWishlist: (itemId) => set((state) => ({ ...state, Wishlist: state.Wishlist.filter((item) => item.ItemID !== itemId) })),
  removeCartItem: (courseId) => set((state) => ({ cartItems: state.cartItems.filter((item) => item.id !== courseId) })),
  setCurrentSelectedOrder: (order) => set((state) => ({ ...state, currentSelectedOrder: order })),
}))

export const useCartStore = create((set) => ({}))