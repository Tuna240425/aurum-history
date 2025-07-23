"use client"

import { useEffect, useState } from "react"
import MessageHero from "../../message/components/message-hero"
import MessageCarousel from "../../message/components/message-carousel"
import MissionSection from "../../message/components/mission-section"
import CoreValues from "../../message/components/core-values"
import PromiseSection from "../../message/components/promise-section"

export default function EnglishMessagePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="theme-bg min-h-screen">

      <div className="theme-bg">
        <MessageHero />
        <MessageCarousel />
        <MissionSection />
        <CoreValues />
        <PromiseSection />
      </div>
    </div>
  )
}
