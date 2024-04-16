import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { siteConfig } from '@/config/site'
import { Metadata } from 'next'

const title = `About Me | ${siteConfig.name}`
const description = 'Information about me'
const ogSearchParams = new URLSearchParams()
ogSearchParams.set('title', title)

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'article',
    url: `${siteConfig.url}/about`,
    images: [{ url: `/api/og?${ogSearchParams.toString()}`, width: 1600, height: 900, alt: title }],
  },
}

function About() {
  return (
    <section className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-bold text-lg md:text-3xl lg:text-5xl">About Me</h1>
        </div>
      </div>

      <hr className="my-8" />

      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="size-48">
            <AvatarImage src="/avatar.png" alt={siteConfig.author} />
            <AvatarFallback>CAD</AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-semibold text-center break-words">{siteConfig.author}</h2>
          <p className="text-muted-foreground text-center break-words">Software Developer</p>
        </div>
        <p className="text-muted-foreground text-lg py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repudiandae perferendis harum placeat, deleniti
          aliquid beatae molestias? Fugiat repellendus doloribus dolorum doloremque? Sed maiores quibusdam repellendus,
          quae quia omnis eum cumque. Reiciendis temporibus doloribus cum fugiat suscipit excepturi esse recusandae
          porro nemo earum totam quis iusto sapiente velit illo dolorem, eum consequuntur ea labore. Sapiente eos
          doloribus magnam, aliquid nobis optio repellat fugiat aspernatur nihil, ipsa minus illum, fugit dolore.
          Consectetur molestiae totam iusto inventore at error itaque, dignissimos corporis dolor vel, tenetur natus ut
          illum! Odio, quos fugiat, cum nisi eius culpa esse, itaque veniam ab ex libero modi?
        </p>
      </div>
    </section>
  )
}

export default About
