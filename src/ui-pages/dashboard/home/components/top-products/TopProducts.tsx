"use client";

import { CommonButton } from "@components";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table";
import { formatVnd } from "@utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import topProducts from "@/data/top-products.json";
import styles from "./TopProducts.module.scss";

export function TopProducts () {
  const router = useRouter();
  return (
    <Card className={styles.top_products_wrapper}>
      <CardHeader className={styles.card_header}>
        <CardTitle className={styles.card_title}>
          Top sản phẩm bán chạy nhất
        </CardTitle>
        <CardDescription className={styles.card_description}>
          Trong tháng 12, 2025
        </CardDescription>
      </CardHeader>
      <CardContent className={styles.table_top_products}>
        <Table>
          <TableHeader>
            <TableRow className={styles.table_header_row}>
              <TableHead className="w-[10rem]">Ảnh</TableHead>
              <TableHead className="w-[5rem]">Tên sản phẩm</TableHead>
              <TableHead className="w-[15rem]">Số lượng</TableHead>
              <TableHead className="w-[15rem]">Giá</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topProducts?.map( ( product ) => (
              <TableRow className={styles.table_top_products} key={product.id}>
                <TableCell className={styles.cell_id}>
                  <Image
                    src={product.image_src}
                    width={50}
                    height={60}
                    alt={product.name}
                    className={styles.product_image}
                  />
                </TableCell>
                <TableCell >
                  {product.name}
                </TableCell>
                <TableCell >
                  {product.quanity}
                </TableCell>
                <TableCell >
                  {formatVnd( Number( product.price ) )}
                </TableCell>
              </TableRow>
            ) )}
          </TableBody>
        </Table>
        <div className={styles.action_view_more}>
          <CommonButton
            onClick={() => router.push( "/dashboard/products" )}
            variant="secondary"
          >
            Xem thêm
          </CommonButton>
        </div>
      </CardContent>
    </Card>
  );
}
