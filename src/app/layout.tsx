import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from 'next-themes'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'
import { SITE_NAME, SITE_URL, SITE_TAGLINE, SITE_DESCRIPTION, WA_NUMBER } from '@/lib/site'

const plusJakartaSans = localFont({
  src: [
    {
      path: '../../public/Font/PlusJakartaSans-VariableFont_wght.ttf',
      style: 'normal',
    },
    {
      path: '../../public/Font/PlusJakartaSans-Italic-VariableFont_wght.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
})


export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'lpk nippon mandiri',
    'kerja ke jepang',
    'kerja ke jepang mandiri',
    'tokutei ginou',
    'specified skilled worker',
    'visa ssw',
    'jft basic',
    'jlpt n4',
    'kaigo',
    'sektor tokutei ginou',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'Education & Career',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/5.webp`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/5.webp`],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: '/icon.webp',
    apple: '/icon.webp',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0d0d0d' },
  ],
}

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EducationalOrganization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      telephone: `+${WA_NUMBER}`,
      logo: `${SITE_URL}/icon.webp`,
      image: `${SITE_URL}/5.webp`,
      areaServed: 'ID',
      sameAs: [`https://wa.me/${WA_NUMBER}`],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: 'id-ID',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={plusJakartaSans.variable} suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${plusJakartaSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}