import { posts } from '#site/content'
import PostItem from '@/components/post-item'
import { sortPosts } from '@/lib/utils'

async function BlogPage() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published))
  const displayPosts = sortedPosts

  function renderPosts() {
    if (!displayPosts.length) {
      return <p>Nothing to see here yet.</p>
    }

    return (
      <ul className="flex flex-col">
        {displayPosts.map((post) => {
          const { slug, title, description, date } = post
          return (
            <li key={slug}>
              <PostItem slug={slug} title={title} description={description} date={date} />
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <section className="container max-w-4x py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1">
          <h1 className="inline-block font-semibold text-lg md:text-3xl lg:text-5xl">Blog</h1>
          <p className="mt-2 md:mt-4 text-sm sm:text-xl text-muted-foreground">My ramblings on all things web dev.</p>
        </div>
      </div>

      <hr className="mt-5 md:mt-8" />

      {renderPosts()}
    </section>
  )
}

export default BlogPage
