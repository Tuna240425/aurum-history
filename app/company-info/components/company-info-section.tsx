"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, FileText, Instagram, Youtube, Send, Twitter } from "lucide-react"

const companyInfo = [
  {
    icon: MapPin,
    label: "ADDRESS",
    value: "서울특별시 송파구 위례성대로12길 36, 4층",
    description: "오럼 본사",
  },
  {
    icon: Mail,
    label: "E-MAIL",
    value: "info@aurum.com",
    description: "일반 문의",
    hasButton: true,
  },
  {
    icon: FileText,
    label: "사업자등록번호",
    value: "123-45-67890",
    description: "법인 정보",
  },
]

const socialLinks = [
  { icon: Instagram, name: "Instagram", url: "#", color: "hover:text-pink-400" },
  { icon: Youtube, name: "YouTube", url: "#", color: "hover:text-red-400" },
  { icon: Send, name: "Telegram", url: "#", color: "hover:text-blue-400" },
  { icon: Twitter, name: "Twitter", url: "#", color: "hover:text-sky-400" },
]

export default function CompanyInfoSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            회사 <span style={{ color: "#D4AF37" }}>정보</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">오럼의 기본 정보와 연락처를 확인하세요</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Company Information */}
          <div className="space-y-8">
            {companyInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-yellow-400/30 transition-all">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-yellow-400" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-400 mb-2">{info.label}</h3>
                        <p className="text-xl font-semibold text-white mb-1">{info.value}</p>
                        <p className="text-gray-500 text-sm">{info.description}</p>

                        {info.hasButton && (
                          <Button
                            className="mt-4 px-6 py-2 text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                            style={{
                              backgroundColor: "#D4AF37",
                              color: "#000000",
                            }}
                          >
                            문의하기
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Social Media Links */}
          <div className="space-y-8">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-6">소셜 미디어</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <a
                        key={index}
                        href={social.url}
                        className={`flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300 group ${social.color}`}
                      >
                        <IconComponent className="h-5 w-5 text-gray-400 group-hover:scale-110 transition-transform" />
                        <span className="text-gray-300 group-hover:text-white transition-colors">{social.name}</span>
                      </a>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Additional Info Card */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-4">운영 시간</h3>
                <div className="space-y-2 text-gray-300">
                  <p>
                    <span className="text-gray-400">평일:</span> 09:00 - 18:00
                  </p>
                  <p>
                    <span className="text-gray-400">토요일:</span> 10:00 - 15:00
                  </p>
                  <p>
                    <span className="text-gray-400">일요일:</span> 휴무
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
