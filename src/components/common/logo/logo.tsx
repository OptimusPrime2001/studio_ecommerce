
import { poppins } from '@lib/fonts';
import { cn } from '@lib/utils';
import Link from 'next/link';
import styles from './logo.module.scss';

const Logo = ( { className = '' } ) => {
  return (
    <Link className={cn( 'iu-d-flexcenter', poppins.className, styles.logo, className )} href='/'>
      Lightning Studio
    </Link>
  );
};

export default Logo;
