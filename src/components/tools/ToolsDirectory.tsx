'use client';

import { useState } from 'react';
import { ToolsGrid } from './ToolsGrid';
import { SearchBar } from './SearchBar';
import { FilterBar } from './FilterBar';
import { AddToolCard } from './AddToolCard';

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

interface Category {
  id: string;
  name: string;
  slug: string;
  _count: { tools: number };
}

interface Tag {
  id: string;
  name: string;
  slug: string;
}

interface Props {
  initialTools: Tool[];
  initialCategories: Category[];
  tags: Tag[];
  isAdmin: boolean;
  adminEmail: string | null;
}

export function ToolsDirectory({ initialTools, initialCategories, tags, isAdmin, adminEmail }: Props) {
  const [tools, setTools] = useState(initialTools);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedPricing, setSelectedPricing] = useState<string>('');

  const filteredTools = tools.filter((tool) => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || tool.category?.slug === selectedCategory;
    const matchesPricing = !selectedPricing || tool.pricingType === selectedPricing;
    return matchesSearch && matchesCategory && matchesPricing;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-600">ToolSeno.io</h1>
            {isAdmin && adminEmail && (
              <span className="text-sm text-gray-500">Admin: {adminEmail}</span>
            )}
          </div>
          <p className="text-gray-500 mt-1">Discover the best tools for your needs</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <FilterBar
            categories={initialCategories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedPricing={selectedPricing}
            onPricingChange={setSelectedPricing}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {isAdmin && <AddToolCard categories={initialCategories} tags={tags} onToolAdded={(tool) => setTools([tool, ...tools])} />}
          <ToolsGrid tools={filteredTools} />
        </div>

        {filteredTools.length === 0 && (
          <p className="text-center text-gray-500 py-12">No tools found. Try adjusting your filters.</p>
        )}
      </main>
    </div>
  );
}
