'use client'

import { Award, ShieldCheck, Activity } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const standards = [
  {
    icon: <Award className="w-8 h-8 text-gold" />,
    title: 'معايير الجودة',
    desc: 'نطبق أفضل المعايير الهندسية والفنية المعتمدة لضمان مخرجات ذات موثوقية عالية تلبي طموحات شركائنا.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-gold" />,
    title: 'السلامة أولاً',
    desc: 'نضع سلامة الأفراد والمشاريع على رأس أولوياتنا التشغيلية والبيئية في كافة خطوات التخطيط والتنفيذ.',
  },
  {
    icon: <Activity className="w-8 h-8 text-gold" />,
    title: 'تطوير العمليات',
    desc: 'نلتزم بمراجعة وتطوير إجراءات العمل باستمرار لمواكبة التغيرات التقنية وتجاوز توقعات العملاء.',
  },
]

export default function QualityCommitment() {
  return (
    <section className="section-padding bg-[#584b3e] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container-main relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection>
            <h2 className="font-shahd font-bold text-white leading-tight mb-4"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)' }}>
              التزامنا بالجودة
            </h2>
            <p className="text-white/70 font-tajawal text-sm md:text-base leading-relaxed">
              نعمل وفق معايير صارمة لضمان أعلى مستويات الأداء والسلامة في جميع عملياتنا
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {standards.map((std, i) => (
            <AnimatedSection key={std.title} delay={std.title === 'معايير الجودة' ? 0 : std.title === 'السلامة أولاً' ? 0.1 : 0.2} direction="up">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 text-center hover:bg-white/10 hover:border-gold/30 transition-all duration-300 h-full flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-5 border border-white/10">
                  {std.icon}
                </div>
                <h3 className="font-shahd font-bold text-white text-lg mb-3">
                  {std.title}
                </h3>
                <p className="text-white/60 font-tajawal text-sm leading-relaxed flex-1">
                  {std.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
