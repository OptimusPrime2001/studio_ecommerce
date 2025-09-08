import { beVietnamPro } from '@lib/fonts';
import '@styles/index.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Studio Gear',
  description: 'Cung cấp các thiết bị quay chụp',
};

export default function RootLayout ( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={beVietnamPro.className}>
        {children}
      </body>
    </html>
  );
}
