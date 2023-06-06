import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ICartItem, RawCartItem } from "../types/index";
import { nanoid } from "nanoid";

interface IGlobalStore {
  cart: ICartItem[];
  addItemToCart: (cartItem: RawCartItem) => void;
}

const useGlobalStore = create<IGlobalStore>()(
  persist(
    (set, get) => ({
      cart: [],
      addItemToCart: (cartItem: RawCartItem) => {
        const { cart } = get();
        let cartItems: ICartItem[] = [];
        let updateCartItem: ICartItem | null = null;
        const existingProduct = cart.find(
          (_cartItem) => _cartItem.product === cartItem.product
        );

        if (existingProduct) {
        } else {
          updateCartItem = {
            ...cartItem,
            id: `cart-${nanoid()}`,
            quantity: 1,
          };

          cartItems = [...cart, updateCartItem];
        }

        set({ cart: cartItems });
      },
    }),
    {
      name: "e-commer-T",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useGlobalStore;
