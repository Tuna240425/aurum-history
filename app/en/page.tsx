"use client"

import { useEffect, useState } from "react"
import HeroSection from "../components/hero-section"
import VisionSection from "../components/vision-section"
import CoreValues from "../components/core-values"
import CultureCarousel from "../components/culture-carousel"
import JoinBanner from "../components/join-banner"

export default function EnglishHomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="theme-bg min-h-screen">>

      <div className="theme-bg">

        {/* Hero Section - 새로운 헤더 높이에 맞춰 조정 */}
        <section className="h-[75vh] mt-24">
          <HeroSection />
        </section>

        {/* 새로운 콘텐츠 구조 */}
        <VisionSection />
        <CoreValues />
        <CultureCarousel />
        <JoinBanner />
      </div>
    </div>
  )
}
