import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import ThemeRegistry from '@/theme/ThemeRegistry';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Interview Practice',
  description: 'Full-stack app for technical interview practice',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
