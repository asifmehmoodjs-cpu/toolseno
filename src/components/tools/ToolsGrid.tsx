'use client';

import { ToolCard } from './ToolCard';

interface Tool {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  logoUrl: string | null;
  pricingType: 'FREE' | 'FREEMIUM' | 'PAID';
  isFeatured: boolean;
  isSponsored: boolean;
  rating: number | null;
  viewCount: number;
  clickCount: number;
  category: { name: string; slug: string } | null;
}

interface Props {
  tools: Tool[];
}

export function ToolsGrid({ tools }: Props) {
  return (
    <>
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </>
  );
}
