import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import SiteHeader from '@/components/site-header'
import Providers from '@/components/providers'
import { siteConfig } from '@/config/site'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
}

function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const className = cn('min-h-screen bg-background font-sans antialiased', inter.variable)

  return (
    <html lang="en" suppressHydrationWarning className="scroll-pt-20">
      <body className={className}>
        <Providers>
          <div className="relative flex flex-col min-h-dvh bg-background">
            <SiteHeader />
            <main className="flex-1">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
export default RootLayout
