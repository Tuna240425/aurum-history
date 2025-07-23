"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface Member {
  id: number
  name: string
  department: string
  role: string
  motto: string
  avatar: string
  color: string
}

const members: Member[] = [
  {
    id: 1,
    name: "mr.D",
    department: "종합지원실",
    role: "Captain",
    motto: "결은 흐르되, 중심은 잃지 않는다.",
    avatar: "images/profiles/mr.D.png",
    color: "from-gray-500 to-gray-700",
  },
  {
    id: 2,
    name: "Jiwoo",
    department: "종합지원실",
    role: "Master",
    motto: "기획은 결국 사람을 향해야 한다.",
    avatar: "/images/profiles/jiwoo.png",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 3,
    name: "Tuna",
    department: "매니징사업부",
    role: "Master",
    motto: "적당히 하는 게 제일 좋아.",
    avatar: "/images/profiles/Tuna.png",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    id: 4,
    name: "SooSoo",
    department: "인프라사업부",
    role: "Master",
    motto: "먼저 움직이는 사람이 흐름을 만든다.",
    avatar: "/images/profiles/SooSoo.png",
    color: "from-green-500 to-green-600",
  },
  {
    id: 5,
    name: "Hyun",
    department: "인프라사업부",
    role: "Maker",
    motto: "작지만 확실한 것부터.",
    avatar: "/images/profiles/Hyun.png",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: 6,
    name: "Eunji",
    department: "마케팅사업부",
    role: "Builder",
    motto: "조용하게, 그러나 단단하게.",
    avatar: "/images/profiles/Eunji.png",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 7,
    name: "One",
    department: "종합지원실",
    role: "Maker",
    motto: "한 번 해보는 게 열 번 고민보다 낫다.",
    avatar: "/images/profiles/One.webp",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    id: 8,
    name: "Hyojin",
    department: "인프라사업부",
    role: "Rookie",
    motto: "모르는 건 물어보는 게 빠르다.",
    avatar: "/images/profiles/Hyojin.png",
    color: "from-pink-500 to-pink-600",
  },
]

export default function MembersCarousel() {
  // 랜덤 셔플 함수
  const shuffleArray = useCallback((array: Member[]) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }, [])

  // 랜덤하게 섞인 멤버 배열 상태
  const [shuffledMembers, setShuffledMembers] = useState<Member[]>(() => shuffleArray(members))
  const [currentIndex, setCurrentIndex] = useState(3) // 가운데 카드를 기본으로
  const [isAutoSliding, setIsAutoSliding] = useState(true)

  // 컴포넌트 마운트 시 랜덤 셔플
  useEffect(() => {
    setShuffledMembers(shuffleArray(members))
  }, [shuffleArray])

  useEffect(() => {
    if (!isAutoSliding) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % shuffledMembers.length)
    }, 3000) // 3초마다 자동 슬라이드

    return () => clearInterval(interval)
  }, [isAutoSliding, shuffledMembers.length])

  const handlePrev = () => {
    setIsAutoSliding(false)
    setCurrentIndex((prev) => (prev - 1 + shuffledMembers.length) % shuffledMembers.length)
    setTimeout(() => setIsAutoSliding(true), 5000) // 5초 후 자동 슬라이드 재개
  }

  const handleNext = () => {
    setIsAutoSliding(false)
    setCurrentIndex((prev) => (prev + 1) % shuffledMembers.length)
    setTimeout(() => setIsAutoSliding(true), 5000) // 5초 후 자동 슬라이드 재개
  }

  const getVisibleMembers = () => {
    const visible = []
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + shuffledMembers.length) % shuffledMembers.length
      visible.push({
        ...shuffledMembers[index],
        position: i,
      })
    }
    return visible
  }

  const visibleMembers = getVisibleMembers()

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            구성원 <span style={{ color: "#D4AF37" }}>소개</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            각자의 개성과 전문성으로 오럼을 빛내는 멋진 동료들을 만나보세요
          </p>
        </div>

        {/* 3D Carousel */}
        <div className="relative h-96 mb-12">
          <div
            className="flex items-center justify-center h-full"
            onMouseEnter={() => setIsAutoSliding(false)}
            onMouseLeave={() => setIsAutoSliding(true)}
          >
            {visibleMembers.map((member) => {
              const isCenter = member.position === 0
              const scale = isCenter ? 1 : 0.8
              const opacity = Math.abs(member.position) > 1 ? 0.3 : isCenter ? 1 : 0.7
              const translateX = member.position * 280
              const rotateY = member.position * 25
              const zIndex = 5 - Math.abs(member.position)

              return (
                <div
                  key={member.id}
                  className="absolute transition-all duration-500 ease-out"
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                    opacity,
                    zIndex,
                  }}
                >
                  <Card
                    className={`w-64 bg-white/80 dark:bg-gray-900/80 border-gray-300 dark:border-gray-700 overflow-hidden cursor-pointer ${
                      isCenter ? "border-yellow-400/50 shadow-2xl shadow-yellow-400/20" : ""
                    }`}
                  >

                    <CardContent className="p-0">
                      {/* Avatar */}
                      <div className="relative">
                        <div className="w-full h-48 bg-gray-800 flex items-center justify-center overflow-hidden">
                          <img
                            src={member.avatar || "/placeholder.svg"}
                            alt={member.name}
                            className="w-32 h-32 object-cover rounded-full border-4 border-white/20"
                            onError={(e) => {
                              // 이미지 로드 실패 시 대체 이미지
                              e.currentTarget.src =
                                "/placeholder.svg?height=128&width=128&text=" + member.name.charAt(0)
                            }}
                          />
                        </div>
                        <div className={`absolute inset-0 bg-gradient-to-t ${member.color} opacity-20`}></div>

                        {/* Department Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                            {member.department}
                          </span>
                        </div>

                        {/* Role Badge */}
                        <div className="absolute top-4 right-4">
                          <span className="bg-yellow-400/80 text-black px-2 py-1 rounded-full text-xs font-bold">
                            {member.role}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="text-center mb-4">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {member.name}
                          </h3>
                          <p className="text-yellow-600 dark:text-yellow-400 text-sm font-medium">
                            {member.role}
                          </p>
                          <p className="text-gray-500 dark:text-gray-400 text-xs">
                            {member.department}
                          </p>
                        </div>

                        <div className="flex items-start">
                          <Quote className="h-4 w-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{member.motto}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-8">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-yellow-400 bg-transparent"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className="flex space-x-2">
            {shuffledMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-yellow-400 scale-125" : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="w-12 h-12 rounded-full border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-yellow-600 dark:hover:text-yellow-400"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Current Member Info */}
        <div className="text-center mt-12">
          <div className="inline-block px-6 py-3 bg-gray-900/50 rounded-full border border-gray-700">
            <span className="text-yellow-400 font-medium">
              {shuffledMembers[currentIndex].name} • {shuffledMembers[currentIndex].department} •{" "}
              {shuffledMembers[currentIndex].role}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
