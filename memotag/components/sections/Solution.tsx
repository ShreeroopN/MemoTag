'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'

interface SolutionProps {
  id?: string
}

export function Solution({ id }: SolutionProps) {
  return (
    <section id={id} className="py-20 bg-white dark:bg-gray-900">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our AI-Powered Solution
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              MemoTag uses advanced AI to monitor and analyze daily activities, providing early detection and peace of mind for caregivers.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Real-time Monitoring</h3>
                  <p className="mt-1 text-muted-foreground">
                    Continuous tracking of daily activities and behavioral patterns
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">AI Analysis</h3>
                  <p className="mt-1 text-muted-foreground">
                    Advanced algorithms detect subtle changes in behavior
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Caregiver Alerts</h3>
                  <p className="mt-1 text-muted-foreground">
                    Instant notifications for potential concerns
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-card shadow-lg">
              <Image
                src="/images/solution.svg"
                alt="MemoTag app interface"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
} 