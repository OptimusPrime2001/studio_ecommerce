'use client';

import { Star } from 'lucide-react';
import styles from './ProductInfo.module.scss';

interface ProductInfoProps {
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  category: string;
  brand: string;
}

export const ProductInfo = ( {
  name,
  price,
  originalPrice,
  rating,
  reviewCount,
  inStock,
  category,
  brand
}: ProductInfoProps ) => {
  const formatPrice = ( price: number ) => {
    return new Intl.NumberFormat( 'vi-VN', {
      style: 'currency',
      currency: 'VND'
    } ).format( price );
  };

  const renderStars = ( rating: number ) => {
    const stars = [];
    const fullStars = Math.floor( rating );
    const hasHalfStar = rating % 1 !== 0;

    // Render full stars
    for ( let i = 0; i < fullStars; i++ ) {
      stars.push(
        <Star key={i} className={styles.star_full} />
      );
    }

    // Render half star if needed
    if ( hasHalfStar ) {
      stars.push(
        <div key="half" className={styles.star_half}>
          <Star className={styles.star_empty} />
          <div className={styles.star_fill}>
            <Star className={styles.star_full} />
          </div>
        </div>
      );
    }

    // Render empty stars
    const emptyStars = 5 - Math.ceil( rating );
    for ( let i = 0; i < emptyStars; i++ ) {
      stars.push(
        <Star key={`empty-${i}`} className={styles.star_empty} />
      );
    }

    return stars;
  };

  const discountPercentage = originalPrice
    ? Math.round( ( ( originalPrice - price ) / originalPrice ) * 100 )
    : 0;

  return (
    <div className={styles.product_info}>
      {/* Product Name */}
      <h1 className={styles.product_name}>{name}</h1>

      {/* Brand */}
      <div className={styles.brand_section}>
        <span className={styles.brand_label}>Thương hiệu:</span>
        <span className={styles.brand_name}>{brand}</span>
      </div>

      {/* Rating and Reviews */}
      <div className={styles.rating_section}>
        <div className={styles.stars}>
          {renderStars( rating || 0 )}
        </div>
        <span className={styles.rating_text}>
          {( rating || 0 ).toFixed( 1 )} ({reviewCount} đánh giá)
        </span>
      </div>

      {/* Price Section */}
      <div className={styles.price_section}>
        <div className={styles.current_price}>
          {formatPrice( price )}
        </div>
        {originalPrice && originalPrice > price && (
          <div className={styles.price_details}>
            <span className={styles.original_price}>
              {formatPrice( originalPrice )}
            </span>
            <span className={styles.discount}>
              -{discountPercentage}%
            </span>
          </div>
        )}
      </div>

      {/* Stock Status */}
      <div className={styles.stock_section}>
        <span className={`${styles.stock_status} ${inStock ? styles.in_stock : styles.out_stock}`}>
          {inStock ? '✓ Còn hàng' : '✗ Hết hàng'}
        </span>
      </div>

      {/* Product Features */}
      <div className={styles.features}>
        <div className={styles.feature}>
          <span className={styles.feature_icon}>🚚</span>
          <span className={styles.feature_text}>Miễn phí vận chuyển</span>
        </div>
        <div className={styles.feature}>
          <span className={styles.feature_icon}>🔄</span>
          <span className={styles.feature_text}>Đổi trả trong 30 ngày</span>
        </div>
        <div className={styles.feature}>
          <span className={styles.feature_icon}>🛡️</span>
          <span className={styles.feature_text}>Bảo hành chính hãng</span>
        </div>
        <div className={styles.feature}>
          <span className={styles.feature_icon}>💳</span>
          <span className={styles.feature_text}>Thanh toán an toàn</span>
        </div>
      </div>
    </div>
  );
};