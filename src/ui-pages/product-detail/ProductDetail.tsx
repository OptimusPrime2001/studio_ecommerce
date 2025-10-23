import {
  ImageGallery,
  ProductDescription,
  ProductInfo,
  ProductReviews,
  PurchaseSection,
} from "./components";
import styles from "./ProductDetail.module.scss";

interface ProductDetailProps {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    rating: number;
    reviewCount: number;
    inStock: boolean;
    stockCount: number;
    category: string;
    brand: string;
    images: string[];
    description: string;
    specifications: Record<string, string>;
    reviews: Array<{
      id: string;
      userName: string;
      rating: number;
      comment: string;
      date: string;
    }>;
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div className={styles.product_detail_wrapper}>
      {/* Main Content */}
      <div className={styles.product_detail_content}>
        <div className={styles.product_detail_grid}>
          {/* Left Column - Image Gallery */}
          <div className={styles.product_detail_gallery}>
            <ImageGallery images={product.images} productName={product.name} />
          </div>

          {/* Right Column - Product Info & Purchase */}
          <div className={styles.product_detail_info}>
            <ProductInfo
              name={product.name}
              brand={product.brand}
              category={product.category}
              rating={product.rating}
              reviewCount={product.reviewCount}
              price={product.price}
              originalPrice={product.originalPrice}
              inStock={product.inStock}
            />

            <PurchaseSection
              price={product.price}
              inStock={product.inStock}
              productId={product.id}
            />
          </div>
        </div>

        {/* Bottom Section - Description & Reviews */}
        <div className={styles.product_detail_bottom}>
          <ProductDescription description={product.description} />
          <ProductReviews
            reviews={product.reviews}
            productId={product.id}
            rating={4.5}
            reviewCount={product.reviewCount}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
