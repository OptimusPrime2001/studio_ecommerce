"use client";
import { LogoApp } from "@components";
import { MENU_NAVIGATION } from "@lib/constants";
import userIcon from "@svgs/userIcon.svg";
import { cn } from "@utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PanelCart } from "./components/panel-cart";
import { PanelSearch } from "./components/panel-search";
import styles from "./Header.module.scss";

export const Header = () => {
  const pathname = usePathname();
  const checkMenuActive = (label: string) => {
    return pathname === label ? "menu_active" : "menu_link";
  };

  return (
    <header className={styles.headerWrapper}>
      <section className="iu-d-flexcenter header-logo gap-x-2">
        <LogoApp />
      </section>
      <ul className="iu-d-flexbetween hidden md:gap-x-6 xl:gap-x-10">
        {MENU_NAVIGATION.map((item) => (
          <li key={item.id}>
            <Link
              className={cn(checkMenuActive(item.href), "menu_hover_underline")}
              href={item.href}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <section className="iu-d-flexbetween relative cursor-pointer gap-x-4">
        <PanelSearch />
        <Link className="hidden h-fit md:block" href="/dashboard">
          <Image src={userIcon} width={24} height={24} alt="user" />
        </Link>
        <PanelCart />
      </section>
    </header>
  );
};
