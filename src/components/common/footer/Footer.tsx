'use client';
import Logo from '@common/logo/logo';
import { listSocialIcon, navigationLink } from '@lib/constant';
import { cn } from '@lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer_wrapper}>
      <div className={styles.footer_top}>
        <div className={styles.brand_section}>
          <Logo />
          <span className={styles.line} />
          <span className={styles.tagline}>Chụp chiếu ảnh</span>
        </div>
        <nav className={styles.navigation}>
          {navigationLink.map( item => (
            <Link href={item.href} key={item.id} className={cn( styles.nav_link, 'menu_hover_underline' )}>
              {item.label}
            </Link>
          ) )}
        </nav>
      </div>

      <div className={styles.footer_line} />
      <div className={styles.footer_bottom}>
        <div className={styles.copyright_section}>
          <span className={styles.copy_right}>Copyright © 2023 3legant. All rights reserved</span>
          <div className={styles.legal_links}>
            <Link href="/privacy" className={styles.legal_link}>Chính sách quyền riêng tư</Link>
            <Link href="/terms" className={styles.legal_link}>Điều khoản sử dụng</Link>
          </div>
        </div>
        <div className={styles.list_social}>
          {listSocialIcon.map( item => (
            <Link href={item.href} key={item.id} className={styles.social_link}>
              <Image src={item.icon} alt='icon social' />
            </Link>
          ) )}
        </div>
      </div>
    </footer>
  );
};

