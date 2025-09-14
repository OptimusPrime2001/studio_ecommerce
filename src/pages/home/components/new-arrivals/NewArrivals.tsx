'use client';
import { ProductCard } from '@components/common/product-card';
import { Button } from '@components/ui/button';
import { useHorizontalScroll } from '@hooks/useHorizontalScroll';
import { FEATURED_PRODUCTS } from '@lib/constant';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './NewArrivals.module.scss';

export const NewArrivals: React.FC = () => {
  const {
    scrollContainerRef,
    canScrollLeft,
    canScrollRight,
    scrollLeft,
    scrollRight
  } = useHorizontalScroll( { cardWidth: 338, scrollAmount: 2 } );

  return (
    <section className={styles.new_arrivals}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Sản phẩm mới lên kệ</h2>
          <div className={styles.navigation}>
            <Button
              variant="outline"
              size="icon"
              className={styles.nav_button}
              onClick={scrollLeft}
              disabled={!canScrollLeft}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className={styles.nav_button}
              onClick={scrollRight}
              disabled={!canScrollRight}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <div
          ref={scrollContainerRef}
          className={styles.products_container}
        >
          {FEATURED_PRODUCTS.map( ( product ) => (
            <ProductCard
              key={product.id}
              product={product}
              className={styles.product_card}
            />
          ) )}
        </div>
        <Button className='button_default'>
          Xem thêm <ArrowRight />
        </Button>
      </div>
    </section>
  );
};