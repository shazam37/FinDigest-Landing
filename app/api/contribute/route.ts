import { NextRequest, NextResponse } from 'next/server'

// In production, persist to a database or send to a Google Sheet / Airtable.
// For now this stores in memory (resets on serverless cold start) and
// can be extended to call any persistence layer.
// Replace with your preferred storage: Supabase, Airtable, Notion API, etc.

interface Contributor {
  name: string
  email: string
  github: string
  areas: string[]
  message: string
  submittedAt: string
}

// Simple in-memory store — swap for DB in production
const contributors: Contributor[] = []

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, github, areas, message } = body

    // Basic validation
    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    const contributor: Contributor = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      github: github?.trim() || '',
      areas: Array.isArray(areas) ? areas : [],
      message: message?.trim() || '',
      submittedAt: new Date().toISOString(),
    }

    contributors.push(contributor)

    // Log to console so Vercel function logs capture it
    console.log('[contributor]', JSON.stringify(contributor))

    // Optional: send a notification email or post to a webhook
    // await notifySlack(contributor)
    // await saveToAirtable(contributor)

    return NextResponse.json(
      {
        success: true,
        message: `Thanks ${name}! We'll reach out to ${email} soon.`,
      },
      { status: 201 }
    )
  } catch (err) {
    console.error('[contribute API]', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  // Simple count endpoint — useful to show "N contributors" on the page
  return NextResponse.json({ count: contributors.length })
}