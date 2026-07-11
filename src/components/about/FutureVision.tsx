'use client'

import { Globe, Cpu, Handshake } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const steps = [
  {
    phase: 'الخطوة الأولى',
    title: 'التوسع الجغرافي',
    desc: 'الوصول بخدماتنا لكافة مناطق المملكة ودول الخليج لخدمة شريحة أوسع من الشركاء والعملاء.',
    icon: <Globe className="w-6 h-6 text-gold" />,
  },
  {
    phase: 'الخطوة الثانية',
    title: 'الانطلاق الرقمي',
    desc: 'تبني أحدث الحلول الرقمية وأتمتة الخدمات الاستشارية لرفع الكفاءة وتوفير الوقت.',
    icon: <Cpu className="w-6 h-6 text-gold" />,
  },
  {
    phase: 'الخطوة الثالثة',
    title: 'شركاء الانتشار',
    desc: 'بناء تحالفات استراتيجية مع كيانات محلية وعالمية لتبادل الخبرات وتوسيع فرص الاستثمار.',
    icon: <Handshake className="w-6 h-6 text-gold" />,
  },
]

export default function FutureVision() {
  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      <div className="container-main">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection>
            <h2 className="font-shahd font-bold text-charcoal leading-tight mb-4"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)' }}>
              رؤيتنا للمستقبل
            </h2>
            <p className="text-charcoal-medium/70 font-tajawal text-sm md:text-base leading-relaxed">
              نسير بخطى ثابتة نحو تحقيق غدٍ أفضل واستدامة أطول
            </p>
          </AnimatedSection>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Horizontal Line (Desktop only) */}
          <div className="absolute top-8 left-[16.6%] right-[16.6%] h-0.5 border-t-2 border-dashed border-gold/30 hidden md:block z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.15} direction="up">
                <div className="flex flex-col items-center text-center group">
                  {/* Step Icon Circle */}
                  <div className="w-16 h-16 rounded-full border-2 border-gold bg-white flex items-center justify-center shadow-md relative z-10 transition-transform duration-300 group-hover:scale-110">
                    {step.icon}
                  </div>

                  {/* Step Content */}
                  <div className="mt-6 bg-white p-6 rounded-2xl shadow-sm border border-cream-darker hover:shadow-md transition-all duration-300 w-full">
                    <span className="text-xs font-cairo text-gold font-bold mb-2 block">
                      {step.phase}
                    </span>
                    <h3 className="font-shahd font-bold text-charcoal text-base mb-3">
                      {step.title}
                    </h3>
                    <p className="text-charcoal-medium/60 font-tajawal text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
