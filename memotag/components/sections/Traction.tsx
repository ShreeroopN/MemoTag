'use client'

import Image from 'next/image'

interface TractionProps {
  id?: string
}

export function Traction({ id }: TractionProps) {
  return (
    <section id={id} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Impact
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See how MemoTag is making a difference in dementia care
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-6">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/traction.svg"
                alt="Impact metrics"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl font-bold text-primary">90%</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Early Detection Rate</h3>
                <p className="mt-1 text-muted-foreground">
                  Of cognitive changes detected before clinical symptoms
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl font-bold text-primary">75%</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Caregiver Stress Reduction</h3>
                <p className="mt-1 text-muted-foreground">
                  Reported decrease in caregiver anxiety and stress levels
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl font-bold text-primary">50+</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Healthcare Partners</h3>
                <p className="mt-1 text-muted-foreground">
                  Leading institutions using MemoTag in their care programs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 