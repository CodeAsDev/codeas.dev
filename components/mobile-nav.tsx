'use client'

import { type ReactNode, useState } from 'react'
import { Sheet, SheetTrigger, SheetContent } from './ui/sheet'
import { Button } from './ui/button'
import { MenuIcon } from 'lucide-react'
import Link, { type LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'
import { Icons } from './icons'
import { siteConfig } from '@/config/site'

function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 sm:hidden">
          <MenuIcon className="size-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <Icons.logo className="mr-2 size-4" />
          <span className="font-semibold text-xs">{siteConfig.name}</span>
        </MobileLink>
        <div className="flex flex-col gap-3 mt-3">
          <MobileLink href="/blog" onOpenChange={setOpen}>
            Blog
          </MobileLink>
          <MobileLink href="/about" onOpenChange={setOpen}>
            About
          </MobileLink>
          <Link target="_blank" rel="noreferrer" href={siteConfig.links.github}>
            Github
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.twitter}
          >
            Twitter
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav

interface MobileLinkProps extends LinkProps {
  children?: ReactNode
  className?: string
  onOpenChange?: (open: boolean) => void
}

function MobileLink(props: MobileLinkProps) {
  const { href, children, className, onOpenChange, ...restProps } = props
  const router = useRouter()

  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      {...restProps}
    >
      {children}
    </Link>
  )
}