'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/50">
      <div className="container relative z-10 flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 py-20 md:flex-row md:gap-16">
        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            AI-Powered Dementia Care
            <span className="text-primary"> Companion</span>
          </h1>
          <p className="mt-6 max-w-[600px] text-lg text-muted-foreground sm:text-xl">
            Smart monitoring and analysis of behavioral patterns to provide better care for your loved ones with dementia.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="group">
              Join Waitlist
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
        <div className="relative flex-1">
          <div className="relative aspect-square w-full max-w-[500px]">
            <Image
              src="/images/hero-illustration.svg"
              alt="Dementia care illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-10" />
    </section>
  )
} 