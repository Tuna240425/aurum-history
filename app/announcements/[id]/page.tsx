import { notFound } from "next/navigation"
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
    content: "이 게시물의 전체 본문입니다.",
  },
  {
    id: 2,
    title: "외모 편향을 깨는 강아지 캠페인",
    date: "2024. 6. 4",
    category: "Media",
    image: "/images/sample2.jpg",
    excerpt: "그들의 외모 뒤에 숨은 이야기",
    content: "여기엔 좀 더 자세한 캠페인 설명이 들어갑니다.",
  },
]

export default function AnnouncementDetail({ params }: { params: { id: string } }) {
  const post = allPosts.find((p) => String(p.id) === params.id)
  if (!post) return notFound()

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen px-6 pt-32 pb-20 transition-colors duration-300">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* 상위 경로 + 뒤로 가기 */}
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <Link href="/announcements" className="hover:underline text-blue-600 dark:text-blue-400">
            ← 안내드립니다
          </Link>
        </div>

        {/* 제목 & 날짜 */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {post.date} · {post.category}
          </p>
        </div>

        {/* 이미지 */}
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={500}
          className="rounded object-cover"
        />

        {/* 본문 */}
        <p className="text-lg leading-relaxed">{post.content}</p>
      </div>
    </div>
  )
}
