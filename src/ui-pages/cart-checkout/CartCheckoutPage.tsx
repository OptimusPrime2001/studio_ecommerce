import { TabsContent } from "@components/ui/tabs";
import { CART_CHECKOUT_TABS } from "@constants";
import { TabCart, TabCheckout, TabComplete } from "./components";

const INACTIVE_CLASS_NAME = "data-[state=inactive]:hidden";
export const CartCheckoutPage: React.FC = () => {
  return (
    <>
      <TabsContent className={INACTIVE_CLASS_NAME} forceMount value={CART_CHECKOUT_TABS.CART}>
        <TabCart />
      </TabsContent>
      <TabsContent className={INACTIVE_CLASS_NAME} forceMount value={CART_CHECKOUT_TABS.CHECKOUT}>
        <TabCheckout />
      </TabsContent>
      <TabsContent className={INACTIVE_CLASS_NAME} forceMount value={CART_CHECKOUT_TABS.COMPLETE}>
        <TabComplete />
      </TabsContent>
    </>
  );
};
