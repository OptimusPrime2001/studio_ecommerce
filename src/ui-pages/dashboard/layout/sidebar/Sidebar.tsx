'use client'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@components/ui/sidebar";
import { SIDEBAR_MENU } from "@constants/dashboard";
import CartLogo from '@svgs/cartLogo.svg';
import Image from "next/image";
import Link from "next/link";
import styles from './Sidebar.module.scss';
import { usePathname } from "next/navigation";
export const SidebarDashboard = ( { ...props }: React.ComponentProps<typeof Sidebar> ) => {
  const pathName = usePathname();
  return (
    <Sidebar {...props} className={styles.sidebar_wrapper}>
      <SidebarHeader >
        <Link className={styles.sidebar_header} href="/">
          <Image src={CartLogo} height={40} width={40} alt="logo" />
          <span> Bách Lightning</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}

        <SidebarGroup >
          <SidebarGroupLabel className={styles.sidebar_group_label}>Quản lý</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className={styles.sidebar_menu}>
              {SIDEBAR_MENU.map( ( menu ) => (
                <SidebarMenuItem className={styles.menu_item} key={menu.title}>
                  <SidebarMenuButton className={styles.menu_button} asChild isActive={pathName === menu.url}>
                    <Link href={menu.url}>  <menu.icon className="w-5 h-5" /> {menu.title}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ) )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
