import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      cart: [],

      addToCart: (product) =>
        set((state) => {
          const existingIndex = state.cart.findIndex(
            (p) =>
              p.id === product.id &&
              p.selectedSize === product.selectedSize &&
              p.selectedColor === product.selectedColor
          );
          //if product exists it will return index if not it will return -1
          if (existingIndex != -1) {
            const updatedCart = [...state.cart];
            updatedCart[existingIndex].quantity += product.quantity || 1;
            return { cart: updatedCart };
          }

          return {
            cart: [
              ...state.cart,
              { ...product, quantity: product.quantity || 1 },
            ],
          };
        }),

      removeFromCart: (product) =>
        set((state) => ({
          cart: state.cart.filter(
            (p) =>
              !(
                p.id === product.id &&
                p.selectedColor === product.selectedColor &&
                p.selectedSize === product.selectedSize
              )
          ),
        })),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart", // key name in localStorage
      storage: createJSONStorage(() => localStorage), // persist in localStorage
    }
  )
);

export default useCartStore;
