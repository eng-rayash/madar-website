'use client'

import { motion } from 'framer-motion'
import { Building2, Handshake, Brain, Clock } from 'lucide-react'

const stats = [
  {
    icon: <Building2 className="w-5 h-5 text-[#9a7645]" />,
    label: 'هيكلة محترفة',
  },
  {
    icon: <Handshake className="w-5 h-5 text-[#9a7645]" />,
    label: 'علاقات قوية',
  },
  {
    icon: <Brain className="w-5 h-5 text-[#9a7645]" />,
    label: 'عقول شابة',
  },
  {
    icon: <Clock className="w-5 h-5 text-[#9a7645]" />,
    label: 'سرعة الاستجابة',
  },
]

export default function StatsBar() {
  return (
    <section className="bg-white border-y border-cream-darker py-8 shadow-sm">
      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-items-center">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center gap-3 px-4"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#9a7645]/10 flex-shrink-0">
                {item.icon}
              </div>
              <p className="font-tajawal font-bold text-sm md:text-base text-charcoal">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
