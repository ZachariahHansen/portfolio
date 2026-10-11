import { projects } from "@/config/personal/projects"
import { ArrowUpRight } from "lucide-react"
import parableScreenshot from "@/assets/images/personal/parable.webp"
import hackathonPhoto from "@/assets/images/personal/hackathon.webp"
import { Entry, Section } from "./entry"

const images: Record<string, { src: string; alt: string; large?: boolean }> = {
  Parable: {
    src: parableScreenshot,
    alt: "The Parable window showing a Steam bottle with its programs, tools, and settings",
    large: true,
  },
  "ASD Prediction": {
    src: hackathonPhoto,
    alt: "Zachariah and two teammates holding the hackathon trophy",
  },
}

export function WorkSection() {
  return (
    <Section id="work" title="Work">
      <div className="grid gap-4 lg:grid-cols-2">
        {projects.map((project) => (
          <div key={project.name} className={project.featured ? "grid lg:col-span-2" : "grid"}>
            <Entry
              name={project.name}
              role={project.tagline}
              period={project.period}
              summary={project.summary}
              technologies={project.technologies}
              image={images[project.name]}
            >
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {project.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-brand underline-offset-4 hover:underline"
                    >
                      {link.title}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </Entry>
          </div>
        ))}
      </div>
    </Section>
  )
}
