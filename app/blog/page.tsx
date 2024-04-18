import { posts } from '#site/content'
import PostItem from '@/components/post-item'
import QueryPagination from '@/components/query-pagination'
import { sortPosts } from '@/lib/utils'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'

interface BlogPageProps {
  searchParams: {
    page?: string
  }
}

const POSTS_PER_PAGE = 5

const title = `My Blog | ${siteConfig.name}`
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
    url: `${siteConfig.url}/blog`,
    images: [{ url: `/api/og?${ogSearchParams.toString()}`, width: 1600, height: 900, alt: title }],
  },
}

async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams.page ?? 1) || 1
  const sortedPosts = sortPosts(posts.filter(post => post.published))

  const displayPosts = sortedPosts.slice(POSTS_PER_PAGE * (currentPage - 1), POSTS_PER_PAGE * currentPage)
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE)

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
    <section className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1">
          <h1 className="inline-block font-bold text-lg md:text-3xl lg:text-5xl">Blog</h1>
          <p className="mt-2 md:mt-4 text-sm sm:text-xl text-muted-foreground">My ramblings on all things web dev.</p>
        </div>
      </div>

      <hr className="mt-5 md:mt-8" />

      {renderPosts()}
    </section>
  )
}

export default BlogPage
