import Address from "@icons/address";
import CallSupport from "@icons/call-support";
import EmailIcon from "@icons/email";
import FastDelevery from "@icons/fast-delivery";
import { GridSquare } from "@icons/grid-square";
import MoneyBack from "@icons/money-back";
import SearchIcon from "@icons/search-icon";
import SecurePayment from "@icons/secure-payment";
import ShoppingBag from "@icons/shopping-bag";
import { Square } from "@icons/square";
import { TwoColumn } from "@icons/two-column";
import { TwoRow } from "@icons/two-row";
import banner_carousel_1 from "@images/banner_carousel_1.jpg";
import banner_carousel_2 from "@images/banner_carousel_2.jpg";
import banner_carousel_3 from "@images/banner_carousel_3.jpg";
import banner_carousel_4 from "@images/banner_carousel_4.jpg";
import type { CategoryItem } from "@shared-types/CategoryType";
import type { Product } from "@shared-types/ProductType";
import facebookIcon from "@svgs/facebook.svg";
import instagramIcon from "@svgs/instagram.svg";
import UserIcon from "@svgs/userIcon.svg";
import youtubeIcon from "@svgs/youtube.svg";

export const MENU_NAVIGATION = [
  { id: "home", label: "Trang chủ", href: "/" },
  { id: "shop", label: "Cửa hàng", href: "/collection" },
  { id: "product", label: "Sản phẩm", href: "/product" },
  { id: "contact-us", label: "Liên hệ", href: "/contact-us" },
];
export const navigationIcon = [
  {
    id: "search",
    label: "Tìm kiếm",
    Component: SearchIcon,
  },
  {
    id: "account",
    label: "Tài khoản",
    href: "/sign-in",
    Component: UserIcon,
  },
  {
    id: "bag",
    label: "Giỏ hàng",
    Component: ShoppingBag,
  },
];
export const ICONS_SOCIAL = [
  {
    id: "instagram",
    href: "/instagram",
    icon: instagramIcon,
  },
  {
    id: "facebook",
    href: "/facebook",
    icon: facebookIcon,
  },
  {
    id: "youtube",
    href: "/youtube",
    icon: youtubeIcon,
  },
];
export const LIST_DATA_CAROUSEL = [
  {
    id: 0,
    img: banner_carousel_1,
    title: "Thiết bị Camera Chuyên Nghiệp",
    subtitle: "Khám phá bộ sưu tập camera và ống kính cao cấp",
    buttonText: "Khám phá ngay",
    buttonLink: "/shop/cameras",
  },
  {
    id: 1,
    img: banner_carousel_2,
    title: "Hệ thống Ánh Sáng Studio",
    subtitle: "Tạo ra những bức ảnh hoàn hảo với đèn studio chuyên nghiệp",
    buttonText: "Xem sản phẩm",
    buttonLink: "/shop/lighting",
  },
  {
    id: 2,
    img: banner_carousel_3,
    title: "Phụ kiện Nhiếp ảnh",
    subtitle: "Hoàn thiện bộ kit của bạn với các phụ kiện chất lượng cao",
    buttonText: "Mua ngay",
    buttonLink: "/shop/accessories",
  },
  {
    id: 3,
    img: banner_carousel_4,
    title: "Ưu đãi Đặc biệt",
    subtitle: "Giảm giá lên đến 30% cho tất cả sản phẩm camera và ánh sáng",
    buttonText: "Nhận ưu đãi",
    buttonLink: "/shop/deals",
  },
];
export const listMainProduct = [
  {
    id: 1,
    label: "Living Room",
    link: "",
    img: "https://ucarecdn.com/2df20e1d-9205-4395-9666-2027672517fa/imageplaceholder12x.png",
  },
  {
    id: 2,
    label: "Bedroom",
    link: "",
    img: "https://ucarecdn.com/1e835bea-18d4-469f-a982-b252082485b9/bedroom.png",
  },
  {
    id: 3,
    label: "Kitchen",
    link: "",
    img: "https://ucarecdn.com/0238fcd0-b4c4-456a-9802-e746ad110233/sietoc.png",
  },
];
export const listArticles = [
  {
    id: 1,
    img: "https://ucarecdn.com/a052bf04-e600-445e-a7c9-dbf6c0a4988d/imgcontainer.png",
    label: "7 ways to decor your home",
  },
  {
    id: 2,
    img: "https://ucarecdn.com/4e3845ad-8530-4cb7-9211-a3d2cd3c744d/imgcontainer2.png",
    label: "Kitchen organization",
  },
  {
    id: 3,
    img: "https://ucarecdn.com/c00c23a9-e5fe-4939-a006-a90e93832a36/imgcontainer3.png",
    label: "Decor your bedroom",
  },
];
export const listSupportCustomer = [
  {
    id: 1,
    title: "Free Shipping",
    label: "Order above $200",
    icon: FastDelevery,
  },
  {
    id: 2,
    title: "Money-back",
    label: "30 days guarantee",
    icon: MoneyBack,
  },
  {
    id: 3,
    title: "Secure Payments",
    label: "Secured by Stripe",
    icon: SecurePayment,
  },
  {
    id: 4,
    title: "24/7 Support",
    label: "Phone and Email support",
    icon: CallSupport,
  },
];
export const listQuotes = [
  {
    title: "Make your workday more comfortable",
    id: 1,
  },
  { title: "Selling is about solving problems.", id: 2 },
  { title: "Great service creates loyal customers.", id: 3 },
  { title: "Understand needs, then offer solutions.", id: 4 },
  { title: "Build relationships, not just sales.", id: 5 },
];
export const filterCategories = [
  {
    id: 1,
    category: "Tất cả phòng",
    value: "all room",
  },
  {
    id: 2,
    category: "Phòng khách",
    value: "Living Room",
  },
  {
    id: 3,
    category: "Phòng ngủ",
    value: "Bedroom",
  },
  {
    id: 4,
    category: "Phòng bếp",
    value: "Kitchen",
  },
  {
    id: 5,
    category: "Phòng tắm",
    value: "Bathroom",
  },
  {
    id: 6,
    category: "Phòng ngoài",
    value: "Outdoor",
  },
  {
    id: 7,
    category: "Phòng vệ sinh",
    value: "WC",
  },
];
export type PriceOptionType = {
  id: number;
  price: string;
  range: {
    min: number;
    max?: number;
  };
  checked: boolean;
  value: string;
};
export const filterPriceRange: PriceOptionType[] = [
  {
    id: 1,
    price: "0 - 100.000đ",
    range: {
      min: 0,
      max: 100_000,
    },
    checked: false,
    value: "Dưới 100k",
  },
  {
    id: 2,
    price: "100.000đ - 500.000đ",
    range: {
      min: 100_000,
      max: 500_000,
    },
    checked: false,
    value: "100k - 500k",
  },
  {
    id: 3,
    price: "500.000đ - 1.000.000đ",
    range: {
      min: 500_000,
      max: 100_000_000,
    },
    checked: false,
    value: "500k - 1tr",
  },
  {
    id: 4,
    price: "trên 1.000.000đ",
    range: {
      min: 100_000_000,
    },
    checked: false,
    value: "trên 1tr",
  },
];
export enum SelectDisplayType {
  GridSquare = "grid_square",
  Square = "square",
  TwoColumn = "two_columns",
  TwoRow = "two_rows",
}
export const listSelectDisplay = [
  {
    id: 0,
    Component: GridSquare,
    class: SelectDisplayType.GridSquare,
  },
  {
    id: 1,
    Component: Square,
    class: SelectDisplayType.Square,
  },
  {
    id: 2,
    Component: TwoColumn,
    class: SelectDisplayType.TwoColumn,
  },
  {
    id: 3,
    Component: TwoRow,
    class: SelectDisplayType.TwoRow,
  },
];
// Contact page
export const listContactUs = [
  {
    id: 0,
    title: "Địa chỉ",
    Icon: Address,
    content: "234 Hai Trieu, Ho Chi Minh City, Viet Nam",
  },
  {
    id: 1,
    title: "Liên hệ",
    Icon: CallSupport,
    content: "+84 234 567 890",
  },
  {
    id: 2,
    title: "Email",
    Icon: EmailIcon,
    content: "hello@3legant.com",
  },
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Bàn phím Gen 3",
    price: 899000,
    image: "https://ecommerce-uikit.netlify.app/images/product-tech/4.png",
    category: "KEYBOARDS",
    colors: ["#000000"],
  },
  {
    id: 2,
    name: "VisionX Stealth",
    price: 2300000,
    image: "https://ecommerce-uikit.netlify.app/images/product-tech/4.png",
    category: "HYPERWORK",
    isOnSale: true,
    saleLabel: "15.09",
    colors: ["#000000"],
  },
  {
    id: 3,
    name: "T6 Pro Dual - 2025",
    price: 1250000,
    image: "https://ecommerce-uikit.netlify.app/images/product-tech/4.png",
    category: "HUMAN MOTION",
    isOnSale: true,
    saleLabel: "15.09",
    colors: ["#000000"],
  },
  {
    id: 4,
    name: "T6 Pro - 2025",
    price: 890000,
    image: "https://ecommerce-uikit.netlify.app/images/product-tech/4.png",
    category: "HUMAN MOTION",
    isOnSale: true,
    saleLabel: "15.09",
    colors: ["#000000"],
  },
  {
    id: 5,
    name: "MacBook Pro M3",
    price: 19900000,
    image: "https://ecommerce-uikit.netlify.app/images/product-tech/4.png",
    category: "LAPTOPS",
    colors: ["#C0C0C0", "#000000"],
  },
  {
    id: 6,
    name: "Gaming Chair Pro",
    price: 3500000,
    originalPrice: 4200000,
    image: "https://ecommerce-uikit.netlify.app/images/product-tech/4.png",
    category: "CHAIRS",
    isOnSale: true,
    saleLabel: "15.09",
    colors: ["#000000", "#FF0000"],
  },
];
export const categoryData: CategoryItem[] = [
  {
    id: 1,
    name: "AllProducts",
    subName: "Xem tất cả sản phẩm của chúng tôi",
    count: 100,
    image:
      "https://hyperwork.vn/cdn/shop/files/ssdsd_11zon_1.jpg?v=1753694261&width=1080",
    href: "/shop/all",
  },
  {
    id: 2,
    name: "Softbox",
    subName: "Phụ kiện",
    count: 24,
    image:
      "https://hyperwork.vn/cdn/shop/files/Capture_Ones_sCastalog0065_11zon.jpg?v=1753695610&width=1080",
    href: "/shop/softbox",
  },
  {
    id: 3,
    name: "Accessories",
    subName: "Phụ kiện",
    count: 10,
    image:
      "https://hyperwork.vn/cdn/shop/files/atlas-white-2_11zon_467cc667-15a1-4781-bc1d-deac52740bac.jpg?v=1753694797&width=1080",
    href: "/shop/accessories",
  },
  {
    id: 4,
    name: "MobilePhotography",
    subName: "Phụ kiện",
    count: 23,
    image:
      "https://hyperwork.vn/cdn/shop/files/Capture_One_Catalog05971_11zon.svg?v=1741830770&width=1080",
    href: "/shop/mobile-photography",
  },
  {
    id: 5,
    name: "Stands",
    subName: "Phụ kiện",
    count: 34,
    image:
      "https://hyperwork.vn/cdn/shop/files/Setup1-PG02-1_11zon.jpg?v=1739178887&width=1080",
    href: "/shop/stands",
  },
  {
    id: 6,
    name: "PhoneHolders",
    subName: "Phụ kiện",
    count: 14,
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop",
    href: "/shop/phone-holders",
  },
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: 1,
    name: "Bàn phím Gen 3",
    price: 899000,
    image: "https://ecommerce-uikit.netlify.app/images/product-tech/4.png",
    category: "KEYBOARDS",
    colors: ["#000000"],
  },
  {
    id: 2,
    name: "VisionX Stealth",
    price: 2300000,
    image: "https://ecommerce-uikit.netlify.app/images/product-tech/4.png",
    category: "HYPERWORK",
    isOnSale: true,
    saleLabel: "15.09",
    colors: ["#000000"],
  },
  {
    id: 3,
    name: "T6 Pro Dual - 2025",
    price: 1250000,
    image: "https://ecommerce-uikit.netlify.app/images/product-tech/4.png",
    category: "HUMAN MOTION",
    isOnSale: true,
    saleLabel: "15.09",
    colors: ["#000000"],
  },
  {
    id: 4,
    name: "T6 Pro - 2025",
    price: 890000,
    image: "https://ecommerce-uikit.netlify.app/images/product-tech/4.png",
    category: "HUMAN MOTION",
    isOnSale: true,
    saleLabel: "15.09",
    colors: ["#000000"],
  },
  {
    id: 5,
    name: "MacBook Pro M3",
    price: 19900000,
    image: "https://ecommerce-uikit.netlify.app/images/product-tech/4.png",
    category: "LAPTOPS",
    colors: ["#C0C0C0", "#000000"],
  },
  {
    id: 6,
    name: "Gaming Chair Pro",
    price: 3500000,
    originalPrice: 4200000,
    image: "https://ecommerce-uikit.netlify.app/images/product-tech/4.png",
    category: "CHAIRS",
    isOnSale: true,
    saleLabel: "15.09",
    colors: ["#000000", "#FF0000"],
  },
  {
    id: 7,
    name: "Gaming Chair Pro",
    price: 3500000,
    originalPrice: 4200000,
    image: "https://ecommerce-uikit.netlify.app/images/product-tech/4.png",
    category: "CHAIRS",
    isOnSale: true,
    saleLabel: "15.09",
    colors: ["#000000", "#FF0000"],
  },
  {
    id: 8,
    name: "Gaming Chair Pro",
    price: 3500000,
    originalPrice: 4200000,
    image: "https://ecommerce-uikit.netlify.app/images/product-tech/4.png",
    category: "CHAIRS",
    isOnSale: true,
    saleLabel: "15.09",
    colors: ["#000000", "#FF0000"],
  },
  {
    id: 9,
    name: "Gaming Chair Pro",
    price: 3500000,
    originalPrice: 4200000,
    image: "https://ecommerce-uikit.netlify.app/images/product-tech/4.png",
    category: "CHAIRS",
    isOnSale: true,
    saleLabel: "15.09",
    colors: ["#000000", "#FF0000"],
  },
  {
    id: 10,
    name: "Gaming Chair Pro",
    price: 3500000,
    originalPrice: 4200000,
    image: "https://ecommerce-uikit.netlify.app/images/product-tech/4.png",
    category: "CHAIRS",
    isOnSale: true,
    saleLabel: "15.09",
    colors: ["#000000", "#FF0000"],
  },
  {
    id: 11,
    name: "Gaming Chair Pro",
    price: 3500000,
    originalPrice: 4200000,
    image: "https://ecommerce-uikit.netlify.app/images/product-tech/4.png",
    category: "CHAIRS",
    isOnSale: true,
    saleLabel: "15.09",
    colors: ["#000000", "#FF0000"],
  },
];
