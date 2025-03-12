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
    <>
      <div className="rounded-t-md w-full h-10 flex justify-between items-center py-2 px-4 text-sm bg-gray-900">
        <span className="font-apm-b uppercase text-white/85">{lang ?? null} </span>
        <span className="flex items-center">
          {filename ? <span className="font-apm-bi mr-3 text-green-700 dark:text-green-800">{filename}</span> : null}
          <CopyButton text={raw} />
        </span>
      </div>
      <pre {...props} className="rounded-t-none">
        {children}
      </pre>
    </>
  )
}

export default Pre
