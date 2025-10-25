import { CommonButton } from "@components";
import { Badge } from "@components/ui/badge";
import { useCartCheckoutStore } from "@store/cart-checkout";
import { formatVnd } from "@utils";
import Image from "next/image";
import styles from "./OrderComplete.module.scss";

export const OrderComplete: React.FC = () => {
  const { total, selectedProducts } = useCartCheckoutStore();
  return (
    <section className={styles.complete_page_wrapper}>
      <h4>Cảm ơn bạn! 🎉 </h4>
      <h1>Đơn hàng của bạn đã được ghi nhận thành công!</h1>
      <div className={styles.products_order}>
        {selectedProducts.map( ( p ) => (
          <div className={styles.product_preview} key={p.id}>
            <div className={styles.product_img}>
              <Image fill src={p.image_src} alt={p.name} />
            </div>
            <Badge variant="secondary" className={styles.product_quantity}>{p.quantity}</Badge>
          </div>
        ) )}
      </div>
      {/* Tóm tắt đơn hàng */}
      <div className={styles.order_summary}>
        <div className={styles.summary_row}>
          <span className={styles.label}>Mã đơn hàng:</span>
          <span className={styles.value}>{"#0123_45678"}</span>
        </div>
        <div className={styles.summary_row}>
          <span className={styles.label}>Ngày tạo:</span>
          <span className={styles.value}>{"October 19, 2023"}</span>
        </div>
        <div className={`${styles.summary_row} ${styles.summary_total}`}>
          <span className={styles.label}>Tổng cộng:</span>
          <span className={styles.value}>{formatVnd( total )}</span>
        </div>
        <div className={styles.summary_row}>
          <span className={styles.label}>Phương thức thanh toán:</span>
          <span className={styles.value}>{"Credit Card"}</span>
        </div>
      </div>

      <CommonButton className={styles.confirm_button}>
        Lịch sử thanh toán
      </CommonButton>
    </section>
  );
};
