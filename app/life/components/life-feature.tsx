"use client"
import Image from "next/image"

interface LifeFeatureProps {
  title: string
  description: string
  image: string
  color: string
  bgColor?: string
  tags?: string[] // 태그 props
}

export default function LifeFeature({
  title,
  description,
  image,
  bgColor = "bg-white",
  tags = [],
}: LifeFeatureProps) {
  return (
    <section
      className={`min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-16 ${bgColor}`}
    >
      {/* 텍스트 영역 */}
      <div className="md:flex-[2] w-full md:w-auto mb-10 md:mb-0">
        <div className="max-w-2xl mx-auto text-left">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">{description}</p>

          {/* 태그 영역 */}
          {tags.length > 0 && (
            <div className="mt-4 flex gap-2 flex-wrap">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs border px-3 py-1 rounded-full text-yellow-500 border-yellow-500"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 이미지 영역 */}
      <div className="md:flex-[1] w-full md:w-auto flex justify-center">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="rounded-2xl object-cover shadow-md"
        />
      </div>
    </section>
  )
}