import type { StateCreator } from "zustand";
import type { AnalyticsState, HomeDashboardState } from "../types";

export const createAnalyticsSlice: StateCreator<
  HomeDashboardState,
  [["zustand/devtools", never]],
  [],
  AnalyticsState
> = (set) => ({
  totalOrders: 200,
  totalSoldProducts: 2000,
  totalCustomers: 2000,
  totalSales: 200_000_000,
  setTotalSales: (totalSales: number) =>
    set({ totalSales }, false, "home-dashboard/setTotalSales"),
  setTotalOrders: (totalOrders: number) =>
    set({ totalOrders }, false, "home-dashboard/setTotalOrders"),
  setTotalCustomers: (totalCustomers: number) =>
    set({ totalCustomers }, false, "home-dashboard/setTotalCustomers"),
});
