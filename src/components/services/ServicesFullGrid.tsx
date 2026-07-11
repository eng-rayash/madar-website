'use client'

import { Building2, Landmark, Briefcase, TrendingUp, Wrench, CheckCircle2 } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'

const firstFourServices = [
  {
    id: 'real-estate',
    icon: <Building2 className="w-6 h-6 text-gold" />,
    title: 'القطاع العقاري',
    subtitle: 'الوساطة والتطوير العقاري',
    desc: 'نقدم رؤية شاملة للسوق العقاري تبدأ من دراسة الجدوى وتستمر حتى تحقيق العوائد المستهدفة.',
    features: [
      'الوساطة في بيع وشراء وتأجير العقارات',
      'إدارة وتطوير المشاريع العقارية',
      'تقييم الأصول العقارية وفق المعايير الدولية',
      'إدارة وتسويق الأملاك والمرافق باحترافية',
    ],
  },
  {
    id: 'financial',
    icon: <Landmark className="w-6 h-6 text-gold" />,
    title: 'الاستشارات المالية والتمويل',
    subtitle: 'حلول مالية متكاملة',
    desc: 'حلول مالية ذكية تهدف إلى تعظيم الربحية وإدارة المخاطر بكفاءة عالية.',
    features: [
      'دراسات الجدوى الاقتصادية والمالية',
      'هيكلة القروض وتوفير بدائل التمويل',
      'التحليل المالي وتدقيق الميزانيات للمشاريع',
      'إدارة المخاطر وتحليل العوائد الاستثمارية',
    ],
  },
  {
    id: 'consulting',
    icon: <Briefcase className="w-6 h-6 text-gold" />,
    title: 'الاستشارات الإدارية',
    subtitle: 'تطوير الأداء المؤسسي',
    desc: 'إعادة هيكلة وتحسين الأداء المؤسسي لرفع الكفاءة الإنتاجية والاستغلال الأمثل للموارد.',
    features: [
      'تحسين الأداء المؤسسي والتشغيلي للجهات',
      'بناء وتطوير الهياكل التنظيمية والوظيفية',
      'التخطيط الاستراتيجي والحوكمة المؤسسية',
      'إدارة التغيير وتطوير المهارات القيادية',
    ],
  },
  {
    id: 'business',
    icon: <TrendingUp className="w-6 h-6 text-gold" />,
    title: 'تطوير الأعمال',
    subtitle: 'الشراكات والظهور الرقمي',
    desc: 'بناء الهوية الإعلامية وإدارة الحضور الرقمي لضمان الانتشار وتحقيق الأثر المستهدف للمشاريع.',
    features: [
      'بناء الشراكات والتحالفات الاستراتيجية',
      'دراسة وتحليل الفرص الاستثمارية والأسواق',
      'تصميم وإعداد الهوية الإعلامية المتكاملة',
      'إدارة قنوات الظهور الرقمي للمشاريع',
    ],
  },
]

const infrastructureBadges = [
  'الإشراف الهندسي',
  'المقاولات العامة',
  'إدارة المشاريع',
  'التشغيل والصيانة',
]

export default function ServicesFullGrid() {
  return (
    <section className="section-padding bg-cream-dark" id="services-grid">
      <div className="container-main">
        <AnimatedSection>
          <SectionHeader
            label="شركاء التنمية"
            title="منظومة خدماتنا المتكاملة"
            subtitle="نقدم حزمة متكاملة من الخدمات الاستشارية والهندسية لضمان نجاح مشاريعكم وتحقيق تطلعاتكم"
          />
        </AnimatedSection>

        {/* 2x2 Grid of first 4 services */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {firstFourServices.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 0.1} direction="up">
              <div
                id={`service-${service.id}`}
                className="bg-white border border-cream-darker rounded-[2rem] p-8 md:p-10 shadow-card hover:border-gold/25 hover:shadow-card-hover transition-all duration-300 h-full flex flex-col"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                  {service.icon}
                </div>

                {/* Title */}
                <div className="mb-4">
                  <span className="text-gold text-xs font-cairo font-bold tracking-wider uppercase">
                    {service.subtitle}
                  </span>
                  <h3 className="font-shahd font-bold text-charcoal text-xl mt-1">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-charcoal-medium/70 font-tajawal text-sm md:text-base leading-relaxed mb-6 flex-1">
                  {service.desc}
                </p>

                {/* Features list */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-cream-darker">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal-medium/70 font-tajawal text-xs md:text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* 5th Service - Infrastructure (Full Width Bottom Card) */}
        <div className="mt-8">
          <AnimatedSection delay={0.4} direction="up">
            <div className="bg-white border border-cream-darker rounded-[2rem] p-8 md:p-10 shadow-card hover:border-gold/25 hover:shadow-card-hover transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Right Side - Info */}
                <div className="lg:col-span-7 flex flex-col">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                    <Wrench className="w-6 h-6 text-gold" />
                  </div>
                  
                  <span className="text-gold text-xs font-cairo font-bold tracking-wider uppercase">
                    إشراف وتنفيذ هندسي
                  </span>
                  <h3 className="font-shahd font-bold text-charcoal text-2xl mt-1 mb-4">
                    البنية التحتية والمقاولات
                  </h3>
                  <p className="text-charcoal-medium/70 font-tajawal text-sm md:text-base leading-relaxed">
                    إدارة فنية وهندسية متكاملة للمشاريع الإنشائية لضمان الجودة والالتزام بالجداول الزمنية، بدءاً من رقابة مراحل التنفيذ والالتزام الصارم بمعايير السلامة العالمية وحتى التسليم النهائي للشركاء.
                  </p>
                </div>

                {/* Left Side - Badges Grid */}
                <div className="lg:col-span-5 w-full">
                  <div className="grid grid-cols-2 gap-4">
                    {infrastructureBadges.map((badge, idx) => (
                      <div 
                        key={badge}
                        className="bg-[#faf7f4] border border-[#ede8e1]/40 rounded-2xl p-5 text-center font-cairo font-bold text-sm text-charcoal hover:-translate-y-0.5 hover:border-gold/20 transition-all duration-300 shadow-sm"
                      >
                        {badge}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </AnimatedSection>
        </div>

      </div>
    </section>
  )
}
