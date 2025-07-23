"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, Heart, ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryItem {
  id: number
  image: string
  title: string
  category: string
  description: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: "/images/spaces/aurum1.webp",
    title: "모던한 리셉션",
    category: "로비",
    description: "방문객을 맞이하는 세련된 리셉션 공간",
  },
  {
    id: 2,
    image: "/images/spaces/aurum3.webp",
    title: "오픈 오피스",
    category: "업무공간",
    description: "창의적 협업이 이루어지는 열린 업무 환경",
  },
  {
    id: 3,
    image: "/images/spaces/aurum2.webp",
    title: "회의실",
    category: "미팅룸",
    description: "아이디어가 모이는 편안한 회의 공간",
  },
  {
    id: 4,
    image: "/images/spaces/aurum4.webp",
    title: "휴게 라운지",
    category: "휴식공간",
    description: "재충전의 시간을 갖는 아늑한 라운지",
  },
  {
    id: 5,
    image: "/images/spaces/image (1).png",
    title: "카페테리아",
    category: "식음공간",
    description: "함께 식사하며 소통하는 공간",
  },
  {
    id: 6,
    image: "/images/spaces/image.png",
    title: "옥상 테라스",
    category: "야외공간",
    description: "도심 속 자연을 느낄 수 있는 테라스",
  },
]

export default function CompanyGallery() {
  const [currentPage, setCurrentPage] = useState(1)
  const [likedItems, setLikedItems] = useState<{ [key: number]: boolean }>({})
  const [modalItem, setModalItem] = useState<GalleryItem | null>(null)

  const itemsPerPage = 6
  const totalPages = Math.ceil(galleryItems.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const displayedItems = galleryItems.slice(startIndex, startIndex + itemsPerPage)

  useEffect(() => {
    const storedLikes: { [key: number]: boolean } = {}
    galleryItems.forEach((item) => {
      const saved = localStorage.getItem(`liked-${item.id}`)
      if (saved) storedLikes[item.id] = saved === "true"
    })
    setLikedItems(storedLikes)
  }, [])

  const handleLike = (id: number) => {
    const updated = { ...likedItems, [id]: !likedItems[id] }
    setLikedItems(updated)
    localStorage.setItem(`liked-${id}`, updated[id].toString())
  }

  const handlePrevPage = () => setCurrentPage((prev) => Math.max(1, prev - 1))
  const handleNextPage = () => setCurrentPage((prev) => Math.min(totalPages, prev + 1))

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            오럼의 <span className="text-yellow-600 dark:text-yellow-400">공간</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            우리가 매일 함께하는 공간들을 소개합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedItems.map((item) => (
            <Card
              key={item.id}
              className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 hover:border-yellow-400/50 transition-all duration-300 hover:-translate-y-2 group overflow-hidden rounded-lg"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setModalItem(item)}
                        className="bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        보기
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleLike(item.id)}
                        className={`bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm ${
                          likedItems[item.id] ? "border-yellow-400 text-yellow-400" : ""
                        }`}
                      >
                        <Heart className="h-4 w-4 mr-1" />
                        {likedItems[item.id] ? "좋아요 취소" : "좋아요"}
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="rounded-full border-gray-400 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 bg-transparent"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-10 h-10 rounded-full text-sm font-medium transition-colors ${
                    currentPage === index + 1
                      ? "bg-yellow-400 text-black"
                      : "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="rounded-full border-gray-400 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 bg-transparent"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        )}

        {modalItem && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-900 rounded-lg max-w-3xl w-full p-6 relative">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
                onClick={() => setModalItem(null)}
              >
                ✕
              </button>
              <img src={modalItem.image} alt={modalItem.title} className="w-full h-auto object-contain rounded" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-4">{modalItem.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{modalItem.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}