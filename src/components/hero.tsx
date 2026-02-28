'use client'

import { motion } from 'framer-motion'
import Cube from '@/components/cube'
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 背景画像 */}
      <Image
        src="/hero.jpg"
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />
      {/* 暗くする */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* 上に載せるコンテンツ */}
      <div className="relative z-10 flex h-full items-center justify-center text-white">
        <div className="flex flex-col items-center text-center px-6">
          {/* ① タイトル：一番最初に出てくる */}
          <motion.h1 
            initial={{ opacity: 0, y: 100, x: 50, scale: 0 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="text-5xl font-bold mb-12"
          >
            Emi / Web Engineer & Creator
          </motion.h1>

          {/* ③ Cube：一番あとに横から入ってくる */}
          <motion.div
            className="h-[400px] flex items-center justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6, type: "tween" }}
          >
            <Cube />
          </motion.div>
          
          {/* ② SCROLL：タイトルのあとに横から入ってきて、そのあとふわふわ */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5, type: "tween" }}
            className="mt-10"
          >
            {/* 出てきたあとに上下ふわふわアニメーション */}
            <motion.div
              animate={{ y: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-sm tracking-[0.3em] text-white opacity-80"
            >
              SCROLL ↓
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}