'use client'

import Link from 'next/link'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">MemoTag</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6">
            {pathname === '/' ? (
              <>
                <Link 
                  href="#problem" 
                  onClick={(e) => handleScroll(e, 'problem')}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Problem
                </Link>
                <Link 
                  href="#solution" 
                  onClick={(e) => handleScroll(e, 'solution')}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Solution
                </Link>
                <Link 
                  href="#traction" 
                  onClick={(e) => handleScroll(e, 'traction')}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Traction
                </Link>
              </>
            ) : null}
            <Link 
              href="/waitlist" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
            >
              Join Waitlist
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
} 