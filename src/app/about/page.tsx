import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AboutHero from '@/components/about/AboutHero'
import WhoWeAre from '@/components/about/WhoWeAre'
import VisionMission from '@/components/about/VisionMission'
import CoreValues from '@/components/about/CoreValues'
import StrategicGoals from '@/components/about/StrategicGoals'
import WhyMadar from '@/components/about/WhyMadar'
import QualityCommitment from '@/components/about/QualityCommitment'
import FutureVision from '@/components/about/FutureVision'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'عن الشركة | مدار وآفاق المحدودة',
  description:
    'تعرف على شركة مدار وآفاق - رؤيتنا، رسالتنا، قيمنا الجوهرية وأهدافنا الاستراتيجية في خدمة القطاع العقاري والاستشاري بالمملكة العربية السعودية.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <WhoWeAre />
        <VisionMission />
        <CoreValues />
        <StrategicGoals />
        <WhyMadar />
        <QualityCommitment />
        <FutureVision />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
