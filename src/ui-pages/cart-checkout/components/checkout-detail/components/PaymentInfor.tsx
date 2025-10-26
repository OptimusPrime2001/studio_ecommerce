import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { RadioGroup, RadioGroupItem } from "@components/ui/radio-group";
import type { CheckoutFormValues } from "@schemas";
import IconPaypal from "@svgs/icon-paypal.svg";
import { BanknoteArrowUp, CreditCard } from "lucide-react";
import Image from "next/image";
import type { UseFormReturn } from "react-hook-form";
import styles from "../CheckoutDetail.module.scss";

type PaymentInforProps = {
  form: UseFormReturn<CheckoutFormValues>;
};

export const PaymentInfor: React.FC<PaymentInforProps> = ( props ) => {
  const { form } = props;
  return (
    <div className={styles.form_section}>
      <h2 className={styles.section_title}>Phương thức thanh toán</h2>
      <div className={styles.payment_section}>
        <FormField
          control={form.control}
          name="paymentMethod"
          render={( { field } ) => (
            <FormItem className={styles.payment_methods}>
              <FormControl>
                <RadioGroup value={field.value} onValueChange={field.onChange}>
                  <div
                    className={`${styles.payment_option} ${field.value === "credit-card" ? styles.selected : ""}`}
                  >
                    <RadioGroupItem
                      value="cash-on-delivery"
                      id="cash-on-delivery"
                    />
                    <div className={styles.payment_icon}>
                      <BanknoteArrowUp />
                    </div>
                    <Label
                      htmlFor="cash-on-delivery"
                      className={styles.payment_label}
                    >
                      Thanh toán khi nhận hàng
                    </Label>
                  </div>
                  <div
                    className={`${styles.payment_option} ${field.value === "credit-card" ? styles.selected : ""}`}
                  >
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <div className={styles.payment_icon}>
                      <CreditCard size={24} />
                    </div>
                    <Label
                      htmlFor="credit-card"
                      className={styles.payment_label}
                    >
                      Thanh toán bằng thẻ tín dụng
                    </Label>
                  </div>
                  <div
                    className={`${styles.payment_option} ${field.value === "paypal" ? styles.selected : ""}`}
                  >
                    <RadioGroupItem value="paypal" id="paypal" />
                    <div className={styles.payment_icon}>
                      <Image
                        src={IconPaypal}
                        alt="PayPal"
                        width={24}
                        height={24}
                      />
                    </div>
                    <Label htmlFor="paypal" className={styles.payment_label}>
                      Thanh toán bằng PayPal
                    </Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {form.watch( "paymentMethod" ) === "credit-card" && (
          <div className={styles.card_form}>
            <div className={styles.card_row}>
              <FormField
                control={form.control}
                name="cardNumber"
                render={( { field } ) => (
                  <FormItem className={styles.form_field}>
                    <FormLabel className={styles.field_label}>
                      Số thẻ tín dụng
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className={styles.field_input}
                        placeholder="1234 1234 1234 1234"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className={styles.card_row}>
              <FormField
                control={form.control}
                name="expiry"
                render={( { field } ) => (
                  <FormItem className={styles.form_field}>
                    <FormLabel className={styles.field_label}>
                      Ngày hết hạn (MM/YY)
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className={styles.field_input}
                        placeholder="MM/YY"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cvc"
                render={( { field } ) => (
                  <FormItem className={styles.form_field}>
                    <FormLabel className={styles.field_label}>CVC</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className={styles.field_input}
                        placeholder="CVC code"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
