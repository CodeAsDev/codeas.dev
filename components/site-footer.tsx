import { siteConfig } from '@/config/site'
import { Mail } from 'lucide-react'
import { Icons } from './icons'

function SiteFooter() {
  return (
    <footer>
      <div className="mb-8 mt-16 flex flex-col items-center">
        <div className="mb-4 flex space-x-4">
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
        <div className="mb-4 space-x-2 text-xs text-muted-foreground">
          Built with &nbsp;
          <a href="https://nextjs.org" rel="noreferrer" className="hover:underline underline-offset-4" target="_blank">
            Next.js
          </a>
          &#44;
          <a href="https://mdxjs.com" rel="noreferrer" className="hover:underline underline-offset-4" target="_blank">
            MDX
          </a>
          &#44;
          <a
            href="https://tailwindcss.com"
            rel="noreferrer"
            className="hover:underline underline-offset-4"
            target="_blank"
          >
            Tailwind
          </a>
          &nbsp;and
          <a
            href="https://www.docker.com"
            rel="noreferrer"
            className="hover:underline underline-offset-4"
            target="_blank"
          >
            Docker
          </a>
          &#44;&nbsp;By
          <a
            href={`${siteConfig.links.personalSite}/about`}
            target="_self"
            className="hover:underline underline-offset-4"
          >
            {siteConfig.author}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
