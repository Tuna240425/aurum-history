"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText, Palette, ImageIcon } from "lucide-react"

const guidelines = [
  {
    icon: FileText,
    title: "브랜드 가이드라인",
    description: "로고 사용법, 컬러 가이드, 타이포그래피 등 브랜드 사용에 대한 전체 가이드라인",
    fileSize: "12.5 MB",
    format: "PDF",
  },
  {
    icon: Palette,
    title: "컬러 팔레트",
    description: "브랜드 컬러의 RGB, CMYK, HEX 값과 사용 예시",
    fileSize: "2.1 MB",
    format: "AI, PNG",
  },
  {
    icon: ImageIcon,
    title: "로고 패키지",
    description: "다양한 형태와 크기의 로고 파일 (벡터 및 래스터)",
    fileSize: "8.7 MB",
    format: "AI, SVG, PNG",
  },
]

export default function BrandGuidelines() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#D4AF37" }}>
            브랜드 가이드라인
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            오럼 브랜드를 올바르게 사용하기 위한 가이드라인과 에셋을 다운로드하세요.
            <br />
            일관된 브랜드 경험을 위해 가이드라인을 준수해 주시기 바랍니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {guidelines.map((item, index) => {
            const IconComponent = item.icon
            return (
              <Card
                key={index}
                className="bg-gray-900/30 border-gray-800 hover:border-green-400/50 transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-4" style={{ color: "#D4AF37" }}>
                    {item.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed text-sm">{item.description}</p>

                  <div className="flex justify-between items-center mb-6 text-sm text-gray-400">
                    <span>{item.fileSize}</span>
                    <span>{item.format}</span>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 bg-transparent"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    다운로드
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Contact Section */}
        <Card className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border-gray-700">
          <CardContent className="p-12 text-center">
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#D4AF37" }}>
              브랜드 사용 문의
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              브랜드 사용에 대한 추가 문의사항이 있으시거나, 특별한 용도로 브랜드를 사용하고자 하시는 경우 언제든지
              연락해 주세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "#00ff00",
                  color: "#000000",
                }}
              >
                브랜드 문의하기
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg font-semibold rounded-lg border-gray-600 text-gray-300 hover:bg-gray-800 transition-all duration-300 bg-transparent"
              >
                전체 가이드 다운로드
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
