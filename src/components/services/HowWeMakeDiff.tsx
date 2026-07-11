'use client'

import { Globe, Users, Award, CheckCircle2, Target, BarChart2 } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const steps = [
  { num: '1', title: 'التواصل الأولي', desc: 'فهم احتياجاتكم وتحديد نطاق العمل المبدئي' },
  { num: '2', title: 'التشخيص والتحليل', desc: 'دراسة الوضع الراهن وتحليل الفجوات بعمق' },
  { num: '3', title: 'تصميم الحلول', desc: 'صياغة الحلول الأولية وإجراء المراجعات التقنية' },
  { num: '4', title: 'التنفيذ والمتابعة', desc: 'دعم تطبيق الحلول لضمان الجودة والفعالية' },
  { num: '5', title: 'القياس والتقييم', desc: 'رصد النتائج مقابل مؤشرات الأداء' },
  { num: '6', title: 'التطوير المستمر', desc: 'ضمان استدامة الأثر والتحسين المتواصل' },
]

const differentiators = [
  { icon: <Globe className="w-5 h-5" />, title: 'خبرة محلية بعمق', desc: 'فهم تام للثقافة المؤسسية والأنظمة المحلية في السعودية.' },
  { icon: <Target className="w-5 h-5" />, title: 'حلول مبتكرة', desc: 'لا نؤمن بالحلول الجاهزة؛ كل مشروع هو حالة فريدة تتطلب إبداعاً.' },
  { icon: <Award className="w-5 h-5" />, title: 'التركيز على العائد', desc: 'التركيز على تحقيق عوائد استثمارية واضحة ونمو مستدام لأعمالك.' },
  { icon: <CheckCircle2 className="w-5 h-5" />, title: 'الالتزام والموثوقية', desc: 'نحترم وقت عملائنا ونلتزم بالجداول الزمنية المحددة بدقة.' },
  { icon: <Users className="w-5 h-5" />, title: 'فريق نخبوي', desc: 'نضم كفاءات وطنية وعالمية بشهادات مهنية عليا وخبرات متنوعة.' },
  { icon: <BarChart2 className="w-5 h-5" />, title: 'شراكة مستدامة', desc: 'لا تنتهي علاقتنا بانتهاء التسليم، بل نستمر بدعمكم كشركاء نجاح.' },
]

export default function HowWeMakeDiff() {
  return (
    <>
      {/* Section 4: How we work (How We Make a Difference) */}
      <section className="section-padding bg-gradient-to-r from-[#b38e55] to-[#917143] text-white relative overflow-hidden">
        {/* Soft background shape */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        
        <div className="container-main relative z-10">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-white/80 font-tajawal text-sm uppercase tracking-wider block mb-3">
              منهجية العمل
            </span>
            <h2 className="font-shahd font-bold text-white leading-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>
              كيف نصنع الفارق؟
            </h2>
            <div className="w-16 h-1 bg-white/35 mx-auto rounded-full" />
          </AnimatedSection>

          {/* 6 Steps Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6 mt-12">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.07} direction="up">
                <div className="text-center group flex flex-col items-center">
                  {/* Step Number Circle */}
                  <div className="w-14 h-14 rounded-full border-2 border-white/30 bg-white/5 flex items-center justify-center font-cairo font-black text-white text-xl mb-4 group-hover:scale-110 group-hover:border-white transition-all duration-300 shadow-sm">
                    {step.num}
                  </div>
                  {/* Step Title */}
                  <h3 className="font-cairo font-bold text-white text-base mb-2">
                    {step.title}
                  </h3>
                  {/* Step Description */}
                  <p className="text-white/75 font-tajawal text-xs md:text-sm leading-relaxed max-w-[150px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Why choose us */}
      <section className="section-padding bg-white">
        <div className="container-main">
          
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold font-tajawal text-sm uppercase tracking-wider block mb-3">
              لماذا تختارنا
            </span>
            <h2 className="font-shahd font-bold text-charcoal leading-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>
              لماذا تختار خدماتنا؟
            </h2>
            <p className="text-charcoal-medium/70 font-tajawal text-sm md:text-base leading-relaxed">
              نجمع بين الخبرة المحلية والحلول المبتكرة لتقديم قيمة حقيقية تتجاوز تطلعاتكم.
            </p>
            <div className="w-16 h-1 bg-gold/30 mx-auto rounded-full mt-4" />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {differentiators.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08} direction="up">
                <div className="bg-white border border-cream-darker rounded-[1.8rem] p-8 shadow-card hover:border-gold/25 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                    {item.icon}
                  </div>
                  {/* Title */}
                  <h3 className="font-cairo font-bold text-charcoal text-lg">
                    {item.title}
                  </h3>
                  {/* Description */}
                  <p className="text-charcoal-medium/65 font-tajawal text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
