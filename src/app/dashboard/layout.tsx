import { LayoutDashboard } from "@ui-pages/dashboard";
import type { ReactNode } from "react";

export default function Layout ( { children }: { children: ReactNode } ) {
  return <LayoutDashboard>{children}</LayoutDashboard>
}
