import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const categories = await Promise.all([
    prisma.toolCategory.upsert({ where: { slug: 'marketing' }, update: {}, create: { name: 'Marketing', slug: 'marketing' } }),
    prisma.toolCategory.upsert({ where: { slug: 'development' }, update: {}, create: { name: 'Development', slug: 'development' } }),
    prisma.toolCategory.upsert({ where: { slug: 'design' }, update: {}, create: { name: 'Design', slug: 'design' } }),
    prisma.toolCategory.upsert({ where: { slug: 'productivity' }, update: {}, create: { name: 'Productivity', slug: 'productivity' } }),
    prisma.toolCategory.upsert({ where: { slug: 'analytics' }, update: {}, create: { name: 'Analytics', slug: 'analytics' } }),
  ]);

  const tags = await Promise.all([
    prisma.toolTag.upsert({ where: { slug: 'automation' }, update: {}, create: { name: 'Automation', slug: 'automation' } }),
    prisma.toolTag.upsert({ where: { slug: 'analytics-tag' }, update: {}, create: { name: 'Analytics', slug: 'analytics-tag' } }),
    prisma.toolTag.upsert({ where: { slug: 'ai' }, update: {}, create: { name: 'AI', slug: 'ai' } }),
    prisma.toolTag.upsert({ where: { slug: 'collaboration' }, update: {}, create: { name: 'Collaboration', slug: 'collaboration' } }),
    prisma.toolTag.upsert({ where: { slug: 'free' }, update: {}, create: { name: 'Free', slug: 'free' } }),
  ]);

  await prisma.user.upsert({
    where: { email: 'admin@toolseno.io' },
    update: {},
    create: { email: 'admin@toolseno.io', name: 'Admin', role: 'admin' }
  });

  const toolsData = [
    { name: 'HubSpot', slug: 'hubspot', shortDescription: 'CRM platform with marketing, sales, and customer service tools', toolUrl: 'https://hubspot.com', pricingType: 'FREEMIUM', isFeatured: true, isSponsored: true, rating: 4.5, categorySlug: 'marketing' },
    { name: 'Canva', slug: 'canva', shortDescription: 'Online design platform for creating graphics and presentations', toolUrl: 'https://canva.com', pricingType: 'FREEMIUM', isFeatured: true, rating: 4.7, categorySlug: 'design' },
    { name: 'Notion', slug: 'notion', shortDescription: 'All-in-one workspace for notes, docs, and project management', toolUrl: 'https://notion.so', pricingType: 'FREEMIUM', isFeatured: true, rating: 4.8, categorySlug: 'productivity' },
    { name: 'GitHub', slug: 'github', shortDescription: 'Platform for hosting and collaborating on Git repositories', toolUrl: 'https://github.com', pricingType: 'FREEMIUM', rating: 4.9, categorySlug: 'development' },
    { name: 'Figma', slug: 'figma', shortDescription: 'Collaborative interface design tool for teams', toolUrl: 'https://figma.com', pricingType: 'FREEMIUM', isFeatured: true, isSponsored: true, rating: 4.8, categorySlug: 'design' },
    { name: 'Slack', slug: 'slack', shortDescription: 'Team communication and collaboration platform', toolUrl: 'https://slack.com', pricingType: 'FREEMIUM', rating: 4.6, categorySlug: 'productivity' },
    { name: 'Google Analytics', slug: 'google-analytics', shortDescription: 'Web analytics service for tracking website traffic', toolUrl: 'https://analytics.google.com', pricingType: 'FREE', rating: 4.5, categorySlug: 'analytics' },
    { name: 'VS Code', slug: 'vs-code', shortDescription: 'Free source code editor with debugging and Git', toolUrl: 'https://code.visualstudio.com', pricingType: 'FREE', rating: 4.9, categorySlug: 'development' },
    { name: 'Mailchimp', slug: 'mailchimp', shortDescription: 'Email marketing platform with automation features', toolUrl: 'https://mailchimp.com', pricingType: 'FREEMIUM', isSponsored: true, rating: 4.4, categorySlug: 'marketing' },
    { name: 'ChatGPT', slug: 'chatgpt', shortDescription: 'AI-powered conversational assistant by OpenAI', toolUrl: 'https://chat.openai.com', pricingType: 'FREEMIUM', isFeatured: true, rating: 4.7, categorySlug: 'productivity' },
    { name: 'Trello', slug: 'trello', shortDescription: 'Visual project management with boards and cards', toolUrl: 'https://trello.com', pricingType: 'FREEMIUM', rating: 4.5, categorySlug: 'productivity' },
    { name: 'Semrush', slug: 'semrush', shortDescription: 'SEO, content marketing, and competitor research tool', toolUrl: 'https://semrush.com', pricingType: 'PAID', isSponsored: true, rating: 4.6, categorySlug: 'marketing' },
    { name: 'Vercel', slug: 'vercel', shortDescription: 'Platform for frontend developers to deploy and scale', toolUrl: 'https://vercel.com', pricingType: 'FREEMIUM', rating: 4.8, categorySlug: 'development' },
    { name: 'Mixpanel', slug: 'mixpanel', shortDescription: 'Product analytics for user behavior tracking', toolUrl: 'https://mixpanel.com', pricingType: 'FREEMIUM', rating: 4.5, categorySlug: 'analytics' },
    { name: 'Jasper', slug: 'jasper', shortDescription: 'AI content generation platform for marketing', toolUrl: 'https://jasper.ai', pricingType: 'PAID', isSponsored: true, rating: 4.4, categorySlug: 'marketing' },
  ];

  for (const toolData of toolsData) {
    const category = categories.find(c => c.slug === toolData.categorySlug);
    await prisma.tool.upsert({
      where: { slug: toolData.slug },
      update: {},
      create: {
        name: toolData.name,
        slug: toolData.slug,
        shortDescription: toolData.shortDescription,
        toolUrl: toolData.toolUrl,
        pricingType: toolData.pricingType as any,
        isFeatured: toolData.isFeatured || false,
        isSponsored: toolData.isSponsored || false,
        rating: toolData.rating,
        categoryId: category?.id,
      }
    });
  }

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
