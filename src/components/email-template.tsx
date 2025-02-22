import * as React from 'react'

interface EmailTemplateProps {
  email: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
}) => (
  <div
    style={{
      backgroundColor: '#ffffff',
      fontFamily:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '40px 20px',
      maxWidth: '600px',
      margin: '0 auto',
    }}
  >
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '2px',
        borderRadius: '16px',
        marginBottom: '24px',
      }}
    >
      <div
        style={{
          background: '#ffffff',
          borderRadius: '14px',
          padding: '32px',
          textAlign: 'center' as const,
        }}
      >
        <h1
          style={{
            color: '#1a1a1a',
            fontSize: '24px',
            fontWeight: '700',
            margin: '0 0 16px',
            lineHeight: '1.3',
          }}
        >
          Welcome to My Newsletter! 🎉
        </h1>

        <div
          style={{
            backgroundColor: '#f8fafc',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '24px',
          }}
        >
          <p
            style={{
              color: '#4a5568',
              fontSize: '16px',
              lineHeight: '1.6',
              margin: '0',
            }}
          >
            Thank you for joining! Your email (<strong>{email}</strong>) has
            been successfully added to my newsletter.
          </p>
        </div>

        <p
          style={{
            color: '#4a5568',
            fontSize: '16px',
            lineHeight: '1.6',
            marginBottom: '24px',
          }}
        >
          Get ready to receive exclusive updates, insights, and news directly in
          your inbox. I&apos;m excited to share my journey with you!
        </p>

        <div
          style={{
            borderTop: '1px solid #e2e8f0',
            paddingTop: '24px',
            marginTop: '24px',
          }}
        >
          <p
            style={{
              color: '#718096',
              fontSize: '14px',
              margin: '0',
            }}
          >
            If you didn&apos;t sign up for this newsletter, you can safely
            ignore this email.
          </p>
        </div>
      </div>
    </div>

    <div
      style={{
        textAlign: 'center' as const,
        color: '#718096',
        fontSize: '12px',
      }}
    >
      <p style={{ margin: '0 0 8px' }}>
        © {new Date().getFullYear()} All rights reserved
      </p>
      <p style={{ margin: '0' }}>
        You&apos;re receiving this email because you signed up for my
        newsletter.
      </p>
      <p style={{ marginTop: '16px', color: '#718096' }}>
        If you don&apos;t want to receive this newsletter, you can{' '}
        <a
          href={`https://rodrigosantos.dev/unsubscribe?email=${encodeURIComponent(email)}`}
          style={{
            color: '#667eea',
            textDecoration: 'underline',
          }}
        >
          unsubscribe here
        </a>
        .
      </p>
    </div>
  </div>
)
