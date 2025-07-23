"use client"

import { useEffect, useState } from "react"
import BrandHero from "./components/brand-hero"
import BrandStory from "./components/brand-story"
import BrandDalgona from "./components/brand-dalgona"
import BrandBarracks from "./components/brand-barracks"
import BrandIdentity from "./components/brand-identity"
import BrandGuidelines from "./components/brand-guidelines"
import BrandValue from "../components/brand-value"

export default function BrandPage() {
  const [mounted, setMounted] = useState(false)
  const showBrandContent = false

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
  <div className="bg-black min-h-screen">

    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <section className="snap-start h-screen">
        <BrandHero />
      </section>

      <section className="snap-start min-h-screen">
        <BrandStory />
      </section>

      <BrandDalgona />   {/* 이미 snap-start 섹션 안에 포함됨 */}
      <BrandBarracks />

      {showBrandContent && (
        <section className="snap-start min-h-screen">
          <BrandValue />
        </section>
      )}

      {showBrandContent && (
        <section className="snap-start min-h-screen">
          <BrandIdentity />
        </section>
      )}

      {showBrandContent && (
        <section className="snap-start min-h-screen">
          <BrandGuidelines />
        </section>
      )}

    </div>
  </div>
)}
