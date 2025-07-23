// components/flip-card.tsx
"use client"

import Image from "next/image"
import "./flip-card.css"

interface FlipCardProps {
  title: string
  description: React.ReactNode
  image: string
}

export default function FlipCard({ title, description, image }: FlipCardProps) {
  return (
    <div className="flip-card w-full h-96 md:h-[28rem]">
      <div className="flip-card-inner">
        {/* 앞면 */}
        <div className="flip-card-front relative">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-black/30 rounded-xl flex items-center justify-center">
            <h3 className="text-2xl font-semibold text-white z-10">{title}</h3>
          </div>
        </div>

       {/* 뒷면 */}
      <div className="flip-card-back relative rounded-xl overflow-hidden">
        {/* 배경 이미지 */}
        <Image
          src={image}
          alt={`${title}-bg`}
          fill
          className="object-cover"
        />

        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/60" />

        {/* 텍스트 콘텐츠 */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <p className="text-sm text-gray-100 leading-relaxed z-10">{description}</p>
        </div>
      </div>
      </div>
    </div>
  )
}
