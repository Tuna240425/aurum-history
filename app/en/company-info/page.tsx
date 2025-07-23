"use client"

import { useEffect, useState } from "react"
import CompanyHero from "../../company-info/components/company-hero"
import ContactSection from "../../company-info/components/contact-section"
import MapSection from "../../company-info/components/map-section"
import CompanyGallery from "../../company-info/components/company-gallery"

export default function EnglishCompanyInfoPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="bg-black min-h-screen">
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <section className="snap-start h-screen">
          <CompanyHero />
        </section>

        <section className="snap-start min-h-screen">
          <ContactSection />
        </section>

        <section className="snap-start min-h-screen">
          <MapSection />
        </section>

        <section className="snap-start min-h-screen">
          <CompanyGallery />
        </section>

        <section className="snap-start">
        </section>
      </div>
    </div>
  )
}
