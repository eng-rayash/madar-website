'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Eye, Target } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'

export default function AboutPreview() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Side - Right */}
          <AnimatedSection direction="right">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-card-hover aspect-[4/5]">
                <Image
                  src="/images/Image1.png"
                  alt="مدار وآفاق - اجتماع الفريق"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={80}
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold/10 rounded-full blur-xl z-0" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gold/15 rounded-full blur-lg z-0" />
            </div>
          </AnimatedSection>

          {/* Text Side - Left */}
          <div>
            <AnimatedSection direction="left" delay={0.2}>
              <div className="section-label mb-4">
                <span>قصتنا وقيمنا</span>
              </div>
              <h2 className="font-ge font-medium text-charcoal leading-tight mb-6"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}>
                الريادة في صياغة المشهد
                <br />
                <span className="text-gold">العقاري والاستشاري</span>
              </h2>
              <p className="text-charcoal-medium/70 font-tajawal leading-relaxed mb-8">
                نحن في شركة مدار وآفاق المحدودة، ننطلق من إيمان عميق بأن النهضة العمرانية
                والاقتصادية للمملكة تتطلب شركاء يجمعون بين المعرفة التقنية والرؤية الاستراتيجية.
                تعد شركة مدار وأفاق اسمًا بارزًا في عالم الاستشارات والحلول المتكاملة.
              </p>

              {/* Vision & Mission Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-2xl p-5 shadow-card border border-cream-darker">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="icon-gold-bg !w-10 !h-10 !rounded-lg !mb-0">
                      <Eye className="w-4 h-4" />
                    </div>
                    <h3 className="font-cairo font-bold text-sm text-charcoal">رؤيتنا الطموحة</h3>
                  </div>
                  <p className="text-charcoal-medium/70 text-sm font-tajawal leading-relaxed">
                    أن نكون المعيار الذهبي في جودة التنفيذ ودقة الاستشارات على مستوى المنطقة.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-card border border-cream-darker">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="icon-gold-bg !w-10 !h-10 !rounded-lg !mb-0">
                      <Target className="w-4 h-4" />
                    </div>
                    <h3 className="font-cairo font-bold text-sm text-charcoal">رسالتنا المهنية</h3>
                  </div>
                  <p className="text-charcoal-medium/70 text-sm font-tajawal leading-relaxed">
                    تمكين عملائنا من خلال تقديم خدمات استشارية وهندسية عالية الجودة تعتمد على الشفافية.
                  </p>
                </div>
              </div>

              <Link href="/about" className="btn-gold inline-flex items-center gap-2 group" id="about-preview-learn-more">
                <span>تعرف على المزيد</span>
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </Link>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  )
}
