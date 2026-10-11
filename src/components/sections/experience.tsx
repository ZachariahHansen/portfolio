import { experiences } from "@/config/personal/experience"
import { Entry, Section } from "./entry"

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      {experiences.map((job) => (
        <Entry
          key={job.company}
          name={job.company}
          role={job.jobTitle}
          note={job.internship ? "Internship" : undefined}
          period={job.period}
          summary={job.summary}
          technologies={job.technologies}
        />
      ))}
    </Section>
  )
}
