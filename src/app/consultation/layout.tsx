import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'احصل على استشارة | مدار وآفاق المحدودة',
  description:
    'احصل على استشارة متخصصة من خبراء مدار وآفاق في قطاعات العقارات والاستشارات الإدارية والبنية التحتية.',
}

export default function ConsultationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
