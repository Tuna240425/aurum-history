"use client"

import { ChevronDown } from "lucide-react"

export default function CompanyHero() {
  const scrollToContact = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/info-2vnLp6Ky5Sm3XANa07bTrCvKVH4mYd.png')",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight">
          회사 <span style={{ color: "#D4AF37" }}>INFO</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          오럼이 위치한 곳, 그리고 우리와 소통할 수 있는
          <br />
          모든 정보를 한눈에 확인하세요
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={scrollToContact}
          className="flex flex-col items-center text-gray-400 hover:text-yellow-400 transition-colors group animate-bounce"
        >
          <span className="text-sm mb-2 opacity-80">Scroll Down</span>
          <ChevronDown className="h-6 w-6 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 border-2 border-yellow-400 rotate-45 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-6 h-6 border-2 border-yellow-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-yellow-400 rotate-45 animate-pulse delay-500"></div>
    </section>
  )
}
