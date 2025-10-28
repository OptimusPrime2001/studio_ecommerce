"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { SidebarTrigger, useSidebar } from "@components/ui/sidebar";
import { cn } from "@utils";
import { Bell, Search } from "lucide-react";
import styles from "./Header.module.scss";

export function Header() {
  const { open } = useSidebar();

  return (
    <header
      className={cn(
        styles.dashboard_header,
        open && styles.dashboard_header_open,
      )}
    >
      <SidebarTrigger />
      <h1 className={styles.dashboard_title}>Dashboard </h1>
      <div className={styles.header_bar}>
        <div className={styles.search}>
          <div className={styles.search_box}>
            <Search className={styles.search_icon} />
            <Input placeholder="Search" className={styles.search_input} />
          </div>
        </div>

        <div className={styles.actions}>
          <Button variant="ghost" size="icon" className={styles.action_bell}>
            <Bell />
          </Button>
          <div className={styles.action_account}>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className={styles.account_label}>Bách</span>
          </div>
        </div>
      </div>
    </header>
  );
}
