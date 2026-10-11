import { siteConfig } from "@/config/site"
import { ArrowUpRight } from "lucide-react"

const links = [
  { title: "LinkedIn", href: siteConfig.links.linkedin },
  { title: "GitHub", href: siteConfig.links.github },
  { title: "Discord", href: siteConfig.links.discord },
]

const [emailUser, emailDomain] = siteConfig.email.split("@")

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-14">
      <div className="container py-5 md:py-7">
        <div className="tile grid items-end gap-6 p-8 md:grid-cols-2 md:p-10">
          <div>
            <p className="tile-label">Contact</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Let's talk.</h2>
            <p className="mt-3 max-w-md text-lg leading-relaxed text-muted-foreground">
              I'd love to chat about anything from software engineering to video games.
            </p>
          </div>
          <div className="md:justify-self-end md:text-right">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-block text-xl font-medium underline decoration-brand decoration-2 underline-offset-8 transition-colors [overflow-wrap:anywhere] hover:text-brand md:text-2xl"
            >
              {/* Lets a narrow screen wrap after the @ instead of mid-word */}
              {emailUser}@<wbr />
              {emailDomain}
            </a>
            <ul className="mt-6 flex flex-wrap gap-2 md:justify-end">
              {links.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border px-4 py-2 text-sm transition-colors hover:border-brand/60 hover:text-brand"
                  >
                    {link.title}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <footer className="mt-5 border-t">
        <div className="container py-5 text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}
        </div>
      </footer>
    </section>
  )
}
