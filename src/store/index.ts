import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ICartItem, RawCartItem } from "../types/index";
import { nanoid } from "nanoid";

interface IGlobalStore {
  cart: ICartItem[];
  addItemToCart: (newProductItem: RawCartItem) => void;
  removeItemFromCart: (cartItem: ICartItem) => void;
  clientSecret:string |undefined
  updateClientSecret:(secret:string)=>void
  emptyCart : ()=>void 
}

const useGlobalStore = create<IGlobalStore>()(
  persist(
    (set, get) => ({
      clientSecret:undefined ,
      emptyCart:()=>{
      set({
        cart:[]
      })
      },
      updateClientSecret : (secret)=>{
        set({
          clientSecret :secret
        })
      },
      cart: [],
      addItemToCart: (newProductItem: RawCartItem) => {
        const { cart } = get();
        let cartItems: ICartItem[] = [];
        let updateCartItem: ICartItem | null = null;
        const existingProduct = cart.find(
          (_cartItem) => _cartItem.product === newProductItem.product
        );

        if (existingProduct) {
          const updatedCartItems = cart.map((_item) => {
            if (_item.product === newProductItem.product) {
              return {
                ..._item,
                quantity: _item.quantity + 1,
              };
            }
            return _item;
          });

          cartItems = [...updatedCartItems];
        } else {
          updateCartItem = {
            ...newProductItem,
            id: `cart-${nanoid()}`,
            quantity: 1,
          };

          cartItems = [...cart, updateCartItem];
        }

        set({ cart: cartItems });
      },
      removeItemFromCart: (cartItem) => {
        const { cart } = get();
        let cartItems: ICartItem[] = [];
        const existingProduct = cart.find(
          (_cartItem) => _cartItem.product === cartItem.product
        );

        if (existingProduct) {
          if (existingProduct.quantity === 1) {
            const remainingCartItems = cart.filter(
              (_cartItem) => _cartItem.product !== cartItem.product
            );
            // console.log("remainingCartItems", remainingCartItems);
            cartItems = remainingCartItems;
          } else {
            const updatedCartItems = cart.map((_cartItem) => {
              if (_cartItem.product === cartItem.product) {
                return {
                  ..._cartItem,
                  quantity: _cartItem.quantity - 1,
                };
              }
              return _cartItem;
            });
            cartItems = updatedCartItems;
          }
        }

        set({
          cart: cartItems,
        });
      },
    }),
    {
      name: "e-commer-T",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useGlobalStore;
