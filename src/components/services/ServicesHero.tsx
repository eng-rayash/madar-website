'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ServicesHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-44 pb-28">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/HeroServiesImg.png"
          alt="خدمات مدار وآفاق"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="container-main relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-2 mb-6 text-white/60 text-xs md:text-sm font-cairo justify-center">
            <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
            <span>/</span>
            <span className="text-gold-light">خدماتنا</span>
          </div>

          <h1 className="font-shahd font-bold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)' }}>
            حلول متكاملة... تصنع قيمة
            <br />
            <span className="text-gold-light">حقيقية لأعمالكم</span>
          </h1>

          <p className="text-white/80 font-tajawal text-base md:text-xl leading-relaxed max-w-2xl">
            تفخر مدار وآفاق بتقديم استشارات وخدمات هندسية تساهم في تحقيق النمو المستدام.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
