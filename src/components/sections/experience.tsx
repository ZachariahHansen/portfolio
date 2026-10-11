import { experiences } from "@/config/personal/experience"
import { Entries, Entry, Section } from "./entry"

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      title="Where I've worked"
      intro="Most recent first. Laravel and Azure by day, MCP servers and chatbots underneath."
    >
      <Entries>
        {experiences.map((job) => (
          <Entry
            key={job.company}
            name={job.company}
            role={job.jobTitle}
            note={job.note}
            period={job.period}
            summary={job.summary}
            technologies={job.technologies}
          />
        ))}
      </Entries>
    </Section>
  )
}
