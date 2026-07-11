import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesIntro from '@/components/services/ServicesIntro'
import ServicesFullGrid from '@/components/services/ServicesFullGrid'
import HowWeMakeDiff from '@/components/services/HowWeMakeDiff'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'خدماتنا | مدار وآفاق المحدودة',
  description:
    'منظومة متكاملة من الخدمات الاستشارية والهندسية: العقارات، الاستشارات الإدارية، البنية التحتية، التحليل المالي والتسويق الاستراتيجي.',
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesHero />
        <ServicesIntro />
        <ServicesFullGrid />
        <HowWeMakeDiff />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
