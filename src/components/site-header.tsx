import { useEffect, useState } from "react"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Download, Menu, X } from "lucide-react"

// Highlights the nav link for the last section whose top has passed a marker just below
// the sticky header. Kept near the top so jumping to a short section selects that section
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const update = () => {
      // The last section can be too short to reach the marker, so the page bottom wins
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      let current = ids[0]
      if (atBottom) {
        current = ids[ids.length - 1]
      } else {
        const marker = 120
        for (const id of ids) {
          const el = document.getElementById(id)
          if (el && el.getBoundingClientRect().top <= marker) current = id
        }
      }
      setActive(current)
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [ids])

  return active
}

// True once the page has scrolled past the top, so the header can turn solid over content
function useScrolled() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])
  return scrolled
}

const sectionIds = siteConfig.mainNav.map((item) => item.href.slice(1))

export function SiteHeader() {
  const active = useActiveSection(sectionIds)
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [menuOpen])

  // The header sits over the hero photo, so it starts transparent and turns solid on scroll
  const solid = scrolled || menuOpen

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-colors",
        solid
          ? menuOpen
            ? "border-border bg-background"
            : "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent"
      )}
    >
      <div className="container flex h-14 items-center justify-between gap-4">
        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className="text-base font-bold tracking-tight"
        >
          Zachariah Hansen
        </a>
        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 lg:flex">
            {siteConfig.mainNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={active === item.href.slice(1) ? "true" : undefined}
                className={cn(
                  "flex h-14 items-center border-b-2 border-transparent text-sm font-medium transition-colors hover:text-brand",
                  active === item.href.slice(1) && "border-brand"
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
            className="hidden h-9 items-center gap-2 border border-foreground/60 px-3.5 text-sm font-medium transition-colors hover:border-brand hover:text-brand sm:inline-flex"
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
            className="flex h-11 w-11 items-center justify-center transition-colors hover:text-brand lg:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                    active === item.href.slice(1) && "font-semibold text-foreground"
                  )}
                >
                  <span
                    className={cn(
                      "h-4 w-0.5",
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
