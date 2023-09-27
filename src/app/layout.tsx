import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Daniel Cerverizzo',
  description: 'Create Front end Developer',
};

export default function RootLayout({
  children,
  isDarkMode,
}: {
  children: React.ReactNode;
  isDarkMode: boolean;
}) {
  return (
    <html lang="en" className='text-black bg-white dark:text-white dark:bg-[#111010] __variable_6820b1'>
      <body className={`antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto ${inter.className}`}>{children}</body>
      </html>
  );
}
