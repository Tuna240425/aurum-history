"use client"

import { useEffect, useState } from "react"
import BrandHero from "../../brand/components/brand-hero"
import BrandStory from "../../brand/components/brand-story"
// import BrandValues from "../../brand/components/brand-values"
import BrandIdentity from "../../brand/components/brand-identity"
import BrandGuidelines from "../../brand/components/brand-guidelines"

export default function EnglishBrandPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="bg-black min-h-screen">
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <section className="snap-start h-screen">
          <BrandHero />
        </section>

        <section className="snap-start min-h-screen">
          <BrandStory />
        </section>

        {/* <section className="snap-start min-h-screen">
          <BrandValues />
        </section> */}

        <section className="snap-start min-h-screen">
          <BrandIdentity />
        </section>

        <section className="snap-start min-h-screen">
          <BrandGuidelines />
        </section>

      </div>
    </div>
  )
}
