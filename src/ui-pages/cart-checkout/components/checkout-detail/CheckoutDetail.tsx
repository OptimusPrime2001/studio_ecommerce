"use client";
import { CommonButton } from "@components";
import { Form } from "@components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type CheckoutFormValues,
  checkoutDefaultValues,
  checkoutFormSchema,
} from "@schemas";
import { useCartCheckoutStore } from "@store/client/cart-checkout";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "./CheckoutDetail.module.scss";
import {
  ContactInfor,
  DeliveryInfor,
  OrderSummary,
  PaymentInfor,
} from "./components";

export const CheckoutDetail: React.FC = () => {
  const { setCheckoutForm, updateCheckoutForm, setCurrentStep, checkoutForm } =
    useCartCheckoutStore();
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: checkoutDefaultValues,
    mode: "onSubmit",
  });

  useEffect(() => {
    setCheckoutForm(form.getValues());
    const sub = form.watch((values) => {
      updateCheckoutForm(values as CheckoutFormValues);
    });
    return () => sub.unsubscribe();
  }, [form, setCheckoutForm, updateCheckoutForm]);

  const onSubmit = (values: CheckoutFormValues) => {
    setCheckoutForm(values);
    setCurrentStep(2);
  };
  // biome-ignore lint/correctness/useExhaustiveDependencies: <Must empty dependency array to avoide reset form when checkoutForm changes>
  useEffect(() => {
    form.reset(checkoutForm);
  }, []);
  return (
    <div className={styles.checkout_detail_wrapper}>
      <Form {...form}>
        <form
          className={styles.checkout_form_content}
          onSubmit={form.handleSubmit(onSubmit)}
          noValidate
        >
          <ContactInfor form={form} />
          <DeliveryInfor form={form} />
          <PaymentInfor form={form} />
          <CommonButton
            width="full"
            type="submit"
            className={styles.place_order_button}
          >
            Thanh toán
          </CommonButton>
        </form>
      </Form>
      <OrderSummary />
    </div>
  );
};
