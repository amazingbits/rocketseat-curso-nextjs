import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    template: '%s | devstore',
    default: 'devstore',
  },
  description:
    'Curso da Rocketseat com fundamentos e execução do NextJS 13, com a adição do Next App Router.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-zinc-950 text-zinc-50 antialised">{children}</body>
    </html>
  )
}
