'use client';
import ArrowRightIcon from '@components/icons/arrow-right';
import closeIcon from '@svgs/close.svg';
import voucherIcon from '@svgs/voucher.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './NotificationBar.module.scss';

export const NotificationBar = () => {
  const [renderVoucher, setRenderVoucher] = useState<boolean>( true );
  if ( !renderVoucher ) return null;
  return (
    <section className={styles.notification_bar}>
      <Image src={voucherIcon} width={24} height={24} alt='voucher' />
      <span className='text-center'>Giảm giá 30% trên toàn cửa hàng — Thời gian có hạn! </span>
      <Link className={styles.shop_now} href='/product'>
        <span>Mua ngay</span>
        <ArrowRightIcon currentColor='#377DFF' />
      </Link>
      <Image className={styles.close_icon} onClick={() => setRenderVoucher( false )} src={closeIcon} width={20} height={20} alt='close' />
    </section>
  );
};

