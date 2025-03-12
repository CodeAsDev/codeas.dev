import { posts } from '#site/content'
import PostItem from '@/components/post-item'
import QueryPagination from '@/components/query-pagination'
import { getAllTags, sortPosts, sortTagsByCount } from '@/lib/utils'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Tag from '@/components/tag'

interface BlogPageProps {
  searchParams: {
    page?: string
  }
}

const POSTS_PER_PAGE = 5

const title = `Posts | ${siteConfig.name}`
const description = 'This is CodeAsDev blogs'
const ogSearchParams = new URLSearchParams()
ogSearchParams.set('title', title)

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'article',
    url: `${siteConfig.url}/posts`,
    images: [{ url: `/api/og?${ogSearchParams.toString()}`, width: 1600, height: 900, alt: title }],
  },
}

async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams.page ?? 1) || 1
  const sortedPosts = sortPosts(posts.filter(post => post.published))

  const displayPosts = sortedPosts.slice(POSTS_PER_PAGE * (currentPage - 1), POSTS_PER_PAGE * currentPage)
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE)
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

        <QueryPagination totalPages={totalPages} className="justify-end mt-4" />
      </>
    )
  }

  return (
    <section className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1">
          <h1 className="inline-block font-semibold text-lg md:text-3xl lg:text-5xl">Posts</h1>
          <p className="mt-2 md:mt-4 text-sm sm:text-xl text-muted-foreground">My ramblings on all things web dev.</p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 my-5 md:my-8 ">
        <div className="col-span-12 col-start-1 sm:col-span-8">
          <hr />
          {renderPosts()}
        </div>
        <Card className="col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1 border-none">
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {sortedTags.map(tag => (
              <Tag tag={tag} key={tag} count={tags[tag]} />
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default BlogPage
