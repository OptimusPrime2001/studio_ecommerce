import { create } from "zustand";
import { devtools, subscribeWithSelector } from "zustand/middleware";
import { createAnalyticsSlice } from "./slices/analyticsSlice";
import type { HomeDashboardState } from "./types";

export const useDashboardStore = create<HomeDashboardState>()(
  devtools(
    subscribeWithSelector((...arg) => ({
      ...createAnalyticsSlice(...arg),
    })),
    {
      name: "Cart Checkout Store",
      enabled: process.env.NODE_ENV !== "production",
    },
  ),
);
