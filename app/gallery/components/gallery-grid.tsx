"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"
// import { Heart, Eye, Filter } from "lucide-react"

interface GalleryItem {
  id: number
  image: string
  title: string
  caption: string
  category: string
  // likes: number
  // views: number
  size: "normal" | "tall"
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: "/images/gallery/aurum2.webp",
    title: "따뜻한 회의 공간",
    caption: "아이디어가 모이는 우리의 회의실, 벽돌과 따뜻한 조명이 만드는 아늑한 분위기",
    category: "사무실",
    // likes: 24,
    // views: 156,
    size: "normal",
  },
  {
    id: 2,
    image: "/images/gallery/aurum3.webp",
    title: "활기찬 업무 공간",
    caption: "개성 넘치는 데스크와 포스터들, 우리만의 색깔이 묻어나는 오픈 오피스",
    category: "일상",
    // likes: 24,
    // views: 156,
    size: "normal",
  },
  {
    id: 3,
    image: "/images/gallery/aurum11.png",
    title: "집중의 시간",
    caption: "조용한 오후, 각자의 자리에서 몰입하는 팀원들의 모습",
    category: "일상",
    // likes: 24,
    // views: 156,
    size: "normal",
  },
  {
    id: 4,
    image: "/images/gallery/gallery6.jpg",
    title: "우리가 있는 곳",
    caption: "도심 속 우리의 보금자리, 매일 출근하는 익숙하면서도 특별한 공간",
    category: "외관",
    // likes: 24,
    // views: 156,
    size: "normal",
  },
  // 추가 더미 데이터
  {
    id: 5,
    image: "/images/gallery/gallery1.jpg",
    title: "함께하는 점심시간",
    caption: "월요일의 점심시간, 함께 나누는 식사가 더욱 맛있어요",
    category: "구성원",
    // likes: 24,
    // views: 156,
    size: "normal",
  },
  {
    id: 6,
    image: "/images/gallery/image.png",
    title: "브레인스토밍 세션",
    caption: "새로운 프로젝트를 위한 아이디어 회의, 모두의 창의성이 빛나는 순간",
    category: "워크숍",
    // likes: 24,
    // views: 156,
    size: "normal",
  },
  {
    id: 7,
    image: "/images/gallery/aurum10.png",
    title: "커피 한 잔의 여유",
    caption: "바쁜 업무 중 잠깐의 휴식, 커피와 함께하는 소소한 대화",
    category: "일상",
    // likes: 24,
    // views: 156,
    size: "normal",
  },
  {
    id: 8,
    image: "/images/gallery/aurum8.png",
    title: "프로젝트 완료 축하",
    caption: "성공적인 프로젝트 마무리를 축하하며, 함께 기뻐하는 우리 팀",
    category: "이벤트",
    // likes: 24,
    // views: 156,
    size: "normal",
  },
    {
    id: 9,
    image: "/images/gallery/aurum7.png",
    title: "집중은 대표님처럼",
    caption: "성공적인 프로젝트 마무리를 축하하며, 함께 기뻐하는 우리 팀",
    category: "이벤트",
    // likes: 24,
    // views: 156,
    size: "normal",
  },
]

const categories = ["전체", "사무실", "구성원", "일상", "워크숍", "이벤트", "외관"]

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("전체")
  const [visibleItems, setVisibleItems] = useState(6)

  const filteredItems = galleryItems.filter((item) => activeCategory === "전체" || item.category === activeCategory)

  const displayedItems = filteredItems.slice(0, visibleItems)

  const loadMore = () => {
    setVisibleItems((prev) => Math.min(prev + 6, filteredItems.length))
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Filter className="h-5 w-5 text-yellow-400 mr-2 mt-1" />
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setActiveCategory(category)
                setVisibleItems(6)
              }}
              className={
                activeCategory === category
                  ? "bg-yellow-400 text-black hover:bg-yellow-300 dark:bg-yellow-300 dark:text-black"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-yellow-500 bg-transparent dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-yellow-400"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedItems.map((item) => (
            <Card
              className={`bg-white/80 dark:bg-gray-900/30 border-gray-300 dark:border-gray-800 hover:border-yellow-400/50 transition-all duration-300 hover:-translate-y-2 group overflow-hidden ${
                item.size === "tall" ? "md:row-span-2" : ""
              }`}
            >

              <CardContent className="p-0">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                      item.size === "tall" ? "h-96 md:h-full" : "h-64"
                    } ${
                      item.id === 3 ? "object-[center_20%]" : "object-center"
                    }`}
                  />

                  {/* Overlay */}
                  {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                       <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        {item.views}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm"
                      >
                        <Heart className="h-4 w-4 mr-1" />
                        {item.likes}
                      </Button>
                    </div> 
                  </div> */}

                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-medium">
                      #{item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-yellow-600 dark:text-yellow-400">
                    {item.title}
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {item.caption}
                  </p>

                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {visibleItems < filteredItems.length && (
          <div className="text-center">
            <Button
              onClick={loadMore}
              size="lg"
              className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "#facc15",
                color: "#000000",
              }}
            >
              더 많은 사진 보기 ({filteredItems.length - visibleItems}장 더)
            </Button>
          </div>
        )}

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📸</div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">아직 사진이 없어요</h3>
            <p className="text-gray-500">선택하신 카테고리의 사진을 준비 중입니다.</p>
          </div>
        )}
      </div>
    </section>
  )
}
