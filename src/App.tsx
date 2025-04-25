import { SiteHeader } from "@/components/site-header"
import { useRoutes } from "react-router-dom"
import { TailwindIndicator } from "./components/tailwind-indicator"
import ResumePage from "./pages/resume"
import { ProfileImage } from "./components/profile-image"
import { AboutMeSection } from "./components/about-me"
import ProjectsPage from "./pages/projects"

const routes = [
  { path: "/", element: <Home /> },
  { path: "/resume", element: <ResumePage /> },
  { path: "/projects", element: <ProjectsPage /> }
]

function Home() {
  return (
    <section className="container min-h-[calc(100vh-4rem)] flex items-center justify-center">
      {/* Changed items-start to items-center */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl w-full">
        <ProfileImage />
        <AboutMeSection />
      </div>
    </section>
  )
}

function App() {
  const children = useRoutes(routes)

  return (
    <>
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
      </div>
      <TailwindIndicator />
    </>
  )
}

export default App
