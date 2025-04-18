'use client'

import Link from 'next/link'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const navigation = {
  product: [
    { name: 'Features', href: '#solution' },
    { name: 'Testimonials', href: '#traction' },
    { name: 'Join Waitlist', href: '#waitlist' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
  ],
  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Twitter',
      href: '#',
      icon: <FiTwitter className="w-5 h-5" />,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: <FiLinkedin className="w-5 h-5" />,
    },
    {
      name: 'GitHub',
      href: '#',
      icon: <FiGithub className="w-5 h-5" />,
    },
  ],
}

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Product
            </h3>
            <ul className="mt-4 space-y-4">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Follow Us
            </h3>
            <div className="mt-4 flex space-x-6">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} MemoTag. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 