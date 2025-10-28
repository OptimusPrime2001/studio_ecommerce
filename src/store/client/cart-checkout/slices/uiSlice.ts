import type { CartCheckoutState, UISlice } from "@store/client/cart-checkout";
import type { StateCreator } from "zustand";

export const createUISlice: StateCreator<
  CartCheckoutState,
  [["zustand/devtools", never]],
  [],
  UISlice
> = (set) => ({
  currentStep: 0,
  isCompleted: false,
  setCurrentStep: (step: number) =>
    set({ currentStep: step }, false, "cart-checkout/setCurrentStep"),
  setIsCompleted: (isCompleted: boolean) =>
    set({ isCompleted }, false, "cart-checkout/setIsCompleted"),
});
