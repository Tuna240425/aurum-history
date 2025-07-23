"use client"

import { useEffect, useState } from "react"
import MarketingHero from "../../marketing/components/marketing-hero"
import MarketingAbout from "../../marketing/components/marketing-about"
import MarketingServices from "../../marketing/components/marketing-services"
import MarketingTeam from "../../marketing/components/marketing-team"
import MarketingContact from "../../marketing/components/marketing-contact"

export default function EnglishMarketingPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="bg-black min-h-screen">

      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <section className="snap-start h-screen">
          <MarketingHero />
        </section>

        <section className="snap-start min-h-screen">
          <MarketingAbout />
        </section>

        <section className="snap-start min-h-screen">
          <MarketingServices />
        </section>

        <section className="snap-start min-h-screen">
          <MarketingTeam />
        </section>

        <section className="snap-start min-h-screen">
          <MarketingContact />
        </section>

        <section className="snap-start">
        </section>
      </div>
    </div>
  )
}
