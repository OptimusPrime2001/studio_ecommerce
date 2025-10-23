export const CART_CHECKOUT_TABS = {
  CART: "cart",
  CHECKOUT: "checkout",
  COMPLETE: "complete",
} as const;
export type CartCheckoutTab =
  (typeof CART_CHECKOUT_TABS)[keyof typeof CART_CHECKOUT_TABS];
