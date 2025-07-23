"use client"

import { ChevronDown } from "lucide-react"

export default function MembersHero() {
  const scrollToContent = () => {
    const departmentSection = document.getElementById("department-section")
    if (departmentSection) {
      departmentSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/members-hero-bg-updated.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Floating Animation Elements - adjusted for the bright background */}
      <div className="absolute inset-0 z-5">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-white/60 rounded-full animate-pulse shadow-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold text-white mb-6 leading-tight tracking-wider drop-shadow-2xl">
            MEMBERS
          </h1>

          <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-medium">
            함께 달려가는 오럼의 멤버들
            <br />
            각자의 개성과 재능으로 하나가 되는 우리
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={scrollToContent}
          className="flex flex-col items-center text-white hover:text-yellow-400 transition-colors group animate-bounce drop-shadow-lg"
        >
          <span className="text-sm mb-2 opacity-90 font-medium">Scroll Down</span>
          <ChevronDown className="h-8 w-8 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Gradient Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent z-5"></div>
    </section>
  )
}
