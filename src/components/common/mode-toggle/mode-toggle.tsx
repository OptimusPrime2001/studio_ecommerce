"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { cn } from "@utils";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import styles from "./mode-toggle.module.scss";

export function ModeToggle () {
  const { setTheme, theme } = useTheme();
  return (
    <Button
      onClick={() => {
        if ( theme === "dark" ) {
          setTheme( "light" );
        } else {
          setTheme( "dark" );
        }
      }}
      className={cn(
        "h-6 w-6 rounded-full border-none bg-transparent shadow-none",
        styles.modeToggleWrapper,
      )}
      variant="outline"
      size="icon"
    >
      <SunIcon className={cn( "icon_mode dark:opacity-0" )} />
      <MoonIcon
        className={cn( "icon_mode absolute opacity-0 dark:opacity-100" )}
      />
    </Button>
  );
}
