'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AboutHero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Background - use img tag to avoid Next Image issues */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/About - Hero Section.png"
          alt="عن مدار وآفاق"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container-main relative z-10 w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md bg-white/15 border border-white/40 rounded-[2.5rem] px-10 md:px-28 py-12 md:py-20 max-w-7xl w-full text-center shadow-2xl flex flex-col items-center"
        >
          <div className="flex items-center gap-2 mb-4 text-charcoal/60 text-xs md:text-sm font-cairo justify-center">
            <Link href="/" className="hover:text-charcoal transition-colors">الرئيسية</Link>
            <span>/</span>
            <span className="text-gold">عن الشركة</span>
          </div>

          <h1
            className="font-shahd font-bold text-charcoal leading-tight mb-5"
            style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3rem)' }}
          >
            نبني الثقة... ونصنع مستقبلاً
            <br />
            <span className="text-gold">أكثر استدامة</span>
          </h1>

          <p className="text-charcoal-medium font-tajawal text-base md:text-lg leading-relaxed max-w-2xl mb-8">
            منظومة متكاملة من الخدمات الاستشارية والهندسية لضمان نجاح مشاريعكم وتحقيق تطلعاتكم
          </p>

          <div className="flex flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link href="/services" className="inline-flex items-center justify-center px-8 py-3 rounded-full font-cairo font-bold text-white text-sm bg-olive hover:bg-olive-light transition-all shadow-md hover:-translate-y-0.5" id="about-hero-services-cta">
              تعرف على خدماتنا
            </Link>
            <Link href="/consultation" className="inline-flex items-center justify-center px-8 py-3 rounded-full font-cairo font-bold text-gold text-sm border-2 border-gold/40 hover:border-gold hover:bg-gold/5 transition-all hover:-translate-y-0.5" id="about-hero-consultation-cta">
              اطلب استشارة
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
