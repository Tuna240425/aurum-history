"use client"
import { Calendar, Star, Rocket, Users, Award, Building, Heart, GraduationCap } from "lucide-react"

interface TimelineEvent {
  date: string
  title: string
  description: string
  icon: any
  category: string
}

interface YearData {
  year: string
  events: TimelineEvent[]
}

const timelineData: YearData[] = [
  {
    year: "2025",
    events: [
      {
        date: "5월",
        title: "중소벤처기업부 공식 마케팅바우처 수행기관 선정",
        description:
          "중소벤처기업부로부터 공식 마케팅바우처 수행기관으로 선정되어 중소기업 마케팅 지원 역량을 인정받았습니다.",
        icon: Award,
        category: "인증",
      },
      {
        date: "1월",
        title: "연구개발전담부서 설립",
        description: "지속적인 혁신과 기술 발전을 위해 연구개발전담부서를 새롭게 설립했습니다.",
        icon: Rocket,
        category: "조직확장",
      },
    ],
  },
  {
    year: "2024",
    events: [
      {
        date: "12월",
        title: "브랜디드 서비스 론칭",
        description: "브랜드 마케팅 솔루션 '브랜디드' 서비스를 정식 론칭하여 브랜딩 영역을 확장했습니다.",
        icon: Star,
        category: "서비스론칭",
      },
      {
        date: "11월",
        title: "사옥 이전",
        description: "성장하는 조직 규모에 맞춰 더 넓고 현대적인 사옥으로 이전하여 업무 환경을 개선했습니다.",
        icon: Building,
        category: "인프라",
      },
      {
        date: "3월",
        title: "배럭스 서비스 론칭",
        description: "혁신적인 마케팅 솔루션 '배럭스' 서비스를 론칭하여 시장에서 주목받았습니다.",
        icon: Rocket,
        category: "서비스론칭",
      },
    ],
  },
  {
    year: "2023",
    events: [
      {
        date: "11월",
        title: "AURUM 자격평가증명원 설립",
        description: "전문 인력 양성과 자격 평가를 위한 AURUM 자격평가증명원을 설립했습니다.",
        icon: GraduationCap,
        category: "교육기관",
      },
      {
        date: "6월",
        title: "매니징사업부 신설",
        description: "체계적인 프로젝트 관리와 운영을 위해 매니징사업부를 새롭게 신설했습니다.",
        icon: Users,
        category: "조직확장",
      },
      {
        date: "2월",
        title: "리프 서비스 론칭",
        description: "새로운 디지털 마케팅 솔루션 '리프' 서비스를 성공적으로 론칭했습니다.",
        icon: Star,
        category: "서비스론칭",
      },
    ],
  },
  {
    year: "2022",
    events: [
      {
        date: "9월",
        title: "아이티사업부 신설",
        description: "IT 기술 역량 강화를 위해 아이티사업부를 신설하여 기술 조직을 확장했습니다.",
        icon: Rocket,
        category: "조직확장",
      },
      {
        date: "4월",
        title: "인프라사업부 신설",
        description: "안정적인 서비스 운영을 위해 인프라사업부를 신설하여 기술 인프라를 강화했습니다.",
        icon: Building,
        category: "조직확장",
      },
    ],
  },
  {
    year: "2021",
    events: [
      {
        date: "12월",
        title: "한국소아암재단 후원 협약 체결",
        description: "사회적 책임을 다하기 위해 한국소아암재단과 후원 협약을 체결했습니다.",
        icon: Heart,
        category: "사회공헌",
      },
      {
        date: "8월",
        title: "다즐링 서비스 론칭",
        description: "창의적인 마케팅 솔루션 '다즐링' 서비스를 론칭하여 서비스 포트폴리오를 확장했습니다.",
        icon: Star,
        category: "서비스론칭",
      },
      {
        date: "5월",
        title: "달콤 서비스 론칭",
        description: "고객 맞춤형 마케팅 플랫폼 '달콤' 서비스를 성공적으로 론칭했습니다.",
        icon: Star,
        category: "서비스론칭",
      },
      {
        date: "3월",
        title: "시즈닝 서비스 론칭",
        description: "첫 번째 자체 개발 서비스 '시즈닝'을 론칭하여 본격적인 서비스 사업을 시작했습니다.",
        icon: Rocket,
        category: "서비스론칭",
      },
      {
        date: "1월",
        title: "캠퍼스타운 입주",
        description: "성장하는 팀을 위해 캠퍼스타운에 입주하여 새로운 사업 기반을 마련했습니다.",
        icon: Building,
        category: "인프라",
      },
    ],
  },
  {
    year: "2020",
    events: [
      {
        date: "12월",
        title: "고려대학교 경영대학 스타트업 연구원 지원사업 선정",
        description: "고려대학교 경영대학 스타트업 연구원 지원사업에 선정되어 학술적 지원을 받았습니다.",
        icon: GraduationCap,
        category: "지원사업",
      },
      {
        date: "3월",
        title: "Aurum 법인 설립",
        description: "혁신적인 마케팅 솔루션을 제공하겠다는 비전으로 Aurum을 공식 법인으로 설립했습니다.",
        icon: Star,
        category: "설립",
      },
    ],
  },
  {
    year: "2018-2019",
    events: [
      {
        date: "2019",
        title: "서울창조경제혁신센터 인큐베이팅센터 8기 선정",
        description: "지속적인 성장을 위해 서울창조경제혁신센터 인큐베이팅센터 8기에 선정되었습니다.",
        icon: Rocket,
        category: "인큐베이팅",
      },
      {
        date: "2018",
        title: "서울창조경제혁신센터 인큐베이팅센터 7기 선정",
        description:
          "창업 초기 단계에서 서울창조경제혁신센터 인큐베이팅센터 7기에 선정되어 체계적인 지원을 받았습니다.",
        icon: Users,
        category: "인큐베이팅",
      },
    ],
  },
  {
    year: "2017",
    events: [
      {
        date: "12월",
        title: "SK청년비상프로그램 선정",
        description: "SK청년비상프로그램에 선정되어 청년 창업가로서 인정받고 지원을 받았습니다.",
        icon: Award,
        category: "지원프로그램",
      },
      {
        date: "6월",
        title: "스마트창작터 시장검증팀 선정",
        description: "혁신적인 아이디어로 스마트창작터 시장검증팀에 선정되어 창업의 첫걸음을 내디뎠습니다.",
        icon: Star,
        category: "시장검증",
      },
    ],
  },
]

