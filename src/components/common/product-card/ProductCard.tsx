'use client';
import { Button } from '@components/ui/button';
import { cn } from '@lib/utils';
import type { Product } from '@shared-types/ProductType';
import { Eye } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './ProductCard.module.scss';



interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ( { product, className } ) => {
  const router = useRouter();

  const handleViewProduct = () => {
    router.push( `/products/${product.id}` );
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log( 'Added to cart:', product.name );
  };

  const formatPrice = ( price: number ) => {
    return new Intl.NumberFormat( 'vi-VN' ).format( price ) + ' VND';
  };

  return (
    <div className={cn( styles.product_card, className )}>
      <div className={styles.product_image_wrapper}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={styles.product_image}
        />

        {product.isOnSale && product.saleLabel && (
          <div className={styles.sale_badge}>
            {product.saleLabel}
          </div>
        )}

        <div className={styles.product_overlay}>
          <Button
            size="sm"
            className={cn( styles.add_to_cart_btn, 'button_default' )}
            onClick={handleAddToCart}
          >
            Thêm vào giỏ hàng
          </Button>
        </div>

        <Button
          size="icon"
          variant="outline"
          className={styles.view_product}
          onClick={handleViewProduct}
        >
          <Eye className="w-4 h-4" />
        </Button>
      </div>

      <div className={styles.product_info}>
        <p className={styles.product_category}>{product.category}</p>
        <h3 className={styles.product_name}>{product.name}</h3>

        <div className={styles.product_pricing}>
          <span className={styles.product_price}>{formatPrice( product.price )}</span>
          {product.originalPrice && (
            <span className={styles.original_price}>{formatPrice( product.originalPrice )}</span>
          )}
        </div>
      </div>
    </div>
  );
};