import { AnalyticCards, LatestOrders, TopProducts } from "./components";
import styles from "./HomeDashboard.module.scss";

export const HomeDashboard = () => {
  return (
    <div className={styles.dashboard_page}>
      <div className={styles.section_stack}>
        <div className={styles.page_header}>
          <h1 className={styles.page_title}>Trang quản lý</h1>
        </div>
        <AnalyticCards />
        <div className={styles.layout_grid}>
          <div className={styles.analytics_panel}>{/* <SalesChart /> */}</div>
          <div className={styles.top_products_panel}>
            <TopProducts />
          </div>
        </div>
        <LatestOrders />
      </div>
    </div>
  );
};
