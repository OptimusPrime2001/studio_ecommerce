import CountIcon from "@common/count-icon/count-icon"
import { Logo } from "@common/logo/Logo"
import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import { SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@components/ui/sheet"
import CloseIcon from "@icons/close"
import HeartIcon from "@icons/heart"
import MenuBars from "@icons/menu-bars"
import { ICONS_SOCIAL, MENU_NAVIGATION } from "@lib/constants"
import { cn } from "@utils"
import { Link, SearchIcon, Sheet, ShoppingBag } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState } from "react"

type MenuMobileProps = {}

export const MenuMobile: React.FC<MenuMobileProps> = () => {
  const [openMenuMobile, setOpenMenuMobile] = useState<boolean>( false );
  const pathname = usePathname();
  const checkMenuActive = ( label: string ) => {
    return pathname === label ? 'menu_active' : 'menu_link';
  };
  return (
    <Sheet open={openMenuMobile} onOpenChange={setOpenMenuMobile}>
      <SheetTrigger>
        <Button variant='ghost'>
          <MenuBars />
        </Button>
      </SheetTrigger>
      <SheetContent
        datatype='menu_mobile'
        side='left'
        className={cn( 'w-[90%] overflow-y-auto pb-0 ipadair:hidden' )}
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
                {MENU_NAVIGATION.map( item => (
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
                {ICONS_SOCIAL.map( item => (
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
    </Sheet>
  )
}