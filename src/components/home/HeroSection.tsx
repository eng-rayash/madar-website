'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20"
      id="hero"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Header - Hero Section.png"
          alt="مدار وأفاق المحدودة"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={80}
        />
        {/* Soft overlay to ensure readability */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[0.5px]" />
      </div>

      {/* Main Content */}
      <div className="container-main relative z-10 w-full flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 border border-gold/20 shadow-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span className="font-cairo text-xs md:text-sm font-bold text-brown">
              خياركم الهندسي والاستشاري الموثوق
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="font-shahd font-bold text-brown leading-tight mb-8"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            مدار وأفاق المحدودة
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="font-tajawal text-brown-light leading-relaxed mb-10 max-w-2xl text-base md:text-lg"
          >
            شريككم الهندسي والاستشاري الموثوق... نقدم حلولاً هندسية واستشارية متكاملة تهدف إلى تلبية المتطلبات وتحقيق قيمة تنموية مستدامة
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            {/* CTA Button */}
            <Link
              href="/consultation"
              id="hero-btn-consultation"
              className="inline-flex items-center justify-between gap-3 pl-2 pr-6 py-2 rounded-full font-cairo font-bold text-white text-sm bg-[#9a7645] hover:bg-[#866334] transition-all duration-300 w-full sm:w-auto shadow-gold-sm hover:-translate-y-0.5"
            >
              <span>اطلب استشارة الآن</span>
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#9a7645]">
                <ArrowLeft className="w-4 h-4" />
              </span>
            </Link>

            {/* Secondary Button */}
            <Link
              href="/services"
              id="hero-btn-services"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full font-cairo font-bold text-brown text-sm border-2 border-brown/30 hover:border-brown hover:bg-brown/5 transition-all duration-300 w-full sm:w-auto hover:-translate-y-0.5"
            >
              استكشف خدماتنا
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
