import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AgentCard - A Credit Card for Your AI Agent',
  description: 'Give your AI agent a spending limit. Stay in control with approval-based payments.',
  openGraph: {
    title: 'AgentCard - A Credit Card for Your AI Agent',
    description: 'Give your AI agent a spending limit. Stay in control with approval-based payments.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AgentCard - A Credit Card for Your AI Agent',
    description: 'Give your AI agent a spending limit. Stay in control with approval-based payments.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
