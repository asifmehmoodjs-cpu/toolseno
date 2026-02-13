import { sql } from '@/lib/db';
import { ToolsDirectory } from '@/components/tools/ToolsDirectory';

export const revalidate = 60;

export default async function Home() {
  const tools = await sql`
    SELECT 
      t.id, t.name, t.slug, t."shortDescription", t."logoUrl", 
      t."pricingType", t."isFeatured", t."isSponsored", t.rating, 
      t."viewCount", t."clickCount",
      c.name as "categoryName", c.slug as "categorySlug"
    FROM tools t
    LEFT JOIN categories c ON t."categoryId" = c.id
    ORDER BY t."isFeatured" DESC, t."isSponsored" DESC, t."createdAt" DESC
  `;

  const categories = await sql`
    SELECT c.id, c.name, c.slug, COUNT(t.id) as "toolCount"
    FROM categories c
    LEFT JOIN tools t ON t."categoryId" = c.id
    GROUP BY c.id, c.name, c.slug
    ORDER BY c.name
  `;

  const formattedTools = tools.map((tool: any) => ({
    id: tool.id.toString(),
    name: tool.name,
    slug: tool.slug,
    shortDescription: tool.shortDescription,
    logoUrl: tool.logoUrl,
    pricingType: tool.pricingType,
    isFeatured: tool.isFeatured,
    isSponsored: tool.isSponsored,
    rating: tool.rating,
    viewCount: tool.viewCount,
    clickCount: tool.clickCount,
    category: tool.categoryName ? { name: tool.categoryName, slug: tool.categorySlug } : null,
  }));

  const formattedCategories = categories.map((cat: any) => ({
    id: cat.id.toString(),
    name: cat.name,
    slug: cat.slug,
    _count: { tools: parseInt(cat.toolCount) },
  }));

  return (
    <ToolsDirectory
      initialTools={formattedTools}
      initialCategories={formattedCategories}
      tags={[]}
      isAdmin={false}
      adminEmail={null}
    />
  );
}
