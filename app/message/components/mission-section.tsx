"use client"

import { motion } from "framer-motion"
import FlipCard from '../components/FlipCard'

export default function MissionSection() {
  return (
    <>
      {/* 오럼의 철학 (Humanities Section) */}
      <section className="py-[440px] bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            {/* Left Content - Text (2/5 width) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="space-y-6 mb-8">
                <h2 className="text-6xl font-bold text-gray-900 dark:text-white">인문학</h2>
                <h3 className="text-4xl font-medium text-gray-700 dark:text-gray-300">人文學</h3>
                <h4 className="text-3xl font-light text-gray-600 dark:text-gray-400 italic">Humanities</h4>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                기술과 인간성의 조화를 추구하며, 사람의 본질을 이해하고 더 나은 삶을 위한 가치를 창조합니다.
              </p>
            </motion.div>

            {/* Right Content - Character Image (3/5 width) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-3 flex justify-center"
            >
              <div className="relative">
                <img src="/images/brand-character.webp" alt="오럼 브랜드 캐릭터" className="w-96 h-96 object-contain" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 내러티브 전환 구간 (철학적 전환부) */}
      <section className="py-96 bg-gradient-to-b from-black to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <p className="text-lg md:text-xl font-light text-white">
              이제 우리는, AI를 만들고, 가상 세상을 만듭니다
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              그리고, 오럼은 다시 인간을 만들겠습니다
            </h2>
          </motion.div>

          <div className="flex flex-col items-center mt-20">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-[1.5px] h-[1280px] bg-gradient-to-b from-white/70 to-black/70"></div>
          </div>
        </div>
      </section>


      {/* 메시지 섹션 */}
      <section className="relative overflow-hidden h-[100vh]">
        {/* 배경 이미지 */}
        <div className="absolute inset-0">
          <img
            src="/images/desert.png"
            alt="사막 배경"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 텍스트 콘텐츠 (상단으로 이동) */}
        <div className="relative z-10 text-center text-black px-4 pt-28 md:pt-32 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-sm">
              사람을 더 사람답게
            </h2>
            <p className="text-lg md:text-xl font-light text-gray-700">
              사람이 행복한, 라이프 스타일을 만듭니다
              <br />
              안녕하세요, <span className="text-orange-400 font-medium">오럼</span>입니다
            </p>
          </motion.div>
        </div>


      </section>




      {/* Core Value Section */}
      <section className="py-[360px] bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">CORE VALUE</h2>
          </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          <FlipCard
            title="TRUSTABLE"
            subtitle="# 가장 신뢰할 수 있는"
            description="매번 급변하는 상황 속에서도 항상 신뢰할 수 있는 사람의 구성원이 되고자 합니다."
            backTitle="진정한 신뢰란"
            backDescription="말보다 행동으로 증명되는 가치. 오럼은 그 ‘신뢰’를 가장 먼저 생각합니다."
            image="/images/trustable.png"
          />
          <FlipCard
            title="CONVERTABLE"
            subtitle="# 가장 창의적인 것은"
            description="어떤 관습과 틀에 얽매이지 않고, 자유롭게 세상을 변화시키는 힘을 추구합니다."
            backTitle="창조는 유연함에서"
            backDescription="무한한 시도와 전환. 우리는 변화하는 세계에 유연하게 반응합니다."
            image="/images/convertable.png"
          />
          <FlipCard
            title="ESSENTIAL"
            subtitle="# 가장 필수적인"
            description="기술보다 본질, 시장보다 사람. 핵심가치를 중심으로 나아갑니다."
            backTitle="본질은 단순하다"
            backDescription="가장 필요한 것만 남기고, 꼭 필요한 가치를 제공합니다."
            image="/images/essential.png"
          />
          </div>
        </div>
      </section>

      {/* 브랜드 정신 강조 섹션 */}
      <section className="py-20 bg-[#f0bb00]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">'오럼'스럽다는 것</h2>
          </motion.div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        {/* 배경 이미지 */}
        <div className="absolute inset-0">
          <img
            src="/images/mission.png" // 👉 여기에 이미지 경로 삽입
            alt="AURUM 배경"
            className="w-full h-full object-cover"
          />
          {/* 어두운 오버레이 */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* 텍스트 컨텐츠 */}
        <div className="relative z-10 px-6 max-w-4xl text-white">
          <p className="text-sm md:text-base text-gray-200 mb-4">
            오럼은, 황금처럼..<br />
            누구에게나 가장 최후까지 가치있는 인프라로 선택받습니다
          </p>
          <h2
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)' }}
          >
            황금같은 가치를, <span className="text-yellow-400">AURUM</span>
          </h2>

        </div>
      </section>

    </>
  )
}
