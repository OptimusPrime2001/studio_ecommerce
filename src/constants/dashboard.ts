import { Blocks, House, Package2, Truck } from 'lucide-react';
export const SIDEBAR_MENU = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: House,
    },
    {
      title: "Đơn hàng",
      url: "/dashboard/orders",
      icon: Truck  ,
    },
    {
      title: "Sản phẩm",
      url: "/dashboard/products",
      icon: Package2,
    },
    {
      title: "Danh mục",
      url: "/dashboard/categories",
      icon: Blocks

    },
  ];
