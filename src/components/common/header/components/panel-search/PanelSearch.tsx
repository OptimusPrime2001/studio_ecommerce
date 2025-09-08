'use client';
import productImage from '@assets/images/product_img.png';
import closeIcon from '@assets/svgs/close.svg';
import { Button } from "@components/ui/button";
import { Input } from '@components/ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@components/ui/sheet";
import { cn, formatVnd } from "@lib/utils";
import searchIcon from '@svgs/searchIcon.svg';
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import styles from './PanelSearch.module.scss';

// Mock data for demonstration
const searchCategories = [
  { id: 1, name: 'Máy ảnh', href: '/category/ban' },
  { id: 2, name: 'Ánh sáng', href: '/category/ghe' },
  { id: 3, name: 'Giá treo máy ảnh', href: '/category/ban-phim-chuot' },
  { id: 4, name: 'Tấm hắt sáng', href: '/category/tam-hat-sang' }
];

const mockProducts = [
  {
    id: 1,
    name: 'Chuột không dây HyperWork Silentium',
    price: 599000,
    image: productImage,
    brand: 'HyperWork'
  },
  {
    id: 2,
    name: 'Miếng Pad chuột vải ni 120×60cm HyperWork',
    price: 179000,
    originalPrice: 229000,
    image: productImage,
    brand: 'HyperWork'
  },
  {
    id: 3,
    name: 'Pad chuột HyperWork Fable (Cordura Fabric) | GMP01',
    price: 389000,
    image: productImage,
    brand: 'HyperWork'
  }
];

const mockCollections = [
  { id: 1, name: 'Chuột', href: '/collections/chuot' },
  { id: 2, name: 'Pad chuột', href: '/collections/pad-chuot' }
];

export const PanelSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState( '' );
  const [searchResults, setSearchResults] = useState<typeof mockProducts>( [] );
  const [isSearching, setIsSearching] = useState( false );

  const handleSearch = ( query: string ) => {
    setSearchQuery( query );
    setIsSearching( true );

    // Simulate search delay
    setTimeout( () => {
      if ( query.trim() ) {
        // Filter products based on query
        const results = mockProducts.filter( product =>
          product.name.toLowerCase().includes( query.toLowerCase() )
        );
        setSearchResults( results );
      } else {
        setSearchResults( [] );
      }
      setIsSearching( false );
    }, 300 );
  };

  const clearSearch = () => {
    setSearchQuery( '' );
    setSearchResults( [] );
    setIsSearching( false );
  };

  const renderInitialState = () => (
    <div className={styles.search_initial_state}>
      <div className={styles.search_categories}>
        {searchCategories.map( category => (
          <Link
            key={category.id}
            href={category.href}
            className={styles.category_item}
          >
            {category.name}
          </Link>
        ) )}
      </div>
    </div>
  );

  const renderSearchResults = () => (
    <div className={styles.search_results}>
      <div className={styles.products_section}>
        <h3 className={styles.section_title}>Sản phẩm</h3>
        <div className={styles.products_list}>
          {searchResults.map( product => (
            <Link key={product.id} href={`/product/${product.id}`} className={styles.product_item}>
              <Image
                src={product.image}
                alt={product.name}
                width={60}
                height={60}
                className={styles.product_img}
              />
              <div className={styles.product_info}>
                <div className={styles.product_brand}>{product.brand}</div>
                <div className={styles.product_name}>{product.name}</div>
                <div className={styles.product_price}>
                  {product.originalPrice && (
                    <span className={styles.original_price}>{formatVnd( product.originalPrice )}</span>
                  )}
                  <span className={styles.current_price}>
                    {product.price ? formatVnd( product.price ) : `From ${formatVnd( product.price )}`}
                  </span>
                </div>
              </div>
            </Link>
          ) )}
        </div>
      </div>

      <div className={styles.collections_section}>
        <h3 className={styles.section_title}>Bộ sưu tập</h3>
        <div className={styles.collections_list}>
          {mockCollections.map( collection => (
            <Link
              key={collection.id}
              href={collection.href}
              className={styles.collection_item}
            >
              {collection.name}
            </Link>
          ) )}
        </div>
      </div>

      <div className={styles.see_all_section}>
        <Button className={styles.see_all_button}>
          See all results
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Button>
      </div>
    </div>
  );

  const renderNoResults = () => (
    <div className={styles.no_results}>
      <Image className={styles.no_results_icon} src={searchIcon} alt='no results' />
      <h3 className={styles.no_results_title}>
        Không tìm thấy kết quả nào cho "{searchQuery}".
      </h3>
      <p className={styles.no_results_subtitle}>
        Kiểm tra chính tả hoặc sử dụng từ khóa khác.
      </p>
    </div>
  );

  return (
    <Sheet>
      <SheetTrigger className='text-neutral_07 flex gap-x-1 cursor-pointer'>
        <Image src={searchIcon} alt='search' />
      </SheetTrigger>
      <SheetContent className={styles.panel_search_wrapper}>
        <SheetHeader className={styles.panel_search_container}>
          <SheetTitle className={styles.panel_search_title}>
            Tìm kiếm
            <Image className='cursor-pointer' src={closeIcon} alt="close icon" />
          </SheetTitle>

          <section className={styles.panel_search_content}>
            <div className={styles.search_input_container}>
              <Input
                placeholder='Tìm kiếm sản phẩm...'
                value={searchQuery}
                onChange={( e ) => handleSearch( e.target.value )}
                className={styles.search_input}
              />
              {searchQuery && (
                <Button
                  onClick={clearSearch}
                  className={cn( styles.clear_button, 'reset_btn' )}
                >
                  Xóa
                </Button>
              )}
            </div>

            <div className={styles.search_content_body}>
              {!searchQuery ? (
                renderInitialState()
              ) : isSearching ? (
                <div className={styles.loading_state}>Đang tìm kiếm...</div>
              ) : searchResults.length > 0 ? (
                renderSearchResults()
              ) : (
                renderNoResults()
              )}
            </div>
          </section>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}