'use client'

import { Eye, Target } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function VisionMission() {
  return (
    <section className="section-padding bg-cream-dark">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Vision */}
          <AnimatedSection direction="right">
            <div className="bg-white rounded-3xl p-8 shadow-card border border-cream-darker h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                  <Eye className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-cairo text-gold font-bold tracking-wider uppercase">Vision</span>
                  <h3 className="font-shahd font-bold text-charcoal text-xl mt-0.5">رؤيتنا</h3>
                </div>
              </div>
              <div className="w-12 h-[3px] bg-gold rounded-sm mb-6" />
              <p className="text-charcoal-medium/70 font-tajawal leading-relaxed text-base">
                أن نكون الشريك الأكثر موثوقية وتميزًا في تقديم الحلول المبتكرة والمستدامة
                التي تساهم في نهضة الاقتصاد الوطني وتحقيق مستهدفات رؤية المملكة 2030.
              </p>
              <div className="mt-6 pt-6 border-t border-cream-darker">
                <p className="font-cairo font-bold text-gold text-sm">
                  أن نكون المعيار الذهبي في جودة التنفيذ ودقة الاستشارات على مستوى المنطقة.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Mission */}
          <AnimatedSection direction="left" delay={0.15}>
            <div className="bg-white rounded-3xl p-8 shadow-card border border-cream-darker h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-olive/10 flex items-center justify-center text-olive flex-shrink-0">
                  <Target className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-cairo text-olive font-bold tracking-wider uppercase">Mission</span>
                  <h3 className="font-shahd font-bold text-charcoal text-xl mt-0.5">رسالتنا</h3>
                </div>
              </div>
              <div className="w-12 h-[3px] bg-olive rounded-sm mb-6" />
              <p className="text-charcoal-medium/70 font-tajawal leading-relaxed text-base">
                تمكين عملائنا من خلال تقديم خدمات استشارية وهندسية عالية الجودة،
                تعتمد على الشفافية والابتكار، وتلتزم بأعلى معايير المهنية لضمان
                نجاح مشاريعهم وتحقيق أهدافهم الاستراتيجية.
              </p>
              <div className="mt-6 pt-6 border-t border-cream-darker">
                <p className="font-cairo font-bold text-olive text-sm">
                  تمكين المؤسسات والأفراد عبر حلول ذكية تتسم بالاستدامة والابتكار.
                </p>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}
