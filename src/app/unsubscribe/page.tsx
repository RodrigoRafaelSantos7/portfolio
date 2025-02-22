'use client'

import { useState, useEffect } from 'react'
import { z } from 'zod'
import { useSearchParams } from 'next/navigation'

const emailSchema = z.string().email('Please enter a valid email address')

export default function UnsubscribePage() {
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const emailFromUrl = searchParams.get('email')
    if (emailFromUrl) {
      setEmail(emailFromUrl)
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setStatus('loading')

    try {
      emailSchema.parse(email)

      const response = await fetch('/api/unsubscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to unsubscribe')
      }

      setStatus('success')
    } catch (err) {
      setStatus('error')
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message)
      } else if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An unexpected error occurred')
      }
    }
  }

  return (
    <div className='min-h-screen bg-[var(--background)] flex items-center justify-center p-4'>
      <div className='max-w-md w-full bg-[var(--newsletter-background)] rounded-lg p-8'>
        <h1 className='text-2xl font-bold text-[var(--text)] mb-6'>
          Unsubscribe from Newsletter
        </h1>

        {status === 'success' ? (
          <div className='text-green-500'>
            <p>You have been successfully unsubscribed from the newsletter.</p>
            <p className='mt-4'>
              If you change your mind, you can always subscribe again from our
              website.
            </p>
          </div>
        ) : (
          <>
            <p className='text-[var(--text)] mb-6'>
              Please enter your email address to unsubscribe from our
              newsletter.
            </p>

            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <input
                  type='email'
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value)
                    setError(null)
                  }}
                  disabled={status === 'loading'}
                  placeholder='Enter your email address'
                  className='w-full h-10 rounded-lg bg-[var(--newsletter-placeholder-bg)] p-4 placeholder-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--newsletter-focus)] text-[var(--text)] disabled:opacity-50'
                />
                {error && <p className='text-sm text-red-500 mt-1'>{error}</p>}
              </div>

              <button
                type='submit'
                disabled={status === 'loading'}
                className='w-full h-10 rounded-lg bg-[var(--newsletter-button-bg)] hover:bg-[var(--newsletter-button-hover)] text-[var(--newsletter-button-text)] font-medium disabled:opacity-50'
              >
                {status === 'loading' ? 'Processing...' : 'Unsubscribe'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
