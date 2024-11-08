import { Cursor } from '@/components/cursor'
import { Header } from '@/components/header'
import { Noise } from '@/components/noise'
import RealViewport from '@/components/real-viewport'
import { Scrollbar } from '@/components/scrollbar'
import '@/styles/global.scss'
import cn from 'clsx'
import type { Metadata } from 'next'
import s from './layout.module.scss'

export const metadata: Metadata = {
  title: 'Rodrigo S. · Frontend Developer and Computer Science Student',
  description:
    'Rodrigo Santos is a Computer Science Student by day and a ' +
    'Frontend Developer by night.',
  keywords: [
    'Rodrigo',
    'Santos',
    'UX',
    'UI',
    'userexperience',
    'webdesign',
    'webdeveloper',
    'design',
    'codedesign',
    'code',
    'hashtag',
    'development',
    'website',
    'websitedevelopment',
    'webservices',
    'art direction',
    'strategy',
    'web',
    'murals',
    'frontend',
    'developer',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(`theme-dark`, s.layout)} suppressHydrationWarning>
        <RealViewport />
        <Noise />
        <Cursor />
        <Scrollbar />
        <Header principles={['Drugs', 'extasy']} contact={null} />
        <main className={s.main}>{children}</main>
      </body>
    </html>
  )
}
