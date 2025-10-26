import { Checkbox } from "@components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import type { CheckoutFormValues } from "@schemas";
import type { UseFormReturn } from "react-hook-form";
import styles from "../CheckoutDetail.module.scss";

type DeliveryInforProps = {
  form: UseFormReturn<CheckoutFormValues>;
};

export const DeliveryInfor: React.FC<DeliveryInforProps> = ( props ) => {
  const { form } = props;
  return (
    <div className={styles.form_section}>
      <h2 className={styles.section_title}>Địa chỉ giao hàng</h2>
      <div className={styles.form_grid}>
        <FormField
          control={form.control}
          name="specificAddress"
          render={( { field } ) => (
            <FormItem className={styles.form_field}>
              <FormLabel className={styles.field_label}>
                Địa chỉ cụ thể *
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className={styles.field_input}
                  placeholder="Địa chỉ giao hàng"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={( { field } ) => (
            <FormItem className={styles.form_field}>
              <FormLabel className={styles.field_label}>
                Tỉnh / Thành phố *
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className={styles.field_input}
                  placeholder="Thành phố"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="district"
          render={( { field } ) => (
            <FormItem className={styles.form_field}>
              <FormLabel className={styles.field_label}>
                Quận / Huyện *
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className={styles.field_input}
                  placeholder="Quận / Huyện"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ward"
          render={( { field } ) => (
            <FormItem className={styles.form_field}>
              <FormLabel className={styles.field_label}>
                Phường / Xã *
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className={styles.field_input}
                  placeholder="Phường / Xã"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="billingDifferent"
          render={( { field } ) => (
            <FormItem className={styles.checkbox_field}>
              <FormControl>
                <Checkbox
                  id="billing-address"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel
                htmlFor="billing-address"
                className={styles.checkbox_label}
              >
                Sử dụng địa chỉ giao hàng khác (tùy chọn)
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};
