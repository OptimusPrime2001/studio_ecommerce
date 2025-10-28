"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CommonButton, QuantitySelector } from "@components";
import { Button } from "@components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@components/ui/input-group";
import { Label } from "@components/ui/label";
import { RadioGroup, RadioGroupItem } from "@components/ui/radio-group";
import { DEFAULT_SHIPPING_COST } from "@constants/cartCheckout";
import cartData from "@data/shoppingCartData.json";
import { useCartCheckoutStore } from "@store/client/cart-checkout";
import { formatVnd } from "@utils";
import { BadgePercent, X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import styles from "./ShoppingCart.module.scss";

export const ShoppingCart: React.FC = () => {
  const {
    setCurrentStep,
    selectedProducts,
    setSelectedProducts,
    setQuantityProduct,
    subTotal,
    total,
  } = useCartCheckoutStore();
  const handleCheckout = () => {
    setCurrentStep(1);
  };
  useEffect(() => {
    setSelectedProducts(cartData.items.map(({ product }) => product));
  }, [setSelectedProducts]);
  return (
    <section className={styles.cart_page_wrapper}>
      <section className={styles.cart_data}>
        <section className={styles.cart_data_table}>
          <Table>
            <TableHeader>
              <TableRow className={styles.table_header_row}>
                <TableHead className="w-[35rem]">Sản phẩm</TableHead>
                <TableHead className="w-[15rem]">Số lượng</TableHead>
                <TableHead className="w-[15rem]">Giá</TableHead>
                <TableHead>Tổng tiền</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {selectedProducts?.map((product) => (
                <TableRow className={styles.table_row_item} key={product.id}>
                  <TableCell>
                    <div className={styles.product_info}>
                      <div className={styles.product_img_wrapper}>
                        <Image
                          src={product.image_src}
                          alt={product.name}
                          className={styles.product_img}
                          fill
                        />
                      </div>
                      <div className={styles.product_content}>
                        <span className={styles.product_name}>
                          {product.name}
                        </span>
                        <span className={styles.product_color}>
                          Loại: {product.variant}
                        </span>
                        <Button variant="outline" className={styles.btn_remove}>
                          <X />
                          Xóa sản phẩm
                        </Button>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className={styles.cell_quantity}>
                    <QuantitySelector
                      value={product.quantity}
                      onValueChange={(value) =>
                        setQuantityProduct(product.id, value)
                      }
                    />
                  </TableCell>
                  <TableCell className={styles.cell_price}>
                    {formatVnd(product.price)}
                  </TableCell>
                  <TableCell className={styles.cell_sub_total}>
                    <span className={styles.sub_total_value}>
                      {formatVnd(product.price * product.quantity)}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
        <section className={styles.cart_total_wrapper}>
          <section className={styles.have_a_coupon}>
            <h4> Bạn có mã giảm giá?</h4>
            <span>Nhập mã giảm giá của bạn tại đây</span>
            <InputGroup className={styles.coupon_input_group}>
              <InputGroupInput placeholder="Mã giảm giá" />
              <InputGroupAddon>
                <BadgePercent />
              </InputGroupAddon>
              <InputGroupAddon align="inline-end">
                <InputGroupButton className={styles.apply_button}>
                  Xác nhận
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </section>
          <section className={styles.cart_summary}>
            <div className={styles.summary_box}>
              <h3 className={styles.summary_title}>Thông tin giỏ hàng</h3>
              <RadioGroup
                className={styles.shipping_group}
                defaultValue="express_ship"
              >
                <Label className={styles.shipping_item}>
                  <div className={styles.shipping_option}>
                    <RadioGroupItem value="express_ship" id="express_ship" />
                    <Label htmlFor="express_ship">Giao hàng tiêu chuẩn</Label>
                  </div>
                  <span className={styles.shipping_cost}>
                    {formatVnd(DEFAULT_SHIPPING_COST)} VND
                  </span>
                </Label>
              </RadioGroup>

              <div className={styles.summary_calculate}>
                <div className={styles.sub_total}>
                  <span className={styles.sub_total_label}>Tạm tính</span>
                  <span className={styles.sub_total_value}>
                    {formatVnd(subTotal)}
                  </span>
                </div>
                <div className={styles.total}>
                  <span className={styles.total_label}>Tổng cộng</span>
                  <span className={styles.total_value}>{formatVnd(total)}</span>
                </div>
              </div>

              <CommonButton
                onClick={handleCheckout}
                width="full"
                type="submit"
                className={styles.checkout_button}
              >
                Thanh toán
              </CommonButton>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};
