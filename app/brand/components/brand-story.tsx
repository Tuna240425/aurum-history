"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function BrandStory() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* 제목 영역 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-yellow-600 dark:text-yellow-400">
            브랜드 스토리
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            오럼(Aurum)은 라틴어로 '금'을 의미합니다. 금처럼 귀하고 변하지 않는 가치를 추구하며,
            <br />
            시간이 지날수록 더욱 빛나는 브랜드가 되고자 합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 텍스트 카드 */}
          <div className="space-y-8">
            {[
              {
                title: "시작",
                body:
                  "2020년, 작은 아이디어에서 시작된 오럼은 'AI 기술로 사람들의 일상을 더 풍요롭게 만들자'는 비전을 가지고 출발했습니다. 마치 도예가가 흙을 빚어 아름다운 그릇을 만들듯, 우리는 기술을 통해 가치 있는 서비스를 만들어갑니다.",
              },
              {
                title: "성장",
                body:
                  "장인정신을 바탕으로 한 우리의 접근 방식은 시장에서 인정받았습니다. 빠른 성장보다는 지속가능한 발전을, 단순한 기능보다는 사용자의 진정한 필요를 충족시키는 것에 집중했습니다.",
              },
              {
                title: "미래",
                body:
                  "앞으로도 오럼은 변하지 않는 가치를 추구하며, 시대의 변화에 맞춰 진화해나갈 것입니다. 금처럼 순수하고 귀한 브랜드로서, 사람들의 삶에 진정한 가치를 더하는 것이 우리의 목표입니다.",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="bg-white dark:bg-gray-900/30 border border-gray-200 dark:border-gray-800 shadow-md"
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-700 dark:text-yellow-400">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 비주얼 엘리먼트 */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-600/20 dark:to-orange-600/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold mb-4 text-yellow-700 dark:text-yellow-400">
                  Aurum
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg">라틴어: 금(Gold)</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">순수함 • 가치 • 영원함</p>
              </div>
            </div>

            {/* 장식 요소 */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-yellow-400 rotate-45"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
