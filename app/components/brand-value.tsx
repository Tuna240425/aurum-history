"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Cpu, Leaf, Heart, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const values = [
  {
    icon: Users,
    title: "다양성",
    description: "서로 다른 개성과 생각을 존중하며, 다양성이 만드는 시너지를 추구합니다.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    image: "https://via.placeholder.com/400x200?text=Diversity",
  },
  {
    icon: Cpu,
    title: "기술",
    description: "최신 기술과 혁신을 통해 사용자에게 더 나은 경험을 제공합니다.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    image: "https://via.placeholder.com/400x200?text=Technology",
  },
  {
    icon: Leaf,
    title: "환경",
    description: "지속가능한 미래를 위해 환경을 생각하는 기업이 되겠습니다.",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    image: "https://via.placeholder.com/400x200?text=Environment",
  },
  {
    icon: Heart,
    title: "사회적 책임",
    description: "사회의 일원으로서 책임감을 가지고 긍정적인 변화를 만들어갑니다.",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    image: "https://via.placeholder.com/400x200?text=Social+Responsibility",
  },
  {
    icon: Heart,
    title: "사회적 책임2",
    description: "사회의 일원으로서 책임감을 가지고 긍정적인 변화를 만들어갑니다.",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    image: "https://via.placeholder.com/400x200?text=Social+Responsibility",
  },
  {
    icon: Heart,
    title: "사회적 책임3",
    description: "사회의 일원으로서 책임감을 가지고 긍정적인 변화를 만들어갑니다.",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    image: "https://via.placeholder.com/400x200?text=Social+Responsibility",
  },
  {
    icon: Heart,
    title: "사회적 책임4",
    description: "사회의 일원으로서 책임감을 가지고 긍정적인 변화를 만들어갑니다.",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    image: "https://via.placeholder.com/400x200?text=Social+Responsibility",
  },
  {
    icon: Heart,
    title: "사회적 책임5",
    description: "사회의 일원으로서 책임감을 가지고 긍정적인 변화를 만들어갑니다.",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    image: "https://via.placeholder.com/400x200?text=Social+Responsibility",
  },
]

export default function BrandValue() {
  const [startIndex, setStartIndex] = useState(0)
  const visibleCount = 3
  const totalItems = values.length

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setStartIndex((prev) => Math.min(totalItems - visibleCount, prev + 1))
  }

  const visibleValues = values.slice(startIndex, startIndex + visibleCount)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white mb-2">우리의 약속</h2>
          <p className="text-xl text-yellow-400 font-semibold">가치를 실현하는 여정</p>
        </div>

        <div className="relative">
          {totalItems > visibleCount && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 focus:outline-none"
                aria-label="Previous"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 focus:outline-none"
                aria-label="Next"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <div className="flex overflow-hidden transition-transform duration-300 ease-out">
            {visibleValues.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="w-1/3 px-2 flex-shrink-0 sm:w-1/2 md:w-1/3">
                  <Card
                    className={`bg-gray-900/80 border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group`}
                  >
                    <CardContent className="p-6">
                      <img
                        src={value.image || "/placeholder.svg"}
                        alt={value.title}
                        className="rounded-md shadow-md mb-4"
                      />
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>

                      <h3 className="text-xl font-bold text-yellow-400 mb-2">{value.title}</h3>

                      <p className="text-gray-300 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>

          {totalItems > visibleCount && (
            <div className="flex justify-center mt-4">
              {Array.from({ length: Math.ceil(totalItems / visibleCount) }).map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full mx-1 ${
                    startIndex / visibleCount === index ? "bg-yellow-400" : "bg-gray-500"
                  }`}
                  onClick={() => setStartIndex(index * visibleCount)}
                  aria-label={`Goto slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
