import { siteConfig } from '@/config/site'
import { getAllTags, sortTagsByCount } from '@/lib/utils'
import { type Metadata } from 'next'
import { posts } from '#site/content'
import Tag from '@/components/tag'

const title = `Blog Tags | ${siteConfig.name}`
const description = 'This is CodeAsDev blog tags'
const ogSearchParams = new URLSearchParams()
ogSearchParams.set('title', title)

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'article',
    url: `${siteConfig.url}/tags`,
    images: [{ url: `/api/og?${ogSearchParams.toString()}`, width: 1600, height: 900, alt: title }],
  },
}

async function TagsPage() {
  const tags = getAllTags(posts)
  const sortedTags = sortTagsByCount(tags)

  return (
    <section className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-semibold text-xl lg:text-3xl">Tags</h1>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-4">
        {sortedTags?.map(tag => <Tag tag={tag} key={tag} count={tags[tag]} />)}
      </div>
    </section>
  )
}

export default TagsPage
