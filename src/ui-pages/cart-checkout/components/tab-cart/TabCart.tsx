"use client";
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
import { CART_CHECKOUT_TABS } from "@constants";
import { formatVnd } from "@utils";
import { BadgePercent, X } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import cartData from "@/data/cartData.json";
import styles from "./TabCart.module.scss";

export const TabCart: React.FC = () => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const data = cartData;
  const handleCheckout = () => {
    const params = new URLSearchParams( searchParams );
    params.set( `tab`, CART_CHECKOUT_TABS.CHECKOUT );
    replace( `${pathname}?${params.toString()}` )
  };
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
              {data.items.map( ( { product, quantity } ) => (
                <TableRow className={styles.table_row_item} key={product.id}>
                  <TableCell>
                    <div className={styles.product_info}>
                      <div className={styles.product_img_wrapper}>
                        <Image
                          src={product.image}
                          alt={product.name}
                          className={styles.product_img}
                          fill
                        />
                      </div>
                      <div className={styles.product_content}>
                        <span className={styles.product_name}>
                          {product.name}
                        </span>
                        {product.colors?.[0] && (
                          <span className={styles.product_color}>
                            Loại: {product.colors[0]}
                          </span>
                        )}
                        <Button variant="outline" className={styles.btn_remove}>
                          <X />
                          Xóa sản phẩm
                        </Button>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className={styles.cell_quantity}>
                    <QuantitySelector
                      value={30}
                      onChange={( value ) => console.log( value )}
                    />
                  </TableCell>
                  <TableCell className={styles.cell_price}>
                    {formatVnd( product.price )}
                  </TableCell>
                  <TableCell className={styles.cell_sub_total}>
                    <span className={styles.sub_total_value}>
                      {formatVnd( product.price * quantity )}
                    </span>
                  </TableCell>
                </TableRow>
              ) )}
            </TableBody>
          </Table>
        </section>

        <section className={styles.cart_summary}>
          <div className={styles.summary_box}>
            <h3 className={styles.summary_title}>Thông tin giỏ hàng</h3>

            <RadioGroup
              className={styles.shipping_group}
              defaultValue="comfortable"
            >
              <Label htmlFor="r1" className={styles.shipping_item}>
                <div className={styles.shipping_option}>
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1">Miễn phí</Label>
                </div>
                <span className={styles.shipping_cost}>200.000VND</span>
              </Label>
              <Label className={styles.shipping_item}>
                <div className={styles.shipping_option}>
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label htmlFor="r2">Nhanh</Label>
                </div>
                <span className={styles.shipping_cost}>150.000VND</span>
              </Label>
              <Label className={styles.shipping_item}>
                <div className={styles.shipping_option}>
                  <RadioGroupItem value="compact" id="r3" />
                  <Label htmlFor="r3">Nhận tại nơi</Label>
                </div>
                <span className={styles.shipping_cost}>100.000VND</span>
              </Label>
            </RadioGroup>

            <div className={styles.summary_calculate}>
              <div className={styles.sub_total}>
                <span className={styles.sub_total_label}>Tạm tính</span>
                <span className={styles.sub_total_value}>200.000VND</span>
              </div>
              <div className={styles.total}>
                <span className={styles.total_label}>Tổng cộng</span>
                <span className={styles.total_value}>200.000VND</span>
              </div>
            </div>

            <CommonButton
              onClick={handleCheckout}
              width="full"
              type="submit"
              className={styles.checkout_button}
            >
              Checkout
            </CommonButton>
          </div>
        </section>
      </section>
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
    </section>
  );
};
