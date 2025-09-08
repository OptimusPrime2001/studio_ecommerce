'use client';
import Logo from '@common/logo/logo';
import { Button } from '@components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@components/ui/dialog';
import { Input } from '@components/ui/input';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@components/ui/sheet';
import CloseIcon from '@icons/close';
import HeartIcon from '@icons/heart';
import MenuBars from '@icons/menu-bars';
import SearchIcon from '@icons/search-icon';
import ShoppingBag from '@icons/shopping-bag';
import { listSocialIcon, navigationLink } from '@lib/constant';
import { cn, uniqueArray } from '@lib/utils';
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import searchIcon from '@svgs/searchIcon.svg';
import userIcon from '@svgs/userIcon.svg';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import CountIcon from '../count-icon/count-icon';
import { PanelCart } from './components/panel-cart';
import { PanelSearch } from './components/panel-search';
import styles from './Header.module.scss';

export const Header = () => {
  const pathname = usePathname();
  const [openMenuMobile, setOpenMenuMobile] = useState<boolean>( false );
  const checkMenuActive = ( label: string ) => {
    return pathname === label ? 'menu_active' : 'menu_link';
  };
  const router = useRouter();
  const handleSignIn = () => {
    router.push( 'sign-in' );
  };
  const renderMenuMobie = () => (
    <SheetContent
      datatype='menu_mobile'
      side='left'
      className={cn( 'w-[90%] overflow-y-auto pb-0 ipadair:hidden', styles.menu_mobile )}
    >
      <SheetHeader className='h-full'>
        <SheetTitle className='menu_mobile-header'>
          <Logo />
          <CloseIcon onClick={() => setOpenMenuMobile( false )} />
        </SheetTitle>
        <section className='menu_mobile-content'>
          <section className='w-full'>
            <div className='menu_search'>
              <SearchIcon />
              <Input type='search' placeholder='Search' />
            </div>
            <ul>
              {navigationLink.map( item => (
                <li key={item.id}>
                  <Link className={cn( checkMenuActive( item.href ), 'dark:text-white' )} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ) )}
            </ul>
          </section>
          <section className='iu-d-flexcolumn w-full gap-y-5'>
            <ul className='w-full'>
              <li className='iu-d-flexbetween dark:text-white'>
                <Link href='cart'>Giỏ hàng</Link>
                <CountIcon count={3} iconElement={<ShoppingBag />} />
              </li>
              <li className='iu-d-flexbetween dark:text-white'>
                <Link href='whish-list'>Mục yêu thích</Link>
                <CountIcon count={3} iconElement={<HeartIcon size='24' />} />
              </li>
            </ul>
            <Button className='sign-btn hover:!bg-primary_blur w-full' onClick={handleSignIn}>
              Đăng nhập
            </Button>
            <div className='list_social'>
              {listSocialIcon.map( item => (
                <Link href={item.href} key={item.id}>
                  <item.Component />
                </Link>
              ) )}
            </div>
            <SheetDescription className='pb-6 text-center'>
              Shopping is not just buying things, it&apos;s an experience.
            </SheetDescription>
          </section>
        </section>
      </SheetHeader>
    </SheetContent>
  );
  const renderSearchBox = () => (
    <Dialog>
      <DialogTrigger asChild>
        <Image src={searchIcon} alt='search' />
      </DialogTrigger>
      <DialogContent className={cn( 'sm:max-w-[425px]', styles.searchBoxUi )}>
        <DialogTitle className='search-input'>
          <SearchIcon />
          <Input type='search' placeholder='Tìm kiếm...' />
        </DialogTitle>
        <DialogDescription className='search-result'>
          <span className='dark:!text-neutral_04'>Kết quả...</span>
          {uniqueArray( 10 ).map( item => (
            <Link key={item} className='dark:hover:!bg-neutral_04' href='ketqua'>
              Kết quả 1
            </Link>
          ) )}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
  return (
    <header
      className={cn(
        styles.headerWrapper,
        // eslint-disable-next-line max-len
        'iu-d-flexbetween media_width_sm supports-backdrop-blur:bg-white/95 sticky bottom-1 top-0 z-50 flex-none border-b border-solid border-slate-900/10 bg-white backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-slate-900/75'
      )}
    >
      <section className='iu-d-flexcenter header-logo gap-x-2'>
        <Sheet open={openMenuMobile} onOpenChange={setOpenMenuMobile}>
          <SheetTrigger>
            <MenuBars />
          </SheetTrigger>
          {renderMenuMobie()}
        </Sheet>
        <Logo />
      </section>
      <ul className='iu-d-flexbetween hidden md:gap-x-6 xl:gap-x-10'>
        {navigationLink.map( item => (
          <li key={item.id}>
            <Link className={checkMenuActive( item.href )} href={item.href}>
              {item.label}
            </Link>
          </li>
        ) )}
      </ul>
      <section className='iu-d-flexbetween relative cursor-pointer gap-x-4'>
        <PanelSearch />
        <Link className='hidden h-6 md:block' href={'/sign-in'}>
          <Image src={userIcon} width={24} height={24} alt='user' />
        </Link>
        <PanelCart />
      </section>
    </header>
  );
};

