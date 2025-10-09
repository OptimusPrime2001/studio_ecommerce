
import { poppins } from '@lib/fonts';
import { cn } from '@lib/utils';
import Link from 'next/link';
import styles from './Logo.module.scss';

export const Logo = ( { className = '' } ) => {
  return (
    <Link className={cn( 'iu-d-flexcenter', poppins.className, styles.logo, className )} href='/'>
      Lightning Studio
    </Link>
  );
};

