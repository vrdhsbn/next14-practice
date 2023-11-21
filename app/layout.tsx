import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next.js 14 Server Actions Demo',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja'>
      <body>{children}</body>
    </html>
  )
}
