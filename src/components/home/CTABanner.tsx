'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, MessageCircle } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="section-padding bg-gradient-to-br from-[#584b3e] via-[#3d2e1a] to-[#2d2010] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/8 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(187,146,91,0.6) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container-main relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label bg-gold/20 border-gold/30 text-gold-light mb-6 mx-auto inline-flex">
            <span>ابدأ اليوم</span>
          </div>

          <h2 className="font-shahd font-bold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            دع خبراتنا تقود مشروعك
            <br />
            <span className="text-gold-light">نحو النجاح</span>
          </h2>

          <p className="text-white/70 font-tajawal text-lg leading-relaxed max-w-xl mx-auto mb-10">
            تواصل معنا اليوم لمناقشة تطلعاتك ومعرفة كيف يمكن لمدار وآفاق أن تكون
            القوة الدافعة لأعمالك.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/consultation"
              className="btn-gold text-base px-8 py-4 flex items-center gap-2 group"
              id="cta-banner-consultation"
            >
              <span>تواصل معنا الآن</span>
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="btn-outline-white text-base px-8 py-4 flex items-center gap-2"
              id="cta-banner-contact"
            >
              <MessageCircle className="w-4 h-4" />
              <span>تواصل مع مستشار</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
