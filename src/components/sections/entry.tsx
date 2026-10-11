import { ReactNode } from "react"

interface SectionProps {
  id: string
  title: string
  // One or two sentences under the title
  intro?: ReactNode
  children: ReactNode
}

// A section is a sticky label column on the left and the content on the right, like a
// résumé with margin notes. Entries inside are separated by hairline rules
export function Section({ id, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-14 border-t">
      <div className="container grid gap-8 py-10 md:py-14 lg:grid-cols-[15rem_1fr] lg:gap-14">
        <div className="lg:sticky lg:top-20 lg:self-start">
          <h2 className="text-3xl font-extrabold tracking-tight">{title}</h2>
          {intro && (
            <div className="mt-3 max-w-xs leading-relaxed text-muted-foreground">
              {intro}
            </div>
          )}
        </div>
        <div>{children}</div>
      </div>
    </section>
  )
}

// Puts a hairline rule between entries, with none above the first
export function Entries({ children }: { children: ReactNode }) {
  return <div className="divide-y">{children}</div>
}

interface EntryProps {
  name: string
  role?: string
  // Small label beside the date, e.g. "Internship"
  note?: string
  period?: string
  summary?: string[]
  technologies?: string[]
  // position is a Tailwind object-position class for off-centre subjects.
  // large shows the image uncropped above the text, for screenshots
  // width and height are the file's pixel size, so the browser can reserve space before it loads
  image?: { src: string; alt: string; position?: string; large?: boolean; width?: number; height?: number }
  children?: ReactNode
}

// One résumé entry, laid out like the PDF: "Name - Role" with the date on the right,
// bullets, then a "Technologies:" line
export function Entry({ name, role, note, period, summary, technologies, image, children }: EntryProps) {
  const body = (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="text-xl font-bold tracking-tight md:text-2xl">
          {name}
          {role && <span className="font-normal text-muted-foreground"> - {role}</span>}
        </h3>
        {(period || note) && (
          <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5 font-mono text-sm text-brand">
            {note && (
              <span className="whitespace-nowrap border px-1.5 py-0.5 font-sans text-xs text-muted-foreground">
                {note}
              </span>
            )}
            <span className="whitespace-nowrap">{period}</span>
          </p>
        )}
      </div>
      {summary && summary.length > 0 && (
        <ul className="mt-4 max-w-measure list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground marker:text-brand/70">
          {summary.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      )}
      {technologies && technologies.length > 0 && (
        <p className="mt-5 text-sm leading-relaxed">
          <span className="font-semibold">Technologies:</span>{" "}
          <span className="text-muted-foreground">{technologies.join(" | ")}</span>
        </p>
      )}
      {children}
    </div>
  )

  if (!image) return <article className="py-8 first:pt-0">{body}</article>

  if (image.large) {
    return (
      <article className="py-8 first:pt-0">
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          className="mb-6 w-full border"
        />
        {body}
      </article>
    )
  }

  return (
    <article className="grid gap-6 py-8 first:pt-0 sm:grid-cols-[1fr_10rem] lg:grid-cols-[1fr_12rem]">
      {body}
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        className={`aspect-[4/3] w-full self-start border object-cover sm:aspect-square ${image.position ?? ""}`}
      />
    </article>
  )
}
