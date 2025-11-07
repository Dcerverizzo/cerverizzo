import React from 'react'

import './globals.css'
import { Inter } from 'next/font/google'
import Provider from './components/Provider'
import { type Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Daniel Cerverizzo',
  description: 'Personal site and blog of Daniel Cerverizzo — Software Engineer',
  metadataBase: new URL('https://cerverizzo.dev/'),
  openGraph: {
    images: '/images/og-image.png'
  },
  twitter: {
    card: 'summary_large_image'
  },
  icons: {
    icon: '/images/favicon-32x32.png',
    apple: '/images/apple-touch-icon.png'
  }
}

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Provider>
        <body className={`antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto ${inter.className} dark:bg-black`}>
          {children}
        </body>
      </Provider>
    </html>
  )
}
