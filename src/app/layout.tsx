import React from 'react'
import './globals.css'
import Provider from './components/Provider'
import { type Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import localFont from 'next/font/local'

// Self-hosted (latin subset, variable weight) so builds never depend on Google Fonts
const syne = localFont({
  src: './fonts/Syne-latin.woff2',
  weight: '400 800',
  variable: '--font-syne',
  display: 'swap'
})

const dmSans = localFont({
  src: './fonts/DMSans-latin.woff2',
  weight: '300 700',
  variable: '--font-dm-sans',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Daniel Cerverizzo',
  description: 'Software Engineer Full Stack. Case studies, projetos e blog de Daniel Cerverizzo.',
  metadataBase: new URL('https://cerverizzo.dev/'),
  openGraph: {
    type: 'website',
    siteName: 'Daniel Cerverizzo',
    locale: 'pt_BR',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Daniel Cerverizzo — Software Engineer' }]
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
    <html lang="pt-BR" className={`${syne.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        {/* Apply saved theme before first paint to avoid flash */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <Provider>
          {children}
        </Provider>
        <Analytics />
      </body>
    </html>
  )
}
