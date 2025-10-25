"use client";
import { Minus } from "@components/icons/minus";
import { Plus } from "@components/icons/plus";
import { Button } from "@components/ui/button";
import { ButtonGroup } from "@components/ui/button-group";
import type React from "react";
import { useState } from "react";
import styles from "./QuantitySelector.module.scss";

type QuantitySelectorProps = {
  value: number;
  onValueChange: ( value: number ) => void;
};

export const QuantitySelector: React.FC<QuantitySelectorProps> = ( {
  value,
  onValueChange,
} ) => {
  const [quantity, setQuantity] = useState( value );
  const handleQuantityChange = ( value: number ) => {
    setQuantity( value );
    onValueChange( value );
  };
  return (
    <ButtonGroup
      className={styles.quantity_selector}
      orientation="horizontal"
      aria-label="Media controls"
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={() => handleQuantityChange( quantity + 1 )}
      >
        <Plus />
      </Button>
      <span className="dark:!text-neutral_03">{quantity}</span>
      <Button
        disabled={quantity === 1}
        variant="ghost"
        size="icon"
        onClick={() => handleQuantityChange( quantity - 1 )}
      >
        <Minus />
      </Button>
    </ButtonGroup>
  );
};
