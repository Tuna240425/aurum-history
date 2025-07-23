import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import Header from "./components/header"
import Footer from "./components/footer"
import Providers from "./providers"
import CustomCursor from "./components/custom-cursor"
import ScrollToTop from "./components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Aurum, 오럼",
    template: "%s | Aurum",
  },
  description: "사람이 행복한, 라이프 스타일을 만듭니다.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-black text-black dark:text-white transition-colors duration-300`}>
        <Providers>
          <CustomCursor />       {/* ✅ 마우스 커서 효과 */}
          <ScrollToTop />        {/* ✅ 스크롤 상단 이동 */}
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
