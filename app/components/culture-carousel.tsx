"use client"

import { useEffect, useState } from "react"
import { Users, Coffee, Gamepad2, Plane } from "lucide-react"

export default function CultureCarousel() {
  const [mounted, setMounted] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % cultureItems.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [mounted])

  if (!mounted) return null

  const cultureItems = [
    {
      icon: Users,
      title: "Collaborative Spirit",
      description:
        "We believe in the power of teamwork. Every voice matters, every idea counts, and together we achieve extraordinary results.",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description:
        "We foster an environment where creativity thrives through balance. Our flexible approach ensures everyone can do their best work.",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: Gamepad2,
      title: "Innovation Playground",
      description:
        "We encourage experimentation and creative thinking. Our innovation labs are spaces where breakthrough ideas come to life.",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: Plane,
      title: "Global Mindset",
      description:
        "Our diverse team brings perspectives from around the world, creating solutions that resonate across cultures and borders.",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-purple-500 to-pink-600",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cultureItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cultureItems.length) % cultureItems.length)
  }

  const currentItem = cultureItems[currentSlide]
  const IconComponent = currentItem.icon

  return (
    <section className="bg-white py-48 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top message */}
        <p className="text-4xl font-extrabold text-gray-800 mb-12 leading-snug">공부해서 남 주냐?</p>

        {/* Central image */}
        <div className="my-12">
          <img src="/images/golden-apple.png" alt="황금 사과" className="max-w-[400px] mx-auto object-contain" />
        </div>

        {/* Bottom messages */}
        <div className="space-y-4">
          <p className="text-4xl font-bold text-gray-800">네.</p>
          <p className="text-4xl text-gray-700">
            오럼은, <span className="text-yellow-500 font-bold">남 주려고</span> 공부했습니다.
          </p>
        </div>
      </div>
    </section>
  )
}
