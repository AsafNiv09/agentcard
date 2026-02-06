'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [useCase, setUseCase] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // TODO: Connect to your backend/Supabase/Tally
    // For now, just simulate success
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-24 md:py-32 max-w-3xl mx-auto">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Coming Soon
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
            A credit card for your{' '}
            <span className="text-gray-400">AI agent</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-2xl">
            Give your agent a spending limit. No charge without your approval. 
            Stay in control while your AI handles payments.
          </p>

          {/* Form or Success */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-0 focus:outline-none text-base transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {loading ? 'Joining...' : 'Join Waitlist'}
                </button>
              </div>
              
              <textarea
                placeholder="What would you use it for? (optional)"
                value={useCase}
                onChange={(e) => setUseCase(e.target.value)}
                rows={2}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-0 focus:outline-none text-base transition-colors resize-none"
              />
            </form>
          ) : (
            <div className="pt-4 p-6 rounded-xl bg-emerald-50 border border-emerald-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-emerald-900">You&apos;re on the list!</p>
                  <p className="text-sm text-emerald-700">We&apos;ll notify you when AgentCard launches.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-8">
            How it works
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <Feature
              icon="💳"
              title="Virtual card for your agent"
              description="Issue a dedicated card your AI agent can use. Separate from your personal finances."
            />
            <Feature
              icon="🔒"
              title="Spending limits"
              description="Set a monthly budget. Your agent can't spend more than you allow."
            />
            <Feature
              icon="✋"
              title="Approval required"
              description="Every purchase needs your OK. Get a notification, approve or deny in one tap."
            />
            <Feature
              icon="👀"
              title="Full visibility"
              description="See exactly what your agent is buying, when, and from whom. Complete transaction history."
            />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-8">
            Use cases
          </h2>
          
          <div className="space-y-4">
            <UseCase text="Let your agent book restaurants and order food" />
            <UseCase text="Automate subscription payments and renewals" />
            <UseCase text="Enable your agent to purchase tools and APIs it needs" />
            <UseCase text="Handle travel bookings and tickets" />
            <UseCase text="Pay for services on your behalf" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 AgentCard
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="https://twitter.com" className="hover:text-gray-600 transition-colors">
              Twitter
            </a>
            <a href="mailto:hello@agentcard.ai" className="hover:text-gray-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

function Feature({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="space-y-2">
      <div className="text-2xl">{icon}</div>
      <h3 className="font-medium text-gray-900">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{description}</p>
    </div>
  )
}

function UseCase({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100">
      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-gray-700">{text}</span>
    </div>
  )
}
