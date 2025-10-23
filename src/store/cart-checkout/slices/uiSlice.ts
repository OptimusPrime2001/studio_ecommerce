import { CART_CHECKOUT_TABS, type CartCheckoutTab } from "@constants";
import type { CartCheckoutState, UISlice } from "@store/cart-checkout";
import type { StateCreator } from "zustand";

export const createUISlice: StateCreator<
  CartCheckoutState,
  [["zustand/devtools", never]],
  [],
  UISlice
> = (set) => ({
  activeTab: CART_CHECKOUT_TABS.CART,
  setActiveTab: (tab: CartCheckoutTab) =>
    set({ activeTab: tab }, false, "setActiveTab"),
});
