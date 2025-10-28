import { QuantitySelector } from "@components";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { DEFAULT_SHIPPING_COST } from "@constants/cartCheckout";
import { useCartCheckoutStore } from "@store/client/cart-checkout";
import { formatVnd } from "@utils";
import { TicketPercent } from "lucide-react";
import Image from "next/image";
import styles from "../CheckoutDetail.module.scss";

type OrderSummaryProps = {};

export const OrderSummary: React.FC<OrderSummaryProps> = (props) => {
  const { selectedProducts, subTotal, total, couponCode, setCouponCode } =
    useCartCheckoutStore();
  return (
    <div data-testid="order-summary" className={styles.order_summary}>
      <h3 className={styles.summary_title}>Order summary</h3>

      {/* Products List */}
      <div className={styles.summary_products}>
        {selectedProducts.map((product) => (
          <div key={product.id} className={styles.product_item}>
            <Image
              src={product.image_src}
              alt={product.name}
              width={60}
              height={60}
              className={styles.product_image}
            />
            <div className={styles.product_info}>
              <div className={styles.product_name}>{product.name}</div>
              <div className={styles.product_variant}>
                Color: {product.variant}
              </div>
              <QuantitySelector
                value={product.quantity}
                onValueChange={(value) => {}}
              />
            </div>
            <div className={styles.product_price}>
              {formatVnd(product.price)}
            </div>
          </div>
        ))}
      </div>

      {/* Promo Code Section */}
      <div className={styles.promo_section}>
        <div className={styles.promo_input}>
          <Input
            placeholder="Mã giảm giá"
            value={couponCode}
            onChange={(e) => {
              setCouponCode(e.target.value);
            }}
            className={styles.promo_field}
          />
          <Button className={styles.apply_btn}>Apply</Button>
        </div>
        <div className={styles.promo_applied}>
          <div className="flex gap-x-2 items-center">
            <TicketPercent />
            <span className={styles.promo_text}>{couponCode}</span>
          </div>
          <span className={styles.promo_value}>-{formatVnd(0)} [Trừ]</span>
        </div>
      </div>

      {/* Totals */}
      <div className={styles.summary_totals}>
        <div className={styles.total_row}>
          <span className={styles.total_label}>Vận chuyển</span>
          <span className={styles.total_value}>
            {formatVnd(DEFAULT_SHIPPING_COST)}
          </span>
        </div>
        <div className={styles.total_row}>
          <span className={styles.total_label}>Subtotal</span>
          <span className={styles.total_value}>{formatVnd(subTotal)}</span>
        </div>
        <div className={`${styles.total_row} ${styles.final_total}`}>
          <span className={styles.total_label}>Total</span>
          <span className={styles.total_value}>{formatVnd(total)}</span>
        </div>
      </div>
    </div>
  );
};
