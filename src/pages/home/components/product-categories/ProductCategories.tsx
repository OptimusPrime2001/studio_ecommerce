'use client';
import { Button } from '@components/ui/button';
import { categoryData } from '@lib/constant';
import { cn } from '@lib/utils';
import { ChevronLeft, ChevronRight, MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './ProductCategories.module.scss';



export const ProductCategories: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>( null );
  const [canScrollLeft, setCanScrollLeft] = useState( false );
  const [canScrollRight, setCanScrollRight] = useState( true );

  const checkScrollButtons = useCallback( () => {
    if ( scrollContainerRef.current ) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft( scrollLeft > 0 );
      setCanScrollRight( scrollLeft < scrollWidth - clientWidth - 1 );
    }
  }, [] )

  const scrollLeft = () => {
    if ( scrollContainerRef.current ) {
      scrollContainerRef.current.scrollBy( { left: -300, behavior: 'smooth' } );
    }
  };

  const scrollRight = () => {
    if ( scrollContainerRef.current ) {
      scrollContainerRef.current.scrollBy( { left: 300, behavior: 'smooth' } );
    }
  };

  useEffect( () => {
    checkScrollButtons();
    const handleResize = () => checkScrollButtons();
    window.addEventListener( 'resize', handleResize );
    return () => window.removeEventListener( 'resize', handleResize );
  }, [checkScrollButtons] );

  return (
    <section className={cn( styles.categories_section, 'media_width_sm' )}>
      <div className={styles.categories_header}>
        <h2 className={styles.categories_title}>Danh mục sản phẩm</h2>
        <p className={styles.categories_subtitle}>Khám phá các sản phẩm camera và ánh sáng chuyên nghiệp</p>
      </div>

      <div className={styles.categories_container}>
        {canScrollLeft && (
          <Button
            variant="outline"
            size="icon"
            className={cn( styles.scroll_button, styles.scroll_button_left )}
            onClick={scrollLeft}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}

        <div
          ref={scrollContainerRef}
          className={styles.categories_scroll}
          onScroll={checkScrollButtons}
        >
          <div className={styles.categories_grid}>
            {categoryData.map( ( category, index ) => (
              <Link href={category.href} key={category.id} className={cn( styles.category_card, index === 0 ? styles.category_card_large : '' )}>
                <div className={styles.category_image_wrapper}>
                  <Image
                    width={3333}
                    height={5000}
                    src={category.image}
                    alt={category.name}
                    className={styles.category_image}
                  />
                </div>
                <div className={styles.category_info}>
                  <div>
                    <h3 className={styles.category_name}>{category.name}
                      <span className={styles.category_count}>{category.count}</span>
                    </h3>
                    <p className={styles.category_subname}>{category.subName}</p>
                  </div>
                  <MoveRight className={styles.category_arrow} />
                </div>
              </Link>
            ) )}
          </div>
        </div>

        {canScrollRight && (
          <Button
            variant="outline"
            size="icon"
            className={cn( styles.scroll_button, styles.scroll_button_right )}
            onClick={scrollRight}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </section>
  );
};