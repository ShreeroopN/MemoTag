'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { getSupabaseClient } from '@/lib/supabase'

const Waitlist = () => {
  const [email, setEmail] = useState('')
  const [userType, setUserType] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    setSuccess(false)

    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      setIsSubmitting(false)
      return
    }

    if (!userType) {
      setError('Please select your role')
      setIsSubmitting(false)
      return
    }

    try {
      const supabase = getSupabaseClient()
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email, user_type: userType }])

      if (error) throw error

      setSuccess(true)
      setEmail('')
      setUserType('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while joining the waitlist')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Join Our Waitlist
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            Be among the first to experience MemoTag's AI-powered dementia care companion. 
            Get early access to our innovative solution for better dementia care.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            <div className="space-y-2">
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="w-full px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              >
                <option value="">Select your role</option>
                <option value="caregiver">Caregiver</option>
                <option value="healthcare_professional">Healthcare Professional</option>
                <option value="family_member">Family Member</option>
                <option value="researcher">Researcher</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-lg"
            >
              {isSubmitting ? 'Joining Waitlist...' : 'Join Waitlist'}
            </button>

            {error && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm font-medium"
              >
                {error}
              </motion.p>
            )}

            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-500 text-sm font-medium space-y-2"
              >
                <p>Thank you for joining our waitlist!</p>
                <p>We'll keep you updated on our progress and notify you when MemoTag is ready.</p>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Waitlist 