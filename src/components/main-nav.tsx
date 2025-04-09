import { siteConfig } from "@/config/site"
import { NavItem } from "@/types/nav"
import { Link } from "react-router-dom"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({}: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link to="/" className="flex items-center space-x-2">
        {/* <Icons.logo className="h-6 w-6" /> */}
        <div className="hidden flex-col items-start space-y-1 md:flex">
          <span className="inline-block text-2xl font-bold">{siteConfig.name}</span>
          <span className="inline-block text-xs font-normal text-muted-foreground">{siteConfig.jobs}</span>
        </div>
      </Link>
    </div>
  )
}
