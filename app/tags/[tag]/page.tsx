import { getAllTags, getPostsByTagSlug, sortTagsByCount } from '@/lib/utils'
import { posts } from '#site/content'
import PostItem from '@/components/post-item'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Tag from '@/components/tag'
import { siteConfig } from '@/config/site'
import { type Metadata } from 'next'
import { slug } from 'github-slugger'

interface TagPageProps {
  params: {
    tag: string
  }
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag } = params
  const title = `Blog Tag \`${tag}\` | ${siteConfig.name}`
  const description = 'This is CodeAsDev blog tags'
  const ogSearchParams = new URLSearchParams()
  ogSearchParams.set('title', title)

  const metadata: Metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `${siteConfig.url}/tags/${tag}`,
      images: [{ url: `/api/og?${ogSearchParams.toString()}`, width: 1600, height: 900, alt: title }],
    },
  }

  return metadata
}

export async function generateStaticParams({ params }: TagPageProps) {
  const tags = getAllTags(posts)
  return Object.keys(tags).map(tag => ({ tag: slug(tag) }))
}

function TagPage({ params }: TagPageProps) {
  const { tag } = params
  const title = tag.split('-').join(' ')

  const displayPosts = getPostsByTagSlug(posts, tag)
  const tags = getAllTags(posts)
  const sortedTags = sortTagsByCount(tags)

  function renderPosts() {
    if (!displayPosts.length) {
      return <p>Nothing to see here yet.</p>
    }

    return (
      <>
        <ul className="flex flex-col">
          {displayPosts.map(post => {
            const { slug, title, description, date, tags } = post
            return (
              <li key={slug}>
                <PostItem slug={slug} title={title} description={description} date={date} tags={tags} />
              </li>
            )
          })}
        </ul>
      </>
    )
  }

  return (
    <section className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1">
          <h1 className="inline-block font-bold text-lg md:text-3xl lg:text-5xl capitalize">{title}</h1>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 my-5 md:my-8 ">
        <div className="col-span-12 col-start-1 sm:col-span-8">
          <hr />
          {renderPosts()}
        </div>
        <Card className="col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {sortedTags.map(tag => (
              <Tag tag={tag} key={tag} count={tags[tag]} current={tag === title} />
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default TagPage
