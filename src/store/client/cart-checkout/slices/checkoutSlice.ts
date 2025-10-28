import { type CheckoutFormValues, checkoutDefaultValues } from "@schemas";
import type { StateCreator } from "zustand";
import type { CartCheckoutState, CheckoutSlice } from "../types";

export const createCheckoutSlice: StateCreator<
  CartCheckoutState,
  [["zustand/devtools", never]],
  [],
  CheckoutSlice
> = (set) => ({
  checkoutForm: checkoutDefaultValues,
  setCheckoutForm: (values: CheckoutFormValues) =>
    set({ checkoutForm: values }, false, "cart-checkout/setCheckoutForm"),
  updateCheckoutForm: (values: Partial<CheckoutFormValues>) =>
    set(
      (state) => ({ checkoutForm: { ...state.checkoutForm, ...values } }),
      false,
      "cart-checkout/updateCheckoutForm",
    ),
  resetCheckoutForm: () =>
    set(
      { checkoutForm: checkoutDefaultValues },
      false,
      "cart-checkout/resetCheckoutForm",
    ),
});
