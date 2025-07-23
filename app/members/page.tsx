"use client"

import { useEffect, useState } from "react"
import MembersHero from "./components/members-hero"
import DepartmentSection from "./components/department-section"
import MembersCarousel from "./components/members-carousel"

export default function MembersPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="bg-black min-h-screen">

      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <section className="overflow-y-auto">
          <MembersHero />
        </section>

        <section className="overflow-y-auto">
          <DepartmentSection />
        </section>

        <section className="overflow-y-auto">
          <MembersCarousel />
        </section>

      </div>
    </div>
  )
}
