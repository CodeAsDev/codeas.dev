import { siteConfig } from '@/config/site'
import { Mail } from 'lucide-react'
import { Icons } from './icons'

function SiteFooter() {
  return (
    <footer>
      <div className="mb-6 mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <a target="_blank" rel="noreferrer" href="mailto:codeas.dev@gamil.com">
            <span className="sr-only">Mail</span>
            <Mail className="size-6" />
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.links.twitter}>
            <span className="sr-only">Twitter</span>
            <Icons.twitter className="size-6" />
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.links.github}>
            <span className="sr-only">Github</span>
            <Icons.gitHub className="size-6" />
          </a>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
          <a href={siteConfig.links.personalSite} target="_blank">
            {siteConfig.author}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
