import { educationData } from "@/config/personal/education"
import graduationPhoto from "@/assets/images/personal/graduation.webp"
import { Entry, Section } from "./entry"

export function EducationSection() {
  return (
    <Section id="education" title="Education">
      {educationData.map((item) => (
        <Entry
          key={item.school}
          name={item.school}
          period={item.endDate}
          image={{
            src: graduationPhoto,
            alt: "Zachariah in cap and gown receiving his diploma on stage",
            position: "object-[50%_18%]",
          }}
        >
          <p className="mt-1 text-muted-foreground">
            {item.degree}.{item.gpa && ` GPA: ${item.gpa.toFixed(2)}`}
          </p>
          <p className="text-muted-foreground">{item.location}</p>
        </Entry>
      ))}
    </Section>
  )
}
