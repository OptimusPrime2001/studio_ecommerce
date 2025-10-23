import { useEffect, useState } from "react";

export enum EnumScreenSize {
  xs = 410,
  sm = 640,
  md = 768,
  ipadair = 821,
  lg = 1024,
  xl = 1280,
  "2xl" = 1440,
  "3xl" = 1536,
}
type ScreenSizeKey = keyof typeof EnumScreenSize;
export const useResponsive = () => {
  const [currentView, setCurrentView] = useState<ScreenSizeKey>("xs");

  const handleResize = () => {
    const width = window.innerWidth;
    // Define your breakpoints here
    const breakpoints = {
      xs: EnumScreenSize.xs,
      sm: EnumScreenSize.sm,
      md: EnumScreenSize.md,
      ipadair: EnumScreenSize.ipadair,
      lg: EnumScreenSize.lg,
      xl: EnumScreenSize.xl,
      "2xl": EnumScreenSize["2xl"],
      "3xl": EnumScreenSize["3xl"],
    };

    let newView = "xs";
    for (const [key, value] of Object.entries(breakpoints)) {
      if (width >= value) {
        newView = key;
      }
    }
    setCurrentView(newView as ScreenSizeKey);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    currentView,
    size: EnumScreenSize[currentView],
  };
};
