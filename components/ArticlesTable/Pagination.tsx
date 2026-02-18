'use client'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="flex items-center justify-between border-t border-(--color-card-border) pt-4 mt-4">
      <p className="text-sm text-(--color-text-secondary)">
        Page <span className="font-medium">{currentPage}</span> of <span className="font-medium">{totalPages || 1}</span>
      </p>
      
      <div className="flex gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className="px-3 py-1 text-sm border border-(--color-card-border) rounded-md bg-(--color-card-bg) text-(--color-text-primary) hover:bg-(--color-bg-secondary) disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Previous
        </button>
        
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="px-3 py-1 text-sm border border-(--color-card-border) rounded-md bg-(--color-card-bg) text-(--color-text-primary) hover:bg-(--color-bg-secondary) disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  )
}