import { newsletter } from '@/app/data'
import { VARIANTS_SECTION, TRANSITION_SECTION } from '@/constants/animations'
import { motion } from 'motion/react'
import { useState, useEffect } from 'react'
import { z } from 'zod'
import Script from 'next/script'

const emailSchema = z.string().email('Please enter a valid email address')

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

export function NewsletterSubscribe(): React.ReactNode {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    // Load reCAPTCHA when component mounts
    window.grecaptcha?.ready(() => {
      console.log('reCAPTCHA is ready')
    })
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      emailSchema.parse(email)

      // Get reCAPTCHA token
      const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
        {
          action: 'newsletter_subscription',
        },
      )

      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          recaptchaToken: token,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe')
      }

      setIsSuccess(true)
      setEmail('')
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message)
      } else if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An unexpected error occurred')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
      />
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className='bg-[var(--newsletter-background)] rounded-lg p-7'
      >
        <p className='text-[var(--text)] mb-3'>{newsletter.text}</p>
        {isSuccess ? (
          <p className='text-green-500'>
            Thank you for subscribing to our newsletter!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
            <div className='flex flex-row items-center gap-2 w-full'>
              <input
                type='email'
                value={email}
                onChange={e => {
                  setEmail(e.target.value)
                  setError(null)
                }}
                disabled={isLoading}
                className='flex-1 h-10 text-xs sm:text-base rounded-lg bg-[var(--newsletter-placeholder-bg)] p-4 placeholder-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--newsletter-focus)] text-[var(--text)] disabled:opacity-50'
                placeholder={newsletter.placeholder}
                required
              />
              <button
                type='submit'
                disabled={isLoading}
                className='h-10 px-4 text-xs sm:text-sm font-medium rounded-lg bg-[var(--newsletter-button-bg)] hover:bg-[var(--newsletter-button-hover)] text-[var(--newsletter-button-text)] disabled:opacity-50'
              >
                {isLoading ? 'Subscribing...' : newsletter.button}
              </button>
            </div>
            <p className='text-[0.5rem] ml-1 text-[var(--text)]'>
              By subscribing, you agree to Google's{' '}
              <a
                href='https://policies.google.com/privacy'
                target='_blank'
                rel='noopener noreferrer'
                className='underline'
              >
                Privacy Policy
              </a>{' '}
              and{' '}
              <a
                href='https://policies.google.com/terms'
                target='_blank'
                rel='noopener noreferrer'
                className='underline'
              >
                Terms of Service
              </a>
              .
            </p>
            {error && <p className='text-sm text-red-500 mt-1'>{error}</p>}
          </form>
        )}
      </motion.section>
    </>
  )
}
