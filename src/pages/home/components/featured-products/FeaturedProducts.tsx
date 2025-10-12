"use client";
import { CarouselProduct, CommonButton } from "@components";
import { ArrowRight } from "lucide-react";
import styles from "./FeaturedProducts.module.scss";

export const FeaturedProducts: React.FC = () => {
  return (
    <section className={styles.featured_products}>
      <div className={styles.container}>
        <CarouselProduct title="Sản phẩm nổi bật" />
        <CommonButton className={styles.view_more}>
          Xem thêm <ArrowRight />
        </CommonButton>
      </div>
    </section>
  );
};
