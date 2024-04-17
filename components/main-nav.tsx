'use client'

import Link from 'next/link'
import { Icons } from './icons'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="size-6" />
        <span className="font-semibold text-xs sm:text-base">{siteConfig.name}</span>
      </Link>
      <Link
        href="/blog"
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block',
          pathname === '/blog' ? 'text-foreground' : 'text-foreground/50',
        )}
      >
        Blog
      </Link>
      <Link
        href="/projects"
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block',
          pathname === '/projects' ? 'text-foreground' : 'text-foreground/50',
        )}
      >
        Projects
      </Link>
      <Link
        href="/about"
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block',
          pathname === '/about' ? 'text-foreground' : 'text-foreground/50',
        )}
      >
        About
      </Link>
    </nav>
  )
}

export default MainNav
