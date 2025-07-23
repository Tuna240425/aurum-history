"use client"

import { useEffect, useState } from "react"
import EntertainmentHero from "./components/entertainment-hero"
// import EntertainmentAbout from "./components/entertainment-about"
// import EntertainmentProducts from "./components/entertainment-products"
// import EntertainmentShowcase from "./components/entertainment-showcase"
import EntertainmentContact from "./components/entertainment-contact"
import EntertainmentFeature from "./components/entertainment-feature"

export default function EntertainmentPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="bg-black min-h-screen">

      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {/* ✅ Hero */}
        <section className="snap-start h-screen">
          <EntertainmentHero />
        </section>

        {/* 🔕 숨김 처리된 영역들
        <section className="snap-start min-h-screen">
          <EntertainmentAbout />
        </section>

        <section className="snap-start min-h-screen">
          <EntertainmentProducts />
        </section>

        <section className="snap-start min-h-screen">
          <EntertainmentShowcase />
        </section>
        */}

        {/* Product Features */}
               <section className="snap-start h-screen">
                 <EntertainmentFeature 
                   color="red"
                   title="시즈닝 [Seasoning]"
                   description={`시즈닝은, 엔터테인먼트 분야와 스타일 라인을 결합하여, 트렌디한 패션 제품들을 고객들에게 선보이는, 마케팅 서비스입니다.`}
                   image="/images/Entertainment1.webp"
                 />
               </section>
       
               <section className="snap-start h-screen">
                 <EntertainmentFeature 
                   color="green"
                   title="달콤 [dalkomm]"
                   description={`달콤은, 엔터테인먼트 분야와 코스메틱 라인을 결합하여 신뢰성 있는 뷰티 제품을 고객들에게 선보이는, 마케팅 서비스 입니다.`}
                   image="/images/Entertainment2.webp"
                 />
               </section>
       
               <section className="snap-start h-screen">
                 <EntertainmentFeature 
                   color="blue"
                   title="다즐링 [dhazzling]"
                   description={`다즐링은, 엔터테인먼트 분야와 이벤트 라인을 결합하여 매력적인 신상품들을 고객들에게 선보이는, 마케팅 서비스 입니다.`}
                   image="/images/Entertainment3.webp"
                 />
               </section>

        {/* ✅ Contact */}
        <section className="snap-start min-h-screen">
          <EntertainmentContact />
        </section>

      </div>
    </div>
  )
}
