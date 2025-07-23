"use client"

import { useEffect, useState } from "react"
import HistoryHero from "../../history/components/history-hero"
import HistoryTimeline from "../../history/components/history-timeline"

export default function EnglishHistoryPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="bg-white dark:bg-black min-h-screen">

      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <section className="snap-start h-screen">
          <HistoryHero />
        </section>

        <section className="snap-start min-h-screen">
          <HistoryTimeline />
        </section>

        <section className="snap-start">
        </section>
      </div>
    </div>
  )
}
