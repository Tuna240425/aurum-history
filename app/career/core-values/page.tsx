"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ThemeProvider } from "../../contexts/theme-context" 


const values = [
  {
    id: "01",
    title: "꿈을 꾸는 자,",
    enTitle: "Dreamer",
    image: "/images/dreamer.jpg",
    quote:  "꿈을 꿀 수 있다면, 꿈을 실현할 수도 있다 \n -월트 디즈니-",
    description: "오럼은 ‘세상을 더 나은 곳으로 바꾸려는’ 꿈을 꾸는 사람들로 구성되어 있습니다. 어떤 꿈은 뾰족하고, 어떤 꿈은 둥그렇습니다. 똑같은 꿈도 어떨 때는 뜨겁고, 어떨 때는 차갑습니다. 하지만 우리가 꾸는 꿈은 항상 세상에 이(利)로워야 하고, 우리 주변의 친구들, 가족들 그리고 우리가 속한 공동체의 행복에 도움이 되는 꿈이어야 합니다. 좋은 꿈을 꾸는 사람들이, 저희와 함께 하길 바랍니다.",
  },
  {
    id: "02",
    title: "화합하고 듣는 자,",
    enTitle: "Communicator",
    image: "/images/communicator.jpg",
    quote: "나의 언어의 한계는, 나의 세계의 한계를 의미한다\n-비트겐슈타인-",
    description: "오럼은 말할 수 없는 것 조차 소통하려는 ‘수다쟁이’ 들로 이루어져 있습니다. 우리의 수다는, 입으로, 글자로, 자료로, 문서로, 영상으로, 그림으로, 기호로, 도식으로, SNS로, 문자로, 카톡으로, 리플로, 게시글로, 태그로, 몸짓으로, 눈짓으로, 손짓으로, 고함으로, 침묵으로, 눈물과 웃음으로.때로는 치열하게, 때로는 건조하게, 때로는 그 대화에 참여하는 모든 사람의 인생을 바꿔 놓을 이야기가 매일매일 일상적으로 펼쳐집니다. 우리의 수다는 스토리를 만들고, 이야기를 풀어가며, 세상을 향한 이야기가 됩니다. 대화의 힘을 움켜쥔 사람들이, 저희와 함께 하길 바랍니다.",
  },
  {
    id: "03",
    title: "움직이는 자,",
    enTitle: "Performer",
    image: "/images/performancer.jpg",
    quote: "알고도 행하지 않으면, 정말 아는 것이 아니다\n-왕양명-",
    description: "오럼은 ‘충분히 숙고하고, 뚜렷하게 움직이는‘ 사람들이 만들어갑니다. 많은 기획안이, 많은 아이디어가, 많은 가능성이 매일같이 펼쳐지는 회사는 시끄럽습니다. 하지만 그런 모든 것보다 시끄러운 것은, 한 구성원의 작지만 확실한 액션, 신속하고 명확한 행동입니다. 저희는 한 때의 이목을 부여잡는 멋드러진 말보다, 고객의 마음을 울리는 본질적인 행동과 결과로 보여줍니다. 먼 미래의 큰 생각보다, 당장의 작은 행동을 즐기는 분들이, 저희와 함께 하길 바랍니다.",
  },
]

export default function CoreValuesPage() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
        <section className="text-center pt-[480px] pb-10">
          <h2 className="text-xl text-gray-500 dark:text-gray-400 mb-2">“우리는</h2>
          <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white">이런 인재와 함께 합니다”</h1>
        </section>

      <div className="flex flex-col items-center">
        {/* 시작점 */}
        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />

        {/* 얇은 선 */}
        <div className="w-[1.5px] h-[2048px] bg-gradient-to-b from-green-500 to-white dark:to-black" />

        {/* 끝점 */}
        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mb-12" />
      </div>

      <div className="space-y-24 px-4 max-w-6xl mx-auto pb-32">
        {values.map((item) => (
          <div key={item.id} className="flex flex-col items-center text-center">
            {/* 이미지 크게 */}
            <Image
              src={item.image}
              alt={item.enTitle}
              width={900}
              height={500}
              className="rounded-lg object-cover mb-12"
            />

            {/* 제목 */}
            <h2 className="text-green-500 text-2xl sm:text-3xl font-bold mb-8">
              {item.id}. {item.title} {item.enTitle} 
            </h2>

            {/* 인용구 or 강조문 (선택사항) */}
            <h3 className="whitespace-pre-line text-lg italic mb-8 text-black dark:text-white">
              {item.quote}
            </h3>


            {/* 본문 설명 */}
            <p className="text-gray-500 max-w-3xl mb-4">{item.description}</p>
          </div>
        ))}
      </div>


      </div>
    </ThemeProvider>
  )
}