'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'

export default function ServicesIntro() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Right Column - Title (First in JSX under RTL) */}
          <AnimatedSection direction="right">
            <h2 className="font-shahd font-bold text-charcoal leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              نهج يركز على
              <br />
              <span className="text-gold">النتائج المستدامة</span>
            </h2>
          </AnimatedSection>

          {/* Left Column - Paragraph (Second in JSX under RTL) */}
          <AnimatedSection direction="left" delay={0.2}>
            <p className="text-charcoal-medium/85 font-tajawal text-base md:text-lg leading-relaxed">
              نؤمن في مدار وآفاق بأن الاستشارة الهندسية ليست مجرد ورق بل هي شراكة تبدأ من فهم التحديات العميقة وتنتهي بتحقيق عوائد ملموسة ومستدامة تخدم التنمية في المملكة العربية السعودية.
            </p>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}
