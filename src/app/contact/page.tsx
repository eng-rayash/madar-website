'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Phone, Mail, MapPin, Clock,
  Send, CheckCircle2, ChevronDown,
  ExternalLink
} from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'

const contactCards = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'اتصل بنا',
    subtitle: 'يسعدنا استقبال مكالماتكم',
    value: '+966 540 520 206',
    link: 'tel:+966540520206',
    dir: 'ltr' as const,
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'البريد الإلكتروني',
    subtitle: 'راسلنا في أي وقت',
    value: 'info@madarwaafaq.com',
    link: 'mailto:info@madarwaafaq.com',
    dir: 'ltr' as const,
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'العنوان الرئيسي',
    subtitle: 'المملكة العربية السعودية',
    value: 'الدمام',
    link: 'https://maps.google.com',
    dir: 'rtl' as const,
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'ساعات العمل',
    subtitle: 'من الأحد إلى الخميس',
    value: '09:00 ص - 05:00 م',
    link: null,
    dir: 'rtl' as const,
  },
]

const services = [
  'الاستشارات الإدارية',
  'الاستشارات المالية والتمويل',
  'الوساطة والتطوير العقاري',
  'مشاريع البنية التحتية',
  'التسويق الاستراتيجي',
  'الاستشارات القانونية',
  'أخرى',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', company: '', phone: '', email: '', service: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero - Simple gradient */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-dark to-cream-darker" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brown/5 rounded-full blur-2xl translate-x-1/3 translate-y-1/3" />

        <div className="container-main relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 justify-center mb-5 text-charcoal-medium/60 text-sm font-cairo">
              <Link href="/" className="hover:text-gold transition-colors">الرئيسية</Link>
              <span>/</span>
              <span className="text-gold">تواصل معنا</span>
            </div>
            <h1 className="font-shahd font-bold text-charcoal leading-tight mb-5"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
              نحن هنا من أجلك
            </h1>
            <p className="text-charcoal-medium/65 font-tajawal text-lg max-w-xl mx-auto">
              تواصل معنا للحصول على استشارة متخصصة أو لمعرفة المزيد عن خدماتنا.
              فريقنا دائمًا جاهز لخدمتك.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-10 bg-white border-b border-cream-darker">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactCards.map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 0.1} direction="up">
                <div className="card text-center hover:border-gold/20 h-full">
                  <div className="icon-gold-bg mx-auto mb-4">
                    {card.icon}
                  </div>
                  <h3 className="font-cairo font-bold text-charcoal text-sm mb-1">{card.title}</h3>
                  <p className="text-charcoal-medium/50 text-xs font-tajawal mb-3">{card.subtitle}</p>
                  {card.link ? (
                    <a
                      href={card.link}
                      className="font-cairo font-bold text-charcoal text-sm hover:text-gold transition-colors flex items-center gap-1 justify-center"
                      dir={card.dir}
                      target={card.link.startsWith('http') ? '_blank' : undefined}
                      rel={card.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {card.value}
                      {card.link.startsWith('http') && <ExternalLink className="w-3 h-3 opacity-50" />}
                    </a>
                  ) : (
                    <span className="font-cairo font-bold text-charcoal text-sm" dir={card.dir}>
                      {card.value}
                    </span>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section-padding bg-cream">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Benefits Column */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="right">
                <h2 className="font-cairo font-black text-charcoal text-2xl leading-tight mb-4">
                  احصل على استشارتك:
                </h2>
                <p className="text-charcoal-medium/65 font-tajawal text-sm leading-relaxed mb-8">
                  فريقنا من المستشارين الخبراء جاهز لمناقشة تحديات أعمالكم وتقديم
                  الحلول التي تضمن ريادتكم في السوق السعودي والدولي.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: 'سرية تامة للمعلومات',
                      desc: 'نلتزم بأعلى معايير الخصوصية والمهنية في التعامل مع بياناتكم.',
                    },
                    {
                      title: 'تحليل دقيق للاحتياجات',
                      desc: 'نقوم بدراسة وضعكم الحالي لتقديم توصيات مخصصة وفعالة.',
                    },
                    {
                      title: 'دعم فني واستشاري متواصل',
                      desc: 'لا تنتهي علاقتنا بالاستشارة، بل نبقى شركاء في رحلة نجاحكم.',
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-cairo font-bold text-charcoal text-sm mb-1">{item.title}</h4>
                        <p className="text-charcoal-medium/60 font-tajawal text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="left" delay={0.15}>
                <div className="bg-white rounded-3xl shadow-card-hover border border-cream-darker p-8">
                  {submitted ? (
                    <div className="text-center py-16">
                      <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-gold" />
                      </div>
                      <h3 className="font-cairo font-black text-2xl text-charcoal mb-3">
                        شكرًا لتواصلك معنا!
                      </h3>
                      <p className="text-charcoal-medium/65 font-tajawal leading-relaxed">
                        سيتواصل معك فريقنا خلال 24 ساعة.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="form-label">الاسم الكامل</label>
                          <input
                            type="text"
                            className="form-input"
                            placeholder="مثال: محمد أحمد"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            id="contact-form-name"
                            required
                          />
                        </div>
                        <div>
                          <label className="form-label">اسم الشركة</label>
                          <input
                            type="text"
                            className="form-input"
                            placeholder="شركة المدار"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            id="contact-form-company"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="form-label">البريد الإلكتروني</label>
                          <input
                            type="email"
                            className="form-input"
                            placeholder="example@domain.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            id="contact-form-email"
                            dir="ltr"
                            required
                          />
                        </div>
                        <div>
                          <label className="form-label">رقم الجوال</label>
                          <input
                            type="tel"
                            className="form-input"
                            placeholder="05XXXXXXXX"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            id="contact-form-phone"
                            dir="ltr"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="form-label">الخدمة المطلوبة</label>
                        <div className="relative">
                          <select
                            className="form-input appearance-none"
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            id="contact-form-service"
                          >
                            <option value="" disabled>اختر الخدمة...</option>
                            {services.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                          <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-medium/40 pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label className="form-label">كيف يمكننا مساعدتك؟</label>
                        <textarea
                          className="form-input min-h-[130px] resize-none"
                          placeholder="اكتب رسالتك هنا..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          id="contact-form-message"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-gold w-full justify-center py-4 text-base flex items-center gap-2"
                        id="contact-form-submit"
                      >
                        <Send className="w-4 h-4" />
                        إرسال الطلب الآن
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0">
        <div className="container-main pb-16">
          <AnimatedSection delay={0.2}>
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover h-80">
              {/* Map placeholder with olive overlay */}
              <div className="absolute inset-0 bg-olive/10" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.0!2d50.103!3d26.432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI1JzU1LjIiTiA1MMKwMDYnMTEuNiJF!5e0!3m2!1sar!2ssa!4v1620000000000!5m2!1sar!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع شركة مدار وآفاق"
                className="grayscale contrast-125"
              />
              {/* Card overlay */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg">
                <p className="font-cairo font-bold text-charcoal text-sm mb-1">تفضل بزيارتنا</p>
                <p className="text-charcoal-medium/60 font-tajawal text-xs">شركة مدار وآفاق المحدودة.</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold text-xs font-cairo font-bold flex items-center gap-1 mt-2 hover:text-gold-dark transition-colors"
                >
                  <span>افتح في الخرائط</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
