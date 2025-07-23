"use client"

export default function WithUs() {
  return (
    <section className="bg-white dark:bg-black py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black dark:text-white">
          With Us 제휴 기관/단체/협회
        </h2>

        <button className="bg-green-400 text-black text-sm font-medium px-4 py-1 rounded-full mb-4 mx-auto">
          함께하고 있어요!
        </button>

        <p className="text-yellow-500 font-semibold mb-2">Association Relationship</p>
        <hr className="border-yellow-400 mb-6 mx-auto w-48" />

        <div className="text-sm leading-relaxed space-y-2 text-gray-700 dark:text-gray-300">
          <p>
            중소벤처기업부 · 한국콘텐츠진흥원(Kocca) · 서울시 창조경제혁신센터(용산) · 고려대학교 캠퍼스타운 · BGN 밝은눈안과 잠실
          </p>
          <p>
            네이버 웹툰 · 한국소아암재단 · 고려대학연합 클럽 후원위원회 · K-ICT 창업멘토링센터 · 쿠팡플레이 · 에일리언 컴퍼니 
          </p>
        </div>
      </div>
    </section>
  )
}
