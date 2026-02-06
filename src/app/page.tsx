'use client'

import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { HeroHeader } from '@/components/header'
import { Logo } from '@/components/logo'
import { ChevronRight, CreditCard, Shield, Eye, Lock } from 'lucide-react'
import { OpenAI } from '@/components/ui/svgs/openai'
import { Anthropic } from '@/components/ui/svgs/anthropic'
import { LangChain } from '@/components/ui/svgs/langchain'
import { AutoGPT } from '@/components/ui/svgs/autogpt'
import { CrewAI } from '@/components/ui/svgs/crewai'
import { OpenClaw } from '@/components/ui/svgs/openclaw'
import { Claude } from '@/components/ui/svgs/claude'
import { Stripe } from '@/components/ui/svgs/stripe'
import { Vercel } from '@/components/ui/svgs/vercel'

export default function HeroSection() {
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
            <HeroHeader />
            <main className="overflow-hidden">
                {/* Hero Section */}
                <section className="bg-background">
                    <div className="relative py-32 md:pt-44">
                        {/* Gradient background instead of broken image */}
                        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card opacity-50" />
                        
                        <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
                            <div className="mx-auto max-w-md text-center">
                                <h1 className="text-balance font-serif text-4xl font-medium sm:text-5xl">A credit card for your AI agent.</h1>
                                <p className="text-muted-foreground mt-4 text-balance">Give your agent a spending limit. No charge without your approval. Stay in control.</p>

                                <Button
                                    asChild
                                    className="mt-6 pr-1.5">
                                    <Link href="#waitlist">
                                        <span className="text-nowrap">Join the Waitlist</span>
                                        <ChevronRight className="opacity-50" />
                                    </Link>
                                </Button>
                            </div>
                            
                            {/* Logo Cloud */}
                            <div className="mx-auto mt-20 max-w-xl">
                                <div className="grid grid-cols-3 gap-4 sm:gap-6">
                                    <Card className="flex h-10 items-center justify-center gap-2 rounded-xl px-3 shadow-sm opacity-60 sm:h-12 sm:px-4">
                                        <OpenAI className="size-4 fill-foreground" />
                                        <span className="text-nowrap font-medium text-xs sm:text-sm">OpenAI</span>
                                    </Card>
                                    <Card className="flex h-10 items-center justify-center gap-2 rounded-xl px-3 shadow-sm sm:h-12 sm:px-4">
                                        <Claude className="size-4 fill-foreground" />
                                        <span className="text-nowrap font-medium text-xs sm:text-sm">Claude</span>
                                    </Card>
                                    <Card className="flex h-10 items-center justify-center gap-2 rounded-xl px-3 shadow-sm opacity-60 sm:h-12 sm:px-4">
                                        <OpenClaw className="size-4 text-foreground" />
                                        <span className="text-nowrap font-medium text-xs sm:text-sm">OpenClaw</span>
                                    </Card>
                                    <Card className="flex h-10 items-center justify-center gap-2 rounded-xl px-3 shadow-sm sm:h-12 sm:px-4">
                                        <LangChain className="size-4 text-foreground" />
                                        <span className="text-nowrap font-medium text-xs sm:text-sm">LangChain</span>
                                    </Card>
                                    <Card className="flex h-10 items-center justify-center gap-2 rounded-xl px-3 shadow-sm opacity-60 sm:h-12 sm:px-4">
                                        <AutoGPT className="size-4 text-foreground" />
                                        <span className="text-nowrap font-medium text-xs sm:text-sm">AutoGPT</span>
                                    </Card>
                                    <Card className="flex h-10 items-center justify-center gap-2 rounded-xl px-3 shadow-sm sm:h-12 sm:px-4">
                                        <CrewAI className="size-4 text-foreground" />
                                        <span className="text-nowrap font-medium text-xs sm:text-sm">CrewAI</span>
                                    </Card>
                                    <Card className="flex h-10 items-center justify-center gap-2 rounded-xl px-3 shadow-sm opacity-60 sm:h-12 sm:px-4">
                                        <Stripe className="size-4 fill-foreground" />
                                        <span className="text-nowrap font-medium text-xs sm:text-sm">Stripe</span>
                                    </Card>
                                    <Card className="flex h-10 items-center justify-center gap-2 rounded-xl px-3 shadow-sm sm:h-12 sm:px-4">
                                        <Anthropic className="size-4 fill-foreground" />
                                        <span className="text-nowrap font-medium text-xs sm:text-sm">Anthropic</span>
                                    </Card>
                                    <Card className="flex h-10 items-center justify-center gap-2 rounded-xl px-3 shadow-sm opacity-60 sm:h-12 sm:px-4">
                                        <Vercel className="size-4 fill-foreground" />
                                        <span className="text-nowrap font-medium text-xs sm:text-sm">Vercel</span>
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
                            <h2 className="text-balance font-serif text-3xl font-medium sm:text-4xl">Everything you need to trust your agent with money.</h2>
                            <p className="text-muted-foreground mt-4 text-balance">Simple, secure, and always under your control.</p>
                        </div>
                        <div className="mt-12 grid gap-4 sm:grid-cols-2">
                            <Card className="p-6 border rounded-2xl">
                                <div className="space-y-2">
                                    <h3 className="text-foreground font-medium">Virtual Card</h3>
                                    <p className="text-muted-foreground text-sm">Issue a dedicated virtual card for your AI agent. Completely separate from your personal finances.</p>
                                </div>
                                <div className="flex h-32 items-center justify-center mt-4">
                                    <CreditCard className="size-16 stroke-[0.75px] text-muted-foreground/30" />
                                </div>
                            </Card>
                            <Card className="p-6 border rounded-2xl">
                                <div className="space-y-2">
                                    <h3 className="text-foreground font-medium">Spending Limits</h3>
                                    <p className="text-muted-foreground text-sm">Set daily, weekly, or monthly budgets. Your agent physically can&apos;t spend more than you allow.</p>
                                </div>
                                <div className="flex h-32 items-center justify-center mt-4">
                                    <Lock className="size-16 stroke-[0.75px] text-muted-foreground/30" />
                                </div>
                            </Card>
                            <Card className="p-6 border rounded-2xl">
                                <div className="space-y-2">
                                    <h3 className="text-foreground font-medium">Approval Required</h3>
                                    <p className="text-muted-foreground text-sm">Every purchase needs your OK. Get a push notification, approve or deny with one tap.</p>
                                </div>
                                <div className="flex h-32 items-center justify-center mt-4">
                                    <Shield className="size-16 stroke-[0.75px] text-muted-foreground/30" />
                                </div>
                            </Card>
                            <Card className="p-6 border rounded-2xl">
                                <div className="space-y-2">
                                    <h3 className="font-medium">Full Visibility</h3>
                                    <p className="text-muted-foreground text-sm">Real-time transaction feed. See what your agent is buying, when, and from whom.</p>
                                </div>
                                <div className="flex h-32 items-center justify-center mt-4">
                                    <Eye className="size-16 stroke-[0.75px] text-muted-foreground/30" />
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section id="waitlist" className="bg-card py-24">
                    <div className="mx-auto max-w-2xl px-6">
                        <div className="text-center">
                            <h2 className="text-balance font-serif text-3xl font-medium sm:text-4xl">Get Early Access</h2>
                            <p className="text-muted-foreground mx-auto mt-4 max-w-md text-balance">Join the waitlist and be first to know when AgentCard launches.</p>
                            
                            {!submitted ? (
                                <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-sm space-y-4">
                                    <input
                                        type="email"
                                        placeholder="you@email.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-base outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                                    />
                                    
                                    <textarea
                                        placeholder="What would you use AgentCard for? (optional)"
                                        value={useCase}
                                        onChange={(e) => setUseCase(e.target.value)}
                                        rows={3}
                                        className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-base outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                                    />

                                    <Button type="submit" disabled={loading} className="w-full pr-1.5">
                                        <span>{loading ? 'Joining...' : 'Join Waitlist'}</span>
                                        {!loading && <ChevronRight className="opacity-50" />}
                                    </Button>
                                </form>
                            ) : (
                                <div className="mx-auto mt-8 max-w-sm">
                                    <Card className="p-6 bg-emerald-50 border-emerald-200">
                                        <div className="flex items-center justify-center gap-3">
                                            <div className="flex size-12 items-center justify-center rounded-full bg-emerald-100">
                                                <svg className="size-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <div className="text-left">
                                                <p className="font-semibold text-emerald-900">You&apos;re on the list!</p>
                                                <p className="text-sm text-emerald-700">We&apos;ll notify you when we launch.</p>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-background border-t py-12">
                <div className="mx-auto max-w-2xl px-6">
                    <div className="flex flex-col items-center gap-4 text-center">
                        <Link
                            href="/"
                            className="flex items-center gap-2">
                            <Logo />
                        </Link>
                        <p className="text-muted-foreground max-w-xs text-sm">A credit card for your AI agent. Control spending, approve purchases, stay in control.</p>
                    </div>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4 border-t pt-8">
                        <p className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} AgentCard. All rights reserved.</p>
                        <div className="flex gap-4">
                            <Link
                                href="https://twitter.com"
                                className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                                Twitter
                            </Link>
                            <Link
                                href="mailto:hello@agentcard.ai"
                                className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
