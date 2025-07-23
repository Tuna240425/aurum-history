"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function EntertainmentContact() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-yellow-500 dark:text-yellow-300">
            프로젝트 문의
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            오럼 고유 코드가 있으신 고객사분들은 본 창구가 아닌 사전에 안내된 창구를 활용해주시기 바랍니다
            <br />
            <strong>프로젝트 문의는 아래 양식을 통해 접수해 주세요.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-100 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-800 transition-colors">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-500 dark:text-yellow-300">
                프로젝트 문의하기
              </h3>

              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault()
                  const form = e.currentTarget
                  const company = (form.elements.namedItem("company") as HTMLInputElement).value
                  const name = (form.elements.namedItem("name") as HTMLInputElement).value
                  const email = (form.elements.namedItem("email") as HTMLInputElement).value
                  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value

                  const subject = encodeURIComponent(`[프로젝트 문의] ${company} - ${name}`)
                  const body = encodeURIComponent(
                    `회사명: ${company}\n담당자명: ${name}\n이메일: ${email}\n\n프로젝트 내용:\n${message}`
                  )

                  window.location.href = `mailto:marketing@aurum.nexus?subject=${subject}&body=${body}`
                }}
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">회사명</label>
                  <input
                    type="text"
                    name="company"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white"
                    placeholder="회사명을 입력해주세요"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">담당자명</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white"
                    placeholder="담당자명을 입력해주세요"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">이메일</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white"
                    placeholder="이메일을 입력해주세요"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">프로젝트 내용</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white resize-none"
                    placeholder="프로젝트에 대해 간단히 설명해주세요"
                  />
                </div>

              <div className="space-y-2">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full py-4 text-lg font-semibold rounded-lg bg-cyan-400 text-black hover:bg-cyan-300 transition-all duration-300 hover:scale-105"
                >
                  문의 보내기
                </Button>

                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  * 문의 버튼 클릭 시 메일 앱이 실행되지 않는다면,<br />
                  <strong>marketing@aurum.nexus</strong>로 직접 메일을 보내주세요.
                </p>
              </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-gray-100 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-800 transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-yellow-500 dark:text-yellow-300">
                  연락처 정보
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-cyan-400 mr-4" />
                    <div>
                      <p className="text-gray-600 dark:text-gray-300">이메일</p>
                      <p className="text-gray-900 dark:text-white font-medium">marketing@aurum.nexus</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-cyan-400 mr-4" />
                    <div>
                      <p className="text-gray-600 dark:text-gray-300">전화번호</p>
                      <p className="text-gray-900 dark:text-white font-medium">02-417-7009</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-cyan-400 mr-4" />
                    <div>
                      <p className="text-gray-600 dark:text-gray-300">주소</p>
                      <p className="text-gray-900 dark:text-white font-medium">서울특별시 송파구 위례성대로12길 36, 4층</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-cyan-400 mr-4" />
                    <div>
                      <p className="text-gray-600 dark:text-gray-300">운영시간</p>
                      <p className="text-gray-900 dark:text-white font-medium">평일 10:00 - 17:00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-cyan-100/20 to-blue-100/20 dark:from-cyan-400/10 dark:to-blue-500/10 border border-cyan-300 dark:border-cyan-400/30">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-bold mb-4 text-yellow-500 dark:text-yellow-300">
                  빠른 상담 원하시나요?
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  전화로 직접 상담받으시면 <br/> 더욱 빠르고 정확한 답변을 드릴 수 있습니다.
                </p>
                <a href="tel:0212345678" className="block">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-cyan-400 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 bg-transparent"
                  >
                    전화 상담 신청
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}