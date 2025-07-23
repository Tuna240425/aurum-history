"use client"

import { useEffect, useState } from "react"
import JoinHero from "./components/join-hero"
import PositionList from "./components/position-list"
// import ApplySection from "./components/apply-section"
import Link from "next/link"
import FlipCard from "./components/flip-card"

export default function JoinUsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="bg-black min-h-screen">

      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <section className="overflow-y-auto">
          <JoinHero />
        </section>

        <section className="overflow-y-auto bg-white dark:bg-black text-black dark:text-white py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-24">우리 팀의 일하는 방식</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FlipCard
                    title="뜨거움"
                    description={
                        <>
                        오럼은.. <br /> <br />
                        우리 사회의 해결해야 하는 <br />
                        문제에서 뜨겁습니다.<br /><br />
                        지켜져야 하는 정의를<br />
                        추구하는 것에서 뜨겁습니다.
                        </>
                    }
                    image="/images/fire.png"
                />
                <FlipCard
                    title="차가움"
                    description={
                        <>
                        오럼은.. <br /> <br />
                        듣기 좋은 말들이 난무하는<br />  
                        상황에서 차갑습니다.<br /> <br />
                        본질이 무엇인가를 탐구하는<br />  
                        자리에서 차갑습니다.<br /> <br />
                        무언가가 널부러지고,<br /> 
                        흐트러진 곳에서 차갑습니다.
                        </>
                    }
                    image="/images/cold.png"
                />
                <FlipCard
                    title="진중함"
                    description={
                        <>
                        오럼은.. <br /> <br />
                        가장 유혹적인 상황에서 한번<br />  
                        물러납니다.<br /> <br />
                        모두가 맞다고 할 때,<br />  
                        다시 한번 호흡을 가다듬고자 합니다.<br /> <br />
                        휘몰아치는 폭풍의 안에 있을 때의<br />  
                        결정이, 누군가에게 상처가<br />  
                        되지 않을까 고심합니다.
                        </>
                    }
                    image="/images/warrior.png"
                />
                </div>
            </div>
            </section>



        <section className="overflow-y-auto bg-white dark:bg-black text-black dark:text-white py-20 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* 핵심가치 */}
                <div className="flex flex-col items-center justify-center text-center p-6 rounded-xl border border-zinc-200 dark:border-zinc-700">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                  우리가 함께하는 인재
                </h3>
                <Link
                    href="/career/core-values"
                    className="px-6 py-2 border border-black dark:border-white rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
                >
                    자세히 보기
                </Link>
                </div>


                {/* 팀컬처 */}
                <div className="flex flex-col items-center justify-center text-center p-6 rounded-xl border border-zinc-200 dark:border-zinc-700">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                    학벌, 스펙보다 우리에게 중요한 것
                </h3>
                <Link
                    href="/career/team-culture"
                    className="px-6 py-2 border border-black dark:border-white rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
                >
                    자세히 보기
                </Link>
                </div>
            </div>
            </section>


        <section className="overflow-y-auto">
          <PositionList />
        </section>

        {/* <section className="overflow-y-auto">
          <ApplySection />
        </section> */}

      </div>
    </div>
  )
}
