'use client'

import Image from 'next/image'

interface ProblemProps {
  id?: string
}

export function Problem({ id }: ProblemProps) {
  return (
    <section id={id} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            The Challenge of Dementia Care
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Caring for loved ones with dementia presents unique challenges that require constant attention and understanding.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center">
            <div className="relative mb-6 h-24 w-24">
              <Image
                src="/images/problem-1.svg"
                alt="Behavioral changes"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold">Behavioral Changes</h3>
            <p className="mt-2 text-muted-foreground">
              Sudden mood swings and behavioral changes can be difficult to track and understand.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center">
            <div className="relative mb-6 h-24 w-24">
              <Image
                src="/images/problem-2.svg"
                alt="Safety concerns"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold">Safety Concerns</h3>
            <p className="mt-2 text-muted-foreground">
              Wandering and forgetfulness can lead to dangerous situations without proper monitoring.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center">
            <div className="relative mb-6 h-24 w-24">
              <Image
                src="/images/problem-3.svg"
                alt="Caregiver stress"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold">Caregiver Stress</h3>
            <p className="mt-2 text-muted-foreground">
              Constant worry and the need for 24/7 monitoring can lead to caregiver burnout.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 