import { Calendar, MoveRight } from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { cn, formatDate } from '@/lib/utils'
import Tag from './tag'

interface PostItemProps {
  slug: string
  title: string
  description?: string
  date: string
  tags?: string[]
}

function PostItem({ slug, title, description, date, tags }: PostItemProps) {
  return (
    <article className="flex flex-col gap-2 border-border border-b py-3">
      <div>
        <h2 className="text-xl font-medium">
          <Link href={`/${slug}`}>{title}</Link>
        </h2>
      </div>
      <div className="flex gap-2">{tags?.map(tag => <Tag tag={tag} key={tag} />)}</div>
      <p className="max-w-none text-muted-foreground">{description}</p>
      <div className="flex justify-between items-center">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="text-xs sm:text-sm font-medium flex items-center gap-1 text-foreground/60">
            <Calendar className="size-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <Link href={slug} className={cn(buttonVariants({ variant: 'link' }), 'py-0 group text-foreground/70')}>
          Read more
          <MoveRight className="ml-2 size-3 transition-transform translate-x-0 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}

export default PostItem
