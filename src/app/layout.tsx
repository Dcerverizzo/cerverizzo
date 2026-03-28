import React from 'react'
import './globals.css'
import Provider from './components/Provider'
import { type Metadata } from 'next'

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
        <body className="antialiased">
          {children}
        </body>
      </Provider>
    </html>
  )
}
