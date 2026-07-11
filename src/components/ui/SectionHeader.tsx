interface SectionLabelProps {
  text: string
  className?: string
  icon?: React.ReactNode
}

export function SectionLabel({ text, className = '', icon }: SectionLabelProps) {
  return (
    <div className={`section-label ${className}`}>
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </div>
  )
}

interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
  labelIcon?: React.ReactNode
}

export function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
  className = '',
  labelIcon,
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : 'text-right'} ${className}`}>
      {label && (
        <div className={`flex items-center gap-2 mb-3 ${centered ? 'justify-center' : 'justify-start'}`}>
          <SectionLabel text={label} icon={labelIcon} />
        </div>
      )}
      <h2 className="font-shahd font-bold text-charcoal leading-tight mb-4">{title}</h2>
      {subtitle && (
        <p className={`text-charcoal-medium/70 font-tajawal leading-relaxed ${
          centered ? 'max-w-2xl mx-auto' : 'max-w-xl'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
