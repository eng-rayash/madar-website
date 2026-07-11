'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Globe, Share2 } from 'lucide-react'

const footerLinks = {
  company: {
    title: 'الشركة',
    links: [
      { href: '/about', label: 'عن مدار وآفاق' },
      { href: '/about#methodology', label: 'منهجية العمل' },
      { href: '/contact', label: 'تواصل معنا' },
    ],
  },
  services: {
    title: 'الخدمات',
    links: [
      { href: '/services#real-estate', label: 'الوساطة العقارية' },
      { href: '/services#infrastructure', label: 'البنية التحتية' },
      { href: '/services#consulting', label: 'الاستشارات الإدارية' },
      { href: '/services#financial', label: 'التحليل المالي' },
    ],
  },
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-olive text-white" dir="rtl">
      {/* Main Footer Content */}
      <div className="container-main pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/logo/logo.png"
                alt="شعار مدار وآفاق"
                width={56}
                height={56}
                className="object-contain brightness-0 invert"
              />
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-6 font-tajawal">
              رواد في تقديم الحلول المتكاملة للقطاع العقاري والاستشاري في المملكة العربية السعودية،
              ملتزمون بالتميز والابتكار في كل مشروع.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="الموقع الإلكتروني"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold transition-colors flex items-center justify-center"
                id="footer-social-website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="مشاركة"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold transition-colors flex items-center justify-center"
                id="footer-social-share"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-cairo font-bold text-base mb-5 text-white">
              {footerLinks.company.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-gold-light transition-colors text-sm font-tajawal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-cairo font-bold text-base mb-5 text-white">
              {footerLinks.services.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-gold-light transition-colors text-sm font-tajawal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h3 className="font-cairo font-bold text-base mb-5 text-white">
              اشترك في نشرتنا
            </h3>
            <p className="text-white/70 text-sm mb-4 font-tajawal">
              احصل على آخر التطورات والفرص الاستثمارية مباشرة.
            </p>

            {/* Email subscription form */}
            <form className="flex gap-2 mb-8" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-gold transition-colors font-tajawal"
                dir="rtl"
                id="footer-email-input"
              />
              <button
                type="submit"
                className="bg-gold hover:bg-gold-light text-white px-4 py-2 rounded-lg text-sm font-cairo font-bold transition-colors whitespace-nowrap"
                id="footer-subscribe-btn"
              >
                اشترك
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/70">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-sm font-tajawal" dir="ltr">+966 540 520 206</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-sm font-tajawal">info@madarwaafaq.com</span>
              </div>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm font-tajawal">المملكة العربية السعودية، الدمام</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-main py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs font-tajawal text-center sm:text-right">
            جميع الحقوق محفوظة لشركة مدار وآفاق المحدودة © {currentYear}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-white/50 hover:text-white/80 text-xs transition-colors font-tajawal"
            >
              سياسة الخصوصية
            </Link>
            <span className="text-white/20">|</span>
            <Link
              href="/terms"
              className="text-white/50 hover:text-white/80 text-xs transition-colors font-tajawal"
            >
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
