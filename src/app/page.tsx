import { db } from '@/lib/db';
import { cookies } from 'next/headers';
import { ToolsDirectory } from '@/components/tools/ToolsDirectory';

export default async function Home() {
  const tools = await db.tool.findMany({
    include: {
      category: { select: { name: true, slug: true } },
      tags: { select: { id: true, name: true, slug: true } },
    },
    orderBy: [{ isFeatured: 'desc' }, { isSponsored: 'desc' }, { createdAt: 'desc' }],
    take: 12,
  });

  const categories = await db.toolCategory.findMany({
    include: { _count: { select: { tools: true } } },
    orderBy: { name: 'asc' },
  });

  const tags = await db.toolTag.findMany({ orderBy: { name: 'asc' } });

  const cookieStore = await cookies();
  const isAdmin = cookieStore.get('adminSession')?.value === 'true';
  const adminEmail = cookieStore.get('adminEmail')?.value || null;

  const serializedTools = tools.map((tool) => ({
    id: tool.id, name: tool.name, slug: tool.slug,
    shortDescription: tool.shortDescription, logoUrl: tool.logoUrl,
    pricingType: tool.pricingType as 'FREE' | 'FREEMIUM' | 'PAID',
    isFeatured: tool.isFeatured, isSponsored: tool.isSponsored,
    rating: tool.rating, viewCount: tool.viewCount, clickCount: tool.clickCount,
    category: tool.category,
  }));

  return (
    <ToolsDirectory
      initialTools={serializedTools}
      initialCategories={categories.map((c) => ({ ...c, _count: c._count }))}
      tags={tags}
      isAdmin={isAdmin}
      adminEmail={adminEmail}
    />
  );
}
