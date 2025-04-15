import { MainNav } from "@/components/main-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { Link } from "react-router-dom"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
          <Link to="/">
              <div
                className={buttonVariants({
                  size: "default",
                  variant: "ghost",
                })}
              >
                {/* <Icons.youtube className="h-5 w-5" /> */}
                <span className="inline-block text-md font-normal">Home</span>
              </div>
            </Link>
            <Link to={siteConfig.links.projects}>
              <div
                className={buttonVariants({
                  size: "default",
                  variant: "ghost",
                })}
              >
                {/* <Icons.youtube className="h-5 w-5" /> */}
                <span className="inline-block text-md font-normal">Projects</span>
              </div>
            </Link>
            <Link to="/resume">
              <div
                className={buttonVariants({
                  size: "default",
                  variant: "ghost",
                })}
              >
                {/* <Icons.youtube className="h-5 w-5" /> */}
                <span className="inline-block text-md font-normal">Resume</span>
              </div>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
