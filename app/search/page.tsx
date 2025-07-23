// app/search/page.tsx
"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"



export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [results, setResults] = useState<any[]>([])

  useEffect(() => {
    if (query) {
      // 예: API 호출 또는 로컬 데이터 필터링
      const dummyData = [
        { title: "Aurum 소개", content: "우리 회사의 소개입니다." },
        { title: "오럼의 문화", content: "오럼만의 문화가 있습니다." },
        { title: "발자국", content: "우리의 역사적 발자취입니다." },
      ]

      const filtered = dummyData.filter(item =>
        item.title.includes(query) || item.content.includes(query)
      )
      setResults(filtered)
    }
  }, [query])

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-4">
        “{query}” 검색 결과 ({results.length}건)
      </h1>
      {results.length === 0 && (
        <p className="text-gray-500">검색 결과가 없습니다.</p>
      )}
      <ul className="space-y-4">
        {results.map((item, i) => (
          <li key={i} className="border-b pb-4">
            <h2 className="text-lg font-bold">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
