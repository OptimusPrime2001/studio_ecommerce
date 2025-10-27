import type { Metadata } from "next";
import type React from "react";
import { SidebarProvider } from "@components/ui/sidebar";
import { SidebarDashboard } from "./sidebar/Sidebar";
import { Header } from "./header/Header";
import styles from './LayoutDashboard.module.scss';

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "E-commerce Admin Dashboard",
  generator: "v0.app",
};

export const LayoutDashboard = ( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) => {
  return (
    <SidebarProvider >
      <SidebarDashboard />
      <Header />
      <main className={styles.main_dashboard}>
        <section className={styles.content_dashboard}>
          {children}
        </section>
      </main>
    </SidebarProvider>

  );
}
