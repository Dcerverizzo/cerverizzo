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

const themeScript = "(function(){try{var t=localStorage.getItem('portfolio-theme');var p=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t||p)}catch(e){}})();"

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Apply saved theme before first paint to avoid flash */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
