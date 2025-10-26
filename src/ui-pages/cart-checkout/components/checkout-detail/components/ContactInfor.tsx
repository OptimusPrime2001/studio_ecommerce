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

type ContactInforProps = {
  form: UseFormReturn<CheckoutFormValues>;
};

export const ContactInfor: React.FC<ContactInforProps> = ( props ) => {
  const { form } = props;
  return (
    <div className={styles.form_section}>
      <h2 className={styles.section_title}>Thông tin liên hệ</h2>
      <div className={styles.form_grid}>
        <FormField
          control={form.control}
          name="fullName"
          render={( { field } ) => (
            <FormItem className={styles.form_field}>
              <FormLabel className={styles.field_label}>Họ và tên *</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className={styles.field_input}
                  placeholder="Họ và tên"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={( { field } ) => (
            <FormItem className={styles.form_field}>
              <FormLabel className={styles.field_label}>
                Số điện thoại *
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className={styles.field_input}
                  placeholder="Số điện thoại"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={( { field } ) => (
            <FormItem className={styles.form_field}>
              <FormLabel className={styles.field_label}>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  {...field}
                  className={styles.field_input}
                  placeholder="Email Address"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};
