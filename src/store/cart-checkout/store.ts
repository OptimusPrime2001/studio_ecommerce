import { DEFAULT_SHIPPING_COST } from "@constants/cartCheckout";
import { create } from "zustand";
import { devtools, subscribeWithSelector } from "zustand/middleware";
import { createCheckoutSlice } from "./slices/checkoutSlice";
import { createShoppingCartSlice } from "./slices/shoppingCartSlice";
import { createUISlice } from "./slices/uiSlice";
import type { CartCheckoutState } from "./types";

export const useCartCheckoutStore = create<CartCheckoutState>()(
  devtools(
    subscribeWithSelector((...arg) => ({
      ...createUISlice(...arg),
      ...createShoppingCartSlice(...arg),
      ...createCheckoutSlice(...arg),
    })),
    {
      name: "Cart Checkout Store",
      enabled: process.env.NODE_ENV !== "production",
    },
  ),
);

// Auto-derive subTotal whenever selectedProducts changes
useCartCheckoutStore.subscribe(
  (state) => state.selectedProducts,
  (selectedProducts) => {
    const subTotal = selectedProducts.reduce(
      (sum, p) => sum + (p.price || 0) * (p.quantity || 0),
      0,
    );
    useCartCheckoutStore.setState({
      subTotal,
      total: subTotal + DEFAULT_SHIPPING_COST,
    });
  },
);
