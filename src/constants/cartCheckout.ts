export const DEFAULT_SHIPPING_COST = 35_000;

export const PAYMENT_METHODS = {
  CASH_ON_DELIVERY: "cash-on-delivery",
  PAYPAL: "paypal",
  CREDIT_CARD: "credit-card",
};
export type PaymentMethod =
  (typeof PAYMENT_METHODS)[keyof typeof PAYMENT_METHODS];
