import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { Icons } from './icons'
import MainNav from './main-nav'
import MobileNav from './mobile-nav'

function SiteHeader() {
  return (
    <header className="z-10 sticky top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-5xl flex items-center h-14">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <div className={cn(buttonVariants({ variant: 'ghost' }), 'w-10 px-0 hidden sm:inline-flex')}>
                <Icons.gitHub className="size-4" />
                <span className="sr-only">Github</span>
              </div>
            </Link>
            <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
              <div className={cn(buttonVariants({ variant: 'ghost' }), 'w-10 px-0 hidden sm:inline-flex')}>
                <Icons.twitter className="size-4" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
