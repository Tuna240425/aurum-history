"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function LifeHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/life1.png')",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <p className="text-sm text-gray-400 mb-10 tracking-wide">나 어릴 때, <br /> 충북 옥천 우리 할아버지는 <br /> 스마트폰은 안쓰시는데, 에어컨은 쓰셔 </p>
        <p className="text-sm text-gray-400 mb-10 tracking-wide">우리의 행동이 바뀌고, 문화가 바뀌는 것.  <br /> 그리고 삶이 바뀌는 것. 때로는 느리더라도, </p>


        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-white">
          “<span className="text-[#D4AF37]">더 나은 방식으로 바꾸게 하는 것.</span>”
        </h1>

        <p className="text-base sm:text-lg text-gray-300 mb-10 leading-relaxed">
          그래, 그거 할 꺼야
        </p>

        <p className="text-sm italic text-gray-500 mb-8">
          Aurum,
          <br />– Life department representative, chief
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
