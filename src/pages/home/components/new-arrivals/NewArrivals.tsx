"use client";
import { CarouselProduct, CommonButton } from "@components";
import { ArrowRight } from "lucide-react";
import styles from "./NewArrivals.module.scss";

export const NewArrivals: React.FC = () => {
  return (
    <section className={styles.new_arrivals}>
      <div className={styles.container}>
        <CarouselProduct title="Sản phẩm nổi bật" />
        <CommonButton className={styles.view_more}>
          Xem thêm <ArrowRight />
        </CommonButton>
      </div>
    </section>
  );
};
