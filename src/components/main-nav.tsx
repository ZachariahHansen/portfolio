import { Icons } from "@/components/icons"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { NavItem } from "@/types/nav"
import { Link } from "react-router-dom"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link to="/" className="flex items-center space-x-2">
        {/* <Icons.logo className="h-6 w-6" /> */}
        <div className="hidden flex-col items-start space-y-1 md:flex">
          <span className="inline-block text-2xl font-bold">{siteConfig.name}</span>
          <span className="inline-block text-xs font-normal text-muted-foreground">{siteConfig.jobs}</span>
        </div>
      </Link>
      {/* {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  to={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80",
                  )}
                >
                  {item.title}
                </Link>
              ),
          )}
        </nav>
      ) : null} */}
    </div>
  )
}
