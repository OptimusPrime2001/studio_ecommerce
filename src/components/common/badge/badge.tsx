
import { inter } from '@lib/fonts';
import { cn } from '@lib/utils';
import styles from './badge.module.scss';

type BadgeProps = {
  label: string | number;
  className?: string | number;
};

const Badge: React.FC<BadgeProps> = ( { label, className } ) => {
  return (
    <span className={cn( 'text-neutral_07 bg-white', className, styles.badgeWrapper, inter.className )}>{label}</span>
  );
};

export default Badge;
