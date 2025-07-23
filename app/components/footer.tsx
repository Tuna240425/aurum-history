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
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-start gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4 flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                <span className="text-white font-bold text-sm">●</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Aurum</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300 max-w-xs">
              {t("footerDescription")}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Introduction */}
          <div className="space-y-4 flex-shrink-0">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
              회사소개
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={getLocalizedPath("/company-info")}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-sm"
                >
                  어서 오럼
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath("/message")}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-sm"
                >
                  오럼의 문화
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath("/history")}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-sm"
                >
                  발자국
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 flex-shrink-0">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
              서비스
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={getLocalizedPath("/brand")}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-sm"
                >
                  브랜드
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath("/marketing")}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-sm"
                >
                  마케팅
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath("/entertainment")}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-sm"
                >
                  엔터테인먼트
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-sm"
                >
                  라이프
                </Link>
              </li>
            </ul>
          </div>

          {/* Promise and Responsibility */}
          <div className="space-y-4 flex-shrink-0">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
              약속과 책임
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={getLocalizedPath("/gallery")}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-sm"
                >
                  오럼 갤러리
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath("/members")}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-sm"
                >
                  MEMBERS
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-sm"
                >
                  인재 영입
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsroom */}
          <div className="space-y-4 flex-shrink-0">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
              커뮤니티
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-sm"
                >
                  알립니다
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-sm"
                >
                  언론보도
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-sm"
                >
                  보도자료
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 flex-shrink-0">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
              {t("contact")}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-yellow-500 dark:text-yellow-400 flex-shrink-0 transition-colors duration-300" />
                <span className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                  서울특별시 송파구 위례성대로12길 36, 4층
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-yellow-500 dark:text-yellow-400 flex-shrink-0 transition-colors duration-300" />
                <span className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                  +82-2-417-7009
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-yellow-500 dark:text-yellow-400 flex-shrink-0 transition-colors duration-300" />
                <span className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                  account@aurum.nexus
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - keep as is */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-12 pt-8 transition-colors duration-300">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
              {t("footerCopyright")}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
