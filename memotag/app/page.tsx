import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Solution } from '@/components/sections/Solution'
import { Traction } from '@/components/sections/Traction'
import dynamic from 'next/dynamic'

const Waitlist = dynamic(() => import('@/components/sections/Waitlist').then(mod => mod.default), {
  ssr: false
})

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <Hero />
      <Problem id="problem" />
      <Solution id="solution" />
      <Traction id="traction" />
      <Waitlist />
      <Footer />
    </main>
  )
}
