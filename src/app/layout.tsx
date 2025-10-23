import { beVietnamPro } from "@utils";
import "@styles/index.scss";
import { TanstackQueryProvider } from "@providers/TanstackQueryProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio Gear",
  description: "Cung cấp các thiết bị quay chụp",
};
// Configure React Query with sensible defaults

export default function RootLayout ( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={beVietnamPro.className}>
        <TanstackQueryProvider>{children}</TanstackQueryProvider>
      </body>
    </html>
  );
}
