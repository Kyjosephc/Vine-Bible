import type { Metadata } from 'next';
import { Inter, Newsreader } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/i18n';
import { KidsProvider } from '@/components/KidsMode';
import OnboardingGate from '@/components/OnboardingGate';
import Nav from '@/components/Nav';
import RouteTracker from '@/components/RouteTracker';
import TextScale from '@/components/TextScale';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const newsreader = Newsreader({ subsets: ['latin'], variable: '--font-newsreader', display: 'swap' });

// next/font CSS-variable classes are referenced from tailwind.config.ts
// (fontFamily.display -> var(--font-newsreader), fontFamily.sans -> var(--font-inter)).
export const metadata: Metadata = {
  title: 'Halo',
  description:
    'Study Scripture deeply: guided lessons and quizzes, reading plans, journaling, and a full offline-capable Bible.',
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/favicon.svg',
    apple: '/icons/apple-touch-icon-180.png',
  },
};

export const viewport = {
  themeColor: '#101828',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${newsreader.variable} font-sans antialiased`}>
        <LanguageProvider>
          <KidsProvider>
            <a href="#main-content" className="skip-link">
              Skip to content
            </a>
            <OnboardingGate />
            <TextScale />
            <RouteTracker />
            <Nav />
            <main id="main-content" className="mx-auto w-full max-w-5xl px-4 pb-24 pt-6 sm:px-6">
              {children}
            </main>
          </KidsProvider>
        </LanguageProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `if ('serviceWorker' in navigator) { window.addEventListener('load', function () { navigator.serviceWorker.register('/sw.js').catch(function () {}); }); }`,
          }}
        />
      </body>
    </html>
  );
}
