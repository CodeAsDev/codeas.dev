import { posts } from '#site/content'
import { MDXContent } from '@/components/mdx-components'
import { notFound } from 'next/navigation'

interface PostPageProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostPageProps['params']) {
  const slug = params?.slug.join('')
  return posts.find((post) => post.slugAsParams === slug)
}

export async function generateStaticParams(): Promise<PostPageProps['params'][]> {
  return posts.map((post) => ({ slug: post.slugAsParams.split('/') }))
}

async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)

  if (!post || !post.published) {
    notFound()
  }

  return (
    <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
      <h1 className="mb-2">{post.title}</h1>
      {post.description ? <p className="text-base mt-0 text-muted-foreground">{post.description}</p> : null}

      <hr className="my-4" />

      <MDXContent code={post.body} />
    </article>
  )
}

export default PostPage
