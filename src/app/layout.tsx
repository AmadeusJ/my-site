import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Footer from '@/components/footer/Footer';
import AnimatePresenceWrapper from '@/components/wrapper/AnimatePresenceWrapper';
import ProviderWrapper from '@/components/wrapper/ProviderWrapper';
import { WebSocketProvider } from '@/components/context/WebSocketContext';
import '@/styles/globals.css';
import "react-vertical-timeline-component/style.min.css";

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
    default: 'Jung Dawoon',
    template: '%s | Jung Dawoon',
  },
  description: 'Jung Dawoon Portfolio',
  keywords: 'portfolio, jung dawoon, web development, software development',
  authors: [{ name: 'Jung Dawoon', url: 'https://jungdawoon.com' }],
  openGraph: {
    title: 'Jung Dawoon',
    description: 'Jung Dawoon Portfolio',
    url: 'https://jungdawoon.com',
    siteName: 'Jung Dawoon',
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
        <ProviderWrapper>
          <WebSocketProvider>
            <AnimatePresenceWrapper>
              {/* Main Content */}
              <main>{children}</main>
            </AnimatePresenceWrapper>
            <Footer />
          </WebSocketProvider>
        </ProviderWrapper>
      </body>
    </html>
  );
}
