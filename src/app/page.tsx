import { ToolsDirectory } from '@/components/tools/ToolsDirectory';

const sampleTools = [
  { id: '1', name: 'HubSpot', slug: 'hubspot', shortDescription: 'CRM platform with marketing, sales, and customer service tools', logoUrl: null, pricingType: 'FREEMIUM' as const, isFeatured: true, isSponsored: true, rating: 4.5, viewCount: 0, clickCount: 0, category: { name: 'Marketing', slug: 'marketing' } },
  { id: '2', name: 'Canva', slug: 'canva', shortDescription: 'Online design platform for creating graphics and presentations', logoUrl: null, pricingType: 'FREEMIUM' as const, isFeatured: true, isSponsored: false, rating: 4.7, viewCount: 0, clickCount: 0, category: { name: 'Design', slug: 'design' } },
  { id: '3', name: 'Notion', slug: 'notion', shortDescription: 'All-in-one workspace for notes, docs, and project management', logoUrl: null, pricingType: 'FREEMIUM' as const, isFeatured: true, isSponsored: false, rating: 4.8, viewCount: 0, clickCount: 0, category: { name: 'Productivity', slug: 'productivity' } },
  { id: '4', name: 'GitHub', slug: 'github', shortDescription: 'Platform for hosting and collaborating on Git repositories', logoUrl: null, pricingType: 'FREEMIUM' as const, isFeatured: false, isSponsored: false, rating: 4.9, viewCount: 0, clickCount: 0, category: { name: 'Development', slug: 'development' } },
  { id: '5', name: 'Figma', slug: 'figma', shortDescription: 'Collaborative interface design tool for teams', logoUrl: null, pricingType: 'FREEMIUM' as const, isFeatured: true, isSponsored: true, rating: 4.8, viewCount: 0, clickCount: 0, category: { name: 'Design', slug: 'design' } },
  { id: '6', name: 'Slack', slug: 'slack', shortDescription: 'Team communication and collaboration platform', logoUrl: null, pricingType: 'FREEMIUM' as const, isFeatured: false, isSponsored: false, rating: 4.6, viewCount: 0, clickCount: 0, category: { name: 'Productivity', slug: 'productivity' } },
  { id: '7', name: 'ChatGPT', slug: 'chatgpt', shortDescription: 'AI-powered conversational assistant by OpenAI', logoUrl: null, pricingType: 'FREEMIUM' as const, isFeatured: true, isSponsored: false, rating: 4.7, viewCount: 0, clickCount: 0, category: { name: 'Productivity', slug: 'productivity' } },
  { id: '8', name: 'VS Code', slug: 'vs-code', shortDescription: 'Free source code editor with debugging and Git', logoUrl: null, pricingType: 'FREE' as const, isFeatured: false, isSponsored: false, rating: 4.9, viewCount: 0, clickCount: 0, category: { name: 'Development', slug: 'development' } },
];

const categories = [
  { id: '1', name: 'Marketing', slug: 'marketing', _count: { tools: 2 } },
  { id: '2', name: 'Development', slug: 'development', _count: { tools: 2 } },
  { id: '3', name: 'Design', slug: 'design', _count: { tools: 2 } },
  { id: '4', name: 'Productivity', slug: 'productivity', _count: { tools: 3 } },
];

export default function Home() {
  return (
    <ToolsDirectory
      initialTools={sampleTools}
      initialCategories={categories}
      tags={[]}
      isAdmin={false}
      adminEmail={null}
    />
  );
}
