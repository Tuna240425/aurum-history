"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function MarketingHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/marketing.png')",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <p className="text-sm text-gray-400 mb-2 tracking-wide">마케팅은, 다가가는 것이 아니에요</p>

        <p className="text-lg text-gray-300 mb-2">다가 '오는' 것</p>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
          “<span className="text-[#D4AF37]">스며드는 것</span>”
        </h1>

        <p className="text-base sm:text-lg text-gray-300 mb-10 leading-relaxed">
          아니, 마케팅이 아니야.
          <br />
          고객과 함께 살게 되는 것
        </p>

        <p className="text-sm italic text-gray-500 mb-8">
          Aurum,
          <br />– marketing department representative, chief
        </p>

                {/* 스크롤 인디케이터 */}
        <button
          onClick={() => {
            const el = document.getElementById("brand-identity")
            if (el) {
              el.scrollIntoView({ behavior: "smooth" })
            }
          }}
          className="animate-bounce mt-4"
          aria-label="아래로 스크롤"
        >
          <ArrowDown className="h-6 w-6 text-amber-200 mx-auto drop-shadow-lg" />
        </button>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 border-2 border-cyan-400 rotate-45 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-6 h-6 border-2 border-yellow-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-pink-400 rotate-45 animate-pulse delay-500"></div>
    </section>
  )
}
