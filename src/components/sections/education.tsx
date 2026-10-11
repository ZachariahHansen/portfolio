import { educationData } from "@/config/personal/education"
import { Entry, Section } from "./entry"

export function EducationSection() {
  return (
    <Section id="education" title="Education">
      {educationData.map((item) => (
        <Entry key={item.school} name={item.school} role={item.degree} period={item.endDate}>
          <p className="mt-1 text-muted-foreground">
            {item.location}
            {item.gpa && `. GPA: ${item.gpa.toFixed(2)}`}
          </p>
        </Entry>
      ))}
    </Section>
  )
}
