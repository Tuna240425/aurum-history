"use client"

import { useEffect, useRef, useState } from "react"
import MessageHero from "./components/message-hero"
import MissionSection from "./components/mission-section"

export default function MessagePage() {
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
    <div className="bg-black min-h-screen">
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <section className="snap-start h-screen">
          <MessageHero onScrollToNext={scrollToMission} />
        </section>

        <section ref={missionRef} className="snap-start min-h-screen">
          <MissionSection />
        </section>
      </div>
    </div>
  )
}