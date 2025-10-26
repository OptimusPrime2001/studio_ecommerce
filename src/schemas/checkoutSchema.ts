import { PAYMENT_METHODS } from "@constants/cartCheckout";
import { z } from "zod";

export const checkoutFormSchema = z
  .object({
    fullName: z.string().min(1, "Họ tên không được để trống"),
    phone: z
      .string()
      .min(1, "Số điện thoại không được để trống")
      .max(10, "Số điện thoại phải có tối đa 10 chữ số")
      .regex(/^[0-9+\-()\s]*$/, "Số điện thoại không hợp lệ"),
    email: z.email("Email không hợp lệ").optional().or(z.literal("")),
    specificAddress: z.string().min(1, "Địa chỉ không được để trống"),
    city: z.string().min(2, "Tỉnh/ Thành phố không được để trống"),
    district: z.string().min(3, "Quận/Huyện không được để trống"),
    ward: z.string().min(3, "Phường/Xã không được để trống"),
    billingDifferent: z.boolean().optional(),
    paymentMethod: z.enum(Object.values(PAYMENT_METHODS) as string[], {
      message: "Chọn phương thức thanh toán",
    }),
    cardNumber: z.string().optional(),
    expiry: z.string().optional(),
    cvc: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.paymentMethod === PAYMENT_METHODS.CREDIT_CARD) {
      if (!data.cardNumber || data.cardNumber.replace(/\s+/g, "").length < 12) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["cardNumber"],
          message: "Số thẻ tín dụng phải có ít nhất 12 chữ số",
        });
      }
      if (!data.expiry || !/^(0[1-9]|1[0-2])\/(\d{2})$/.test(data.expiry)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["expiry"],
          message: "Hạn sử dụng phải có định dạng MM/YY",
        });
      }
      if (!data.cvc || !/^\d{3,4}$/.test(data.cvc)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["cvc"],
          message: "CVC phải có 3-4 chữ số",
        });
      }
    }
  });

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;

export const checkoutDefaultValues: CheckoutFormValues = {
  fullName: "",
  phone: "",
  email: "",
  specificAddress: "",
  city: "",
  district: "",
  ward: "",
  billingDifferent: false,
  paymentMethod: PAYMENT_METHODS.CASH_ON_DELIVERY,
  cardNumber: "",
  expiry: "",
  cvc: "",
};
