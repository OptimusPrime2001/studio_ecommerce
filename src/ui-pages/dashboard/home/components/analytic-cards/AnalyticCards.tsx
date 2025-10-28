"use client";

import { Card, CardContent } from "@components/ui/card";
import { useDashboardStore } from "@store/index";
import { Banknote, FileChartLine, PackageCheck, Users } from "lucide-react";
import styles from "./AnalyticCards.module.scss";

export const AnalyticCards = () => {
  const { totalSales, totalOrders, totalCustomers, totalSoldProducts } =
    useDashboardStore();
  const analytiCards = [
    {
      title: "Doanh thu",
      value: totalSales,
      subtitle: "+10 % so với kì trước",
      icon: Banknote,
    },
    {
      title: "Đơn hàng",
      value: totalOrders,
      subtitle: "+10 % so với kì trước",
      icon: FileChartLine,
    },
    {
      title: "Khách hàng",
      value: totalCustomers,
      subtitle: "+5% so với kì trước",
      icon: Users,
    },
    {
      title: "Sản phẩm đã bán",
      value: totalSoldProducts,
      subtitle: "+5% so với kì trước",
      icon: PackageCheck,
    },
  ];
  return (
    <div className={styles.cards_analytic_wrapper}>
      <h1 className={styles.cards_analytic_title}>Tổng quan</h1>
      <p className={styles.cards_analytic_subtitle}>
        Thống kê doanh thu, đơn hàng, khách hàng và lượt xem
      </p>
      <section className={styles.cards_analytic_grid}>
        {analytiCards.map((item) => (
          <Card key={item.title} className={styles.card_wrapper}>
            <CardContent className={styles.card_content}>
              <div className={styles.card_inner}>
                <div className={styles.inner_content}>
                  <b className={styles.card_value}>{item.value}</b>
                  <p className={styles.card_title}>{item.title}</p>
                  <p className={styles.card_subtitle}>{item.subtitle}</p>
                </div>
                <div className={styles.inner_icon}>
                  <item.icon />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};
