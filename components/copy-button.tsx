'use client'

import { useState } from 'react'
import { CopyIcon, CheckIcon } from 'lucide-react'

function CopyButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 3000)
  }

  return (
    <button disabled={isCopied} onClick={copy}>
      {isCopied ? (
        <CheckIcon className="size-4 text-green-600 dark:text-green-800" />
      ) : (
        <CopyIcon className="size-4 hover:text-slate-500" />
      )}
    </button>
  )
}

export default CopyButton
