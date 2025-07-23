"use client"

import React from "react"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"


// 실제 컴포넌트들
import HistoryHero from "./components/history-hero"
import HistoryTimeline from "./components/history-timeline"
import WithUs from "./components/with-us"

// (예: Footer는 따로 필요하다면 추가)
const Footer = dynamic(() => import("../components/footer"), { ssr: false })

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
    <main className="min-h-screen scroll-smooth">
      <section className="snap-start">
        <HistoryHero />
      </section>

      <section className="snap-start">
        <HistoryTimeline />
      </section>

      <section className="snap-start">
        <WithUs />
      </section>

    </main>
    </>
  )
}
