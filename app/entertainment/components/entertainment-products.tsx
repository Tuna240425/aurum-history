"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Film, Music, Gamepad2, Tv, Camera, Mic } from "lucide-react"

const products = [
  {
    icon: Film,
    title: "영상 콘텐츠",
    description: "드라마, 영화, 웹시리즈 등 다양한 장르의 영상 콘텐츠를 기획하고 제작합니다.",
    features: ["드라마 제작", "영화 기획", "웹시리즈", "다큐멘터리"],
  },
  {
    icon: Music,
    title: "음악 프로덕션",
    description: "K-POP부터 인디음악까지 다양한 장르의 음악을 프로듀싱합니다.",
    features: ["앨범 제작", "음원 발매", "뮤직비디오", "라이브 공연"],
  },
  {
    icon: Gamepad2,
    title: "게임 개발",
    description: "모바일부터 PC까지 재미있고 중독성 있는 게임을 개발합니다.",
    features: ["모바일 게임", "PC 게임", "AR/VR 게임", "인디 게임"],
  },
  {
    icon: Tv,
    title: "방송 프로그램",
    description: "예능, 교양, 토크쇼 등 다양한 방송 프로그램을 기획하고 제작합니다.",
    features: ["예능 프로그램", "토크쇼", "교양 프로그램", "라이브 방송"],
  },
  {
    icon: Camera,
    title: "디지털 콘텐츠",
    description: "유튜브, 틱톡 등 플랫폼에 최적화된 숏폼 콘텐츠를 제작합니다.",
    features: ["유튜브 콘텐츠", "숏폼 영상", "라이브 스트리밍", "인플루언서 협업"],
  },
  {
    icon: Mic,
    title: "팟캐스트",
    description: "다양한 주제의 팟캐스트를 기획하고 제작하여 새로운 소통의 장을 만듭니다.",
    features: ["토크 팟캐스트", "교육 콘텐츠", "스토리텔링", "인터뷰 프로그램"],
  },
]

export default function EntertainmentProducts() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#D4AF37" }}>
            콘텐츠 라인업
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            다양한 플랫폼과 매체를 통해 사람들에게 즐거움과 감동을 전달하는
            <br />
            차별화된 엔터테인먼트 콘텐츠를 제작합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon
            return (
              <Card
                key={index}
                className="bg-gray-900/30 border-gray-800 hover:border-green-400/50 transition-all duration-300 hover:-translate-y-2 group h-full"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-4" style={{ color: "#D4AF37" }}>
                    {product.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>

                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
