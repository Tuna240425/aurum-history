"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Sparkles, Zap } from "lucide-react"

const principles = [
  {
    icon: Heart,
    title: "감동 중심",
    description: "단순한 재미를 넘어 진정한 감동을 전달하는 콘텐츠를 만듭니다.",
  },
  {
    icon: Users,
    title: "소통",
    description: "관객과의 깊은 소통을 통해 공감대를 형성하는 엔터테인먼트를 추구합니다.",
  },
  {
    icon: Sparkles,
    title: "창의성",
    description: "독창적이고 혁신적인 아이디어로 새로운 재미를 창조합니다.",
  },
  {
    icon: Zap,
    title: "에너지",
    description: "긍정적인 에너지와 활력을 전달하여 일상에 활력을 불어넣습니다.",
  },
]

export default function EntertainmentAbout() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#D4AF37" }}>
            우리의 가치
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            엔터테인먼트는 단순한 오락이 아닙니다. 사람들의 마음을 움직이고,
            <br />
            함께 웃고 울며 소통할 수 있는 특별한 경험을 만드는 것입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => {
            const IconComponent = principle.icon
            return (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-green-400/50 transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
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
