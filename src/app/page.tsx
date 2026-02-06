'use client'

import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { HeroHeader } from '@/components/header'
import { Logo } from '@/components/logo'
import { ChevronRight, CreditCard, Shield, Eye, Lock, Bell, Smartphone, Zap, Check } from 'lucide-react'
// Agent logos section uses text only for now

export default function HeroSection() {
    const [email, setEmail] = useState('')
    const [useCase, setUseCase] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return
        setLoading(true)
        await new Promise(resolve => setTimeout(resolve, 1000))
        setSubmitted(true)
        setLoading(false)
    }

    const faqs = [
        {
            q: "How does approval work?",
            a: "When your agent wants to make a purchase, you get a push notification. One tap to approve or deny. You can also set auto-approve rules for trusted merchants under certain amounts."
        },
        {
            q: "What happens if my agent tries to overspend?",
            a: "The transaction is automatically declined. Your agent physically cannot exceed the spending limit you set. You stay in control, always."
        },
        {
            q: "Which agent frameworks are supported?",
            a: "AgentCard works with any agent that browses the web or makes API calls. OpenClaw, Operator, Browser Use, AutoGPT, CrewAI, LangChain agents — if it can click or call, it works with AgentCard."
        },
        {
            q: "Is my money safe?",
            a: "Yes. AgentCard uses virtual cards issued by regulated financial partners. Your funds are protected, and you can freeze your card instantly at any time."
        }
    ]

    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                {/* Hero Section */}
                <section className="bg-background">
                    <div className="relative py-24 md:pt-40 md:pb-32">
                        <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
                            <div className="grid gap-12 md:grid-cols-2 md:items-center">
                                {/* Left: Copy */}
                                <div>
                                    <div className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-sm shadow-sm mb-6">
                                        <span className="size-2 animate-pulse rounded-full bg-emerald-500" />
                                        <span className="text-muted-foreground">Join 847 people on the waitlist</span>
                                    </div>
                                    
                                    <h1 className="text-balance font-serif text-4xl font-medium sm:text-5xl leading-tight">
                                        A credit card for your AI agent.
                                    </h1>
                                    <p className="text-muted-foreground mt-4 text-lg">
                                        Give your agent a spending limit. No charge without your approval. Stay in control while AI handles the rest.
                                    </p>

                                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                        <Button asChild className="pr-1.5" size="lg">
                                            <Link href="#waitlist">
                                                <span className="text-nowrap">Join the Waitlist</span>
                                                <ChevronRight className="opacity-50" />
                                            </Link>
                                        </Button>
                                        <Button asChild variant="outline" size="lg">
                                            <Link href="#how-it-works">
                                                <span>See How It Works</span>
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                                
                                {/* Right: Card Mockup */}
                                <div className="relative flex justify-center">
                                    <div className="relative">
                                        {/* Card */}
                                        <div className="w-72 h-44 bg-gradient-to-br from-foreground to-foreground/80 rounded-2xl p-5 shadow-2xl shadow-foreground/20 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                                            <div className="flex justify-between items-start">
                                                <div className="text-background/90 text-sm font-medium">AgentCard</div>
                                                <div className="flex items-center gap-1">
                                                    <div className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                                                    <span className="text-emerald-400 text-xs">Active</span>
                                                </div>
                                            </div>
                                            <div className="mt-8 flex gap-1">
                                                <div className="w-10 h-7 bg-amber-300/80 rounded" />
                                            </div>
                                            <div className="mt-4 flex justify-between items-end">
                                                <div>
                                                    <div className="text-background/50 text-xs">Agent</div>
                                                    <div className="text-background text-sm font-mono">Claude Assistant</div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-background/50 text-xs">Limit</div>
                                                    <div className="text-background text-sm font-mono">$500/mo</div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Notification popup */}
                                        <div className="absolute -bottom-4 -left-4 bg-card border rounded-xl p-3 shadow-lg w-56 animate-pulse">
                                            <div className="flex items-start gap-3">
                                                <div className="size-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                                                    <Bell className="size-4 text-amber-600" />
                                                </div>
                                                <div className="text-xs">
                                                    <div className="font-medium">Approval needed</div>
                                                    <div className="text-muted-foreground">$12.99 at Spotify</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Logo Cloud */}
                            <div className="mt-20 pt-12 border-t">
                                <p className="text-center text-sm text-muted-foreground mb-6">Works with any agent that browses or calls APIs</p>
                                <div className="flex flex-wrap justify-center gap-3">
                                    <Card className="flex h-11 items-center gap-2 rounded-xl px-4 shadow-sm">
                                        <img src="/icons/openclaw.svg" alt="OpenClaw" className="size-5" />
                                        <span className="text-nowrap font-medium text-sm">OpenClaw</span>
                                    </Card>
                                    <Card className="flex h-11 items-center gap-2 rounded-xl px-4 shadow-sm">
                                        <img src="/icons/chatgpt.svg" alt="Atlas" className="size-5" />
                                        <span className="text-nowrap font-medium text-sm">Atlas</span>
                                    </Card>
                                    <Card className="flex h-11 items-center gap-2 rounded-xl px-4 shadow-sm">
                                        <img src="/icons/comet.svg" alt="Comet" className="size-5" />
                                        <span className="text-nowrap font-medium text-sm">Comet</span>
                                    </Card>
                                    <Card className="flex h-11 items-center gap-2 rounded-xl px-4 shadow-sm">
                                        <img src="/icons/browser-use-logo.png" alt="Browser Use" className="size-5" />
                                        <span className="text-nowrap font-medium text-sm">Browser Use</span>
                                    </Card>
                                    <Card className="flex h-11 items-center gap-2 rounded-xl px-4 shadow-sm bg-muted/50">
                                        <span className="text-nowrap font-medium text-sm text-muted-foreground">+ Any Agent</span>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section id="how-it-works" className="bg-card py-24">
                    <div className="mx-auto max-w-3xl px-6">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-3xl font-medium sm:text-4xl">How it works</h2>
                            <p className="text-muted-foreground mt-4">Get started in under 5 minutes.</p>
                        </div>
                        
                        <div className="grid gap-8 md:grid-cols-3">
                            <div className="text-center">
                                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-background border shadow-sm">
                                    <CreditCard className="size-6 text-foreground" />
                                </div>
                                <div className="text-xs text-muted-foreground mb-2">Step 1</div>
                                <h3 className="font-medium mb-2">Create a card</h3>
                                <p className="text-muted-foreground text-sm">Generate a virtual card with your preferred spending limit. Daily, weekly, or monthly.</p>
                            </div>
                            <div className="text-center">
                                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-background border shadow-sm">
                                    <Zap className="size-6 text-foreground" />
                                </div>
                                <div className="text-xs text-muted-foreground mb-2">Step 2</div>
                                <h3 className="font-medium mb-2">Connect your agent</h3>
                                <p className="text-muted-foreground text-sm">Give your AI agent the card details via our secure SDK. One line of code.</p>
                            </div>
                            <div className="text-center">
                                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-background border shadow-sm">
                                    <Smartphone className="size-6 text-foreground" />
                                </div>
                                <div className="text-xs text-muted-foreground mb-2">Step 3</div>
                                <h3 className="font-medium mb-2">Approve purchases</h3>
                                <p className="text-muted-foreground text-sm">Your agent requests, you approve. One tap on your phone. That simple.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="bg-background py-24">
                    <div className="mx-auto max-w-2xl px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-balance font-serif text-3xl font-medium sm:text-4xl">Everything you need to trust your agent with money.</h2>
                            <p className="text-muted-foreground mt-4">Simple, secure, and always under your control.</p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <Card className="p-6 border rounded-2xl">
                                <div className="flex items-start gap-4">
                                    <div className="size-10 rounded-xl bg-card border flex items-center justify-center shrink-0">
                                        <CreditCard className="size-5 text-foreground" />
                                    </div>
                                    <div>
                                        <h3 className="text-foreground font-medium">Virtual Card</h3>
                                        <p className="text-muted-foreground text-sm mt-1">Dedicated card for your AI. Completely separate from your personal finances.</p>
                                    </div>
                                </div>
                            </Card>
                            <Card className="p-6 border rounded-2xl">
                                <div className="flex items-start gap-4">
                                    <div className="size-10 rounded-xl bg-card border flex items-center justify-center shrink-0">
                                        <Lock className="size-5 text-foreground" />
                                    </div>
                                    <div>
                                        <h3 className="text-foreground font-medium">Spending Limits</h3>
                                        <p className="text-muted-foreground text-sm mt-1">Set daily, weekly, or monthly budgets. Hard limits that can&apos;t be exceeded.</p>
                                    </div>
                                </div>
                            </Card>
                            <Card className="p-6 border rounded-2xl">
                                <div className="flex items-start gap-4">
                                    <div className="size-10 rounded-xl bg-card border flex items-center justify-center shrink-0">
                                        <Shield className="size-5 text-foreground" />
                                    </div>
                                    <div>
                                        <h3 className="text-foreground font-medium">Approval Required</h3>
                                        <p className="text-muted-foreground text-sm mt-1">Every purchase needs your OK. Push notification, one tap to approve.</p>
                                    </div>
                                </div>
                            </Card>
                            <Card className="p-6 border rounded-2xl">
                                <div className="flex items-start gap-4">
                                    <div className="size-10 rounded-xl bg-card border flex items-center justify-center shrink-0">
                                        <Eye className="size-5 text-foreground" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Full Visibility</h3>
                                        <p className="text-muted-foreground text-sm mt-1">Real-time feed. See what, when, and from whom. Complete transparency.</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="bg-card py-24">
                    <div className="mx-auto max-w-2xl px-6">
                        <div className="text-center mb-12">
                            <h2 className="font-serif text-3xl font-medium sm:text-4xl">What will your agent buy?</h2>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {[
                                { icon: '/icons/restaurant.png', text: 'Order food and groceries', desc: 'Weekly meal prep, snack runs' },
                                { icon: '/icons/airplane.png', text: 'Book flights and hotels', desc: 'Travel planning on autopilot' },
                                { icon: '/icons/party-popper.png', text: 'Purchase event tickets', desc: 'Concerts, shows, experiences' },
                                { icon: '/icons/clipboard.png', text: 'Manage subscriptions', desc: 'SaaS tools, streaming services' },
                                { icon: '/icons/rocket.png', text: 'Buy APIs and tools', desc: 'Dev resources, cloud services' },
                                { icon: '/icons/gift.png', text: 'Send gifts', desc: 'Birthdays, thank-yous, surprises' },
                            ].map((item, i) => (
                                <Card key={i} className="flex items-center gap-4 p-4 border rounded-xl">
                                    <img src={item.icon} alt="" className="size-10 object-contain" />
                                    <div>
                                        <span className="font-medium text-sm">{item.text}</span>
                                        <p className="text-muted-foreground text-xs">{item.desc}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="bg-background py-24">
                    <div className="mx-auto max-w-2xl px-6">
                        <div className="text-center mb-12">
                            <h2 className="font-serif text-3xl font-medium sm:text-4xl">Questions?</h2>
                        </div>
                        <div className="space-y-3">
                            {faqs.map((faq, i) => (
                                <Card 
                                    key={i} 
                                    className="border rounded-xl overflow-hidden cursor-pointer"
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                >
                                    <div className="p-4 flex items-center justify-between">
                                        <span className="font-medium text-sm">{faq.q}</span>
                                        <ChevronRight className={`size-4 text-muted-foreground transition-transform ${openFaq === i ? 'rotate-90' : ''}`} />
                                    </div>
                                    {openFaq === i && (
                                        <div className="px-4 pb-4 text-sm text-muted-foreground">
                                            {faq.a}
                                        </div>
                                    )}
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section id="waitlist" className="bg-card py-24">
                    <div className="mx-auto max-w-2xl px-6">
                        <div className="text-center">
                            <h2 className="text-balance font-serif text-3xl font-medium sm:text-4xl">Get Early Access</h2>
                            <p className="text-muted-foreground mx-auto mt-4 max-w-md">Join 847 others on the waitlist. Be first to know when AgentCard launches.</p>
                            
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

                                    <Button type="submit" disabled={loading} className="w-full pr-1.5" size="lg">
                                        <span>{loading ? 'Joining...' : 'Join Waitlist'}</span>
                                        {!loading && <ChevronRight className="opacity-50" />}
                                    </Button>
                                    
                                    <p className="text-xs text-muted-foreground text-center">No spam. Unsubscribe anytime.</p>
                                </form>
                            ) : (
                                <div className="mx-auto mt-8 max-w-sm">
                                    <Card className="p-6 bg-emerald-50 border-emerald-200">
                                        <div className="flex items-center justify-center gap-3">
                                            <div className="flex size-12 items-center justify-center rounded-full bg-emerald-100">
                                                <Check className="size-6 text-emerald-600" />
                                            </div>
                                            <div className="text-left">
                                                <p className="font-semibold text-emerald-900">You&apos;re #848 on the list!</p>
                                                <p className="text-sm text-emerald-700">We&apos;ll email you when we launch.</p>
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
                        <Link href="/" className="flex items-center gap-2">
                            <Logo />
                        </Link>
                        <p className="text-muted-foreground max-w-xs text-sm">A credit card for your AI agent. Control spending, approve purchases, stay in control.</p>
                    </div>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4 border-t pt-8">
                        <p className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} AgentCard. All rights reserved.</p>
                        <div className="flex gap-4">
                            <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                                Twitter
                            </Link>
                            <Link href="mailto:hello@agentcard.ai" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
