import { AnalyticCards, LatestOrders, TopProducts } from "./components";
import { SalesChart } from "./components/SalesChart";
import styles from "./HomeDashboard.module.scss";

export const HomeDashboard = () => {
  return (
    <section className={styles.dashboard_page}>
      <section className={styles.section_stack}>
        <h1 className={styles.page_title}>Trang quản lý</h1>
        <AnalyticCards />
        <section className={styles.analytics_chart}>
          <SalesChart />
          <TopProducts />
        </section>
        <LatestOrders />
      </section>
    </section>
  );
};
