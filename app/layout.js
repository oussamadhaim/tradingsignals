import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'TradingSignals | Quantitative Asset Management',
  description: 'Proprietary quantitative strategies on global futures markets. Systematic, risk-managed, and reserved for qualified investors.',
  keywords: 'quantitative strategies, futures, asset management, institutional, HNWI',
  openGraph: {
    title: 'TradingSignals | Quantitative Asset Management',
    description: 'Systematic strategies built on mathematics, statistics, and artificial intelligence.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