const categoryColors: { [key: string]: string } = {
  설립: "from-yellow-500 to-yellow-600",
  시장검증: "from-blue-500 to-blue-600",
  지원프로그램: "from-green-500 to-green-600",
  인큐베이팅: "from-purple-500 to-purple-600",
  지원사업: "from-orange-500 to-orange-600",
  인프라: "from-pink-500 to-pink-600",
  서비스론칭: "from-red-500 to-red-600",
  사회공헌: "from-indigo-500 to-indigo-600",
  조직확장: "from-teal-500 to-teal-600",
  교육기관: "from-cyan-500 to-cyan-600",
  인증: "from-emerald-500 to-emerald-600",
}

export default function HistoryTimeline() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="mt-16 text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4 leading-tight">
            우리의 <span className="text-yellow-400">여정</span>
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto leading-normal">
            2020년 작은 시작에서 지금까지, Aurum이 만들어온 의미 있는 순간들
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 to-gray-300 dark:to-gray-600"></div>

          {timelineData.map((yearData, yearIndex) => (
            <div key={yearData.year} className="mb-8">
              {/* Year Header */}
              <div className="flex items-center mb-8">
                <div className="relative z-10 bg-yellow-400 text-black px-6 py-3 rounded-full font-bold text-xl shadow-lg">
                  {yearData.year}
                </div>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent ml-4"></div>
              </div>

              {/* Events */}
              <div className="space-y-2">
                {yearData.events.map((event, eventIndex) => {
                  const IconComponent = event.icon
                  const colorClass = categoryColors[event.category] || "from-gray-500 to-gray-600"

                  return (
                    <div key={eventIndex} className="relative flex items-start">
                      {/* Timeline Dot */}
                      <div className="absolute left-6 w-4 h-4 bg-yellow-400 rounded-full border-4 border-white dark:border-black shadow-lg z-10"></div>

                      {/* Content */}
                      <div className="ml-20">
                        <div className="bg-white dark:bg-gray-900 transition-all duration-300 hover:-translate-y-1 group min-h-[180px] p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center">
                              <div>
                                <div className="flex items-center space-x-2 mb-1">
                                  <Calendar className="h-4 w-4 text-yellow-400" />
                                  <span className="text-yellow-400 font-medium text-sm">{event.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-yellow-400 transition-colors">
                                  {event.title}
                                </h3>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{event.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}

          {/* Timeline End */}
          <div className="flex items-center justify-center mt-12">
            <div className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-6 py-3 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600">
              ✨ 더 많은 이야기가 계속됩니다 ✨
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
