import type { CheckoutFormValues } from "../../../../schemas/checkoutSchema";
import type { CartCheckoutState } from "../types";

export const cartCheckoutSelector = {
  selectCheckoutForm: (state: CartCheckoutState): CheckoutFormValues =>
    state.checkoutForm,
  selectSubTotal: (state: CartCheckoutState): number => state.subTotal,
  selectTotal: (state: CartCheckoutState): number => state.total,
};
