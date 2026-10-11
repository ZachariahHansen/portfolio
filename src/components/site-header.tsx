import { useEffect, useState } from "react"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Download, Menu, X } from "lucide-react"

// Highlights the nav link for whichever section is crossing the middle of the viewport
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: "-45% 0px -55% 0px" }
    )
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [ids])

  return active
}

const sectionIds = siteConfig.mainNav.map((item) => item.href.slice(1))

export function SiteHeader() {
  const active = useActiveSection(sectionIds)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [menuOpen])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b backdrop-blur-md",
        menuOpen ? "bg-background" : "bg-background/75"
      )}
    >
      <div className="container flex h-14 items-center justify-between gap-4">
        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className="text-base font-semibold tracking-tight"
        >
          Zachariah Hansen
        </a>
        <div className="flex items-center gap-2">
          <nav className="hidden items-center lg:flex">
            {siteConfig.mainNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={active === item.href.slice(1) ? "true" : undefined}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
                  active === item.href.slice(1) && "bg-secondary text-foreground"
                )}
              >
                {item.title}
              </a>
            ))}
          </nav>
          <a
            href={siteConfig.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-colors hover:border-brand/60 hover:text-brand sm:inline-flex"
          >
            <Download className="h-3.5 w-3.5" />
            Résumé
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:border-brand/60 hover:text-brand lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav id="mobile-nav" className="border-t lg:hidden">
          <ul className="container py-2">
            {siteConfig.mainNav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active === item.href.slice(1) ? "true" : undefined}
                  className={cn(
                    "flex items-center gap-3 py-3 text-lg text-muted-foreground",
                    active === item.href.slice(1) && "font-medium text-foreground"
                  )}
                >
                  <span
                    className={cn(
                      "h-4 w-1 rounded-full",
                      active === item.href.slice(1) ? "bg-brand" : "bg-transparent"
                    )}
                  />
                  {item.title}
                </a>
              </li>
            ))}
            <li className="border-t py-3 sm:hidden">
              <a
                href={siteConfig.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-1 text-lg text-muted-foreground"
              >
                <Download className="h-4 w-4" />
                Download résumé
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
