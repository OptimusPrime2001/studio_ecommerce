"use client";
import { Stepper } from "@components/ui/stepper";
import { useCartCheckoutStore } from "@store/client/cart-checkout";
import styles from "./CarCheckoutPage.module.scss";
import { CheckoutDetail, OrderComplete, ShoppingCart } from "./components";

export const CartCheckoutPage: React.FC = () => {
  const { currentStep, isCompleted, setCurrentStep } = useCartCheckoutStore();
  const steps = [
    {
      title: "Giỏ hàng",
      content: <ShoppingCart />,
    },
    {
      title: "Thông tin đơn hàng",
      content: <CheckoutDetail />,
    },
    {
      title: "Xác nhận đơn hàng",
      content: <OrderComplete />,
    },
  ];
  const renderTitlePage = () => {
    switch (currentStep) {
      case 0:
        return "Giỏ hàng";
      case 1:
        return "Thanh toán";
      case 2:
        return "Hoàn tất";
      default:
        return "";
    }
  };
  return (
    <section className={styles.cart_checkout_wrapper}>
      <h1 className={styles.title_page}>{renderTitlePage()}</h1>
      <Stepper
        steps={steps}
        isFinished={isCompleted}
        currentStep={currentStep}
        onStepChange={setCurrentStep}
      />
    </section>
  );
};
