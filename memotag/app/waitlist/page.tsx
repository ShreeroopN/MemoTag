import dynamic from 'next/dynamic'

const Waitlist = dynamic(() => import('@/components/sections/Waitlist'), {
  ssr: false
})

export default function WaitlistPage() {
  return (
    <main className="min-h-screen">
      <Waitlist />
    </main>
  )
} 