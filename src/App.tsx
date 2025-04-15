import { SiteHeader } from "@/components/site-header"
import { useRoutes } from "react-router-dom"
import { TailwindIndicator } from "./components/tailwind-indicator"
import ResumePage from "./pages/resume"
import { ProfileImage } from "./components/ProfileImage"
import { FAQSection } from "./components/FAQSection"

const routes = [
  { path: "/", element: <Home /> },
  { path: "/resume", element: <ResumePage /> }
]

function Home() {
  return (
    <section className="container min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-6xl w-full">
        <ProfileImage />
        <FAQSection />
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
