import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'تواصل معنا | مدار وآفاق المحدودة',
  description:
    'تواصل مع فريق مدار وآفاق. اتصل بنا أو راسلنا لمعرفة المزيد عن خدماتنا الاستشارية والهندسية.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
