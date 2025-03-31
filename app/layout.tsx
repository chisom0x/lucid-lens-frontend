import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lucid Lens',
  description: 'Interpret your dreams with AI',
  generator: 'kelvin',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
