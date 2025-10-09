import {
  ImageGallery,
  ProductDescription,
  ProductInfo,
  ProductReviews,
  PurchaseSection,
} from './components';

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

const ProductDetail: React.FC<ProductDetailProps> = ( { product } ) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-blue-600 transition-colors">Trang chủ</a>
            <span>/</span>
            <a href="/products" className="hover:text-blue-600 transition-colors">Sản phẩm</a>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.category}</span>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Image Gallery */}
          <div className="space-y-4">
            <ImageGallery images={product.images} productName={product.name} />
          </div>

          {/* Right Column - Product Info & Purchase */}
          <div className="space-y-6">
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
        <div className="space-y-8">
          <ProductDescription
            description={product.description}
          />

          <ProductReviews
            reviews={product.reviews}
            productId={product.id}
            averageRating={product.rating}
            reviewCount={product.reviewCount}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;