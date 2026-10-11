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
    <section id="contact" className="scroll-mt-14 border-t">
      <div className="container grid items-end gap-8 py-14 md:grid-cols-2 md:py-20">
        <div>
          <h2 className="text-5xl font-extrabold tracking-tight md:text-6xl">Let's talk.</h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
            I'd love to chat about anything from software engineering to video games.
          </p>
        </div>
        <div className="md:justify-self-end md:text-right">
          <a
            href={`mailto:${siteConfig.email}`}
            className="link inline-block text-2xl font-semibold decoration-brand decoration-2 [overflow-wrap:anywhere] md:text-3xl"
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
                  className="button h-10 px-4"
                >
                  {link.title}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <footer className="border-t">
        <div className="container flex flex-wrap justify-between gap-2 py-5 font-mono text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}
          </span>
          <span>Salt Lake City, Utah</span>
        </div>
      </footer>
    </section>
  )
}
