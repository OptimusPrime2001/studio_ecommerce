"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import topProducts from "@/data/top-products.json";
import styles from "./TopProducts.module.scss";

export function TopProducts() {
  return (
    <Card className={styles.top_products}>
      <CardHeader>
        <CardTitle>Top selling products</CardTitle>
        <CardDescription>From 2025 Jan - 2025 Dec</CardDescription>
      </CardHeader>
      <CardContent>
        <div className={styles.product_list}>
          {topProducts.map((product, index) => (
            <div key={product.id} className={styles.product_item}>
              <span className={styles.product_rank}>{index + 1}.</span>
              <div className={styles.product_content}>
                <p className={styles.product_name}>{product.name}</p>
                <div className={styles.product_meta}>
                  <span className={styles.product_pcs}>{product.pcs} pcs</span>
                  <span className={styles.product_price}>{product.price}</span>
                </div>
              </div>
            </div>
          ))}
          <Button variant="outline" className={styles.action_view_more}>
            View more
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
