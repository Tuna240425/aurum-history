"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowRight } from "lucide-react"

const newsItems = [
  {
    title: "오럼, AI 기반 새로운 서비스 출시 발표",
    date: "2024.01.15",
    category: "보도자료",
  },
  {
    title: "오럼 카카오톡 채널 새로운 기능 업데이트",
    date: "2024.01.12",
    category: "서비스 소식",
  },
  {
    title: "오럼 개발자 컨퍼런스 2024 개최 안내",
    date: "2024.01.10",
    category: "이벤트",
  },
  {
    title: "오럼 ESG 경영 성과 발표",
    date: "2024.01.08",
    category: "보도자료",
  },
  {
    title: "오럼 해외 진출 확대 소식",
    date: "2024.01.05",
    category: "사업 소식",
  },
]

export default function NewsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400 mb-4">오럼 소식</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">오럼의 최신 소식과 업데이트를 확인해보세요.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured News */}
          <Card className="lg:row-span-2 bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">주요 소식</span>
              </div>

              <h3 className="text-2xl font-bold text-yellow-400 mb-4 leading-tight">{newsItems[0].title}</h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                오럼이 AI 기술을 활용한 혁신적인 서비스를 새롭게 선보입니다. 사용자 경험을 한층 더 향상시킬 이번
                서비스에 대한 자세한 내용을 확인해보세요.
              </p>

              <div className="flex items-center text-gray-500 text-sm mb-6">
                <Calendar className="h-4 w-4 mr-2" />
                {newsItems[0].date}
              </div>

              <Button variant="outline" className="group bg-transparent">
                자세히 보기
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* News List */}
          <div className="space-y-4">
            {newsItems.slice(1).map((item, index) => (
              <Card
                key={index}
                className="bg-gray-900/80 border-gray-700 hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <span className="text-yellow-500 text-sm font-medium">{item.category}</span>
                      <h4 className="text-lg font-semibold text-white mt-1 mb-2 group-hover:text-yellow-400 transition-colors">
                        {item.title}
                      </h4>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        {item.date}
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-yellow-600 group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="group bg-transparent">
            오럼 소식 모아보기
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
