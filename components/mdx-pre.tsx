import { type PropsWithChildren } from 'react'
import CopyButton from './copy-button'

interface MdxPreProps extends PropsWithChildren {
  raw: string
  'data-language'?: string
  filename?: string
}

function Pre({ children, raw, filename, ...props }: MdxPreProps) {
  const lang = props['data-language']

  return (
    <pre {...props} className="pt-0">
      <div className="mb-3 h-10 flex justify-between items-center py-2 px-4 text-sm bg-gray-900">
        <span className="uppercase">{lang ?? null} </span>
        <span className="flex items-center">
          {filename ? <span className="italic mr-4 text-green-700 dark:text-green-900">{filename}</span> : null}
          <CopyButton text={raw} />
        </span>
      </div>
      {children}
    </pre>
  )
}

export default Pre
