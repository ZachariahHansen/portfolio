import { siteConfig } from "@/config/site"
import { ArrowDown, Download } from "lucide-react"
import { FaDiscord, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import portrait from "@/assets/images/personal/portrait.webp"

const currentRoles = [
  { company: "DSD Labs", title: "Full-Stack Software Engineer", since: "April 2026" },
  { company: "Merits AI", title: "Full Stack Software Engineer", since: "Oct. 2025" },
]

const socials = [
  { title: "GitHub", href: siteConfig.links.github, icon: FaGithub },
  { title: "LinkedIn", href: siteConfig.links.linkedin, icon: FaLinkedin },
  { title: "Email", href: `mailto:${siteConfig.email}`, icon: FaEnvelope },
  { title: "Discord", href: siteConfig.links.discord, icon: FaDiscord },
]

export function Hero() {
  return (
    <section id="about" className="scroll-mt-14">
      <div className="container grid gap-4 pb-5 pt-6 lg:grid-cols-6 lg:pb-7 lg:pt-8">
        <div className="tile flex flex-col justify-between gap-8 md:p-10 lg:col-span-4">
          <div>
            <p className="tile-label">Software Engineer | Full Stack Developer</p>
            <h1 className="mt-4 text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
              Zachariah Hansen
            </h1>
            <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm a full stack engineer in Salt Lake City, originally from Las Vegas. I
                love designing new architecture and microservice projects, and the moment
                when a lot of separate pieces finally start working with each other.
              </p>
              <p>
                Lately that means getting the most out of AI. I hand-build MCP servers so
                Claude and other assistants can do real work inside the systems I look
                after, at <span className="text-foreground">DSD Labs</span> and{" "}
                <span className="text-foreground">Merits AI</span>.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#experience"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Read my résumé
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full border px-5 text-sm font-medium transition-colors hover:border-brand/60 hover:text-brand"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>
            <div className="flex items-center gap-1 sm:ml-auto">
              {socials.map(({ title, href, icon: Icon }) => (
                <a
                  key={title}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  title={title}
                  aria-label={title}
                  className="flex h-11 w-11 items-center justify-center rounded-full text-xl text-muted-foreground transition-colors hover:text-brand"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative aspect-square overflow-hidden rounded-2xl border lg:col-span-2 lg:aspect-auto lg:min-h-[20rem]">
          <img
            src={portrait}
            alt="Zachariah laughing, in a white hoodie"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="tile flex flex-wrap items-baseline gap-x-10 gap-y-3 lg:col-span-6">
          <p className="tile-label">Currently</p>
          {currentRoles.map((role) => (
            <p key={role.company} className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{role.company}</span>
              {" - "}
              {role.title}, since {role.since}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
