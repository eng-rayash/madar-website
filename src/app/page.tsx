import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import StatsBar from '@/components/home/StatsBar'
import AboutPreview from '@/components/home/AboutPreview'
import ServicesGrid from '@/components/home/ServicesGrid'
import MethodologySection from '@/components/home/MethodologySection'
import CTABanner from '@/components/home/CTABanner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مدار وآفاق المحدودة | الرئيسية',
  description:
    'شركة سعودية رائدة متخصصة في قطاعات العقارات، الاستشارات الإدارية، إدارة المشاريع، والبنية التحتية.',
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <AboutPreview />
        <ServicesGrid />
        <MethodologySection />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
