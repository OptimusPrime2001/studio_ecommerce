"use client";

import { Button } from "@components/ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@components/ui/popover";
import { cn } from "@utils";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import * as React from "react";
import styles from "./CommonSelect.module.scss";

type CommonSelectProps = {
  value: string;
  setValue: ( value: string ) => void;
  disabled?: boolean;
  placeholder: string;
  options: {
    value: string;
    label: string;
  }[];
};
export const CommonSelect = ( props: CommonSelectProps ) => {
  const { value, setValue, disabled, placeholder, options } = props;
  const [open, setOpen] = React.useState( false );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          disabled={disabled}
          aria-expanded={open}
          className={styles.select_trigger}
        >
          {value
            ? options.find( ( opt ) => opt.value === value )?.label
            : placeholder}
          <ChevronsUpDownIcon className={styles.select_icon} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={styles.select_content}>
        <Command>
          <CommandList>
            <CommandGroup className={styles.select_group}>
              {options.map( ( opt ) => (
                <CommandItem
                  className={styles.select_item}
                  key={opt.value}
                  value={opt.value}
                  onSelect={( currentValue ) => {
                    setValue( currentValue === value ? "" : currentValue );
                    setOpen( false );
                  }}
                >
                  {opt.label}
                  <CheckIcon
                    className={cn(
                      styles.select_check_icon,
                      value === opt.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ) )}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
