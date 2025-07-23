"use client"

import { Sparkles } from "lucide-react"

export default function GalleryHero() {
  return (
    <section className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-75 dark:brightness-50"
          style={{
            backgroundImage: "url('/images/gallery-hero.png')",
          }}
        />


        {/* Floating Dots */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
        <div className="absolute top-32 right-20 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse delay-500" />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-1500" />
        <div className="absolute bottom-32 right-10 w-2 h-2 bg-yellow-300 rounded-full animate-pulse delay-700" />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="h-8 w-8 text-yellow-400 mr-3 animate-pulse drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]" />
          <span className="text-yellow-500 text-lg font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
            Gallery
          </span>
          <Sparkles className="h-8 w-8 text-yellow-400 ml-3 animate-pulse drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]" />
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white dark:text-white mb-6 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          이것은 우리의
          <br />
          <span className="text-yellow-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            갤러리입니다!
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-white dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
          오럼의 공간과 사람들
          <br />
          우리의 하루를 엿보세요
        </p>

        <div className="inline-block px-6 py-3 bg-yellow-400 dark:bg-yellow-500 rounded-full">
        <span className="text-black dark:text-black font-medium">
          ✨ 우리의 일상을 담았습니다
        </span>
      </div>

      </div>

    </section>
  )
}
