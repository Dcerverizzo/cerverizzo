import React from 'react';

import './globals.css';
import { Inter } from 'next/font/google';
import Provider from './components/Provider';

const inter = Inter({ subsets: ['latin'] });
interface LayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function RootLayout({
  children, title, description
}: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="images/og-image.png" />
        <meta property="og:url" content="https://danielcerverizzo.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png" />
        <link rel="manifest" href="images/site.webmanifest"></link>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WZSTD0P2R9"></script>
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-WZSTD0P2R9');`
        }}>
        </script>
      </head>
      <Provider>
        <body className={`antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto ${inter.className} dark:bg-black`}>
          {children}
        </body>
      </Provider>
    </html>
  );
}
