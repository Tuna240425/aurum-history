"use client"

import { useEffect, useState } from "react"
import GalleryHero from "./components/gallery-hero"
import GalleryGrid from "./components/gallery-grid"

export default function GalleryPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="bg-black min-h-screen">

      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <section className="overflow-y-auto">
          <GalleryHero />
        </section>

        {/* 👇 스냅 대상에서 제외, 자유 스크롤 허용 */}
        <div className="overflow-y-auto">
          <GalleryGrid />
        </div>

        <section className="overflow-y-auto">
        </section>
      </div>
    </div>
  )
}
