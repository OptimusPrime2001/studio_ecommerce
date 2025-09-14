'use client';
import Logo from '@common/logo/logo';
import { categoryData, listSocialIcon, navigationLink } from '@lib/constant';
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

      <div className={styles.footer_bottom}>
        <div className={styles.copyright_section}>
          <h3 className={styles.footer_bottom_title}>Chính sách</h3>
          <ul className={styles.policy_list}>
            <li>
              <Link href="/terms" className={styles.policy_link}>Điều khoản sử dụng</Link>
            </li>
            <li>
              <Link href="/return" className={styles.policy_link}>Chính sách đổi trả</Link>
            </li>
            <li>
              <Link href="/privacy" className={styles.policy_link}>Chính sách giao hàng</Link>
            </li>
          </ul>

        </div>
        <div className={styles.contact_section}>
          <h3 className={styles.footer_bottom_title}>Liên hệ</h3>
          <p>Email: <Link href="mailto:contact@3legant.com" >contact@3legant.com</Link></p>
          <p>Phone: <Link href="tel:+1234567890" >+123 456 7890</Link></p>
        </div>
        <div className={styles.category_section}>
          <h3 className={styles.footer_bottom_title}>Danh mục sản phẩm</h3>
          <ul className={styles.category_list}>
            {categoryData.slice( 1 ).map( item => (
              <li key={item.id}>
                <Link href={item.href} className={styles.category_link}>{item.name}</Link>
              </li>
            ) )}

          </ul>
        </div>
      </div>
      <div className={styles.footer_end}>
        <span className={styles.copy_right}>Copyright © 2023 3legant. All rights reserved</span>
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

