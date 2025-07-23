"use client"

import { useState } from "react"
import HeroSection from "./components/announcements-hero"
import Image from "next/image"
import Link from "next/link"


const allPosts = [
  {
    id: 1,
    title: "AI와 함께하는 강아지 콘텐츠",
    date: "2024. 6. 1",
    category: "Media",
    image: "/images/girl.png",
    excerpt: "낮잠이 불타오르는 중",
  },
  {
    id: 2,
    title: "외모 편향을 깨는 강아지 캠페인",
    date: "2024. 6. 4",
    category: "Media",
    image: "/images/sample2.jpg",
    excerpt: "그들의 외모 뒤에 숨은 이야기",
  },
  {
    id: 3,
    title: "반려견 식품 캠페인 성과 공개",
    date: "2024. 6. 10",
    category: "Media",
    image: "/images/sample3.jpg",
    excerpt: "함께 만든 의미 있는 변화",
  },
  {
    id: 3,
    title: "반려견 식품 캠페인 성과 공개",
    date: "2024. 6. 10",
    category: "Media",
    image: "/images/sample3.jpg",
    excerpt: "함께 만든 의미 있는 변화",
  },
  {
    id: 3,
    title: "반려견 식품 캠페인 성과 공개",
    date: "2024. 6. 10",
    category: "Media",
    image: "/images/sample3.jpg",
    excerpt: "함께 만든 의미 있는 변화",
  },
  {
    id: 3,
    title: "반려견 식품 캠페인 성과 공개",
    date: "2024. 6. 10",
    category: "Media",
    image: "/images/sample3.jpg",
    excerpt: "함께 만든 의미 있는 변화",
  },
]

const categories = ["전체", "Media", "Service", "Cooperation", "Recruit", "Social", "Others"]

export default function AnnouncementsPage() {
  const [selectedCategory, setSelectedCategory] = useState("전체")
  const [visibleCount, setVisibleCount] = useState(2)

  const filtered = selectedCategory === "전체"
    ? allPosts
    : allPosts.filter((post) => post.category === selectedCategory)

  const visiblePosts = filtered.slice(0, visibleCount)
  const isAllLoaded = visiblePosts.length >= filtered.length

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen pb-20 transition-colors duration-300">
      {/* Hero Section */}
      <HeroSection />

      <div id="scroll-target">
        {/* 카테고리 필터 */}
        <div className="flex justify-center flex-wrap gap-4 py-10 border-b border-gray-200 dark:border-gray-700">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat)
                setVisibleCount(2)
              }}
              className={`text-sm px-4 py-1 rounded transition ${
                selectedCategory === cat
                  ? "bg-black text-white dark:bg-white dark:text-black font-semibold"
                  : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 게시물 카드 리스트 */}
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {visiblePosts.map((post) => (
            <Link href={`/announcements/${post.id}`} key={post.id} className="block">
              <div className="bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded shadow p-4 hover:shadow-lg transition">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="rounded mb-4 object-cover"
                />
                <div className="text-sm text-yellow-600 dark:text-yellow-400 mb-1">{post.category}</div>
                <h3 className="text-lg font-bold mb-1">{post.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-400">{post.excerpt}</p>
                <div className="text-xs text-gray-500 dark:text-gray-600 mt-2">{post.date}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* 더보기 or 종료 */}
        <div className="text-center mt-16">
          {isAllLoaded ? (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              로드할 내용이 없습니다.
            </p>
          ) : (
            <button
              onClick={() => setVisibleCount((prev) => prev + 2)}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white underline underline-offset-2 transition-colors"
            >
              더보기 ↓
            </button>
          )}
        </div>
      </div>
    </div>
  )
}