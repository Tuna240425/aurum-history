"use client"

import { ThemeProvider } from "@/app/contexts/theme-context"
import { LanguageProvider } from "@/app/contexts/language-context"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider> {/* LanguageProvider가 가장 바깥 */}
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </LanguageProvider>
  )
}
