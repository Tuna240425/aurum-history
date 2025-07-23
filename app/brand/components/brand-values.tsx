"use client"

export function BrandDalgona() {
  return (
    <section className="snap-start min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-3xl mx-auto text-center">
        <div className="relative mb-12">
          <img
            src="/images/dalgona.png"
            alt="DalGona"
            className="w-full max-w-xs aspect-square object-cover mx-auto rounded-lg shadow-lg border border-yellow-400"
          />
          <div className="absolute top-4 left-4 bg-yellow-400 text-black text-xl px-6 py-2 font-extrabold rounded-full shadow-lg">
            01. DalGona
          </div>
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-yellow-400 mb-6">DalGona</h2>

        <p className="text-lg font-semibold text-yellow-500 dark:text-yellow-300 mb-2">
          #별들의 리그, 무슨 말이 필요해..!
        </p>

        <p className="italic text-sm text-gray-500 dark:text-gray-400 mb-6">
          우리의 땀과 열정이, 호흡이
          <br />
          더 나은 세상으로, 그리고 즐거움으로
        </p>

        <p className="text-base leading-relaxed text-gray-800 dark:text-gray-300">
          엔터테인먼트 플랫폼 달고나는, <br />
          우리의 별들이 뛰노는 경쟁 리그에서,
          <br />
          마음껏 열정하며, 모두가 함께 즐기는 온라인 서비스입니다.
          <br />
          내가 꿈꾸는 셀럽의 치열하고 숭고한 경쟁을 느껴보세요
        </p>
      </div>
    </section>
  )
}

export function BrandBarracks() {
  return (
    <section className="snap-start min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-3xl mx-auto text-center">
        <div className="relative mb-12">
          <img
            src="/images/barracks.png"
            alt="BarRacks"
            className="w-full max-w-xs aspect-square object-cover mx-auto rounded-lg shadow-lg border border-emerald-400"
          />
          <div className="absolute top-4 left-4 bg-green-400 text-black text-xl px-6 py-2 font-extrabold rounded-full shadow-lg">
            02. BarRacks
          </div>
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-green-400 mb-6">BarRacks</h2>

        <p className="text-lg font-semibold text-green-500 dark:text-green-300 mb-2">
          #인사가 만사라는데.. 신입 뽑기가 제일 무서워..!
        </p>

        <p className="italic text-sm text-gray-500 dark:text-gray-400 mb-6">
          이젠 직접 같이 일해보고 뽑으세요.
          <br />
          예측이 아닌 확신으로! 기대가 아닌 결과로!
        </p>

        <p className="text-base leading-relaxed text-gray-800 dark:text-gray-300">
          신입 인재 채용 플랫폼 "배럭스"는, <br />
          우리 회사의 문화와 직무에 가장 잘 커스터마이징된 인재를 찾아
          <br />
          실제 업무 프로젝트를 진행, <br />
          그 성과를 바탕으로 채용 여부를 결정하는 인재 발굴 서비스입니다.
          <br />
          회사의 젊은 미래를 배럭스에서 탄탄하게 키워보세요!
        </p>
      </div>
    </section>
  )
}
