'use client'

import { Shield, Lightbulb, Users, Leaf, Award, CheckCircle2, BarChart2, Globe } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'

const values = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'النزاهة',
    desc: 'نعمل بشفافية مطلقة ونلتزم بأعلى المعايير الأخلاقية في كافة تعاملاتنا.',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'الابتكار',
    desc: 'نبحث دائمًا عن حلول غير تقليدية لمواجهة التحديات الهندسية والبيئية.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'العمل الجماعي',
    desc: 'نؤمن بأن تضافر الجهود والعقول هو السبيل الوحيد لتحقيق الإنجازات الكبرى.',
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: 'الاستدامة',
    desc: 'نصمم حلولنا مع مراعاة الأثر البيئي طويل الأمد للأجيال القادمة.',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'التميز',
    desc: 'التميز ليس خيارًا، بل هو معيارنا الثابت في تسليم كل مخرجات أعمالنا.',
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: 'الالتزام والموثوقية',
    desc: 'الشفافية هي أساس تعاملنا، والالتزام بالمواعيد هو ميثاقنا.',
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: 'التركيز على العميل',
    desc: 'نجاحنا مرتبط بنجاح عملائنا، لذا نضع احتياجاتهم في مقدمة أولوياتنا.',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'المرونة',
    desc: 'نتميز بمرونة عالية في التعامل مع التغيرات الطارئة وضمان سير العمل.',
  },
]

export default function CoreValues() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <AnimatedSection>
          <SectionHeader
            title="قيمنا الجوهرية"
            subtitle="نلتزم بقيم راسخة تمثل جوهر هويتنا ومحرك نجاحنا"
          />
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <AnimatedSection key={value.title} delay={i * 0.08} direction="up">
              <div className="card flex flex-col text-center items-center group hover:border-gold/20">
                <div className="icon-gold-bg !rounded-2xl !mb-4 group-hover:bg-gold/20 transition-colors">
                  {value.icon}
                </div>
                <h3 className="font-cairo font-bold text-charcoal text-base mb-2">
                  {value.title}
                </h3>
                <p className="text-charcoal-medium/60 font-tajawal text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
