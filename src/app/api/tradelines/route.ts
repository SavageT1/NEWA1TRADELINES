import { NextResponse } from 'next/server';
import { getTradelines } from '@/lib/tradelines';

export const dynamic = 'force-dynamic'; // always fresh, never cached at edge

export async function GET() {
  try {
    const tradelines = await getTradelines();
    return NextResponse.json(tradelines);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch tradelines' }, { status: 500 });
  }
}
