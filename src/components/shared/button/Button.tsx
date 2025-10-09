import { Button } from "@components/ui/button";
import { cn } from "@lib/utils";
import styles from './Button.module.scss';

type CommonButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary';
}

export const CommonButton: React.FC<CommonButtonProps> = ( props ) => {
  const { children, disabled, loading, variant = 'primary' } = props;
  const classVariant = variant === 'primary' ? styles.button_primary : styles.button_secondary;
  return (
    <Button className={cn( styles.common_button, classVariant )} disabled={disabled} >{children}</Button>
  )
}