'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Category {
  id: string;
  name: string;
  slug: string;
  _count: { tools: number };
}

interface Props {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  selectedPricing: string;
  onPricingChange: (value: string) => void;
}

export function FilterBar({ categories, selectedCategory, onCategoryChange, selectedPricing, onPricingChange }: Props) {
  return (
    <div className="flex gap-4">
      <Select value={selectedCategory} onValueChange={onCategoryChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="">All Categories</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category.id} value={category.slug}>
              {category.name} ({category._count.tools})
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={selectedPricing} onValueChange={onPricingChange}>
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="">All Pricing</SelectItem>
          <SelectItem value="FREE">Free</SelectItem>
          <SelectItem value="FREEMIUM">Freemium</SelectItem>
          <SelectItem value="PAID">Paid</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
