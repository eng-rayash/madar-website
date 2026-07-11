'use client'

import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { Building2, Brain } from 'lucide-react'

export default function WhoWeAre() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Image - Right Side (First in JSX under RTL) */}
          <AnimatedSection direction="right">
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover aspect-[3/4]">
              <Image
                src="/images/AboutImg2.png"
                alt="فريق مدار وآفاق"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={80}
              />
            </div>
          </AnimatedSection>

          {/* Text - Left Side (Second in JSX under RTL) */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="section-label mb-4">من نحن؟</div>
            <h2 className="font-shahd font-bold text-charcoal leading-tight mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)' }}>
              شركة سعودية رائدة
              <br />
              <span className="text-gold">في الاستشارات المتكاملة</span>
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-charcoal-medium/70 font-tajawal leading-relaxed">
                نحن في شركة مدار وآفاق المحدودة، ننطلق من إيمان عميق بأن النهضة
                العمرانية والاقتصادية للمملكة تتطلب شركاء يجمعون بين المعرفة التقنية
                والرؤية الاستراتيجية.
              </p>
              <p className="text-charcoal-medium/70 font-tajawal leading-relaxed">
                تعد شركة مدار وأفاق اسمًا بارزًا في عالم الاستشارات والحلول المتكاملة،
                حيث تأسست برؤية واضحة تهدف إلى تقديم قيمة مضافة حقيقية لعملائنا في القطاع
                الخاص والحكومي على حدٍّ سواء.
              </p>
              <p className="text-charcoal-medium/70 font-tajawal leading-relaxed">
                نحن لسنا مجرد مزود للخدمات، بل نحن شركاء استراتيجيون نعمل جنبًا إلى جنب
                مع عملائنا لفهم تحدياتهم وتحويلها إلى فرص نمو مستدامة.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-cream rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-cairo font-bold text-charcoal text-sm">هيكلة محترفة</h4>
                  <p className="text-charcoal-medium/60 text-xs font-tajawal">إدارة متكاملة</p>
                </div>
              </div>
              <div className="bg-cream rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-cairo font-bold text-charcoal text-sm">عقول شابة</h4>
                  <p className="text-charcoal-medium/60 text-xs font-tajawal">طاقات وطنية</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}
