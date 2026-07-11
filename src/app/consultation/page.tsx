'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown, CheckCircle2, Send, User, Building2, Phone, Mail, FileText, AlignRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'

const services = [
  'الاستشارات الإدارية',
  'الاستشارات المالية والتمويل',
  'الوساطة والتطوير العقاري',
  'مشاريع البنية التحتية',
  'التسويق الاستراتيجي',
  'الاستشارات القانونية',
  'الإشراف الهندسي',
  'أخرى',
]

const companySizes = ['ناشئة (1-10)', 'صغيرة (11-50)', 'متوسطة (51-200)', 'كبيرة (200+)']

const steps = [
  {
    num: '01',
    title: 'مراجعة الطلب',
    desc: 'خلال 24 ساعة، سيقوم فريقنا المختص بمراجعة بياناتك وتحديد المستشار الأنسب لمجالك.',
  },
  {
    num: '02',
    title: 'التواصل الأولي',
    desc: 'تنسيق مكالمة استكشافية لفهم أعمق للتحديات والجدول الزمني المقترح للعمل.',
  },
  {
    num: '03',
    title: 'تقديم الاستراتيجية',
    desc: 'عقد جلسة استشارية مكثفة لتقديم الحلول العملية وخطة العمل التنفيذية.',
  },
]

const benefits = [
  { icon: <CheckCircle2 className="w-5 h-5" />, title: 'سرية تامة للمعلومات', desc: 'نلتزم بأعلى معايير الخصوصية والمهنية في التعامل مع بياناتكم.' },
  { icon: <CheckCircle2 className="w-5 h-5" />, title: 'تحليل دقيق للاحتياجات', desc: 'نقوم بدراسة وضعكم الحالي لتقديم توصيات مخصصة وفعالة.' },
  { icon: <CheckCircle2 className="w-5 h-5" />, title: 'دعم فني واستشاري متواصل', desc: 'لا تنتهي علاقتنا بالاستشارة، بل نبقى شركاء في رحلة نجاحكم.' },
]

const faqs = [
  {
    q: 'كيف يتم الحفاظ على سرية البيانات؟',
    a: 'نلتزم بأعلى معايير الخصوصية والمهنية في التعامل مع جميع المعلومات والبيانات الخاصة بعملائنا.',
  },
  {
    q: 'ما هي القطاعات التي تتخصصون فيها؟',
    a: 'نتخصص في العقارات، الاستشارات الإدارية والمالية، إدارة المشاريع، البنية التحتية، والتسويق الاستراتيجي.',
  },
  {
    q: 'هل تقدمون استشارات للأفراد أم الشركات فقط؟',
    a: 'نخدم الشركات والمؤسسات بالدرجة الأولى، لكننا نقدم أيضًا خدمات استشارية للأفراد في القطاع العقاري والاستثماري.',
  },
]

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`border-b border-cream-darker last:border-0 ${open ? 'bg-cream/50 rounded-xl' : ''}`}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between p-5 text-right"
        id={`faq-${index}`}
        aria-expanded={open}
      >
        <span className="font-cairo font-bold text-charcoal text-sm leading-relaxed pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-5 text-charcoal-medium/65 font-tajawal text-sm leading-relaxed">{a}</p>
      </motion.div>
    </div>
  )
}

