import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'The Colour Motion | Website Flash Deal - 100,000 FCFA',
  description: 'Get your professional business website for only 100,000 FCFA instead of 250,000 FCFA. Modern, responsive and premium web design by The Colour Motion.',
  keywords: ['web design', 'website', 'business website', 'Cameroon', 'affordable website', 'professional website'],
  openGraph: {
    title: 'The Colour Motion | Website Flash Deal',
    description: 'Professional websites starting at 100,000 FCFA. Limited time offer.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#030303',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
