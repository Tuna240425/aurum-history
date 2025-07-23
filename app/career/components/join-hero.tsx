"use client"

import { motion } from "framer-motion"

export default function JoinHero() {
  return (
    <section
        className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white px-6"
        style={{ backgroundImage: "url('/images/recruit.png')" }}
        >
      <div className="max-w-4xl text-center mt-20 md:mt-40">
        <motion.h1
            className="text-4xl md:text-6xl font-bold leading-[1.8] text-white"
            style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.6)" }}
            >
            우리와 함께<br />
            다르게 일할 동료를 찾습니다
        </motion.h1>

        <motion.p
            className="mt-6 text-lg md:text-xl font-light text-white"
            style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            >
            원칙과 배려 사이, 효율과 공감 사이.<br />
            작지만 유연한 팀과 새로운 방식으로 일해요.
            </motion.p>


        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a
            href="#apply"
            className="inline-block px-8 py-3 border border-black dark:border-white text-black dark:text-white rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            함께하기
          </a>
        </motion.div>
      </div>
    </section>
  )
}
