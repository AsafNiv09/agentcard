'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [useCase, setUseCase] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    
    // TODO: Connect to your backend/Supabase/Tally
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[var(--foreground)] flex items-center justify-center">
              <span className="text-white text-sm font-bold">A</span>
            </div>
            <span className="font-semibold">AgentCard</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#features" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">Features</a>
            <a href="#how-it-works" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">How it works</a>
            <a href="#waitlist" className="px-4 py-2 bg-[var(--foreground)] text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
              Join Waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm ring-1 ring-[var(--border)] text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[var(--muted-foreground)]">Coming Soon</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
            A credit card for<br />
            <span className="text-[var(--muted-foreground)]">your AI agent.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-xl mx-auto mb-10">
            Give your agent a spending limit. No charge without your approval. 
            Stay in control while AI handles payments.
          </p>

          {/* CTA Button */}
          <a 
            href="#waitlist" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--foreground)] text-white rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Join the Waitlist
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Logo Cloud */}
      <section className="py-12 px-6 border-y border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-sm text-[var(--muted-foreground)] mb-8">
            Works with your favorite AI platforms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
            <LogoItem name="OpenAI" />
            <LogoItem name="Anthropic" />
            <LogoItem name="OpenClaw" />
            <LogoItem name="LangChain" />
            <LogoItem name="AutoGPT" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Everything you need to trust<br />your agent with money.
            </h2>
            <p className="text-[var(--muted-foreground)] text-lg">
              Simple, secure, and always under your control.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon="💳"
              title="Virtual Card"
              description="Issue a dedicated virtual card for your AI agent. Completely separate from your personal finances."
            />
            <FeatureCard
              icon="🔒"
              title="Spending Limits"
              description="Set daily, weekly, or monthly budgets. Your agent physically can't spend more than you allow."
            />
            <FeatureCard
              icon="✋"
              title="Approval Required"
              description="Every purchase needs your OK. Get a push notification, approve or deny with one tap."
            />
            <FeatureCard
              icon="👀"
              title="Full Visibility"
              description="Real-time transaction feed. See what your agent is buying, when, and from whom."
            />
            <FeatureCard
              icon="⚡"
              title="Instant Freeze"
              description="One tap to freeze the card. Immediately stop all transactions if something seems off."
            />
            <FeatureCard
              icon="📊"
              title="Analytics"
              description="Track spending patterns. Understand how your agent uses money over time."
            />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              How it works
            </h2>
            <p className="text-[var(--muted-foreground)] text-lg">
              Get started in minutes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Step number="1" title="Create a card" description="Generate a virtual card with your preferred spending limit." />
            <Step number="2" title="Connect your agent" description="Give your agent the card details via secure API." />
            <Step number="3" title="Approve purchases" description="Your agent requests, you approve. That simple." />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              What will your agent buy?
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <UseCase emoji="🍕" text="Order food and groceries" />
            <UseCase emoji="✈️" text="Book flights and hotels" />
            <UseCase emoji="🎫" text="Purchase event tickets" />
            <UseCase emoji="📦" text="Handle subscriptions" />
            <UseCase emoji="🛠️" text="Buy tools and APIs" />
            <UseCase emoji="🚗" text="Pay for rides and transport" />
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 px-6 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Get early access
          </h2>
          <p className="text-[var(--muted-foreground)] text-lg mb-8">
            Join the waitlist and be first to know when we launch.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 focus:outline-none text-base transition-all"
              />
              
              <textarea
                placeholder="What would you use AgentCard for? (optional)"
                value={useCase}
                onChange={(e) => setUseCase(e.target.value)}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 focus:outline-none text-base transition-all resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-[var(--foreground)] text-white rounded-full font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Joining...' : 'Join Waitlist →'}
              </button>
            </form>
          ) : (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100">
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-emerald-900">You&apos;re on the list!</p>
                  <p className="text-sm text-emerald-700">We&apos;ll notify you when AgentCard launches.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[var(--foreground)] flex items-center justify-center">
              <span className="text-white text-xs font-bold">A</span>
            </div>
            <span className="text-sm text-[var(--muted-foreground)]">© 2026 AgentCard</span>
          </div>
          <div className="flex gap-6 text-sm text-[var(--muted-foreground)]">
            <a href="https://twitter.com" className="hover:text-[var(--foreground)] transition-colors">Twitter</a>
            <a href="mailto:hello@agentcard.ai" className="hover:text-[var(--foreground)] transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  )
}

function LogoItem({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 text-[var(--foreground)]">
      <div className="w-6 h-6 rounded bg-[var(--muted)] flex items-center justify-center text-xs font-bold">
        {name[0]}
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="p-6 rounded-2xl bg-white shadow-lg shadow-[var(--foreground)]/5 ring-1 ring-[var(--border)]">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-[var(--muted-foreground)] leading-relaxed">{description}</p>
    </div>
  )
}

function Step({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 rounded-full bg-[var(--muted)] flex items-center justify-center mx-auto mb-4">
        <span className="text-lg font-semibold">{number}</span>
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-[var(--muted-foreground)]">{description}</p>
    </div>
  )
}

function UseCase({ emoji, text }: { emoji: string; text: string }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm ring-1 ring-[var(--border)]">
      <span className="text-2xl">{emoji}</span>
      <span className="font-medium">{text}</span>
    </div>
  )
}
