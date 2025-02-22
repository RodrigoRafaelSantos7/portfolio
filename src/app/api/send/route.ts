/* @eslint-disable @typescript-eslint/no-explicit-any */
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

interface ResendError extends Error {
  statusCode?: number
}

const resend = new Resend(process.env.RESEND_API_KEY)
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!AUDIENCE_ID) {
      throw new Error('RESEND_AUDIENCE_ID is not configured')
    }

    try {
      await resend.contacts.create({
        email,
        unsubscribed: false,
        audienceId: AUDIENCE_ID,
      })

      return NextResponse.json({
        success: true,
        message: 'Successfully subscribed to newsletter',
      })
    } catch (createError) {
      const error = createError as ResendError
      // Check specifically for the error indicating the contact already exists
      if (
        error.message?.includes('already exists') ||
        error.statusCode === 409
      ) {
        return NextResponse.json(
          { error: 'This email is already subscribed to the newsletter' },
          { status: 400 },
        )
      }

      // Check for rate limit error
      if (error.message?.includes('Too many requests')) {
        return NextResponse.json(
          { error: 'Please try again in a few moments' },
          { status: 429 },
        )
      }

      throw error
    }
  } catch (error) {
    const err = error as Error
    console.error('Newsletter subscription error:', err)
    return NextResponse.json(
      { error: err.message || 'Error processing subscription request' },
      { status: 500 },
    )
  }
}
