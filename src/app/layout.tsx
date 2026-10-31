import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'مدار وآفاق المحدودة | حلول متكاملة للعقارات والاستشارات',
    template: '%s | مدار وآفاق المحدودة',
  },
  description:
    'شركة سعودية رائدة متخصصة في قطاعات العقارات، الاستشارات الإدارية، إدارة المشاريع، والبنية التحتية.',
  keywords: ['مدار وآفاق', 'استشارات إدارية', 'استشارات عقارية', 'رؤية 2030'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo/logo.png" type="image/png" />
      </head>
      <body className="font-tajawal antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7CXGL22KYY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7CXGL22KYY');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
