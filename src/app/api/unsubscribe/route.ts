import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!AUDIENCE_ID) {
      throw new Error('RESEND_AUDIENCE_ID is not configured')
    }

    // Update contact to unsubscribed status
    await resend.contacts.update({
      email,
      unsubscribed: true,
      audienceId: AUDIENCE_ID,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter unsubscribe error:', error)
    return NextResponse.json(
      { error: 'Error processing unsubscribe request' },
      { status: 500 },
    )
  }
}
