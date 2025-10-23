import type { CartCheckoutTab } from "@constants";

export interface UISlice {
  activeTab: CartCheckoutTab;
  setActiveTab: (tab: CartCheckoutTab) => void;
}

export interface CartCheckoutState extends UISlice {}
