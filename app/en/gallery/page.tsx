"use client"

import { useEffect, useState } from "react"
import GalleryHero from "../../gallery/components/gallery-hero"
import GalleryGrid from "../../gallery/components/gallery-grid"

export default function EnglishGalleryPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="bg-black min-h-screen">

      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <section className="snap-start h-screen">
          <GalleryHero />
        </section>

        <section className="snap-start min-h-screen">
          <GalleryGrid />
        </section>

        <section className="snap-start">
        </section>
      </div>
    </div>
  )
}
