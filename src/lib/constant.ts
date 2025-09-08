import Address from '@icons/address';
import CallSupport from '@icons/call-support';
import EmailIcon from '@icons/email';
import FastDelevery from '@icons/fast-delivery';
import { GridSquare } from '@icons/grid-square';
import MoneyBack from '@icons/money-back';
import SearchIcon from '@icons/search-icon';
import SecurePayment from '@icons/secure-payment';
import ShoppingBag from '@icons/shopping-bag';
import { Square } from '@icons/square';
import { TwoColumn } from '@icons/two-column';
import { TwoRow } from '@icons/two-row';
import facebookIcon from '@svgs/facebook.svg';
import instagramIcon from '@svgs/instagram.svg';
import UserIcon from '@svgs/userIcon.svg';
import youtubeIcon from '@svgs/youtube.svg';

export const navigationLink = [
  { id: 'home', label: 'Trang chủ', href: '/' },
  { id: 'shop', label: 'Cửa hàng', href: '/shop' },
  { id: 'product', label: 'Sản phẩm', href: '/product' },
  { id: 'contact-us', label: 'Liên hệ', href: '/contact-us' }
];
export const navigationIcon = [
  {
    id: 'search',
    label: 'Tìm kiếm',
    Component: SearchIcon
  },
  {
    id: 'account',
    label: 'Tài khoản',
    href: '/sign-in',
    Component: UserIcon
  },
  {
    id: 'bag',
    label: 'Giỏ hàng',
    Component: ShoppingBag
  }
];
export const listSocialIcon = [
  {
    id: 'instagram',
    href: '/instagram',
    icon: instagramIcon
  },
  {
    id: 'facebook',
    href: '/facebook',
    icon: facebookIcon
  },
  {
    id: 'youtube',
    href: '/youtube',
    icon: youtubeIcon
  }
];
export const listSlider = [
  {
    id: 0,
    img: 'https://ucarecdn.com/fb7e4de7-3533-42f8-b153-fc95a73a15ef/Pasteimage.png'
  },
  {
    id: 1,
    img: 'https://ucarecdn.com/725f3667-bf23-446c-a51b-29b3f53bc700/PasteImage2.png'
  },
  {
    id: 2,
    img: 'https://ucarecdn.com/9c71eb65-0dc3-46a3-ba67-1ab8e2533e08/292184212_586036499545848_5535349302586193547_n.jpg'
  },
  {
    id: 3,
    img: 'https://ucarecdn.com/f0e41f40-7fe9-4e97-9cc5-7b4f333cb7e6/image_2023_03_28T14_00_17_383Z.png'
  }
];
export const listMainProduct = [
  {
    id: 1,
    label: 'Living Room',
    link: '',
    img: 'https://ucarecdn.com/2df20e1d-9205-4395-9666-2027672517fa/imageplaceholder12x.png'
  },
  {
    id: 2,
    label: 'Bedroom',
    link: '',
    img: 'https://ucarecdn.com/1e835bea-18d4-469f-a982-b252082485b9/bedroom.png'
  },
  {
    id: 3,
    label: 'Kitchen',
    link: '',
    img: 'https://ucarecdn.com/0238fcd0-b4c4-456a-9802-e746ad110233/sietoc.png'
  }
];
export const listArticles = [
  {
    id: 1,
    img: 'https://ucarecdn.com/a052bf04-e600-445e-a7c9-dbf6c0a4988d/imgcontainer.png',
    label: '7 ways to decor your home'
  },
  {
    id: 2,
    img: 'https://ucarecdn.com/4e3845ad-8530-4cb7-9211-a3d2cd3c744d/imgcontainer2.png',
    label: 'Kitchen organization'
  },
  {
    id: 3,
    img: 'https://ucarecdn.com/c00c23a9-e5fe-4939-a006-a90e93832a36/imgcontainer3.png',
    label: 'Decor your bedroom'
  }
];
export const listSupportCustomer = [
  {
    id: 1,
    title: 'Free Shipping',
    label: 'Order above $200',
    icon: FastDelevery
  },
  {
    id: 2,
    title: 'Money-back',
    label: '30 days guarantee',
    icon: MoneyBack
  },
  {
    id: 3,
    title: 'Secure Payments',
    label: 'Secured by Stripe',
    icon: SecurePayment
  },
  {
    id: 4,
    title: '24/7 Support',
    label: 'Phone and Email support',
    icon: CallSupport
  }
];
export const listQuotes = [
  {
    title: 'Make your workday more comfortable',
    id: 1
  },
  { title: 'Selling is about solving problems.', id: 2 },
  { title: 'Great service creates loyal customers.', id: 3 },
  { title: 'Understand needs, then offer solutions.', id: 4 },
  { title: 'Build relationships, not just sales.', id: 5 }
];
export const filterCatogories = [
  {
    id: 1,
    category: 'Tất cả phòng',
    value: 'all room'
  },
  {
    id: 2,
    category: 'Phòng khách',
    value: 'Living Room'
  },
  {
    id: 3,
    category: 'Phòng ngủ',
    value: 'Bedroom'
  },
  {
    id: 4,
    category: 'Phòng bếp',
    value: 'Kitchen'
  },
  {
    id: 5,
    category: 'Phòng tắm',
    value: 'Bathroom'
  },
  {
    id: 6,
    category: 'Phòng ngoài',
    value: 'Outdoor'
  },
  {
    id: 7,
    category: 'Phòng vệ sinh',
    value: 'WC'
  }
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
    price: '0 - 100.000đ',
    range: {
      min: 0,
      max: 100_000
    },
    checked: false,
    value: 'Dưới 100k'
  },
  {
    id: 2,
    price: '100.000đ - 500.000đ',
    range: {
      min: 100_000,
      max: 500_000
    },
    checked: false,
    value: '100k - 500k'
  },
  {
    id: 3,
    price: '500.000đ - 1.000.000đ',
    range: {
      min: 500_000,
      max: 100_000_000
    },
    checked: false,
    value: '500k - 1tr'
  },
  {
    id: 4,
    price: 'trên 1.000.000đ',
    range: {
      min: 100_000_000
    },
    checked: false,
    value: 'trên 1tr'
  }
];
export enum SelectDisplayType {
  'GridSquare' = 'grid-square',
  'Square' = 'square',
  'TwoColumn' = 'two-columns',
  'TwoRow' = 'two-rows'
}
export const listSelectDisplay = [
  {
    id: 0,
    Component: GridSquare,
    class: SelectDisplayType.GridSquare
  },
  {
    id: 1,
    Component: Square,
    class: SelectDisplayType.Square
  },
  {
    id: 2,
    Component: TwoColumn,
    class: SelectDisplayType.TwoColumn
  },
  {
    id: 3,
    Component: TwoRow,
    class: SelectDisplayType.TwoRow
  }
];
// Contact page
export const listContactUs = [
  {
    id: 0,
    title: 'Địa chỉ',
    Icon: Address,
    content: '234 Hai Trieu, Ho Chi Minh City, Viet Nam'
  },
  {
    id: 1,
    title: 'Liên hệ',
    Icon: CallSupport,
    content: '+84 234 567 890'
  },
  {
    id: 2,
    title: 'Email',
    Icon: EmailIcon,
    content: 'hello@3legant.com'
  }
];
