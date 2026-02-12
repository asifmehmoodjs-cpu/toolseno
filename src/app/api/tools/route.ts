import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  const tools = await db.tool.findMany({
    include: {
      category: { select: { name: true, slug: true } },
      tags: { select: { id: true, name: true, slug: true } },
    },
    orderBy: [{ isFeatured: 'desc' }, { isSponsored: 'desc' }, { createdAt: 'desc' }],
  });

  return NextResponse.json({ tools });
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const tool = await db.tool.create({
      data: {
        name: data.name,
        slug: data.slug || data.name.toLowerCase().replace(/\s+/g, '-'),
        shortDescription: data.shortDescription,
        longDescription: data.longDescription,
        toolUrl: data.toolUrl,
        logoUrl: data.logoUrl,
        pricingType: data.pricingType || 'FREE',
        isFeatured: data.isFeatured || false,
        isSponsored: data.isSponsored || false,
        rating: data.rating,
        categoryId: data.categoryId,
        tags: data.tagIds ? { connect: data.tagIds.map((id: string) => ({ id })) } : undefined,
      },
      include: { category: true, tags: true },
    });
    return NextResponse.json({ tool });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create tool' }, { status: 500 });
  }
}
