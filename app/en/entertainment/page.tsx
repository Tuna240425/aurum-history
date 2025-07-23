"use client"

import { useEffect, useState } from "react"
import EntertainmentHero from "../../entertainment/components/entertainment-hero"
import EntertainmentAbout from "../../entertainment/components/entertainment-about"
import EntertainmentProducts from "../../entertainment/components/entertainment-products"
import EntertainmentShowcase from "../../entertainment/components/entertainment-showcase"
import EntertainmentContact from "../../entertainment/components/entertainment-contact"

export default function EnglishEntertainmentPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="bg-black min-h-screen">

      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <section className="snap-start h-screen">
          <EntertainmentHero />
        </section>

        <section className="snap-start min-h-screen">
          <EntertainmentAbout />
        </section>

        <section className="snap-start min-h-screen">
          <EntertainmentProducts />
        </section>

        <section className="snap-start min-h-screen">
          <EntertainmentShowcase />
        </section>

        <section className="snap-start min-h-screen">
          <EntertainmentContact />
        </section>

        <section className="snap-start">
        </section>
      </div>
    </div>
  )
}
