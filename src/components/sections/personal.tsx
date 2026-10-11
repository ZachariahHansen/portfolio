import zionOverlook from "@/assets/images/personal/zion-overlook.webp"
import zionTrail from "@/assets/images/personal/zion-trail.webp"
import bouldering from "@/assets/images/personal/bouldering.webp"
import troll from "@/assets/images/personal/seattle-troll.webp"
import trollsKnoll from "@/assets/images/personal/seattle-trolls-knoll.webp"
import saltFlats from "@/assets/images/personal/saltflats.webp"
import saltFlatsSelfie from "@/assets/images/personal/saltflats-selfie.webp"
import graduation from "@/assets/images/personal/graduation.webp"
import babyZach from "@/assets/images/personal/baby-zach.webp"
import { Section } from "./entry"

interface Photo {
  src: string
  alt: string
  // Shown once per group, on its main photo
  caption?: string
  // Grid footprint; the main photo of a group is larger
  size: string
  // Tailwind object-position class for photos whose subject is off-centre
  position?: string
}

const big = "col-span-2 row-span-2"
const small = "col-span-1 row-span-1"
// Full-width strip on phones, a big square once the grid has six columns
const wide = "col-span-2 row-span-1 lg:row-span-2"

// Ordered so photos from the same place sit next to each other in the grid
const photos: Photo[] = [
  {
    src: zionOverlook,
    alt: "Zachariah in a yellow cap and backpack looking out at a streaked red sandstone cliff in Zion",
    caption: "Zion National Park",
    size: big,
    position: "object-[30%_50%]",
  },
  {
    src: zionTrail,
    alt: "Zachariah seen from behind on a sandy trail below red sandstone cliffs in Zion",
    size: small,
  },
  {
    src: troll,
    alt: "Zachariah and three friends posing on the Fremont Troll sculpture in Seattle",
    caption: "Seattle",
    size: big,
  },
  {
    src: trollsKnoll,
    alt: "Zachariah and friends, seen from behind, walking under the Troll's Knoll Forest arch in Seattle",
    size: small,
  },
  {
    src: bouldering,
    alt: "A climbing gym wall with pink and purple holds on a steep overhang",
    caption: "A problem I set",
    size: small,
  },
  {
    src: babyZach,
    alt: "Zachariah as a toddler in overalls, holding a banana and waving",
    caption: "A few years back",
    size: small,
    position: "object-[50%_30%]",
  },
  {
    src: graduation,
    alt: "Zachariah in cap and gown receiving his diploma on stage",
    caption: "Graduation",
    size: big,
    position: "object-[50%_18%]",
  },
  {
    src: saltFlats,
    alt: "Salt flats stretching to distant mountains under a cloudy sky",
    caption: "Bonneville Salt Flats",
    size: wide,
    position: "object-[50%_60%]",
  },
  {
    src: saltFlatsSelfie,
    alt: "Zachariah and a companion sitting on the salt flats",
    size: wide,
    position: "object-[50%_35%]",
  },
]

export function PersonalSection() {
  return (
    <Section
      id="personal"
      title="Outside of work"
      intro={
        <p>
          Away from the keyboard I'm usually bouldering, playing Magic: The Gathering or
          Super Smash Bros., or out hiking. Zion is a favorite.
        </p>
      }
    >
      <div className="grid grid-flow-dense auto-rows-[9rem] grid-cols-2 gap-2 sm:auto-rows-[10rem] lg:grid-cols-6">
        {photos.map((photo) => (
          <figure key={photo.src} className={`relative overflow-hidden border ${photo.size}`}>
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className={`h-full w-full object-cover ${photo.position ?? ""}`}
            />
            {photo.caption && (
              <figcaption className="absolute bottom-0 left-0 bg-background/90 px-2 py-1 font-mono text-xs">
                {photo.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </Section>
  )
}
