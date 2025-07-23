"use client"

import { ArrowDown } from "lucide-react"

export default function BrandHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/brand.png')",
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <p className="text-sm text-amber-200 mb-2 tracking-wide drop-shadow-lg">브랜드는, 만드는 것이 아니에요</p>

        <p className="text-lg text-amber-100 mb-2 drop-shadow-lg">빚어내는 것</p>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
          "<span style={{ color: "#D4AF37" }}>정성으로 빚는 것</span>"
        </h1>

        <p className="text-base sm:text-lg text-amber-50 mb-10 leading-relaxed drop-shadow-lg">
          브랜드는 하루아침에 만들어지지 않아.
          <br />
          장인의 손길처럼, 시간과 정성으로 빚어내는 것
        </p>

        <p className="text-sm italic text-amber-200 mb-8 drop-shadow-lg">
          Aurum,
          <br />– brand department representative, chief
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

      {/* Floating elements - adjusted for warm pottery theme */}
      <div className="absolute top-20 left-10 w-4 h-4 border-2 border-amber-400 rotate-45 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-6 h-6 border-2 border-orange-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-amber-500 rotate-45 animate-pulse delay-500"></div>
    </section>
  )
}
