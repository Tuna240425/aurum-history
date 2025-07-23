"use client"

import { useEffect, useState } from "react"
import MembersHero from "../../members/components/members-hero"
import DepartmentSection from "../../members/components/department-section"
import MembersCarousel from "../../members/components/members-carousel"

export default function EnglishMembersPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="theme-bg min-h-screen">

      <div className="theme-bg">
        <MembersHero />
        <DepartmentSection />
        <MembersCarousel />
      </div>
    </div>
  )
}
