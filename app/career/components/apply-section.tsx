"use client"

import Link from "next/link"

export default function TeamCulturePage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between">
      {/* 상단 콘텐츠 */}
      <main className="max-w-4xl mx-auto px-6 py-20 space-y-16">
        <section className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            우리가 일하는 방식
          </h1>
          <p className="text-gray-400 text-lg">
            자율과 책임, 공감과 효율의 균형을 추구하는 협업 문화
          </p>
        </section>

        <section className="space-y-12">
          <div>
            <h2 className="text-xl font-semibold text-green-400">01. 유연한 근무</h2>
            <p className="text-gray-300 mt-2">
              정해진 출퇴근 시간 대신 각자의 리듬에 맞춰 일합니다. 책임을 기반으로 일정을 설계하고, 
              온라인 협업 도구를 통해 언제 어디서나 소통합니다.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-400">02. 복수 역할 기반의 협업</h2>
            <p className="text-gray-300 mt-2">
              우리는 각자의 전문성과 관심을 바탕으로 여러 역할을 수행합니다. 마케터가 기획자가 되기도 하고,
              디자이너가 리서처가 되기도 합니다.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-400">03. 조용하지만 깊은 커뮤니케이션</h2>
            <p className="text-gray-300 mt-2">
              빠르게 말하는 것보다, 충분히 숙고한 메시지를 더 중요하게 여깁니다. 비동기적 소통을 지향하며,
              기록 중심의 협업을 합니다.
            </p>
          </div>
        </section>

        <div className="text-center pt-10">
          <Link
            href="/career/join-us"
            className="inline-block px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            ← 인재영입 메인으로 돌아가기
          </Link>
        </div>
      </main>

      {/* 공통 푸터 */}
    </div>
  )
}
