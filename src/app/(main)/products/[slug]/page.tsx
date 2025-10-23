import { ProductDetail } from "@ui-pages/product-detail";
import type { Metadata } from "next";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

// Mock data for the product
const getProductData = () => {
  // This would typically fetch from an API or database
  return {
    id: "may-quay-chup-203",
    name: "Máy Quay Chụp Chuyên Nghiệp 203",
    price: 15990000,
    originalPrice: 18990000,
    discount: 16,
    rating: 4.5,
    reviewCount: 156,
    inStock: true,
    stockCount: 25,
    category: "Thiết bị quay phim",
    brand: "TechPro",
    images: [
      "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608799173032-19984d68ed98?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description: `
        Máy quay chụp chuyên nghiệp 203 là sản phẩm hàng đầu dành cho các nhiếp ảnh gia và videographer chuyên nghiệp. 
        Với công nghệ cảm biến tiên tiến và khả năng quay video 4K, sản phẩm mang đến chất lượng hình ảnh vượt trội.
        
        **Tính năng nổi bật:**
        - Cảm biến CMOS 24.2MP
        - Quay video 4K UHD
        - Chống rung quang học 5 trục
        - Màn hình cảm ứng 3.2 inch
        - Kết nối WiFi và Bluetooth
        - Pin sử dụng lên đến 8 giờ
      `,
    specifications: {
      "Độ phân giải": "24.2 Megapixel",
      "Cảm biến": "CMOS APS-C",
      Video: "4K UHD 30fps",
      "Màn hình": "3.2 inch cảm ứng",
      "Kết nối": "WiFi, Bluetooth, USB-C",
      Pin: "Li-ion 2000mAh",
      "Trọng lượng": "650g",
      "Kích thước": "132 x 85 x 70mm",
    },
    reviews: [
      {
        id: "1",
        userName: "Nguyễn Văn A",
        rating: 5,
        comment:
          "Sản phẩm rất tuyệt vời, chất lượng hình ảnh sắc nét. Giao hàng nhanh, đóng gói cẩn thận.",
        date: "2024-01-15",
      },
      {
        id: "2",
        userName: "Trần Thị B",
        rating: 4,
        comment:
          "Máy chụp đẹp, tính năng đa dạng. Chỉ có điều pin hơi yếu một chút.",
        date: "2024-01-10",
      },
      {
        id: "3",
        userName: "Lê Minh C",
        rating: 5,
        comment: "Đáng đồng tiền bát gạo! Chất lượng video 4K rất ấn tượng.",
        date: "2024-01-05",
      },
      {
        id: "4",
        userName: "Phạm Thị D",
        rating: 4,
        comment:
          "Sản phẩm tốt, giao diện dễ sử dụng. Hỗ trợ khách hàng nhiệt tình.",
        date: "2024-01-03",
      },
      {
        id: "5",
        userName: "Hoàng Văn E",
        rating: 5,
        comment:
          "Chất lượng xuất sắc! Đã sử dụng 2 tháng, rất hài lòng với hiệu suất.",
        date: "2023-12-28",
      },
    ],
  };
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  console.log("🚀 ~ generateMetadata ~ params:", params);
  const product = getProductData();

  if (!product) {
    return {
      title: "Sản phẩm không tìm thấy",
      description: "Sản phẩm bạn đang tìm kiếm không tồn tại.",
    };
  }

  return {
    title: `${product.name} - Studio Ecommerce`,
    description: `Mua ${product.name} với giá ${product.price.toLocaleString("vi-VN")}₫. ${product.description.substring(0, 150)}...`,
    openGraph: {
      title: product.name,
      description: product.description.substring(0, 200),
      images: product.images,
    },
  };
}

export default function ProductPage() {
  const product = getProductData();
  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="p-8 text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            Sản phẩm không tìm thấy
          </h1>
          <p className="mb-6 text-gray-600">
            Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 font-medium text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700"
          >
            Về trang chủ
          </a>
        </div>
      </div>
    );
  }

  return <ProductDetail product={product} />;
}
