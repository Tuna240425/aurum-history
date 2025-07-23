"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { useLanguage } from "../contexts/language-context"

export default function Footer() {
  const [mounted, setMounted] = useState(false)
  const { t, locale } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const getLocalizedPath = (path: string) => {
    return locale === "en" ? `/en${path}` : path
  }

  return (
    <>
      {/* ✅ 모바일 전용 푸터 */}
      <footer className="block sm:hidden bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white px-4 py-10 transition-colors duration-300">
        <div className="max-w-md mx-auto space-y-4 text-center">
          <div className="flex justify-center items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
              <span className="text-white font-bold text-xs">●</span>
            </div>
            <span className="text-lg font-semibold">Aurum</span>
          </div>

          <div className="text-sm space-y-2 text-gray-600 dark:text-gray-400">
            <p>서울특별시 송파구 위례성대로12길 36, 4층</p>
            <p>+82-2-417-7009</p>
            <p>account@aurum.nexus</p>
          </div>
        </div>
      </footer>

      {/* ✅ 데스크탑/태블릿 전용 푸터 */}
      <footer className="hidden sm:block bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-20">
          <div className="flex flex-wrap justify-start gap-y-16 gap-x-12">
            {/* Company Info */}
            <div className="w-full sm:w-1/2 lg:w-auto space-y-5">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                  <span className="text-white font-bold text-sm">●</span>
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">Aurum</span>
              </div>
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                {t("footerDescription")}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* 회사소개 */}
            <div className="w-full sm:w-1/2 lg:w-auto space-y-5">
              <h3 className="text-lg font-semibold">회사소개</h3>
              <ul className="space-y-3 text-base text-gray-600 dark:text-gray-400">
                <li><Link href={getLocalizedPath("/company-info")}>어서 오럼</Link></li>
                <li><Link href={getLocalizedPath("/message")}>오럼의 문화</Link></li>
                <li><Link href={getLocalizedPath("/history")}>발자국</Link></li>
              </ul>
            </div>

            {/* 서비스 */}
            <div className="w-full sm:w-1/2 lg:w-auto space-y-5">
              <h3 className="text-lg font-semibold">서비스</h3>
              <ul className="space-y-3 text-base text-gray-600 dark:text-gray-400">
                <li><Link href={getLocalizedPath("/brand")}>브랜드</Link></li>
                <li><Link href={getLocalizedPath("/marketing")}>마케팅</Link></li>
                <li><Link href={getLocalizedPath("/entertainment")}>엔터테인먼트</Link></li>
                <li><Link href="#">라이프</Link></li>
              </ul>
            </div>

            {/* 약속과 책임 */}
            <div className="w-full sm:w-1/2 lg:w-auto space-y-5">
              <h3 className="text-lg font-semibold">약속과 책임</h3>
              <ul className="space-y-3 text-base text-gray-600 dark:text-gray-400">
                <li><Link href={getLocalizedPath("/gallery")}>오럼 갤러리</Link></li>
                <li><Link href={getLocalizedPath("/members")}>MEMBERS</Link></li>
                <li><Link href="#">인재 영입</Link></li>
              </ul>
            </div>

            {/* 커뮤니티 */}
            <div className="w-full sm:w-1/2 lg:w-auto space-y-5">
              <h3 className="text-lg font-semibold">커뮤니티</h3>
              <ul className="space-y-3 text-base text-gray-600 dark:text-gray-400">
                <li><Link href="#">알립니다</Link></li>
                <li><Link href="#">언론보도</Link></li>
                <li><Link href="#">보도자료</Link></li>
              </ul>
            </div>

            {/* 연락처 */}
            <div className="w-full sm:w-1/2 lg:w-auto space-y-5">
              <h3 className="text-lg font-semibold">{t("contact")}</h3>
              <ul className="space-y-3 text-base text-gray-600 dark:text-gray-400">
                <li className="flex items-center space-x-2"><MapPin className="w-4 h-4 text-yellow-500" /><span>서울특별시 송파구 위례성대로12길 36, 4층</span></li>
                <li className="flex items-center space-x-2"><Phone className="w-4 h-4 text-yellow-500" /><span>+82-2-417-7009</span></li>
                <li className="flex items-center space-x-2"><Mail className="w-4 h-4 text-yellow-500" /><span>account@aurum.nexus</span></li>
              </ul>
            </div>
          </div>

          {/* 바텀 라인 */}
          <div className="border-t border-gray-300 dark:border-gray-700 mt-16 pt-10 text-sm text-gray-600 dark:text-gray-400 flex flex-col md:flex-row justify-between items-center">
            <p>{t("footerCopyright")}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
