"use client"

import { Card, CardContent } from "@/components/ui/card"



export default function BrandIdentity() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#D4AF37" }}>
            브랜드 아이덴티티
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            오럼의 시각적 정체성과 브랜드 요소들을 소개합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Logo & Typography */}
          <div className="space-y-8">
            <Card className="bg-gray-900/30 border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6" style={{ color: "#D4AF37" }}>
                  로고타입
                </h3>

                <div className="bg-black rounded-lg p-8 mb-6 text-center">
                  <div className="text-4xl font-bold mb-4" style={{ color: "#D4AF37" }}>
                    Aurum
                  </div>
                  <p className="text-gray-400 text-sm">Primary Logo</p>
                </div>

                <div className="bg-white rounded-lg p-8 text-center">
                  <div className="text-4xl font-bold mb-4 text-black">Aurum</div>
                  <p className="text-gray-600 text-sm">Alternative Logo</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/30 border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6" style={{ color: "#D4AF37" }}>
                  타이포그래피
                </h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Primary Font</p>
                    <p className="text-2xl font-bold text-white">Pretendard</p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm mb-2">Secondary Font</p>
                    <p className="text-xl text-gray-300">Inter</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Colors & Usage */}
          <div className="space-y-8">
            <Card className="bg-gray-900/30 border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6" style={{ color: "#D4AF37" }}>
                  컬러 팔레트
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="w-full h-20 bg-yellow-400 rounded-lg mb-3"></div>
                    <p className="text-sm text-gray-300">Primary Gold</p>
                    <p className="text-xs text-gray-500">#D4AF37</p>
                  </div>

                  <div className="text-center">
                    <div className="w-full h-20 bg-black border border-gray-600 rounded-lg mb-3"></div>
                    <p className="text-sm text-gray-300">Primary Black</p>
                    <p className="text-xs text-gray-500">#000000</p>
                  </div>

                  <div className="text-center">
                    <div className="w-full h-20 bg-green-400 rounded-lg mb-3"></div>
                    <p className="text-sm text-gray-300">Accent Green</p>
                    <p className="text-xs text-gray-500">#00FF00</p>
                  </div>

                  <div className="text-center">
                    <div className="w-full h-20 bg-gray-600 rounded-lg mb-3"></div>
                    <p className="text-sm text-gray-300">Neutral Gray</p>
                    <p className="text-xs text-gray-500">#6B7280</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/30 border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6" style={{ color: "#D4AF37" }}>
                  브랜드 보이스
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">톤 앤 매너</h4>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• 전문적이면서도 친근한</li>
                      <li>• 신뢰할 수 있는</li>
                      <li>• 혁신적이고 미래지향적인</li>
                      <li>• 진정성 있는</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">커뮤니케이션 원칙</h4>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• 명확하고 간결하게</li>
                      <li>• 고객 중심의 언어 사용</li>
                      <li>• 기술적 복잡함을 쉽게 설명</li>
                      <li>• 감정적 연결 추구</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
