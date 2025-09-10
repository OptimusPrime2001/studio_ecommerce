interface CategoryItem {
  id: number;
  name: string;
  subName: string;
  count: number;
  image: string;
  href: string;
}

export const categoryData: CategoryItem[] = [
  {
    id: 1,
    name: 'AllProducts',
    subName: 'Xem tất cả sản phẩm của chúng tôi',
    count: 100,
    image: 'https://hyperwork.vn/cdn/shop/files/ssdsd_11zon_1.jpg?v=1753694261&width=1080',
    href: '/shop/all'
  },
  {
    id: 2,
    name: 'Softbox',
    subName: 'Phụ kiện',
    count: 24,
    image: 'https://hyperwork.vn/cdn/shop/files/Capture_Ones_sCastalog0065_11zon.jpg?v=1753695610&width=1080',
    href: '/shop/softbox'
  },
  {
    id: 3,
    name: 'Accessories',
    subName: 'Phụ kiện',
    count: 10,
    image: 'https://hyperwork.vn/cdn/shop/files/atlas-white-2_11zon_467cc667-15a1-4781-bc1d-deac52740bac.jpg?v=1753694797&width=1080',
    href: '/shop/accessories'
  },
  {
    id: 4,
    name: 'MobilePhotography',
    subName: 'Phụ kiện',
    count: 23,
    image: 'https://hyperwork.vn/cdn/shop/files/Capture_One_Catalog05971_11zon.svg?v=1741830770&width=1080',
    href: '/shop/mobile-photography'
  },
  {
    id: 5,
    name: 'Stands',
    subName: 'Phụ kiện',
    count: 34,
    image: 'https://hyperwork.vn/cdn/shop/files/Setup1-PG02-1_11zon.jpg?v=1739178887&width=1080',
    href: '/shop/stands'
  },
  {
    id: 6,
    name: 'PhoneHolders',
    subName: 'Phụ kiện',
    count: 14,
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop',
    href: '/shop/phone-holders'
  }
];