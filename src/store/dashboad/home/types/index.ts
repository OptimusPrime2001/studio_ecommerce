export interface AnalyticsState {
  totalSales: number;
  totalOrders: number;
  totalCustomers: number;
  totalSoldProducts: number;
}

export interface HomeDashboardState extends AnalyticsState {}
