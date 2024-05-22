import { siteConfig } from '@/config/site'
import { type Metadata } from 'next'

const title = `Projects | ${siteConfig.name}`
const description = 'Project gallery'
const ogSearchParams = new URLSearchParams()
ogSearchParams.set('title', title)

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'article',
    url: `${siteConfig.url}/projects`,
    images: [{ url: `/api/og?${ogSearchParams.toString()}`, width: 1600, height: 900, alt: title }],
  },
}

function Projects() {
  return (
    <section className="container text-center my-10 max-w-6xl">
      <h1>Comming Soon...</h1>
    </section>
  )
}

export default Projects
