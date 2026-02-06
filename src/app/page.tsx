'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { HeroHeader } from '@/components/header'
import { Logo } from '@/components/logo'
import { ChevronRight, CreditCard, Shield, Eye, Zap, Lock, BarChart3 } from 'lucide-react'

// Custom SVG logos for AI platforms
const OpenAIIcon = () => (
  <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
  </svg>
)

const AnthropicIcon = () => (
  <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.604 3.226h-3.834L19.2 20.774h3.834L17.604 3.226zM7.533 3.226L.966 20.774h3.919l1.335-3.627h6.628l1.336 3.627h3.919L11.536 3.226H7.533zm.756 11.018l2.254-6.121 2.254 6.121H8.289z"/>
  </svg>
)

const OpenClawIcon = () => (
  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="9"/>
    <path d="M8 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const LangChainIcon = () => (
  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>
)

const AutoGPTIcon = () => (
  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2"/>
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
      {/* Header - Using Veil Header */}
      <HeroHeader />
      
      <main className="overflow-hidden">
        {/* Hero Section - Veil Style */}
        <section className="bg-background">
          <div className="relative py-32 md:pt-44">
            {/* Background Image with Mask */}
            <div className="mask-radial-from-45% mask-radial-to-75% mask-radial-at-top mask-radial-[75%_100%] mask-t-from-50% lg:aspect-9/4 absolute inset-0 aspect-square lg:top-24 dark:opacity-5">
              <Image
                src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2271&auto=format&fit=crop"
                alt="hero background"
                width={2268}
                height={1740}
                className="size-full object-cover object-top"
              />
            </div>
            
            <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
              <div className="mx-auto max-w-md text-center">
                {/* Badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm shadow-sm">
                  <span className="size-2 animate-pulse rounded-full bg-emerald-500" />
                  <span className="text-muted-foreground">Coming Soon</span>
                </div>
                
                <h1 className="text-balance font-serif text-4xl font-medium sm:text-5xl">
                  A credit card for your AI agent.
                </h1>
                <p className="text-muted-foreground mt-4 text-balance">
                  Give your agent a spending limit. No charge without your approval. Stay in control.
                </p>

                <Button asChild className="mt-6 pr-1.5">
                  <Link href="#waitlist">
                    <span className="text-nowrap">Join the Waitlist</span>
                    <ChevronRight className="opacity-50" />
                  </Link>
                </Button>
              </div>
              
              {/* Logo Cloud - Veil Style */}
              <div className="mx-auto mt-24 max-w-xl">
                <div className="**:fill-foreground grid scale-95 grid-cols-3 gap-12">
                  <div className="ml-auto blur-[2px]">
                    <Card className="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                      <OpenAIIcon />
                      <span className="text-nowrap font-medium max-sm:text-xs">OpenAI</span>
                    </Card>
                  </div>
                  <div className="ml-auto">
                    <Card className="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                      <AnthropicIcon />
                      <span className="text-nowrap font-medium max-sm:text-xs">Anthropic</span>
                    </Card>
                  </div>
                  <div className="ml-auto blur-[2px]">
                    <Card className="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                      <OpenClawIcon />
                      <span className="text-nowrap font-medium max-sm:text-xs">OpenClaw</span>
                    </Card>
                  </div>
                  <div className="mr-auto">
                    <Card className="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                      <LangChainIcon />
                      <span className="text-nowrap font-medium max-sm:text-xs">LangChain</span>
                    </Card>
                  </div>
                  <div className="blur-[2px]">
                    <Card className="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                      <AutoGPTIcon />
                      <span className="text-nowrap font-medium max-sm:text-xs">AutoGPT</span>
                    </Card>
                  </div>
                  <div>
                    <Card className="shadow-foreground/10 mx-a flex h-10 h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                      <CreditCard className="size-3 sm:size-4" />
                      <span className="text-nowrap font-medium max-sm:text-xs">Any Agent</span>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Veil Style */}
        <section className="bg-background @container py-24">
          <div className="mx-auto max-w-2xl px-6">
            <div>
              <h2 className="text-balance font-serif text-4xl font-medium">Everything you need to trust your agent with money.</h2>
              <p className="text-muted-foreground mt-4 text-balance">Simple, secure, and always under your control.</p>
            </div>
            <div className="@xl:grid-cols-2 mt-12 grid gap-3 *:p-6">
              <Card variant="outline" className="row-span-2 grid grid-rows-subgrid">
                <div className="space-y-2">
                  <h3 className="text-foreground font-medium">Virtual Card</h3>
                  <p className="text-muted-foreground text-sm">Issue a dedicated virtual card for your AI agent. Completely separate from your personal finances.</p>
                </div>
                <div aria-hidden className="flex h-44 flex-col justify-center items-center">
                  <CreditCard className="size-20 stroke-[0.5px] opacity-15" />
                </div>
              </Card>
              <Card variant="outline" className="row-span-2 grid grid-rows-subgrid">
                <div className="space-y-2">
                  <h3 className="text-foreground font-medium">Spending Limits</h3>
                  <p className="text-muted-foreground text-sm">Set daily, weekly, or monthly budgets. Your agent physically can't spend more than you allow.</p>
                </div>
                <div aria-hidden className="flex h-44 flex-col justify-center items-center">
                  <Lock className="size-20 stroke-[0.5px] opacity-15" />
                </div>
              </Card>
              <Card variant="outline" className="row-span-2 grid grid-rows-subgrid overflow-hidden">
                <div className="space-y-2">
                  <h3 className="text-foreground font-medium">Approval Required</h3>
                  <p className="text-muted-foreground text-sm">Every purchase needs your OK. Get a push notification, approve or deny with one tap.</p>
                </div>
                <div aria-hidden className="relative h-44 flex items-center justify-center">
                  <Shield className="size-20 stroke-[0.5px] opacity-15" />
                </div>
              </Card>
              <Card variant="outline" className="row-span-2 grid grid-rows-subgrid">
                <div className="space-y-2">
                  <h3 className="font-medium">Full Visibility</h3>
                  <p className="text-muted-foreground text-sm">Real-time transaction feed. See what your agent is buying, when, and from whom.</p>
                </div>
                <div className="pointer-events-none relative flex h-44 items-center justify-center">
                  <Eye className="size-20 stroke-[0.5px] opacity-15" />
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action - Veil Style */}
        <section id="waitlist" className="bg-background @container py-24">
          <div className="mx-auto max-w-2xl px-6">
            <div className="text-center">
              <h2 className="text-balance font-serif text-4xl font-medium">Get Early Access</h2>
              <p className="text-muted-foreground mx-auto mt-4 max-w-md text-balance">Join the waitlist and be first to know when AgentCard launches.</p>
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-sm space-y-4">
                  <input
                    type="email"
                    placeholder="you@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-input bg-card focus:border-ring focus:ring-ring/15 w-full rounded-xl border px-4 py-3 text-base outline-none focus:ring-[3px]"
                  />
                  
                  <textarea
                    placeholder="What would you use AgentCard for? (optional)"
                    value={useCase}
                    onChange={(e) => setUseCase(e.target.value)}
                    rows={3}
                    className="border-input bg-card focus:border-ring focus:ring-ring/15 w-full resize-none rounded-xl border px-4 py-3 text-base outline-none focus:ring-[3px]"
                  />

                  <Button type="submit" disabled={loading} className="w-full pr-1.5">
                    <span>{loading ? 'Joining...' : 'Join Waitlist'}</span>
                    {!loading && <ChevronRight className="opacity-50" />}
                  </Button>
                </form>
              ) : (
                <div className="mx-auto mt-8 max-w-sm">
                  <Card variant="soft" className="p-6">
                    <div className="flex items-center justify-center gap-3">
                      <div className="flex size-12 items-center justify-center rounded-full bg-emerald-100">
                        <svg className="size-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="font-semibold">You&apos;re on the list!</p>
                        <p className="text-muted-foreground text-sm">We&apos;ll notify you when we launch.</p>
                      </div>
                    </div>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Veil Style */}
      <footer className="bg-background @container border-t py-12">
        <div className="mx-auto max-w-2xl px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-full bg-foreground">
                <CreditCard className="size-4 text-background" />
              </div>
              <span className="font-semibold">AgentCard</span>
            </Link>
            <p className="text-muted-foreground max-w-xs text-sm">
              A credit card for your AI agent. Control spending, approve purchases, stay in control.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 border-t pt-8">
            <p className="text-muted-foreground text-sm">&copy; 2026 AgentCard. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="https://twitter.com" className="text-muted-foreground hover:text-foreground text-sm">Twitter</a>
              <a href="mailto:hello@agentcard.ai" className="text-muted-foreground hover:text-foreground text-sm">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
