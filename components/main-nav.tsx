'use client'

import Link from 'next/link'
import { Icons } from './icons'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

function MainNav() {
  const pathname = usePathname()
  const links = [
    { href: '/', name: 'Home' },
    { href: '/blog', name: 'Blog' },
    { href: '/projects', name: 'Projects' },
    { href: '/about', name: 'About' },
  ]

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2 text-primary hover:text-primary/75">
        <Icons.logo className="size-6" />
        <span className="font-semibold text-xs sm:text-base">{siteConfig.name}</span>
      </Link>
      {links.map(({ href, name }) => (
        <Link
          href={href}
          key={href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-foreground hidden sm:inline-block',
            pathname === href
              ? 'text-foreground underline decoration-primary underline-offset-8'
              : 'text-muted-foreground',
          )}
        >
          {name}
        </Link>
      ))}
    </nav>
  )
}

export default MainNav
