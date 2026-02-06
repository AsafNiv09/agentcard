'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronRight, CreditCard, Shield, Eye, Zap, Lock, BarChart3 } from 'lucide-react'
import { useState } from 'react'

// Logo SVGs for AI platforms
const OpenAILogo = () => (
  <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
  </svg>
)

const AnthropicLogo = () => (
  <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.604 3.226h-3.834L19.2 20.774h3.834L17.604 3.226zM7.533 3.226L.966 20.774h3.919l1.335-3.627h6.628l1.336 3.627h3.919L11.536 3.226H7.533zm.756 11.018l2.254-6.121 2.254 6.121H8.289z"/>
  </svg>
)

const OpenClawLogo = () => (
  <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const LangChainLogo = () => (
  <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
)

const AutoGPTLogo = () => (
  <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
    <path d="M12 6a1 1 0 0 0-1 1v5a1 1 0 0 0 .5.87l4 2.5a1 1 0 0 0 1-1.74L13 11.5V7a1 1 0 0 0-1-1z"/>
  </svg>
)

export default function Home() {
  const [email, setEmail] = useState('')
  const [useCase, setUseCase] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-full bg-foreground">
              <CreditCard className="size-4 text-background" />
            </div>
            <span className="font-semibold">AgentCard</span>
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            <Link href="#features" className="text-muted-foreground text-sm hover:text-foreground">Features</Link>
            <Link href="#how-it-works" className="text-muted-foreground text-sm hover:text-foreground">How it works</Link>
            <Button asChild size="sm">
              <Link href="#waitlist">Join Waitlist</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="bg-background">
          <div className="relative py-32 md:pt-44">
            <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
              <div className="mx-auto max-w-xl text-center">
                {/* Badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm shadow-sm">
                  <span className="size-2 animate-pulse rounded-full bg-emerald-500" />
                  <span className="text-muted-foreground">Coming Soon</span>
                </div>
                
                <h1 className="text-balance font-serif text-4xl font-medium sm:text-5xl md:text-6xl">
                  A credit card for your <span className="text-muted-foreground">AI agent.</span>
                </h1>
                <p className="text-muted-foreground mt-6 text-balance text-lg">
                  Give your agent a spending limit. No charge without your approval. Stay in control while AI handles payments.
                </p>

                <Button asChild className="mt-8 pr-1.5" size="lg">
                  <Link href="#waitlist">
                    <span className="text-nowrap">Join the Waitlist</span>
                    <ChevronRight className="opacity-50" />
                  </Link>
                </Button>
              </div>
              
              {/* Logo Cloud */}
              <div className="mx-auto mt-20 max-w-xl">
                <p className="mb-6 text-center text-sm text-muted-foreground">Works with your favorite AI platforms</p>
                <div className="**:fill-foreground grid scale-95 grid-cols-3 gap-8 md:grid-cols-5">
                  <Card className="shadow-foreground/10 flex h-10 w-fit items-center gap-2 rounded-xl px-4 mx-auto">
                    <OpenAILogo />
                    <span className="text-nowrap font-medium text-xs">OpenAI</span>
                  </Card>
                  <Card className="shadow-foreground/10 flex h-10 w-fit items-center gap-2 rounded-xl px-4 mx-auto">
                    <AnthropicLogo />
                    <span className="text-nowrap font-medium text-xs">Anthropic</span>
                  </Card>
                  <Card className="shadow-foreground/10 flex h-10 w-fit items-center gap-2 rounded-xl px-4 mx-auto">
                    <OpenClawLogo />
                    <span className="text-nowrap font-medium text-xs">OpenClaw</span>
                  </Card>
                  <Card className="shadow-foreground/10 flex h-10 w-fit items-center gap-2 rounded-xl px-4 mx-auto blur-[1px]">
                    <LangChainLogo />
                    <span className="text-nowrap font-medium text-xs">LangChain</span>
                  </Card>
                  <Card className="shadow-foreground/10 flex h-10 w-fit items-center gap-2 rounded-xl px-4 mx-auto blur-[1px]">
                    <AutoGPTLogo />
                    <span className="text-nowrap font-medium text-xs">AutoGPT</span>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-background py-24">
          <div className="mx-auto max-w-2xl px-6">
            <div>
              <h2 className="text-balance font-serif text-3xl font-medium md:text-4xl">Everything you need to trust your agent with money.</h2>
              <p className="text-muted-foreground mt-4 text-balance">Simple, secure, and always under your control.</p>
            </div>
            <div className="mt-12 grid gap-3 md:grid-cols-2 *:p-6">
              <Card variant="outline" className="row-span-2 grid grid-rows-subgrid">
                <div className="space-y-2">
                  <h3 className="text-foreground font-medium">Virtual Card</h3>
                  <p className="text-muted-foreground text-sm">Issue a dedicated virtual card for your AI agent. Completely separate from your personal finances.</p>
                </div>
                <div aria-hidden className="flex h-44 items-center justify-center">
                  <CreditCard className="size-24 stroke-[0.5px] opacity-20" />
                </div>
              </Card>
              <Card variant="outline" className="row-span-2 grid grid-rows-subgrid">
                <div className="space-y-2">
                  <h3 className="text-foreground font-medium">Spending Limits</h3>
                  <p className="text-muted-foreground text-sm">Set daily, weekly, or monthly budgets. Your agent physically can't spend more than you allow.</p>
                </div>
                <div aria-hidden className="flex h-44 items-center justify-center">
                  <Lock className="size-24 stroke-[0.5px] opacity-20" />
                </div>
              </Card>
              <Card variant="outline" className="row-span-2 grid grid-rows-subgrid">
                <div className="space-y-2">
                  <h3 className="text-foreground font-medium">Approval Required</h3>
                  <p className="text-muted-foreground text-sm">Every purchase needs your OK. Get a push notification, approve or deny with one tap.</p>
                </div>
                <div aria-hidden className="flex h-44 items-center justify-center">
                  <Shield className="size-24 stroke-[0.5px] opacity-20" />
                </div>
              </Card>
              <Card variant="outline" className="row-span-2 grid grid-rows-subgrid">
                <div className="space-y-2">
                  <h3 className="font-medium">Full Visibility</h3>
                  <p className="text-muted-foreground text-sm">Real-time transaction feed. See what your agent is buying, when, and from whom.</p>
                </div>
                <div aria-hidden className="flex h-44 items-center justify-center">
                  <Eye className="size-24 stroke-[0.5px] opacity-20" />
                </div>
              </Card>
              <Card variant="outline" className="row-span-2 grid grid-rows-subgrid">
                <div className="space-y-2">
                  <h3 className="font-medium">Instant Freeze</h3>
                  <p className="text-muted-foreground text-sm">One tap to freeze the card. Immediately stop all transactions if something seems off.</p>
                </div>
                <div aria-hidden className="flex h-44 items-center justify-center">
                  <Zap className="size-24 stroke-[0.5px] opacity-20" />
                </div>
              </Card>
              <Card variant="outline" className="row-span-2 grid grid-rows-subgrid">
                <div className="space-y-2">
                  <h3 className="font-medium">Analytics</h3>
                  <p className="text-muted-foreground text-sm">Track spending patterns. Understand how your agent uses money over time.</p>
                </div>
                <div aria-hidden className="flex h-44 items-center justify-center">
                  <BarChart3 className="size-24 stroke-[0.5px] opacity-20" />
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section id="how-it-works" className="bg-card py-24">
          <div className="mx-auto max-w-2xl px-6">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-medium md:text-4xl">How it works</h2>
              <p className="text-muted-foreground mt-4">Get started in minutes.</p>
            </div>
            <div className="mt-16 grid gap-12 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-muted">
                  <span className="text-lg font-semibold">1</span>
                </div>
                <h3 className="font-medium">Create a card</h3>
                <p className="text-muted-foreground mt-2 text-sm">Generate a virtual card with your preferred spending limit.</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-muted">
                  <span className="text-lg font-semibold">2</span>
                </div>
                <h3 className="font-medium">Connect your agent</h3>
                <p className="text-muted-foreground mt-2 text-sm">Give your agent the card details via secure API.</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-muted">
                  <span className="text-lg font-semibold">3</span>
                </div>
                <h3 className="font-medium">Approve purchases</h3>
                <p className="text-muted-foreground mt-2 text-sm">Your agent requests, you approve. That simple.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-background py-24">
          <div className="mx-auto max-w-2xl px-6">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-medium md:text-4xl">What will your agent buy?</h2>
            </div>
            <div className="mt-12 grid gap-3 sm:grid-cols-2">
              {[
                { emoji: '🍕', text: 'Order food and groceries' },
                { emoji: '✈️', text: 'Book flights and hotels' },
                { emoji: '🎫', text: 'Purchase event tickets' },
                { emoji: '📦', text: 'Handle subscriptions' },
                { emoji: '🛠️', text: 'Buy tools and APIs' },
                { emoji: '🚗', text: 'Pay for rides and transport' },
              ].map((item, i) => (
                <Card key={i} variant="outline" className="flex items-center gap-4 p-4">
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="font-medium">{item.text}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section id="waitlist" className="bg-card py-24">
          <div className="mx-auto max-w-md px-6 text-center">
            <h2 className="font-serif text-3xl font-medium md:text-4xl">Get early access</h2>
            <p className="text-muted-foreground mt-4">Join the waitlist and be first to know when we launch.</p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl border bg-background px-4 py-3 text-base outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                
                <textarea
                  placeholder="What would you use AgentCard for? (optional)"
                  value={useCase}
                  onChange={(e) => setUseCase(e.target.value)}
                  rows={3}
                  className="w-full resize-none rounded-xl border bg-background px-4 py-3 text-base outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />

                <Button type="submit" disabled={loading} className="w-full" size="lg">
                  {loading ? 'Joining...' : 'Join Waitlist →'}
                </Button>
              </form>
            ) : (
              <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
                <div className="flex items-center justify-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-full bg-emerald-100">
                    <svg className="size-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      </main>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex size-6 items-center justify-center rounded-full bg-foreground">
              <CreditCard className="size-3 text-background" />
            </div>
            <span className="text-muted-foreground text-sm">© 2026 AgentCard</span>
          </div>
          <div className="text-muted-foreground flex gap-6 text-sm">
            <a href="https://twitter.com" className="hover:text-foreground">Twitter</a>
            <a href="mailto:hello@agentcard.ai" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </>
  )
}
