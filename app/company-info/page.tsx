"use client"

import { useEffect, useState } from "react"
import CompanyHero from "./components/company-hero"
import MapSection from "./components/map-section"
// import CompanyGallery from "./components/company-gallery"

export default function CompanyInfoPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="bg-black min-h-screen">

      <div>
        <CompanyHero />
        <MapSection />
        {/* <CompanyGallery />  */}
      </div>
    </div>
  )
}
