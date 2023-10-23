import React from 'react';

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Provider from './components/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Daniel Cerverizzo',
  description: 'Create Front end Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
      <body className={`antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto ${inter.className} dark:bg-black`}>
        {children}
      </body>
    </html>
  );
}
