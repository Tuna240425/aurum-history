"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Megaphone, Palette, BarChart3, Globe, Video, MessageSquare } from "lucide-react"

const services = [
  {
    icon: Megaphone,
    title: "브랜드 전략",
    description: "브랜드 아이덴티티 구축부터 포지셔닝 전략까지 종합적인 브랜드 솔루션을 제공합니다.",
    features: ["브랜드 아이덴티티", "포지셔닝 전략", "브랜드 가이드라인"],
  },
  {
    icon: Palette,
    title: "크리에이티브",
    description: "시각적 임팩트와 메시지가 조화된 창의적인 콘텐츠를 제작합니다.",
    features: ["비주얼 디자인", "카피라이팅", "콘텐츠 기획"],
  },
  {
    icon: BarChart3,
    title: "디지털 마케팅",
    description: "데이터 기반의 디지털 마케팅으로 측정 가능한 성과를 만들어냅니다.",
    features: ["SNS 마케팅", "검색 광고", "성과 분석"],
  },
  {
    icon: Globe,
    title: "온라인 프레즌스",
    description: "웹사이트부터 소셜미디어까지 통합된 온라인 브랜드 경험을 구축합니다.",
    features: ["웹사이트 구축", "SEO 최적화", "소셜미디어 관리"],
  },
  {
    icon: Video,
    title: "영상 콘텐츠",
    description: "브랜드 스토리를 효과적으로 전달하는 영상 콘텐츠를 제작합니다.",
    features: ["브랜드 영상", "광고 영상", "모션 그래픽"],
  },
  {
    icon: MessageSquare,
    title: "PR & 커뮤니케이션",
    description: "언론 및 대중과의 효과적인 소통을 통해 브랜드 인지도를 높입니다.",
    features: ["보도자료 작성", "미디어 관계", "위기 관리"],
  },
]

export default function MarketingServices() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#D4AF37" }}>
            서비스 영역
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            브랜드의 모든 접점에서 일관된 경험을 제공하기 위해
            <br />
            통합적인 마케팅 서비스를 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="bg-gray-900/30 border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2 group h-full"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-4" style={{ color: "#D4AF37" }}>
                    {service.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
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
