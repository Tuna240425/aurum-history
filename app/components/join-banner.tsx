"use client"

import { useEffect, useState } from "react"
import { Users, Briefcase, Heart } from "lucide-react"

export default function JoinBanner() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const stats = [
    { icon: Users, value: "200+", label: "Team Members" },
    { icon: Briefcase, value: "50+", label: "Open Positions" },
    { icon: Heart, value: "95%", label: "Employee Satisfaction" },
  ]

  return (
    <section
      className="relative h-[500px] sm:h-[600px] md:h-[700px] py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/children-field.png')" }}
    >
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <div>
          <p className="text-base text-white font-light leading-relaxed mb-8">
            세상 모두가, 이전의 그 어떤 것보다
            <br />
            행복하고, 즐거운 라이프를 만들 수 있는 경험.
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
            오럼은, 멈추지 않겠습니다
          </h2>
        </div>
      </div>
    </section>
  )
}
