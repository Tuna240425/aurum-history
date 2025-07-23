"use client"

import { useState } from "react"
import Image from "next/image"

const departments = [
  {
    id: 1,
    title: "매니징사업부",
    description: "모든 부서의 원활한 운영을 지원하고, 회사 전체의 효율성을 높이는 핵심 역할을 담당합니다. 인사, 총무, 재무, 법무 등 다양한 분야의 전문가들이 함께 일하며, 오럼의 지속적인 성장을 뒷받침하는 든든한 기반이 되고 있습니다.",
    image: "/images/dept-metaverse.png",
  },
  {
    id: 2,
    title: "인프라사업부",
    description: "다양한 브랜드/서비스들이 고객들에게 더 효과적으로 나아갈 수 있는 인프라를 준비합니다.",
    image: "/images/infra.png",
  },
  {
    id: 3,
    title: "마케팅사업부",
    description: "B2B 서비스를 중심으로 커뮤니티 바이럴, 콘텐츠 마케팅, 퍼포먼스 마케팅 등 다양한 전략을 통해 브랜드와 고객을 연결합니다. ",
    image: "/images/marketingdept.png",
  },
    {
    id: 4,
    title: "아이티사업부",
    description: "최신 기술 트렌드를 반영한 혁신적인 소프트웨어 솔루션을 개발합니다.",
    image: "/images/dept-tech.png",
  },
]

export default function DepartmentSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  return (
    <section id="department-section" className="min-h-screen bg-white dark:bg-black text-black dark:text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Our Departments
            </span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            각 부서의 전문성과 혁신적인 기술력으로 미래를 만들어갑니다
          </p>
        </div>


        {/* Department Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="relative h-52 md:h-64 rounded-xl overflow-hidden border border-gray-700 hover:shadow-lg transition group"
            >
              {/* 배경 이미지 */}
              <Image
                src={dept.image}
                alt={dept.title}
                fill
                className="object-cover object-[top_20%] brightness-75 transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover 오버레이 */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500 z-0"></div>

              {/* 텍스트 */}
              <div className="absolute inset-0 p-6 flex flex-col justify-center text-white z-10">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-xl group-hover:text-yellow-400 transition-colors">
                  {dept.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/90 drop-shadow-md group-hover:text-white transition-colors">
                  {dept.description}
                </p>
              </div>
            </div>
            ))}
          </div>

        {/* 종합지원실 소개 섹션 */}
        <div className="group cursor-pointer relative h-96 rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-400/50 transition-all duration-500 mt-16">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/members99.png"
              alt="종합지원실"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500"></div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-4xl mx-auto px-8 pr-16 w-full flex justify-end items-center">
              <div className="flex-1 max-w-2xl">
                <h3 className="text-3xl lg:text-4xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 mb-4">
                  종합지원실
                </h3>
                <p className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed mb-6">
                  모든 부서의 기획과 실행을 함께 고민하며, 원활한 운영과 실질적인 지원이 이뤄지도록 <br /> 조율합니다. 팀이 각자의 일에 집중할 수 있도록 조용히, 그러나 든든하게 곁을 지킵니다.
                </p>
                {/*<div className="flex flex-wrap gap-3">
                  {["인사관리", "재무관리", "법무지원", "총무업무"].map((item, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/10 group-hover:bg-yellow-400/20 transition-colors duration-300 rounded-full text-sm text-white backdrop-blur-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
