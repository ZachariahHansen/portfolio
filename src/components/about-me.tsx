import { siteConfig } from '../config/site';

export function AboutMeSection() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">

        <p className="text-muted-foreground">
          Hey, I'm Zachariah Hansen. Through hard work and dedication, I'll be graduating with a 4 year degree in 3 years in Software Engineering.
        </p>

        <p className="text-muted-foreground">
          I worked for Motorola Solutions recently refining their code and I now work for Salt Lake Weekly, adding Swagger documentation to their backend and distributing their monolithic codebase into microservices.
        </p>

        <p className="text-muted-foreground font-medium">
          Connect with me on <a className="text-primary underline" href={siteConfig.links.linkedin}>LinkedIn</a>, <a className="text-primary underline" href={siteConfig.links.github}>Github</a> or <a className="text-primary underline" href={siteConfig.links.discord}>Discord</a>! I'd love to chat about anything from software engineering to video games.
        </p>
      </div>
    </div>
  )
}