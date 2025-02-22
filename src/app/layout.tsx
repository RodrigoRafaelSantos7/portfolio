import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { Header } from './header'

import { Footer } from './footer'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Rodrigo Santos - Software Engineer',
  // TODO: Add description
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} bg-white  antialiased dark:bg-[rgb(17,17,17)]`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute='class'
          storageKey='theme'
          defaultTheme='system'
        >
          <div className='flex min-h-screen w-full flex-col font-[family-name:var(--font-inter)]'>
            <div className='relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20'>
              <Header />
              {children}

              <Footer />
            </div>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
