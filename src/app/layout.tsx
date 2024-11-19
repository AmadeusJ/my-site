import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Footer from '@/components/footer/Footer';
import AnimatePresenceWrapper from '@/components/AnimatePresenceWrapper';
import '@/styles/globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: {
    default: 'My Portfolio',
    template: '%s | My Portfolio',
  },
  description: 'My Portfolio',
  keywords: 'portfolio, my portfolio, web development, software development',
  authors: [{ name: 'My Portfolio', url: 'https://myportfolio.com' }],
  openGraph: {
    title: 'My Portfolio',
    description: 'My Portfolio',
    url: 'https://myportfolio.com',
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AnimatePresenceWrapper>
          {/* Main Content */}
          <main>{children}</main>
        </AnimatePresenceWrapper>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
