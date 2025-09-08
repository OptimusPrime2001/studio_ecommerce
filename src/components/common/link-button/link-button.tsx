
import ArrowRightIcon from '@components/icons/arrow-right';
import { inter } from '@lib/fonts';
import { cn } from '@lib/utils';
import Link from 'next/link';
import styles from './link-button.module.scss';

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  currentColor?: string;
  reverseMode?: boolean;
};

const LinkButton: React.FC<LinkButtonProps> = ( { children, className, currentColor, reverseMode, href = '' } ) => {
  return (
    <Link
      href={href}
      className={cn(
        styles.linkButtonWrapper,
        className,
        reverseMode ? 'dark:hover:!border-neutral_07' : 'dark:hover:!border-neutral_00'
      )}
    >
      <span className={cn( inter.className, reverseMode ? 'dark:text-neutral_07' : 'dark:hover:!border-neutral_00' )}>
        {children}
      </span>
      <ArrowRightIcon currentColor={currentColor} />
    </Link>
  );
};
export default LinkButton;
