"use client"

import { ThemeProvider } from "next-themes"
import Image from "next/image"

const values = [
  {
    id: "인재의 제 1원칙🎖",
    title: "쓴다. 기록한다. 다시 본다.",
    enTitle: "“노트는 나의 또 다른 심장”",
    image: "/images/culture1.jpg",
    quote:  "“노트는 나의 또 다른 심장”",
    description: "오럼의 인재는, 기억보다 기록을 신뢰합니다. 모든 업무 커뮤니케이션에서 제일 중요한 것은, 상황의 누적과 기록입니다. 우리 부장님은 말할 때마다 바뀌고, 들을 때 마다 달라집니다. 내가 확실하게 기억했다고 자부한 그 사항은, 계약서를 들춰보면 사실 아니었습니다. 우리의 기억은 원래 이런 것입니다. 그래서 오럼은, 기억이 아닌 ‘기록’ 에 근거합니다. 회사를 포함한 우리의 모든 상호간의 커뮤니케이션에서, 쓸데없는 재확인과 비용을 줄여줄 수 있는, ‘기록’ 은 우리의 또다른 신체 기관과도 같이 중요합니다. ‘기록’ 은 가능한 한 자세하고, 명료해야 하며 간단해야 합니다. 잉? 이 무슨 따뜻한 아이스 아메리카노 같은 소리냐고 하시면, 속상합니다. 사실, 기록은 자세하고 명료하며, 동시에 또 간단할 수 있습니다. 같은 기록이더라도, 어떤 워딩을 쓰느냐, 어떤 줄바꿈과 항목, 도식화를 통해 우리는 더 자세하게 해당 상황을 전달하고, 더 간단하게 읽히고 나의 성과를 자랑하며, 상황을 남길 수 있습니다. 그리고 그 메시지를 읽을 우리가, 그리고 미래의 내가 그 혜택을 누릴 수 있게 하는 것. 그것이 우리 오럼의 제 1원칙입니다.",
  },
  {
    id: "인재의 제 2원칙🎖",
    title: "묻는다. 다시 물어본다. 깨닫는다.",
    enTitle: "손 번쩍, “질문 있어요!”",
    image: "/images/culture2.jpg",
    quote: "“손 번쩍, “질문 있어요!”",
    description: "오럼의 인재는, 질문을 즐깁니다. 이 세상에는 당연히 우리가 모르는 것 투성이 입니다. 무엇이든 다 알 것 같은 경력 십수년 차의 베테랑 부장님도.. 우리 회사에 강연차 오시는 유명한 교수님들도.. 이제 막 대학을 졸업하고 들어온 우리 폭풍의 인턴도.. 모든 것을 다 알 수는 없습니다. 내가 모르는 것은, 쟤가 알고 있을 수 있고, 내가 아는 것을, 너가 모를 수 있다는 것을 우리 오럼은 당연하게 생각합니다. 그래서 항상 질문합니다. 우리의 질문은 훼방을 놓거나, 딴지를 걸거나 심술을 부리고자 하는 이유가 아닙니다. 우리의 질문은, 당신의 뜻을 최대한 잘 이해하고, 내가 모르는 부분을 최소화하기 위한, 내가 알아보기 위한 기본 토대를 마련하기 위한 선의의 의도로 구성됩니다. 우리는 질문이 주는 짜릿함이 어줍짢은 부끄러움보다 위대하다는 것을 잘 압니다. 그래서 질문을 받아주는 당신께 항상 마음 깊이 감사드립니다. 그리고 그 위대함을, 우리의 성장의 도구로 치열하게 활용하는 것. 그것이 우리 오럼의 제 2원칙입니다.",
  },
  {
    id: "인재의 제 3원칙🎖",
    title: "찾아본다. 탐구한다. 유레카!",
    enTitle: "“거인의 어깨 위에 올라타기”",
    image: "/images/culture3.jpg",
    quote: "“거인의 어깨 위에 올라타기”",
    description: "오럼의 인재는, 세상의 지식을 활용합니다. 인류가 만들어온 정보, 지식, 경험은 우리가 이용할 수 있는 가장 좋은 지혜입니다. 우리의 의무는 위대한 선현들의 어깨 너머로 열심히 배워서, 우리의 후손들에게 물려줄 수 있는 다음 단계로의 진보를 이루어 나가는 것입니다. 그래서 우리가 탐구할 수 있는 모든 것을 찾아봅니다. 정보의 바다는, 우리 부장님보다, 우리 회사의 에이스보다 넓고 뛰어나며, 유능합니다. 그리고 항상 실시간으로 우리의 손길을 기다리고 있습니다. 찾아내는 능력, 배울 수 있는 능력, 알아볼 수 있는 능력, 그리고 더 나아가 가능한 한 빠르고, 많이, 필요한 것을 탐색하여 익힐 수 있는 능력. 그것이 지금 당장의 능력보다 중요하다는 것을 압니다. 세상이 우리에게 제공하는 모든 레퍼런스를 적극적으로 우리의 토대로 활용하고, 더 앞으로 나아갑니다. 그리고 그러한 우리의 결과를 또 세상의 레퍼런스로 내어놓는 것. 그것이 우리 오럼의 제 3원칙입니다",
  },
  {
    id: "인재의 제 4원칙🎖",
    title: "확인한다. 확인한다, 그리고 다시 확인한다.",
    enTitle: "“1, 2, 3, 4는 자연수인데, 1, 2, 4는 아무것도 아니야”",
    image: "/images/culture4.jpg",
    quote: "“1, 2, 3, 4는 자연수인데, 1, 2, 4는 아무것도 아니야”",
    description: "오럼의 인재는, 가치를 훼손하는 ‘덤벙댐’ 을 경계합니다. 꼼꼼함은 장점이 아닌, ‘필수’ 사항이라는 것을 뼛속 깊이 알고 있습니다. 우리가 세상에 가치를 제공할 때는, ‘어느 정도’ 그럴싸하게 되어서는 안됩니다. 우리 오럼과 함께하는 모든 분들은, 가장 완벽하게 만들어진, 그 어떤 것도 놓쳐지지 않은 최선의 상태의 것을 누려야 합니다. 달력에 12월 31일, 단 하루가 명시되지 않는다 해도, 그것은 더 이상 달력이 아닙니다. 모든 것이 완벽할 수는 없지만, 꼼꼼할 수는 있습니다. 당연히 실수는 발생할 수 있지만, 그러기 때문에 우리는 실수를 다시 체크할 수 있습니다. 모두가 완벽할 수는 없다고 하지만, 우리는 완벽할 수 없다는 자세를 심각하게 경계합니다. 한 끗의 문제. 마지막 한 끗이 부족하여 결과를 내지 못하는 안타까운 세상의 선례들에 마음 아파하면서, 그 한 끗을 메우고자 합니다. 그리고 그 완결성을, 우리의 상식으로 ‘당연하게’ 받아들이는 것. 그것이 우리 오럼의 제 4원칙입니다.",
  },
]

export default function CoreValuesPage() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
        <section className="text-center pt-[480px] pb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-2">“학벌, 스펙? 아니요.</h1>
          <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white">우리는 이게 중요합니다”</h1>
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
            <h3 className="text-black-500 text-2xl sm:text-3xl font-bold mb-2">
              {item.id}
            </h3>


            
            {/* 제목 */}
            <h1 className="text-green-500 text-3xl sm:text-4xl font-bold mb-8">
              {item.title} 
            </h1>

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