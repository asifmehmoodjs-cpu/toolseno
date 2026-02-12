'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Sparkles, Crown } from 'lucide-react';

interface Props {
  tool: {
    id: string;
    name: string;
    slug: string;
    shortDescription: string;
    logoUrl: string | null;
    pricingType: 'FREE' | 'FREEMIUM' | 'PAID';
    isFeatured: boolean;
    isSponsored: boolean;
    rating: number | null;
    category: { name: string; slug: string } | null;
  };
}

export function ToolCard({ tool }: Props) {
  const pricingColors = {
    FREE: 'bg-green-100 text-green-800',
    FREEMIUM: 'bg-blue-100 text-blue-800',
    PAID: 'bg-purple-100 text-purple-800',
  };

  return (
    <Link href={`/tools/${tool.slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer relative overflow-hidden">
        {(tool.isFeatured || tool.isSponsored) && (
          <div className="absolute top-2 right-2 flex gap-1">
            {tool.isFeatured && (
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                <Sparkles className="w-3 h-3 mr-1" /> Featured
              </Badge>
            )}
            {tool.isSponsored && (
              <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                <Crown className="w-3 h-3 mr-1" /> Sponsored
              </Badge>
            )}
          </div>
        )}
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl font-bold text-gray-600">
              {tool.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-lg truncate">{tool.name}</h3>
              {tool.category && (
                <p className="text-sm text-gray-500">{tool.category.name}</p>
              )}
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-4 line-clamp-2">{tool.shortDescription}</p>
          <div className="flex items-center justify-between mt-4">
            <Badge className={pricingColors[tool.pricingType]}>{tool.pricingType}</Badge>
            {tool.rating && (
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{tool.rating}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
