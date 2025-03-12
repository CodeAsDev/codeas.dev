'use client'

import { useState } from 'react'
import { CheckIcon, Clipboard } from 'lucide-react'

function CopyButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 3000)
  }

  function render() {
    if (isCopied) {
      return <CheckIcon className="size-4 text-green-700 dark:text-green-800" />
    }

    return <Clipboard className="size-4 hover:text-slate-600 text-white/40" />
  }

  return (
    <button disabled={isCopied} onClick={copy}>
      {render()}
    </button>
  )
}

export default CopyButton
