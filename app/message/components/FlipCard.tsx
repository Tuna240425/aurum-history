'use client'

import { useState } from 'react'

interface FlipCardProps {
  title: string
  subtitle: string
  description: string
  backTitle: string
  backDescription: string
  image: string
}

export default function FlipCard({
  title,
  subtitle,
  description,
  backTitle,
  backDescription,
  image,
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="flex flex-col items-center">
      <div className="[perspective:1000px] w-full relative">
        {/* ✅ 스위치 토글 */}
        <button
          onClick={() => setIsFlipped(!isFlipped)}
          className="absolute top-4 left-4 z-20 w-16 h-9 bg-white rounded-full flex items-center px-1 shadow-md transition"
        >
          <span
            className={`w-6 h-6 bg-orange-500 rounded-full shadow-md transform transition-transform duration-300 ${
              isFlipped ? 'translate-x-7' : 'translate-x-0'
            }`}
          />
        </button>

        {/* ✅ 카드 */}
        <div
          className={`relative h-[360px] w-[300px] transition-transform duration-700 [transform-style:preserve-3d] ${
            isFlipped ? '[transform:rotateY(180deg)]' : ''
          }`}
        >
          {/* 뒷면 */}
        <div
            className="absolute inset-0 rounded-3xl [transform:rotateY(180deg)] [backface-visibility:hidden] bg-cover bg-center text-white p-8"
            style={{ backgroundImage: `url(${image})` }}
            >
          </div>

          {/* Front */}
            <div className="absolute inset-0 bg-white rounded-3xl p-6 shadow-xl [backface-visibility:hidden]">
            <h3 className="text-3xl font-bold text-black mt-20 mb-4">{title}</h3>
            <p className="text-orange-500 font-medium mb-4">{subtitle}</p>
            <p className="text-gray-700 leading-relaxed text-sm">{description}</p>
            </div>
        </div>
      </div>
    </div>
  )
}
