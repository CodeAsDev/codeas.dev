import { type Post } from '#site/content'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export function sortPosts(posts: Post[]) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1
    if (a.date > b.date) return 1
    return 0
  })
}
