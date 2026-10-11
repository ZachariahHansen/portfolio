import { useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/sections/hero"
import { ExperienceSection } from "@/components/sections/experience"
import { EducationSection } from "@/components/sections/education"
import { ProjectsSection } from "@/components/sections/projects"
import { PersonalSection } from "@/components/sections/personal"
import { ContactSection } from "@/components/sections/contact"
import { TailwindIndicator } from "./components/tailwind-indicator"

// The old multi-page site had /resume and /projects; send those links to the matching section
const legacyPaths: Record<string, string> = {
  "/resume": "experience",
  "/projects": "projects",
}

function App() {
  useEffect(() => {
    const id = legacyPaths[window.location.pathname.replace(/\/$/, "")]
    if (!id) return
    window.history.replaceState(null, "", `/#${id}`)
    // Wait for web fonts so the layout above the section has settled
    document.fonts.ready.then(() =>
      document.getElementById(id)?.scrollIntoView({ behavior: "instant" })
    )
  }, [])

  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <PersonalSection />
        <ContactSection />
      </main>
      <TailwindIndicator />
    </>
  )
}

export default App
