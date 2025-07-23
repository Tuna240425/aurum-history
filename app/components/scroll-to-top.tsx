"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const pathname = usePathname() // ✅ 현재 페이지 경로 감지

  // ✅ 페이지가 변경되면 맨 위로 이동
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])

  // 스크롤 이벤트로 버튼 상태 및 진행률 업데이트
  useEffect(() => {
    let ticking = false

    const toggleVisibility = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset
          const docHeight = document.documentElement.scrollHeight - window.innerHeight
          const scrollPercent = (scrollTop / docHeight) * 100

          setScrollProgress(scrollPercent)
          setIsVisible(scrollTop > 300)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const radius = 18
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference

  if (!isVisible) {
    return null
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 group transition-all duration-300 hover:scale-110"
      aria-label="Scroll to top"
    >
      <div className="relative">
        <svg className="w-12 h-12 transform -rotate-90" width="48" height="48">
          <circle
            cx="24"
            cy="24"
            r={radius}
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            className="text-gray-300 dark:text-gray-600"
          />
          <circle
            cx="24"
            cy="24"
            r={radius}
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="text-yellow-500 transition-[stroke-dashoffset] duration-200 ease-out"
            strokeLinecap="round"
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center group-hover:bg-yellow-50 dark:group-hover:bg-yellow-900/20 transition-colors duration-200">
            <ChevronUp className="w-4 h-4 text-gray-700 dark:text-gray-300 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-200" />
          </div>
        </div>
      </div>
    </button>
  )
}
