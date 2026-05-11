import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Solomax',
  description: 'A modern full-stack application',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
