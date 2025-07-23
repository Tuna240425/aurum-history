"use client"

import { useState } from "react"

const dummyPositions = [
  {
    id: 1,
    title: "Software Engineer Position",
    category: "Tech",
    tag: "신입/경력",
    team: "Tech",
    date: "준비중",
  },
  {
    id: 2,
    title: "마케팅 책임자 (리더급)",
    category: "Marketing",
    tag: "경력",
    team: "Marketing",
    date: "준비중",
  },
  {
    id: 3,
    title: "2025 하반기 신입대상 모집공고",
    category: "Marketing",
    tag: "신입",
    team: "Marketing",
    date: "준비중",
  },
]

export default function PositionList() {
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("")
  const [showMoreClicked, setShowMoreClicked] = useState(false)

  const filtered = dummyPositions.filter((pos) =>
    pos.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white px-6 py-20 transition-colors">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
        저희는 이런 사람을 원해요!
      </h2>

      {/* 검색창 */}
      <div className="flex justify-center gap-2 mb-10">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="찾으시는 포지션을 입력해보세요"
          className="w-full max-w-xl px-4 py-2 rounded 
            bg-gray-100 dark:bg-zinc-900 
            border border-gray-300 dark:border-zinc-700 
            placeholder-gray-500 dark:placeholder-gray-400 
            text-black dark:text-white transition-colors"
        />
        <button
          onClick={() => {
            setQuery(search)
            setShowMoreClicked(false) // 검색하면 더보기 상태 초기화
          }}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
        >
          검색
        </button>
      </div>

      {/* 포지션 리스트 */}
      <div className="space-y-6 max-w-2xl mx-auto min-h-[200px]">
        {filtered.length > 0 ? (
          filtered.map((pos) => (
            <div
              key={pos.id}
              className="bg-gray-50 dark:bg-zinc-900 
              border border-gray-200 dark:border-zinc-700 
              p-4 rounded shadow 
              hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-yellow-600 dark:text-yellow-400 font-semibold">
                  [{pos.tag}]
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{pos.date}</span>
              </div>
              <div className="text-lg font-bold mb-1">{pos.title}</div>
              <div className="text-sm text-green-700 dark:text-green-400">{pos.category}</div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">
            찾으시는 포지션이 없습니다.
          </p>
        )}
      </div>

      {/* 더보기 버튼 */}
      <div className="text-center mt-10">
        {showMoreClicked ? (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            아직 모집 중인 공고가 없습니다.
          </p>
        ) : (
          <button
            onClick={() => setShowMoreClicked(true)}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white underline underline-offset-2 transition-colors"
          >
            더보기 ↓
          </button>
        )}
      </div>
    </div>
  )
}