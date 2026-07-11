'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'الرئيسية' },
  { href: '/about', label: 'عن الشركة' },
  { href: '/services', label: 'خدماتنا' },
  { href: '/contact', label: 'تواصل معنا' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  // Home page has cream background so navbar should always be light
  const isHomePage = pathname === '/'
  const isTransparentPage = ['/about', '/services', '/consultation'].includes(pathname)

  const navBg = isScrolled || mobileOpen
    ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-cream-darker'
    : isHomePage
    ? 'bg-transparent'
    : isTransparentPage
    ? 'bg-transparent'
    : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-cream-darker'

  const linkColor = isScrolled || mobileOpen || isHomePage || !isTransparentPage
    ? 'text-charcoal hover:text-gold'
    : 'text-white/90 hover:text-white'

  return (
    <>
      <header className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="container-main">
          <nav className="flex items-center justify-between h-20 gap-4">

            {/* Logo PNG - Right side (First in RTL JSX) */}
            <Link href="/" className="flex items-center flex-shrink-0" id="nav-logo">
              <Image
                src="/logo/logo.png"
                alt="شعار مدار وآفاق"
                width={52}
                height={52}
                className="object-contain"
                priority
              />
            </Link>

            {/* Nav Links - Center */}
            <ul className="hidden lg:flex items-center gap-8 list-none flex-1 justify-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-link text-sm font-cairo font-medium transition-colors ${linkColor} ${
                      pathname === link.href ? '!text-gold' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Button - Left side (Last in RTL JSX) */}
            <Link
              href="/consultation"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-cairo font-bold text-white text-sm transition-all hover:opacity-90"
              style={{ background: '#bb925b' }}
              id="nav-cta-consultation"
            >
              اطلب استشارة
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled || mobileOpen || isHomePage || !isTransparentPage
                  ? 'text-charcoal'
                  : 'text-white'
              }`}
              aria-label="قائمة التنقل"
              id="nav-mobile-toggle"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white border-t border-cream-darker px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 px-2 font-cairo text-sm rounded-lg transition-colors border-b border-cream-darker last:border-0 ${
                  pathname === link.href
                    ? 'text-gold font-bold'
                    : 'text-charcoal hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/consultation"
              className="mt-3 flex items-center justify-center py-3 px-5 rounded-lg font-cairo font-bold text-white text-sm"
              style={{ background: '#bb925b' }}
              id="nav-mobile-cta"
            >
              اطلب استشارة
            </Link>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  )
}
