"use client"

import { ChevronDown } from "lucide-react"

interface MessageHeroProps {
  onScrollToNext: () => void
}

export default function MessageHero({ onScrollToNext }: MessageHeroProps) {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/cheer-bg.png')" }}
    >
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1
          className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold"
          style={{ textShadow: "2px 4px 10px rgba(0,0,0,0.7)" }}
        >
          으랏차차
        </h1>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={onScrollToNext}
          className="flex flex-col items-center text-gray-400 hover:text-white transition-colors group"
        >
          <span className="text-sm mb-2 opacity-80">Scroll Down</span>
          <div className="animate-bounce">
            <ChevronDown className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </div>
        </button>
      </div>
    </section>
  )
}
