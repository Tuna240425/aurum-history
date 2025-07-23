"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Lightbulb, TrendingUp } from "lucide-react"

const principles = [
  {
    icon: Target,
    title: "본질 중심",
    description: "브랜드의 핵심 가치를 파악하고 이를 바탕으로 한 전략을 수립합니다.",
  },
  {
    icon: Users,
    title: "팀워크",
    description: "다양한 전문성을 가진 팀원들이 협력하여 최고의 결과를 만들어냅니다.",
  },
  {
    icon: Lightbulb,
    title: "인사이트",
    description: "데이터와 직관을 결합하여 독창적인 마케팅 솔루션을 제공합니다.",
  },
  {
    icon: TrendingUp,
    title: "성장 지향",
    description: "클라이언트의 지속가능한 성장을 위한 장기적 관점의 전략을 제시합니다.",
  },
]

export default function MarketingAbout() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#D4AF37" }}>
            우리의 철학
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            마케팅은 단순한 홍보가 아닙니다. 브랜드와 고객 사이의 진정한 소통을 만들어내는 것,
            <br />
            그것이 우리가 추구하는 마케팅의 본질입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => {
            const IconComponent = principle.icon
            return (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-4" style={{ color: "#D4AF37" }}>
                    {principle.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed">{principle.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
