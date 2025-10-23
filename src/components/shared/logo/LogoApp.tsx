import { cn, poppins } from "@utils";
import Link from "next/link";
import styles from "./Logo.module.scss";

export const LogoApp = ( { className = "" } ) => {
  return (
    <Link
      className={cn(
        "iu-d-flexcenter",
        poppins.className,
        styles.logo,
        className,
      )}
      href="/"
    >Lightning Bách</Link>
  );
};
