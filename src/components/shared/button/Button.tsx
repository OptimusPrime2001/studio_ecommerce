import { Button } from "@components/ui/button";
import { cn } from "@utils";
import styles from './Button.module.scss';

type CommonButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary';
  width?: 'full' | 'fit';
}

export const CommonButton: React.FC<CommonButtonProps> = ( props ) => {
  const { children, disabled, loading, variant = 'primary', width = 'fit', className } = props;
  const classVariant = variant === 'primary' ? styles.button_primary : styles.button_secondary;
  const classWidth = width === 'full' ? styles.full_width : styles.fit_width;

  return (
    <Button className={cn( styles.common_button, classVariant, classWidth, className )} disabled={disabled} >{children}</Button>
  )
}