'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Wrench, Building2, BarChart3, Scale, TrendingUp, ChevronLeft } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'

const services = [
  {
    id: 'real-estate',
    icon: <Building2 className="w-6 h-6" />,
    title: 'الوساطة والتطوير العقاري',
    desc: 'خدمات وساطة احترافية ترتكز على تحليل دقيق للسوق، مع تقديم فرص استثمارية عقارية فريدة تحقق عوائد مجزية ومستدامة لعملائنا.',
    href: '/services#real-estate',
    featured: true,
    image: '/images/sector-card.svg',
  },
  {
    id: 'infrastructure',
    icon: <Wrench className="w-6 h-6" />,
    title: 'مشاريع البنية التحتية',
    desc: 'تنفيذ وإشراف هندسي متكامل لمشاريع البنية التحتية العملاقة وفقاً لأعلى المعايير الإنشائية العالمية.',
    href: '/services#infrastructure',
    featured: false,
  },
  {
    id: 'consulting',
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'الاستشارات الإدارية',
    desc: 'إعادة هيكلة وتحسين الأداء المؤسسي لرفع الكفاءة الإنتاجية وتحقيق أقصى استفادة من الموارد البشرية.',
    href: '/services#consulting',
    featured: false,
  },
  {
    id: 'financial',
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'الحلول والتحليل المالي',
    desc: 'دراسات جدوى متعمقة ونمذجة مالية لدعم قرارات الاستثمار الكبرى وهيكلة القروض.',
    href: '/services#financial',
    featured: false,
  },
  {
    id: 'marketing',
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'التسويق الاستراتيجي',
    desc: 'بناء الهوية الإعلامية وإدارة الحضور الرقمي للمشاريع والكيانات.',
    href: '/services#marketing',
    featured: false,
  },
  {
    id: 'legal',
    icon: <Scale className="w-6 h-6" />,
    title: 'الاستشارات القانونية',
    desc: 'حلول قانونية متكاملة لشركاتكم تضمن الامتثال والحماية.',
    href: '/services#legal',
    featured: false,
  },
]

export default function ServicesGrid() {
  const featuredService = services[0]
  const otherServices = services.slice(1)

  return (
    <section className="section-padding bg-cream-dark" id="services">
      <div className="container-main">

        {/* Header */}
        <AnimatedSection>
          <SectionHeader
            label="خدماتنا التخصصية"
            title="وحدات عمل استراتيجية لخدمة أهدافكم"
            subtitle="نقدم منظومة متكاملة من الخدمات الاستشارية والهندسية لضمان نجاح مشاريعكم"
          />
        </AnimatedSection>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Featured Large Card */}
          <AnimatedSection className="lg:col-span-1 lg:row-span-2" delay={0.1}>
            <Link href={featuredService.href} className="block h-full group" id={`service-card-${featuredService.id}`}>
              <div className="card h-full flex flex-col overflow-hidden !p-0 !rounded-3xl relative min-h-[400px]">
                {/* Background: real sector card image */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/Sector Card 1_ Large.png"
                    alt="الوساطة والتطوير العقاري"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#3a4a35]/80 via-[#3a4a35]/70 to-[#2d3828]/90" />
                </div>

                <div className="relative z-10 p-7 flex flex-col h-full">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gold/20 border border-gold/30 text-gold mb-5">
                    {featuredService.icon}
                  </div>

                  <h3 className="font-cairo font-black text-white text-xl leading-snug mb-3">
                    {featuredService.title}
                  </h3>
                  <p className="text-white/70 font-tajawal text-sm leading-relaxed flex-1">
                    {featuredService.desc}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-gold-light font-cairo font-bold text-sm group-hover:gap-4 transition-all">
                    <span>تعرف على المزيد</span>
                    <ChevronLeft className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedSection>

          {/* Other Services - 2 columns */}
          {otherServices.map((service, i) => (
            <AnimatedSection key={service.id} delay={0.1 * (i + 2)}>
              <Link href={service.href} className="block group" id={`service-card-${service.id}`}>
                <div className="card flex flex-col h-full hover:border-gold/20">
                  <div className="icon-gold-bg mb-4">
                    {service.icon}
                  </div>
                  <h3 className="font-cairo font-bold text-charcoal text-base mb-2">
                    {service.title}
                  </h3>
                  <p className="text-charcoal-medium/60 font-tajawal text-sm leading-relaxed flex-1">
                    {service.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-gold font-cairo font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>اعرف المزيد</span>
                    <ChevronLeft className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center mt-10" delay={0.3}>
          <Link href="/services" className="btn-outline inline-flex items-center gap-2 group" id="services-view-all">
            <span>استكشف كل خدماتنا</span>
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </Link>
        </AnimatedSection>

      </div>
    </section>
  )
}
