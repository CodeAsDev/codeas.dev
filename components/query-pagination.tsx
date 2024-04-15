'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './ui/pagination'

interface QueryPaginationProps {
  totalPages: number
  className?: string
}

function QueryPagination({ totalPages, className }: QueryPaginationProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const currentPage = Number(searchParams.get('page') ?? 1) || 1
  const prevPage = currentPage - 1
  const nextPage = currentPage + 1

  function createPageUrl(pageNumber: number | string) {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  return (
    <Pagination className={className}>
      <PaginationContent>
        {prevPage >= 1 ? (
          <PaginationItem>
            <PaginationPrevious href={createPageUrl(prevPage)} />
          </PaginationItem>
        ) : null}
        {Array(totalPages)
          .fill('')
          .map((_, page) => (
            <PaginationItem className="hidden sm:inline-block" key={`page-button-${page}`}>
              <PaginationLink isActive={page + 1 === currentPage} href={createPageUrl(page + 1)}>
                {page + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        {nextPage <= totalPages ? (
          <PaginationItem>
            <PaginationNext href={createPageUrl(nextPage)} />
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  )
}

export default QueryPagination
