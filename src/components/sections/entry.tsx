import { ReactNode } from "react"

interface SectionProps {
  id: string
  title: string
  children: ReactNode
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-14 py-5 md:py-7">
      <div className="container">
        <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold tracking-tight md:text-3xl">
          <span className="h-5 w-1 rounded-full bg-brand" />
          {title}
        </h2>
        <div className="grid gap-4">{children}</div>
      </div>
    </section>
  )
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
  // large gives the image a wider column: uncropped by default (screenshots),
  // or cropped to 3:2 around position when one is given (photos)
  image?: { src: string; alt: string; position?: string; large?: boolean }
  children?: ReactNode
}

// One résumé entry, laid out like the PDF: "Name - Role" with the date on the right,
// bullets, then a "Technologies:" line
export function Entry({ name, role, note, period, summary, technologies, image, children }: EntryProps) {
  return (
    <article className="tile md:p-8">
      <div
        className={
          image?.large
            ? "grid gap-6 lg:grid-cols-[1fr_26rem]"
            : image
              ? "grid gap-6 sm:grid-cols-[1fr_10rem] lg:grid-cols-[1fr_12rem]"
              : undefined
        }
      >
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3 className="text-lg font-semibold tracking-tight md:text-xl">
              {name}
              {role && <span className="font-normal text-muted-foreground"> - {role}</span>}
            </h3>
            {(period || note) && (
              <p className="flex items-baseline gap-3 font-mono text-sm text-brand">
                {note && (
                  <span className="rounded-full border px-2 py-0.5 font-sans text-xs text-muted-foreground">
                    {note}
                  </span>
                )}
                {period}
              </p>
            )}
          </div>
          {summary && summary.length > 0 && (
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground marker:text-brand/70">
              {summary.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          )}
          {technologies && technologies.length > 0 && (
            <p className="mt-5 border-t pt-4 text-sm leading-relaxed">
              <span className="font-semibold">Technologies:</span>{" "}
              <span className="text-muted-foreground">{technologies.join(" | ")}</span>
            </p>
          )}
          {children}
        </div>
        {image && (
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className={
              image.large
                ? `w-full self-start rounded-xl border ${image.position ? `aspect-[3/2] object-cover ${image.position}` : ""}`
                : `aspect-[4/3] w-full self-start rounded-xl border object-cover sm:aspect-square ${image.position ?? ""}`
            }
          />
        )}
      </div>
    </article>
  )
}
