"use client";
import { CarouselProduct, CommonButton } from "@components";
import { ArrowRight } from "lucide-react";
import styles from "./BestSeller.module.scss";

export const BestSeller: React.FC = () => {
  return (
    <section className={styles.best_seller_wrapper}>
      <div className={styles.container}>
        <CarouselProduct title="Sản phẩm bán chạy" />
        <CommonButton className={styles.view_more}>
          Xem thêm <ArrowRight />
        </CommonButton>
      </div>
    </section>
  );
};
