'use client';
import { ProductCard } from '@components';
import { Button } from '@components/ui/button';
import { Checkbox } from '@components/ui/checkbox';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@components/ui/select';
import useResponsive, { EnumScreenSize } from '@hooks/useResponsive';
import FilterIcon from '@icons/filter';
import { filterCategories, filterPriceRange, listSelectDisplay, type PriceOptionType } from '@lib/constants';
import { poppins } from '@lib/fonts';
import { cn, uniqueArray } from '@lib/utils';
import React, { useEffect } from 'react';
import styles from './Collection.module.scss';

type CollectionProps = {}

const Collection: React.FC<CollectionProps> = ( props ) => {
  const { currentView, size } = useResponsive();

  const [selectDisplay, setSelectDisplay] = React.useState<number>( 0 );
  const [selectAll, setSelectAll] = React.useState<boolean>( false );
  const [selectedCategory, setSelectedCategory] = React.useState<( typeof filterCategories )[0]>( filterCategories[0] );
  const [priceOptions, setPriceOptions] = React.useState<PriceOptionType[]>( filterPriceRange );

  useEffect( () => {
    const checkListOption = priceOptions.filter( item => !item.checked );
    if ( checkListOption.length > 0 ) {
      setSelectAll( false );
    } else {
      setSelectAll( true );
    }
  }, [priceOptions] );

  useEffect( () => {
    if ( size < EnumScreenSize.lg && selectDisplay < 2 ) {
      setSelectDisplay( state => state + 2 );
    }
    if ( size >= EnumScreenSize.lg && selectDisplay > 1 ) {
      setSelectDisplay( state => state - 2 );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentView] );
  //Actions
  const handleSelectAll = ( isChecked: boolean ) => {
    setSelectAll( isChecked );
    setPriceOptions( priceOptions.map( option => ( { ...option, checked: isChecked } ) ) );
  };

  const handleCheckboxChange = ( isChecked: boolean, optionId: number ) => {
    const updatedPriceOptions = priceOptions.map( option =>
      option.id === optionId ? { ...option, checked: isChecked } : option
    );
    setPriceOptions( updatedPriceOptions );
  };

  // Component parts
  const bannerShop = () => (
    <section className={styles.shop_banner}>
      <h2 className={poppins.className}>Shop Page</h2>
      <p>Let's design the place you always imagined.</p>
    </section>
  );
  const filerType = () => (
    <section className={styles.filter_type}>
      <div className={styles.filter_title}>
        <FilterIcon />
        <h2>Filter</h2>
      </div>
      <div className={styles.filter_categories}>
        <h3 className={styles.title_category}>Thẻ loại</h3>
        <div>
          {filterCatogories.map( item => (
            <span

              className={cn(
                item.id === selectedCategory.id ? styles.category_active : ''
              )}
              key={item.id}
            >
              {item.category}
            </span>
          ) )}
        </div>
      </div>
      <div className={styles.filter_prices}>
        <h3 className={styles.title_category}>Giá</h3>
        <div key={0}>
          <label htmlFor='all price'>
            Tất cả giá
          </label>
          <Checkbox checked={selectAll} onCheckedChange={handleSelectAll} id='all price' />
        </div>
        {priceOptions.map( item => (
          <div key={item.id}>
            <label htmlFor={item.price}>
              {item.price}
            </label>
            <Checkbox
              onCheckedChange={checked => handleCheckboxChange( checked as boolean, item.id )}
              checked={item.checked}
              id={item.price}
            />
          </div>
        ) )}
      </div>
    </section>
  );
  const mainContentTop = () => (
    <div className={styles.main_content_top}>
      <h2>{selectedCategory.category}</h2>
      <div className={styles.content_top_left}>
        <Select>
          <SelectTrigger className={styles.select_trigger}>
            <SelectValue placeholder='Sắp xếp theo' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value='best_seller'>Bán chạy nhất</SelectItem>
              <SelectItem value='price_highest'>Giá cao nhất</SelectItem>
              <SelectItem value='price_lowest'>Giá thấp nhất</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className={`${styles.display_type} ${styles.hidden_lg_flex}`}>
          {listSelectDisplay.slice( 0, 2 ).map( ( { id, Component } ) => (
            <Button
              className={cn( selectDisplay === id ? styles.selector_active : '' )}
              key={id}
              onClick={() => setSelectDisplay( id )}
              reset
            >
              <Component />
            </Button>
          ) )}
        </div>
      </div>
    </div>
  );
  const mainContentProducts = () => (
    <div
      className={cn(
        styles.main_content_products,
        styles[listSelectDisplay.find( item => item.id === selectDisplay )?.class]
      )}
    >
      {uniqueArray( 9 ).map( item => (
        <ProductCard
          key={item}
          product={
            {
              id: 2001,
              name: 'Loveseat Sofa',
              price: 299000,
              category: 'Máy ảnh',
              image: 'https://ucarecdn.com/2df20e1d-9205-4395-9666-2027672517fa/imageplaceholder12x.png',
            }
          }
        />
      ) )}
    </div>
  );
  const filterTypeMobile = () => (
    <section className={styles.filter_type_mobile}>
      <Select>
        <SelectTrigger className={styles.select_trigger}>
          <SelectValue placeholder='Thể loại' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {filterCatogories.map( item => (
              <SelectItem key={item.id} value={item.category}>
                {item.category}
              </SelectItem>
            ) )}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className={styles.select_trigger}>
          <SelectValue placeholder='Giá' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {filterPriceRange.map( item => (
              <SelectItem key={item.id} value={item.value}>
                {item.price}
              </SelectItem>
            ) )}
          </SelectGroup>
        </SelectContent>
      </Select>
    </section>
  );
  return (
    <section className={cn( styles.shop_page_wrapper, styles.media_width_sm )}>
      {bannerShop()}
      <section className={styles.shop_content}>
        {filerType()}
        {filterTypeMobile()}
        <section className={styles.main_content}>
          {mainContentTop()}
          {mainContentProducts()}
          <Button variant='outline' className={styles.see_more}>
            Xem thêm
          </Button>
        </section>
      </section>
    </section>
  );
};
export default Collection