import { Input } from "@components/ui/input";
import type { Product } from "@shared-types/ProductType";
import { formatVnd } from "@utils";
import Image from "next/image";
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
  type CartItem = { product: Product; qty: number };
  type CartData = { items: CartItem[] };
  const data = cartData;
  return (
    <section className={styles.cart_page_wrapper}>
      <section className={styles.cart_data_table}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Sản phẩm</TableHead>
              <TableHead>Số lượng</TableHead>
              <TableHead>Giá</TableHead>
              <TableHead className="text-right">Tổng tiền</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.items.map( ( { product, qty } ) => (
              <TableRow key={product.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={48}
                      height={48}
                    />
                    <div className="grid">
                      <span className="font-medium">{product.name}</span>
                      {product.colors?.[0] && (
                        <span className="text-sm text-gray-500">
                          Màu: {product.colors[0]}
                        </span>
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{qty}</TableCell>
                <TableCell>{formatVnd( product.price )}</TableCell>
                <TableCell className="text-right">
                  {formatVnd( product.price * qty )}
                </TableCell>
              </TableRow>
            ) )}
          </TableBody>
        </Table>
      </section>
      <section className={styles.cart_summary}></section>
      <section className={styles.have_a_coupon}>
        <h4> Bạn có mã giảm giá?</h4>
        <span>Nhập mã giảm giá của bạn tại đây</span>
        <Input placeholder="Mã giảm giá" className={styles.coupon_input} />
      </section>
    </section>
  );
};
