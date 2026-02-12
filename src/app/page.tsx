import { ToolsDirectory } from '@/components/tools/ToolsDirectory';

export const dynamic = 'force-dynamic';

async function getTools() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/tools', { 
    cache: 'no-store' 
  });
  return res.json();
}

async function getCategories() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/categories', { 
    cache: 'no-store' 
  });
  return res.json();
}

export default async function Home() {
  const [{ tools }, { categories }] = await Promise.all([getTools(), getCategories()]);

  return (
    <ToolsDirectory
      initialTools={tools || []}
      initialCategories={categories || []}
      tags={[]}
      isAdmin={false}
      adminEmail={null}
    />
  );
}