export default function ConsultationPage() {
  const [formStep, setFormStep] = useState(0)
  const [formData, setFormData] = useState({
    name: '', company: '', phone: '', email: '', position: '',
    service: '', companySize: '', description: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3d2e1a] via-[#584b3e] to-[#3a4a35]" />
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(187,146,91,0.8) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />
        </div>
        <div className="container-main relative z-10 pb-16 pt-36">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-5 text-white/60 text-sm font-cairo">
              <Link href="/" className="hover:text-white">الرئيسية</Link>
              <span>/</span>
              <span className="text-gold-light">احصل على استشارة</span>
            </div>
            <h1 className="font-cairo font-black text-white leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>
              احصل على استشارة متخصصة
              <br />
              <span className="text-gold-light">تدعم نجاح أعمالك</span>
            </h1>
            <p className="text-white/75 font-tajawal text-lg leading-relaxed max-w-lg">
              في مدار وافق، نحول التحديات إلى فرص استراتيجية. فريقنا من الخبراء جاهز
              لتزويدك بالحلول التي تضمن نمو واستدامة مؤسستك.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why choose section */}
      <section className="section-padding bg-cream">
        <div className="container-main">
          <AnimatedSection>
            <SectionHeader
              label="لماذا تختار استشارات مدار وآفاق"
              title="لماذا تختار استشارات مدار وافق؟"
              subtitle="نبني خارطة طريق عملية مدعومة بالبيانات والخبرة المحلية العميقة"
              centered={false}
            />
          </AnimatedSection>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { title: 'تحليل عميق', desc: 'دراسة دقيقة لوضع شركتكم الحالي وتحديد الفجوات والفرص الكامنة.' },
              { title: 'خبراء متخصصون', desc: 'الوصول إلى شبكة من المستشارين ذوي الخبرة الطويلة في مختلف القطاعات.' },
              { title: 'خطط استراتيجية', desc: 'تصميم استراتيجيات مخصصة تتماشى مع رؤية المملكة 2030.' },
              { title: 'نتائج ملموسة', desc: 'التركيز على تحقيق عوائد استثمارية واضحة ونمو مستدام.' },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="card text-center">
                  <div className="step-circle mx-auto mb-4">{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="font-cairo font-bold text-charcoal text-sm mb-2">{item.title}</h3>
                  <p className="text-charcoal-medium/60 font-tajawal text-xs leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Benefits */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Form - 3 cols */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right">
                <div className="bg-white rounded-3xl shadow-card-hover border border-cream-darker p-8">
                  {submitted ? (
                    <div className="text-center py-16">
                      <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-gold" />
                      </div>
                      <h3 className="font-cairo font-black text-2xl text-charcoal mb-3">
                        تم إرسال طلبك بنجاح!
                      </h3>
                      <p className="text-charcoal-medium/65 font-tajawal leading-relaxed">
                        سيتواصل معك فريقنا خلال 24 ساعة لتحديد موعد الاستشارة المناسب.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h3 className="font-cairo font-black text-charcoal text-xl mb-2">
                        دعنا نتعرف عليك
                      </h3>
                      <p className="text-charcoal-medium/60 font-tajawal text-sm mb-8">
                        المعلومات الشخصية • تفاصيل إضافية
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="form-label">الاسم الكامل</label>
                            <input
                              type="text"
                              className="form-input"
                              placeholder="مثال: محمد أحمد"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              id="form-name"
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
                              id="form-company"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="form-label">رقم الجوال</label>
                            <input
                              type="tel"
                              className="form-input"
                              placeholder="05XXXXXXXX"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              id="form-phone"
                              dir="ltr"
                              required
                            />
                          </div>
                          <div>
                            <label className="form-label">البريد الإلكتروني</label>
                            <input
                              type="email"
                              className="form-input"
                              placeholder="example@company.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              id="form-email"
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
                              id="form-service"
                              required
                            >
                              <option value="" disabled>اختر الخدمة...</option>
                              {services.map((s) => <option key={s} value={s}>{s}</option>)}
                            </select>
                            <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-medium/40 pointer-events-none" />
                          </div>
                        </div>

                        <div>
                          <label className="form-label">اكتب وصفًا موجزًا للتحديات التي تواجهها أو أهدافك</label>
                          <textarea
                            className="form-input min-h-[120px] resize-none"
                            placeholder="اكتب رسالتك هنا..."
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            id="form-description"
                          />
                        </div>

                        <button
                          type="submit"
                          className="btn-gold w-full justify-center py-4 text-base flex items-center gap-2"
                          id="form-submit"
                        >
                          <Send className="w-4 h-4" />
                          إرسال الطلب الآن
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </AnimatedSection>
            </div>

            {/* Benefits - 2 cols */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="left" delay={0.2}>
                <h3 className="font-cairo font-black text-charcoal text-xl mb-2">
                  احصل على استشارتك
                </h3>
                <p className="text-charcoal-medium/65 font-tajawal text-sm leading-relaxed mb-8">
                  فريقنا من المستشارين الخبراء جاهز لمناقشة تحديات أعمالكم وتقديم الحلول
                  التي تضمن ريادتكم في السوق السعودي والدولي.
                </p>

                <div className="space-y-5 mb-10">
                  {benefits.map((b, i) => (
                    <div key={b.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                        {b.icon}
                      </div>
                      <div>
                        <h4 className="font-cairo font-bold text-charcoal text-sm mb-1">{b.title}</h4>
                        <p className="text-charcoal-medium/60 font-tajawal text-sm">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="font-cairo font-black text-charcoal text-lg mb-6">
                  رحلتك نحو التميز
                </h3>
                <div className="space-y-4">
                  {steps.map((step) => (
                    <div key={step.num} className="flex items-start gap-4 p-4 bg-cream rounded-2xl">
                      <div className="step-circle !w-10 !h-10 text-sm flex-shrink-0">{step.num}</div>
                      <div>
                        <h4 className="font-cairo font-bold text-charcoal text-sm mb-1">{step.title}</h4>
                        <p className="text-charcoal-medium/60 font-tajawal text-xs leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-cream-dark">
        <div className="container-main max-w-3xl">
          <AnimatedSection>
            <SectionHeader
              label="أسئلة متكررة"
              title="الأسئلة الشائعة"
              subtitle="كل ما تحتاج لمعرفته حول خدماتنا الاستشارية"
            />
          </AnimatedSection>

          <AnimatedSection className="mt-10" delay={0.2}>
            <div className="bg-white rounded-3xl shadow-card overflow-hidden">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
