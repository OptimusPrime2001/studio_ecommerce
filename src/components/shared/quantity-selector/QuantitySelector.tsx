'use client'
import React from 'react';
import { Minus } from '@components/icons/minus';
import { Plus } from '@components/icons/plus';
import { ButtonGroup } from '@components/ui/button-group';
import { Button } from '@components/ui/button';
import styles from './QuantitySelector.module.scss';
type QuantitySelectorProps = {
  value: number;
  onChange: ( value: number ) => void;
};

export const QuantitySelector: React.FC<QuantitySelectorProps> = ( { value, onChange } ) => {
  return (
    <ButtonGroup className={styles.quantity_selector} orientation="horizontal"
      aria-label="Media controls">
      <Button variant="ghost" size="icon" onClick={() => onChange( value + 1 )}>
        <Plus />
      </Button>
      <span className='dark:!text-neutral_03'>{value}</span>
      <Button variant="ghost" size="icon" onClick={() => onChange( value - 1 )}>
        <Minus />
      </Button>
    </ButtonGroup>
  );
};

