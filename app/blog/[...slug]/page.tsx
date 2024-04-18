import { posts } from '#site/content'
import { MDXContent } from '@/components/mdx-components'
import { notFound } from 'next/navigation'
import '@/styles/mdx.css'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import Tag from '@/components/tag'

interface PostPageProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostPageProps['params']) {
  const slug = params?.slug.join('')
  return posts.find(post => post.slugAsParams === slug)
}

export async function generateStaticParams(): Promise<PostPageProps['params'][]> {
  return posts.map(post => ({ slug: post.slugAsParams.split('/') }))
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post || !post.published) {
    return {}
  }

  const { title, description, slug } = post
  const ogSearchParams = new URLSearchParams()
  ogSearchParams.set('title', title)

  return {
    title,
    description,
    authors: {
      name: siteConfig.author,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: slug,
      images: [{ url: `/apu/og?${ogSearchParams.toString()}`, width: 1600, height: 900, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ url: `/api/og?${ogSearchParams.toString()}`, width: 1600, height: 900, alt: title }],
    },
  }
}

async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)

  if (!post || !post.published) {
    notFound()
  }

  return (
    <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
      <h1 className="mb-2">{post.title}</h1>
      <div className="flex gap-2 my-2">{post.tags?.map(tag => <Tag tag={tag} key={tag} />)}</div>
      {post.description ? <p className="text-base mt-0 text-muted-foreground">{post.description}</p> : null}

      <hr className="my-4" />

      <MDXContent code={post.body} />
    </article>
  )
}

export default PostPage
