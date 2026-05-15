import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '../../lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const {
      name,
      email,
      github,
      areas,
      message,
    } = body

    // Validation
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

    const { error } = await supabase
      .from('contributors')
      .insert({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        github: github?.trim() || '',
        areas: Array.isArray(areas) ? areas : [],
        message: message?.trim() || '',
      })

    if (error) {
      console.error('[supabase]', error)

      return NextResponse.json(
        { error: 'Failed to save contributor' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: `Thanks ${name}! You're registered.`,
      },
      { status: 201 }
    )

  } catch (err) {
    console.error('[contribute API]', err)

    return NextResponse.json(
      { error: 'Something went wrong.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const { count, error } = await supabase
      .from('contributors')
      .select('*', { count: 'exact', head: true })

    if (error) {
      return NextResponse.json({ count: 0 })
    }

    return NextResponse.json({
      count: count || 0
    })

  } catch {
    return NextResponse.json({ count: 0 })
  }
}