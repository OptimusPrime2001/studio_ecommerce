import type { ProductCart } from "@shared-types/shoppingCart";

export interface UISlice {
  currentStep: number;
  isCompleted: boolean;
  setCurrentStep: (step: number) => void;
  setIsCompleted: (isCompleted: boolean) => void;
}
export interface ShoppingCartSlice {
  selectedProducts: ProductCart[];
  couponCode: string;
  subTotal: number;
  total: number;

  // Action methods
  setCouponCode: (couponCode: string) => void;
  setSubTotal: (subTotal: number) => void;
  setTotal: (total: number) => void;
  setSelectedProducts: (products: ProductCart[]) => void;
  setQuantityProduct: (productId: number, quantity: number) => void;
}
export interface CartCheckoutState extends UISlice, ShoppingCartSlice {}
