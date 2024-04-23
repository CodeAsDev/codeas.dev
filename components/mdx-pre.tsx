import { type PropsWithChildren } from 'react'
import CopyButton from './copy-button'

interface MdxPreProps extends PropsWithChildren {
  raw: string
  'data-language': string
}

function Pre({ children, raw, ...props }: MdxPreProps) {
  const lang = props['data-language']

  return (
    <pre {...props} className="pt-0">
      <div className="mb-3 h-10 flex justify-between items-center py-2 px-4 text-sm bg-gray-900">
        {lang}
        <CopyButton text={raw} />
      </div>
      {children}
    </pre>
  )
}

export default Pre
