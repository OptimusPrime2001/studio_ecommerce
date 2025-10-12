"use client";
import { ButtonDiv, CommonButton } from "@components/shared";
import { Button } from "@components/ui/button";
import { cn, formatVnd } from "@lib/utils";
import type { Product } from "@shared-types/ProductType";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import cartAddTo from "@/assets/svgs/cartAdd.svg";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  product: Product;
  className?: string;
  orderCount?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ( {
  product,
  className,
  orderCount = 132,
} ) => {
  const router = useRouter();

  const handleViewProduct = () => {
    router.push( `/products/${product.id}` );
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log( "Added to cart:", product.name );
  };

  return (
    <div className={cn( styles.product_card_wrapper, className )}>
      <ButtonDiv className={styles.product_img} onClick={handleViewProduct}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={styles.image}
        />
        <Button className={styles.wishlist_btn} aria-label="Yêu thích">
          <Heart className={styles.icon_heart} />
        </Button>
      </ButtonDiv>

      <div className={styles.product_content}>
        <h3 className={styles.product_title}>{product.name}</h3>
        <span className={styles.order_count}>Đã bán : {orderCount}</span>
        <div className={styles.product_price}>
          <span className={styles.price_value}>{formatVnd( product.price )}</span>
        </div>
      </div>
      <CommonButton
        width="full"
        variant="secondary"
        className={styles.add_cart_btn}
        onClick={handleAddToCart}
      >
        <Image
          src={cartAddTo}
          alt="Add to cart"
          width={22}
          height={22}
          className={styles.icon_cart}
        />
        Thêm vào giỏ hàng
      </CommonButton>
    </div>
  );
};
