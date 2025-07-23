"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Star, Users, Calendar } from "lucide-react"

const showcaseItems = [
  {
    title: "호랑이의 생일파티",
    category: "애니메이션 시리즈",
    description: "귀여운 동물 친구들과 함께하는 따뜻한 이야기로 전 연령층에게 사랑받는 콘텐츠입니다.",
    stats: { views: "1.2M", rating: "4.9", episodes: "24" },
    color: "from-orange-400 to-red-500",
  },
  {
    title: "함께하는 순간들",
    category: "다큐멘터리",
    description: "일상 속 소중한 순간들을 담아낸 감동적인 다큐멘터리 시리즈입니다.",
    stats: { views: "850K", rating: "4.8", episodes: "12" },
    color: "from-blue-400 to-purple-500",
  },
  {
    title: "웃음의 마법",
    category: "예능 프로그램",
    description: "유명 연예인들과 함께하는 유쾌하고 재미있는 토크 버라이어티 쇼입니다.",
    stats: { views: "2.1M", rating: "4.7", episodes: "36" },
    color: "from-green-400 to-teal-500",
  },
  {
    title: "모험의 시작",
    category: "모바일 게임",
    description: "판타지 세계를 배경으로 한 RPG 게임으로 전 세계 유저들에게 인기를 얻고 있습니다.",
    stats: { views: "5.3M", rating: "4.6", episodes: "∞" },
    color: "from-purple-400 to-pink-500",
  },
]

export default function EntertainmentShowcase() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#D4AF37" }}>
            대표 작품
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            우리가 만든 콘텐츠들이 사람들에게 어떤 즐거움과 감동을 주었는지
            <br />
            대표적인 작품들을 통해 확인해보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {showcaseItems.map((item, index) => (
            <Card
              key={index}
              className="bg-gray-900/30 border-gray-800 hover:border-green-400/50 transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Image placeholder with gradient */}
                <div className={`h-48 bg-gradient-to-r ${item.color} relative flex items-center justify-center`}>
                  <Play className="h-12 w-12 text-white opacity-80 group-hover:scale-110 transition-transform" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm">{item.category}</span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3" style={{ color: "#D4AF37" }}>
                    {item.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {item.stats.views}
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-400" />
                      {item.stats.rating}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.stats.episodes}화
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 bg-transparent"
                  >
                    자세히 보기
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
