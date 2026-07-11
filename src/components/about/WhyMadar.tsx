'use client'

import Image from 'next/image'
import { CheckCircle2, Users, Globe, Award, Lock } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'

const reasons = [
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'فهم محلي بمعايير عالمية',
    desc: 'نجمع بين المعرفة العميقة بالأنظمة المحلية وأفضل الممارسات الدولية.',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'فريق متعدد التخصصات',
    desc: 'نضم نخبة من المهندسين والخبراء البيئيين والمحللين الاستراتيجيين.',
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: 'التزامنا بالجودة',
    desc: 'نتبع معايير صارمة لضمان أعلى مستويات الأداء والسلامة في جميع عملياتنا.',
  },
  {
    icon: <CheckCircle2 className="w-5 h-5" />,
    title: 'نتائج ملموسة',
    desc: 'هدفنا الأول هو تحقيق نتائج ملموسة تنعكس على نموكم المالي والتشغيلي.',
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: 'سرية تامة',
    desc: 'نلتزم بأعلى معايير الخصوصية والمهنية في التعامل مع بياناتكم.',
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'شراكة مستدامة',
    desc: 'لا تنتهي علاقتنا بالاستشارة، بل نبقى شركاء في رحلة نجاحكم.',
  },
]

export default function WhyMadar() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image grid - Right Side (First in JSX under RTL) */}
          <AnimatedSection direction="right">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-card">
                <Image src="/images/WhyMadarImg.png" alt="مدار وآفاق - البنية التحتية" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" quality={80} />
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-card mt-8">
                <Image src="/images/Image1.png" alt="مدار وآفاق - الفريق" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" quality={80} />
              </div>
              <div className="col-span-2 bg-olive rounded-2xl p-6 text-white">
                <p className="font-cairo font-bold text-base mb-2">نؤمن في مدار وآفاق</p>
                <p className="text-white/70 font-tajawal text-sm leading-relaxed">
                  بأن الاستشارة الناجحة ليست مجرد تقرير، بل هي شراكة استراتيجية
                  تبدأ من فهم التحديات العميقة وتنتهي بتحقيق عوائد ملموسة.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Text - Left Side (Second in JSX under RTL) */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="section-label mb-4">لماذا تختارنا</div>
            <h2 className="font-shahd font-bold text-charcoal leading-tight mb-4"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)' }}>
              لماذا مدار وآفاق؟
            </h2>
            <p className="text-charcoal-medium/70 font-tajawal leading-relaxed mb-8">
              نحن لا نقدم مجرد استشارات، بل نبني شراكات قائمة على الفهم العميق
              لتطلعات عملائنا وبيئة العمل المحلية.
            </p>

            <div className="space-y-5">
              {reasons.map((reason, i) => (
                <AnimatedSection key={reason.title} delay={i * 0.07} direction="left">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                      {reason.icon}
                    </div>
                    <div>
                      <h4 className="font-cairo font-bold text-charcoal text-sm mb-1">
                        {reason.title}
                      </h4>
                      <p className="text-charcoal-medium/60 font-tajawal text-sm leading-relaxed">
                        {reason.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
