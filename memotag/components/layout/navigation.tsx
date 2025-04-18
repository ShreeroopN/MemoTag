import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'

export function Navigation() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
        MemoTag
      </Link>
      <div className="flex items-center gap-6">
        <Link href="/about" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
          About Us
        </Link>
        <Link href="/mindmap" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
          Mind Map
        </Link>
        <Link href="/caregivers" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
          Caregivers
        </Link>
        <Link href="/waitlist" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Join Waitlist
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  )
} 