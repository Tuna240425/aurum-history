"use client"

import Image from "next/image"

export default function HeroSection() {
  const handleScroll = () => {
    const target = document.getElementById("scroll-target")
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden">
      <Image
        src="/images/girl.png"
        alt="Hero Background"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">안내드립니다</h1>
        <button
          onClick={handleScroll}
          className="mt-6 text-white text-2xl animate-bounce cursor-pointer focus:outline-none"
          aria-label="아래로 스크롤"
        >
          ↓
        </button>
      </div>
    </section>
  )
}
