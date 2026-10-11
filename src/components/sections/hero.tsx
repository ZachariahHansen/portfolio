import { siteConfig } from "@/config/site"
import { ArrowDown, Download } from "lucide-react"
import { FaDiscord, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import zion from "@/assets/images/personal/zion-overlook.webp"

const currentRoles = [
  { company: "DSD Labs", title: "Full Stack Software Engineer", since: "April 2026" },
  { company: "Merits AI", title: "Full Stack Software Engineer, part-time", since: "Oct. 2025" },
]

const socials = [
  { title: "GitHub", href: siteConfig.links.github, icon: FaGithub },
  { title: "LinkedIn", href: siteConfig.links.linkedin, icon: FaLinkedin },
  { title: "Email", href: `mailto:${siteConfig.email}`, icon: FaEnvelope },
  { title: "Discord", href: siteConfig.links.discord, icon: FaDiscord },
]

export function Hero() {
  return (
    // Pulled up under the transparent header so the photo starts at the top of the page
    <section id="about" className="-mt-14">
      <div className="relative h-[600px] overflow-hidden sm:h-[680px] lg:h-[min(820px,92vh)]">
        <img
          src={zion}
          alt="Zachariah in a yellow cap looking out at a streaked red sandstone cliff in Zion"
          width={1000}
          height={750}
          className="absolute inset-0 h-full w-full object-cover object-[22%_50%] lg:object-[30%_50%]"
        />
        <div className="absolute inset-0 bg-background/30" aria-hidden="true" />
        <div className="container absolute inset-x-0 bottom-7 flex flex-col gap-3 sm:bottom-12 lg:gap-4">
          <p className="label text-foreground">
            Emerald Pools, Zion
            <span className="mx-2">·</span>
            Software engineer, Salt Lake City
          </p>
          <h1 className="text-[58px] font-extrabold leading-[0.95] tracking-[-0.035em] sm:text-8xl lg:text-[112px]">
            Zachariah Hansen
          </h1>
          <p className="max-w-2xl text-lg font-medium leading-snug sm:text-2xl">
            Full stack engineer focused on getting the most out of AI.
          </p>
        </div>
      </div>

      <div className="container grid gap-6 py-6 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-12 lg:py-8">
        <div className="max-w-measure space-y-4 leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            I hand-build MCP servers so Claude and other assistants can do real work
            inside the systems I look after, at{" "}
            <span className="text-foreground">DSD Labs</span> and{" "}
            <span className="text-foreground">Merits AI</span>. On the side, I patched
            Wine so Steam runs on Apple Silicon.
          </p>
          <p>
            I'm in Salt Lake City, originally from Las Vegas. I love designing new
            architecture, and the moment when a lot of separate pieces finally start
            working with each other.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:flex-col lg:items-end">
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="button-solid">
              See my projects
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="button sm:hidden"
            >
              <Download className="h-4 w-4" />
              Résumé
            </a>
          </div>
          <div className="flex items-center gap-1 sm:ml-auto lg:ml-0">
            {socials.map(({ title, href, icon: Icon }) => (
              <a
                key={title}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                title={title}
                aria-label={title}
                className="flex h-11 w-11 items-center justify-center text-xl text-muted-foreground transition-colors hover:text-brand"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container grid gap-x-10 gap-y-2 py-4 text-sm text-muted-foreground md:grid-cols-[auto_1fr] md:items-baseline">
          <p className="label text-brand">Currently</p>
          <div className="flex flex-wrap gap-x-10 gap-y-2">
            {currentRoles.map((role) => (
              <p key={role.company}>
                <span className="font-semibold text-foreground">{role.company}</span>
                {" - "}
                {role.title}, since {role.since}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
