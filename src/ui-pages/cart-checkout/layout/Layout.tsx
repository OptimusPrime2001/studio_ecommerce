"use client";
import { Tabs, TabsList, TabsTrigger } from "@components/ui/tabs";
import { CART_CHECKOUT_TABS, type CartCheckoutTab } from "@constants";
import { useCartCheckoutStore } from "@store";
import { cn } from "@utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import styles from "./Layout.module.scss";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ( { children } ) => {
  const { activeTab, setActiveTab } = useCartCheckoutStore();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const currentTab = searchParams.get( "tab" );
  const renderTitlePage = () => {
    switch ( currentTab ) {
      case CART_CHECKOUT_TABS.CART:
        return "Giỏ hàng";
      case CART_CHECKOUT_TABS.CHECKOUT:
        return "Thông tin thanh toán";
      case CART_CHECKOUT_TABS.COMPLETE:
        return "Hoàn tất đơn hàng";
      default:
        return "";
    }
  };
  const handleTabChange = ( tab: CartCheckoutTab ) => {
    setActiveTab( tab );
    const params = new URLSearchParams( searchParams );
    params.set( `tab`, tab );
    replace( `${pathname}?${params.toString()}` );
  };
  useEffect( () => {
    if ( currentTab ) {
      setActiveTab( currentTab as CartCheckoutTab );
    }
  }, [currentTab, setActiveTab] );
  return (
    <section className={styles.cart_checkout_wrapper}>
      <h1 className={styles.title_page}>{renderTitlePage()}</h1>
      <section className={styles.stepper_wrapper}>
        <Tabs
          className={styles.stepper}
          value={activeTab}
          onValueChange={( value ) => handleTabChange( value as CartCheckoutTab )}
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
