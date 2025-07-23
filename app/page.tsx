"use client"

import { useEffect, useState } from "react"
import HeroSection from "./components/hero-section"
// import VisionSection from "./components/vision-section"
import CoreValues from "./components/core-values"
import CultureCarousel from "./components/culture-carousel"
import JoinBanner from "./components/join-banner"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="theme-bg min-h-screen">

      <div className="theme-bg">

        <section className="relative min-h-screen overflow-hidden bg-black">
          <HeroSection />
        </section>

        {/* 새로운 콘텐츠 구조 */}
        <CoreValues />
        <CultureCarousel />
        <JoinBanner />
      </div>
    </div>
  )
}

