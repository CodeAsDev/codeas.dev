import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { cn, sortPosts } from '@/lib/utils'
import Link from 'next/link'
import { posts } from '#site/content'
import PostItem from '@/components/post-item'
import { Metadata } from 'next'

const title = siteConfig.name
const description = 'Information about me'
const ogSearchParams = new URLSearchParams()
ogSearchParams.set('title', title)

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'article',
    url: `${siteConfig.url}`,
    images: [{ url: `/api/og?${ogSearchParams.toString()}`, width: 1600, height: 900, alt: title }],
  },
}

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5)

  return (
    <>
      <section className="container max-w-4xl space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl sm:text-4xl md:text-3xl lg:text-5xl font-bold text-balance">
            Hello&#44;&nbsp;&nbsp;I&apos;m Gavin
          </h1>
          <p className="max-w-[42rem] text-muted-foreground sm:text-xl text-pretty font-pht">
            Welcome to my digital space where I share what I&apos;m learning about shipping great
            products&#44;&nbsp;becoming a better developer and growing a career in tech&#46;
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/posts" className={cn(buttonVariants({ size: 'lg', variant: 'secondary' }), 'w-full sm:w-fit')}>
              View My Posts
            </Link>
            <Link
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'w-full sm:w-fit')}
              href={siteConfig.links.github}
              target="_blank"
            >
              Github
            </Link>
          </div>
        </div>
      </section>
      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-60">
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-semibold">Latest Posts</h2>
        <ul className="flex flex-col">
          {latestPosts.map(post => (
            <li key={post.slug} className="first:border-t first:border-border">
              <PostItem
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                tags={post.tags}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
