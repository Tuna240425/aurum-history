"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Hash, Instagram, Youtube, Twitter, MessageCircle } from "lucide-react"
import { useLanguage } from "../../contexts/language-context"

const contactInfo = [
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
    icon: Hash,
    label: "POST",
    value: "05854",
    description: "우편번호",
  },
]

const socialLinks = [
  { icon: Instagram, name: "Instagram", url: "#", color: "hover:text-pink-400" },
  { icon: Youtube, name: "YouTube", url: "#", color: "hover:text-red-400" },
  { icon: Twitter, name: "Twitter", url: "#", color: "hover:text-blue-400" },
  { icon: MessageCircle, name: "KakaoTalk", url: "#", color: "hover:text-yellow-400" },
]

export default function ContactSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            CONTACT <span style={{ color: "#D4AF37" }}>US</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            언제든지 편하게 연락주세요. 빠르고 정확한 답변을 드리겠습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
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

          {/* Company Image & Social Links */}
          <div className="space-y-8">
            <Card className="bg-gray-900/50 border-gray-800 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=300&width=500&text=Company+Building"
                    alt="오럼 본사 건물"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-semibold text-lg">오럼 본사</h3>
                    <p className="text-gray-300 text-sm">Aurum Headquarters</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Links */}
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
          </div>
        </div>
      </div>
    </section>
  )
}
