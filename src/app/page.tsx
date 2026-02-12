import { ToolsDirectory } from '@/components/tools/ToolsDirectory';

export const dynamic = 'force-dynamic';

const sampleTools = [
  { id: '1', name: 'HubSpot', slug: 'hubspot', shortDescription: 'CRM platform with marketing, sales, and customer service tools', pricingType: 'FREEMIUM', isFeatured: true, isSponsored: true, rating: 4.5, category: { name: 'Marketing', slug: 'marketing' } },
  { id: '2', name: 'Canva', slug: 'canva', shortDescription: 'Online design platform for creating graphics and presentations', pricingType: 'FREEMIUM', isFeatured: true, isSponsored: false, rating: 4.7, category: { name: 'Design', slug: 'design' } },
  { id: '3', name: 'Notion', slug: 'notion', shortDescription: 'All-in-one workspace for notes, docs, and project management', pricingType: 'FREEMIUM', isFeatured: true, isSponsored: false, rating: 4.8, category: { name: 'Productivity', slug: 'productivity' } },
  { id: '4', name: 'GitHub', slug: 'github', shortDescription: 'Platform for hosting and collaborating on Git repositories', pricingType: 'FREEMIUM', isFeatured: false, isSponsored: false, rating: 4.9, category: { name: 'Development', slug: 'development' } },
  { id: '5', name: 'Figma', slug: 'figma', shortDescription: 'Collaborative interface design tool for teams', pricingType: 'FREEMIUM', isFeatured: true, isSponsored: true, rating: 4.8, category: { name: 'Design', slug: 'design' } },
  { id: '6', name: 'Slack', slug: 'slack', shortDescription: 'Team communication and collaboration platform', pricingType: 'FREEMIUM', isFeatured: false, isSponsored: false, rating: 4.6, category: { name: 'Productivity', slug: 'productivity' } },
  { id: '7', name: 'ChatGPT', slug: 'chatgpt', shortDescription: 'AI-powered conversational assistant by OpenAI', pricingType: 'FREEMIUM', isFeatured: true, isSponsored: false, rating: 4.7, category: { name: 'Productivity', slug: 'productivity' } },
  { id: '8', name: 'VS Code', slug: 'vs-code', shortDescription: 'Free source code editor with debugging and Git', pricingType: 'FREE', isFeatured: false, isSponsored: false, rating: 4.9, category: { name: 'Development', slug: 'development' } },
];

const categories = [
  { id: '1', name: 'Marketing', slug: 'marketing', _count: { tools: 3 } },
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
