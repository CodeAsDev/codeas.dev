import { cn } from '@/lib/utils'
import { slug } from 'github-slugger'
import Link from 'next/link'
import { badgeVariants } from './ui/badge'

// slug('rehype pretty') => 'rehype-pretty'

interface TagProps {
  tag: string
  current?: boolean
  count?: number
}

function Tag({ tag, current, count }: TagProps) {
  return (
    <Link
      href={`/tags/${slug(tag)}`}
      className={cn(
        badgeVariants({ variant: current ? 'default' : 'secondary', className: 'no-underline rounded-md' }),
      )}
    >
      {tag}
    </Link>
  )
}

export default Tag
