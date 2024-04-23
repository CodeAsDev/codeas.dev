import Image from 'next/image'
import * as runtime from 'react/jsx-runtime'
import Callout from './callout'
import MdxPre from './mdx-pre'

function useMdxComponent(code: string) {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

const components = {
  Image,
  Callout,
  pre: MdxPre,
}

interface MdxProps {
  code: string
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMdxComponent(code)
  return <Component components={components} />
}
