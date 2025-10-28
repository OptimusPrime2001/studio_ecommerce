export const ORDER_STATUS = {
  PENDING: "Pending",
  CONFIRMED: "Confirmed",
  SHIPPED: "Shipped",
  DELIVERED: "Delivered",
  CANCELLED: "Cancelled",
};
export type OrderStatus = (typeof ORDER_STATUS)[keyof typeof ORDER_STATUS];
