"use client"

import { useEffect, useState } from "react"
import { Shield, Zap, Globe, Sparkles } from "lucide-react"

export default function CoreValues() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const values = [
    {
      icon: Shield,
      title: "Trust & Integrity",
      description:
        "We build lasting relationships through transparency, honesty, and reliable service that our clients can depend on.",
      stats: "99.9% Client Satisfaction",
    },
    {
      icon: Zap,
      title: "Innovation & Excellence",
      description: "We push boundaries and set new standards, constantly evolving to deliver cutting-edge solutions.",
      stats: "50+ Awards Won",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Our solutions reach across continents, creating positive change in communities worldwide.",
      stats: "30+ Countries Served",
    },
    {
      icon: Sparkles,
      title: "Human-Centered Design",
      description: "Every solution we create puts people first, ensuring technology serves humanity's best interests.",
      stats: "1M+ Lives Improved",
    },
  ]

  return (
  <section
    id="next-section"
    className="relative min-h-[100vh] py-32 mt-[-1px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
    style={{
      backgroundImage: "url('/images/crayon.png')",
      backgroundSize: "100%"
    }}
  >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Central Circular Image with Hover Effects */}
        <div className="mb-8">
          <div className="group w-[24rem] h-[24rem] max-w-[80vw] max-h-[80vw] mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl relative cursor-pointer">
            {/* Base Image */}
            <img
              src="/images/girl3.png"
              alt="Brand Character"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
            />

            {/* Hover Image */}
            <img
              src="/images/girl2.png"
              alt="Happy Character"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Centered text with hover transition */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-1xl font-semibold text-center px-4 transition-opacity duration-500 opacity-100 group-hover:opacity-0 absolute">
                모두를 행복하게 <br /> 할 수는 없지만
              </p>
              <p className="text-white text-1xl font-semibold text-center px-4 transition-opacity duration-500 opacity-0 group-hover:opacity-100 absolute">
                조금은 더, <br /> 행복하게 만들 수 있습니다.
              </p>
            </div>
          </div>
        </div>

      {/* Bottom Text Messages */}
      <div className="space-y-12">
        <div className="mt-4">
          <p className="text-white text-base sm:text-lg leading-snug">세상 모두가</p>
        </div>

        <div className="-mt-4">
          <p className="text-white text-[1.25rem] sm:text-[1.25rem] font-semibold leading-tight">
            보다 더 따뜻하게,
            <br />
            보다 더 즐겁게
          </p>
        </div>

        <div className="-mt-3">
          <p className="text-white text-base sm:text-lg leading-snug">당신의 꿈에, 항상</p>
        </div>

        <div className="pt-2">
          <p className="text-white text-3xl sm:text-4xl font-bold leading-tight">
            오럼이 함께 하겠습니다
          </p>
        </div>
      </div>

    </div>
  </section>
  )
}
