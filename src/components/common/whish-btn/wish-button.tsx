
import HeartIcon from '@components/icons/heart';
import { Button } from '@components/ui/button';
import { cn } from '@lib/utils';
import styles from './wish-button.module.scss';

type WhishButtonProps = {
  handleClick?: () => void;
  className?: string;
};

const WhishButton: React.FC<WhishButtonProps> = ( { handleClick, className } ) => {
  return (
    <Button onClick={handleClick} className={cn( styles.whishButtonWrapper, className )}>
      <HeartIcon className='!text-primary_blur' />
    </Button>
  );
};

export default WhishButton;
