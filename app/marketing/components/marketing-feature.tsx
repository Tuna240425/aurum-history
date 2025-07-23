type ProductFeatureProps = {
  title: string
  description: string
  image: string
  color: "red" | "green" | "blue"
}

export default function ProductFeature({ title, description, image, color }: ProductFeatureProps) {
  const colorMap = {
    red: "text-red-500 dark:text-red-400",
    green: "text-green-500 dark:text-green-400",
    blue: "text-cyan-500 dark:text-cyan-400",
  }

  return (
    <div className="h-screen bg-white dark:bg-black transition-colors duration-300 px-4 py-20 flex items-center justify-center">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* 텍스트 영역 */}
        <div className="flex-1 text-left space-y-4 max-w-md md:pl-6">
          <h2 className={`text-3xl md:text-4xl font-bold ${colorMap[color]}`}>
            {title}
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
            {description}
          </p>
        </div>

        {/* 이미지 영역 */}
        <div className="flex-1 flex justify-center items-center min-h-[200px] bg-transparent">
          <img
            src={image}
            alt={title}
            className="w-auto h-60 max-h-72 object-contain"
          />
        </div>
      </div>
    </div>
  )
}
