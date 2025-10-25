import type { ProductCart } from "@shared-types/shoppingCart";
import type { StateCreator } from "zustand";
import type { CartCheckoutState, ShoppingCartSlice } from "../types";

export const createShoppingCartSlice: StateCreator<
  CartCheckoutState,
  [["zustand/devtools", never]],
  [],
  ShoppingCartSlice
> = (set) => ({
  selectedProducts: [],
  couponCode: "",
  subTotal: 0,
  total: 0,
  setCouponCode: (couponCode: string) =>
    set({ couponCode }, false, "cart-checkout/setCouponCode"),
  setSubTotal: (subTotal: number) =>
    set({ subTotal }, false, "cart-checkout/setSubTotal"),
  setTotal: (total: number) => set({ total }, false, "cart-checkout/setTotal"),
  setSelectedProducts: (products: ProductCart[]) =>
    set(
      { selectedProducts: products },
      false,
      "cart-checkout/setSelectedProducts",
    ),
  setQuantityProduct: (productId: number, quantity: number) =>
    set(
      (state) => ({
        selectedProducts: state.selectedProducts.map((product) =>
          product.id === productId ? { ...product, quantity } : product,
        ),
      }),
      false,
      "cart-checkout/setQuantityProduct",
    ),
});
