"use client"

import { useEffect, useRef, useState } from "react"
import MessageHero from "../../message/components/message-hero"
import MissionSection from "../../message/components/mission-section"

export default function EnglishMessagePage() {
  const [mounted, setMounted] = useState(false)
  const missionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToMission = () => {
    missionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  if (!mounted) return null

  return (
    <div className="theme-bg min-h-screen">
      <div className="theme-bg">
        <section>
          <MessageHero onScrollToNext={scrollToMission} />
        </section>

        <section ref={missionRef}>
          <MissionSection />
        </section>
      </div>
    </div>
  )
}
