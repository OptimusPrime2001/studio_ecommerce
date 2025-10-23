"use client";
import { Tabs, TabsList, TabsTrigger } from "@components/ui/tabs";
import { CART_CHECKOUT_TABS, type CartCheckoutTab } from "@constants";
import { useCartCheckoutStore } from "@store";
import { cn } from "@utils";
import styles from "./Layout.module.scss";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ( { children } ) => {
  const { activeTab, setActiveTab } = useCartCheckoutStore();
  return (
    <section className={styles.cart_checkout_wrapper}>
      <h1 className={styles.title_page}>Giỏ hàng</h1>
      <section className={styles.stepper_wrapper}>
        <Tabs
          value={activeTab}
          onValueChange={( value ) => setActiveTab( value as CartCheckoutTab )}
        >
          <TabsList className={styles.stepper_list}>
            <TabsTrigger
              className={cn(
                styles.step_item,
                activeTab === CART_CHECKOUT_TABS.CART &&
                styles.step_item_active,
              )}
              value={CART_CHECKOUT_TABS.CART}
            >
              <span className={styles.step_number}>1</span>
              <h3 className={styles.step_title}>Giỏ hàng</h3>
            </TabsTrigger>
            <TabsTrigger
              className={cn(
                styles.step_item,
                activeTab === CART_CHECKOUT_TABS.CHECKOUT &&
                styles.step_item_active,
              )}
              value={CART_CHECKOUT_TABS.CHECKOUT}
            >
              <span className={styles.step_number}>2</span>
              <h3 className={styles.step_title}>Thanh toán</h3>
            </TabsTrigger>
            <TabsTrigger
              className={cn(
                styles.step_item,
                activeTab === CART_CHECKOUT_TABS.COMPLETE &&
                styles.step_item_active,
              )}
              value={CART_CHECKOUT_TABS.COMPLETE}
            >
              <span className={styles.step_number}>3</span>
              <h3 className={styles.step_title}>Thành công</h3>
            </TabsTrigger>
          </TabsList>
          {children}
        </Tabs>
      </section>
    </section>
  );
};
