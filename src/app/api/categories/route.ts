import { NextResponse } from 'next/server';

const categories = [
  { id: '1', name: 'Marketing', slug: 'marketing', _count: { tools: 3 } },
  { id: '2', name: 'Development', slug: 'development', _count: { tools: 2 } },
  { id: '3', name: 'Design', slug: 'design', _count: { tools: 2 } },
  { id: '4', name: 'Productivity', slug: 'productivity', _count: { tools: 3 } },
];

export async function GET() {
  return NextResponse.json({ categories });
}
