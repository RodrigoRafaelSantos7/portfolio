import { EmailTemplate } from '@/components/email-template'
import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import * as React from 'react'

const resend = new Resend(process.env.RESEND_API_KEY)
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!AUDIENCE_ID) {
      throw new Error('RESEND_AUDIENCE_ID is not configured')
    }

    // Add contact to audience
    await resend.contacts.create({
      email,
      unsubscribed: false,
      audienceId: AUDIENCE_ID,
    })

    // Send welcome email
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: [email],
      subject: 'Welcome to My Newsletter!',
      react: React.createElement(EmailTemplate, { email }),
    })

    if (error) {
      return NextResponse.json({ error }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Error processing subscription request' },
      { status: 500 },
    )
  }
}
