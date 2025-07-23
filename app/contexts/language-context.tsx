"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
  startTransition,
} from "react"
import { useRouter, usePathname } from "next/navigation"
import type { Locale } from "@/lib/i18n"
import { translations } from "@/lib/i18n"

interface LanguageContextType {
  locale: Locale
  toggleLanguage: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [locale, setLocale] = useState<Locale>("ko")

  useEffect(() => {
    setMounted(true)

    const pathLocale: Locale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ko"
    const savedLocale =
      typeof window !== "undefined"
        ? (localStorage.getItem("preferred-language") as Locale | null)
        : null

    if (savedLocale === "ko" || savedLocale === "en") {
      setLocale(savedLocale)
      if (pathLocale !== savedLocale) {
        const newPath =
          savedLocale === "ko"
            ? pathname.replace(/^\/en/, "") || "/"
            : `/en${pathname === "/" ? "" : pathname}`
        startTransition(() => {
          router.push(newPath)
        })
      }
    } else {
      setLocale(pathLocale)
    }
  }, [pathname, router])

  const toggleLanguage = () => {
    const newLocale: Locale = locale === "ko" ? "en" : "ko"
    setLocale(newLocale)
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred-language", newLocale)
    }
    const newPath =
      newLocale === "ko"
        ? pathname.replace(/^\/en/, "") || "/"
        : `/en${pathname === "/" ? "" : pathname}`

    startTransition(() => {
      router.push(newPath)
    })
  }

  const t = (key: string): string => {
    const translation = translations[locale]?.[key as keyof (typeof translations)[typeof locale]]
    return translation || key
  }

  if (!mounted) return null

  return (
    <LanguageContext.Provider value={{ locale, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
