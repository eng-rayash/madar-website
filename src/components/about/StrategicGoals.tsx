'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'

const goals = [
  {
    num: '01',
    title: 'التوسع الريادي',
    desc: 'تعزيز مكانتنا كشركة رائدة في تقديم الحلول المتكاملة على مستوى المنطقة.',
    colorClass: 'border-gold text-gold bg-gold/5',
  },
  {
    num: '02',
    title: 'التطوير الرقمي',
    desc: 'تبني أحدث التقنيات الرقمية في تقديم الاستشارات والخدمات الهندسية.',
    colorClass: 'border-olive text-olive bg-olive/5',
  },
  {
    num: '03',
    title: 'بناء القدرات',
    desc: 'الاستثمار في الكوادر البشرية وتطوير المهارات القيادية والفنية.',
    colorClass: 'border-gold text-gold bg-gold/5',
  },
]

export default function StrategicGoals() {
  return (
    <section className="section-padding bg-cream-dark" id="goals">
      <div className="container-main">
        <AnimatedSection>
          <SectionHeader
            title="أهدافنا الاستراتيجية"
            subtitle="خطواتنا القادمة نحو تميز لا حدود له"
          />
        </AnimatedSection>

        {/* Timeline Container */}
        <div className="mt-16 relative animate-fade-in">
          {/* Central Vertical Line (Desktop only) */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gold/20 transform -translate-x-1/2 hidden md:block" />

          {/* Right Vertical Line (Mobile only) */}
          <div className="absolute top-0 bottom-0 right-5 w-0.5 bg-gold/20 md:hidden" />

          <div className="space-y-12 relative z-10">
            {goals.map((goal, i) => {
              const isEven = i % 2 === 1
              return (
                <div key={goal.num} className="relative flex flex-col md:flex-row items-center">
                  
                  {/* Timeline Circle */}
                  <div className={`absolute w-10 h-10 rounded-full border-2 flex items-center justify-center font-cairo font-black text-sm shadow-sm z-20 ${goal.colorClass} 
                    right-0 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2`}
                  >
                    {goal.num}
                  </div>

                  {/* Content Block */}
                  <div className={`w-full md:w-[calc(50%-2rem)] pr-14 md:pr-0 ${
                    isEven ? 'md:mr-auto md:text-left md:pl-8' : 'md:ml-auto md:text-right md:pr-8'
                  }`}>
                    <AnimatedSection direction={isEven ? 'left' : 'right'} delay={i * 0.15}>
                      <div className="bg-white rounded-2xl p-6 shadow-sm border border-cream-darker hover:border-gold/20 transition-all">
                        <h3 className="font-shahd font-bold text-charcoal text-lg mb-2">
                          {goal.title}
                        </h3>
                        <p className="text-charcoal-medium/70 font-tajawal text-sm leading-relaxed">
                          {goal.desc}
                        </p>
                      </div>
                    </AnimatedSection>
                  </div>

                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
