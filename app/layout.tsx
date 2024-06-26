import type { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import SiteHeader from '@/components/site-header'
import Providers from '@/components/providers'
import { siteConfig } from '@/config/site'
import SiteFooter from '@/components/site-footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const className = cn('min-h-screen bg-background font-sans antialiased', inter.variable)

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-pt-20 scrollbar-thin scrollbar-corner-rounded scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-slate-500/50 scrollbar-track-sky-500/[0.16]"
    >
      <body className={className}>
        <Providers>
          <div className="relative flex flex-col min-h-dvh bg-background">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  )
}
export default RootLayout
