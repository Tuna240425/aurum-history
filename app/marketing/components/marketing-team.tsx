"use client"

import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  {
    name: "김마케팅",
    role: "마케팅 디렉터",
    experience: "10년+ 브랜드 전략",
    description: "글로벌 브랜드부터 스타트업까지 다양한 규모의 브랜드 전략을 수립해온 전문가입니다.",
  },
  {
    name: "이크리에이티브",
    role: "크리에이티브 디렉터",
    experience: "8년+ 광고 제작",
    description: "수많은 어워드 수상 경력을 가진 크리에이티브 전문가로, 브랜드의 본질을 시각화합니다.",
  },
  {
    name: "박디지털",
    role: "디지털 마케팅 매니저",
    experience: "6년+ 퍼포먼스 마케팅",
    description: "데이터 분석을 통한 최적화된 디지털 마케팅 전략으로 ROI를 극대화합니다.",
  },
  {
    name: "최콘텐츠",
    role: "콘텐츠 스트래티지스트",
    experience: "7년+ 콘텐츠 기획",
    description: "브랜드 스토리텔링과 콘텐츠 마케팅 분야의 전문가로 고객과의 깊은 연결을 만듭니다.",
  },
]

export default function MarketingTeam() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#D4AF37" }}>
            팀 소개
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            각자의 전문 분야에서 뛰어난 역량을 가진 팀원들이 모여
            <br />
            시너지를 만들어내는 것이 우리의 강점입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-gray-900/30 border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                </div>

                <h3 className="text-xl font-bold mb-2" style={{ color: "#D4AF37" }}>
                  {member.name}
                </h3>

                <p className="text-cyan-400 font-medium mb-2">{member.role}</p>

                <p className="text-sm text-gray-400 mb-4">{member.experience}</p>

                <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
