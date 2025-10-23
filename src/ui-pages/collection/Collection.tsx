"use client";
import { ButtonDiv, CommonSelect, ProductCard } from "@components";
import { Button } from "@components/ui/button";
import { ButtonGroup } from "@components/ui/button-group";
import { Checkbox } from "@components/ui/checkbox";
import { filterCategories, PRODUCTS_DATA } from "@lib/constants";
import { Label } from "@radix-ui/react-label";
import filterIcon from "@svgs/filter.svg";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import styles from "./Collection.module.scss";
import { PRICE_RANGE } from "./constants";

type GridViewProps = {};

const Collection: React.FC<GridViewProps> = ( props ) => {
  const [sort, setSort] = useState( "" );
  return (
    <section className={styles.collection_wrapper}>
      <section className={styles.collection_banner}>
        <p className={styles.banner_title}>All products</p>
        <h2>Tất cả các sản phẩm</h2>
      </section>
      <section className={styles.collection_content}>
        <section className={styles.content_left}>
          <div className={styles.filter_header}>
            <Image src={filterIcon} alt="filter" width={24} height={24} />
            <h3>Lọc theo</h3>
          </div>
          <section className={styles.filter_section_wrapper}>
            <section className={styles.filter_section}>
              <h4>Nhóm sản phẩm</h4>
              <section className={styles.filter_categories}>
                {filterCategories.map( ( category ) => (
                  <ButtonDiv
                    className={styles.filter_category}
                    key={category.id}
                    value={category.value}
                  >
                    {category.category}
                  </ButtonDiv>
                ) )}
              </section>
            </section>
            <section className={styles.filter_section}>
              <h4>Giá sản phẩm</h4>

              <section className={styles.filter_price}>
                {PRICE_RANGE.map( ( price ) => (
                  <div key={price.id} className={styles.filter_price_item}>
                    <Checkbox className={styles.price_checkbox} id={price.id} />
                    <Label htmlFor={price.id}>{price.label}</Label>
                  </div>
                ) )}
              </section>
            </section>
          </section>
        </section>
        <section className={styles.content_right}>
          <div className={styles.filter_products_header}>
            <h3>Camera chiếu sáng</h3>
            <div className="flex gap-x-5 items-center">
              <CommonSelect
                value={sort}
                setValue={setSort}
                placeholder="Sắp xếp theo"
                options={[
                  { value: "best_seller", label: "Bán chạy nhất" },
                  { value: "price_highest", label: "Giá cao nhất" },
                  { value: "price_lowest", label: "Giá thấp nhất" },
                ]}
              />
              <p>123 products</p>
            </div>
          </div>
          <div className={styles.product_filtered}>
            {PRODUCTS_DATA.map( ( product ) => (
              <ProductCard key={product.id} product={product} />
            ) )}
          </div>
          <div className={styles.pagination_wrapper}>
            <ButtonGroup>
              <ButtonGroup className={styles.pagination_group}>
                <Button variant="outline" size="icon" aria-label="Go Back">
                  <ArrowLeftIcon />
                </Button>
              </ButtonGroup>
              <ButtonGroup className="gap-x-2">
                <Button variant="outline">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">4</Button>
              </ButtonGroup>
              <ButtonGroup className={styles.pagination_group}>
                <Button variant="outline" size="icon" aria-label="Go Back">
                  <ArrowRightIcon />
                </Button>
              </ButtonGroup>
            </ButtonGroup>
          </div>
        </section>
      </section>
    </section>
  );
};
export default Collection;
