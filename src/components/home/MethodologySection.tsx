'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'

const steps = [
  {
    num: '01',
    title: 'الاستيعاب',
    desc: 'تحليل عميق للاحتياجات وتحديد الأهداف الاستراتيجية',
  },
  {
    num: '02',
    title: 'التخطيط',
    desc: 'رسم خارطة الطريق الفنية والمالية والزمنية للمشروع',
  },
  {
    num: '03',
    title: 'التطوير',
    desc: 'صياغة الحلول الأولية وإجراء المراجعات التقنية',
  },
  {
    num: '04',
    title: 'التنفيذ',
    desc: 'العمل الميداني المباشر بأعلى معايير الجودة والمهنية',
  },
  {
    num: '05',
    title: 'الرقابة',
    desc: 'رصد النتائج مقابل مؤشرات الأداء المتفق عليها',
  },
  {
    num: '06',
    title: 'التسليم',
    desc: 'النهاية الناجحة ونقل المعرفة والملكية للشركاء',
  },
]

export default function MethodologySection() {
  return (
    <section className="section-padding bg-white" id="methodology">
      <div className="container-main">
        <AnimatedSection>
          <SectionHeader
            label="كيف نعمل"
            title="منهجية دقيقة لإنجاز العمل"
            subtitle="نتبع منهجية علمية ومدروسة في كل مشروع لضمان تحقيق أفضل النتائج"
          />
        </AnimatedSection>

        {/* Steps - horizontal scrollable on mobile, grid on desktop */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.08} direction="up">
              <div className="text-center group">
                {/* Step Number Circle */}
                <div className="step-circle mx-auto mb-4 group-hover:bg-gold/20 group-hover:border-gold/60 transition-all duration-300">
                  {step.num}
                </div>
                {/* Connector line (hidden on last item) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 -left-3 w-6 h-px bg-gold/30" />
                )}
                <h3 className="font-cairo font-bold text-charcoal text-sm mb-2">
                  {step.title}
                </h3>
                <p className="text-charcoal-medium/60 font-tajawal text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
