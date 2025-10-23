import { create } from "zustand";
import { devtools, subscribeWithSelector } from "zustand/middleware";
import { createUISlice } from "./slices/uiSlice";
import type { CartCheckoutState } from "./types";
export const useCartCheckoutStore = create<CartCheckoutState>()(
  devtools(
    subscribeWithSelector((...arg) => ({
      ...createUISlice(...arg),
    })),
    {
      name: "Cart Checkout Store",
      enabled: process.env.NODE_ENV !== "production",
    },
  ),
);
