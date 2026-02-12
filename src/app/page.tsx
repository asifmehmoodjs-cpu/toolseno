export default function Home() {
  const tools = [
    { id: '1', name: 'HubSpot', description: 'CRM platform with marketing tools', pricing: 'Freemium', rating: 4.5, category: 'Marketing', featured: true, sponsored: true },
    { id: '2', name: 'Canva', description: 'Online design platform', pricing: 'Freemium', rating: 4.7, category: 'Design', featured: true, sponsored: false },
    { id: '3', name: 'Notion', description: 'All-in-one workspace', pricing: 'Freemium', rating: 4.8, category: 'Productivity', featured: true, sponsored: false },
    { id: '4', name: 'GitHub', description: 'Git repository hosting', pricing: 'Freemium', rating: 4.9, category: 'Development', featured: false, sponsored: false },
    { id: '5', name: 'Figma', description: 'Design tool for teams', pricing: 'Freemium', rating: 4.8, category: 'Design', featured: true, sponsored: true },
    { id: '6', name: 'Slack', description: 'Team communication', pricing: 'Freemium', rating: 4.6, category: 'Productivity', featured: false, sponsored: false },
    { id: '7', name: 'ChatGPT', description: 'AI assistant', pricing: 'Freemium', rating: 4.7, category: 'Productivity', featured: true, sponsored: false },
    { id: '8', name: 'VS Code', description: 'Code editor', pricing: 'Free', rating: 4.9, category: 'Development', featured: false, sponsored: false },
  ];

  const categories = ['All', 'Marketing', 'Design', 'Productivity', 'Development'];
  const pricingTypes = ['All', 'Free', 'Freemium', 'Paid'];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Header */}
      <header style={{ backgroundColor: 'white', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#2563eb', margin: 0 }}>ToolSeno.io</h1>
          <p style={{ color: '#6b7280', margin: '5px 0 0 0' }}>Discover the best tools for your needs</p>
        </div>
      </header>

      {/* Search and Filters */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <input 
            type="text" 
            placeholder="Search tools..." 
            style={{ flex: 1, minWidth: '200px', padding: '10px 15px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '14px' }}
          />
          <select style={{ padding: '10px 15px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '14px', backgroundColor: 'white' }}>
            {categories.map(cat => <option key={cat}>{cat}</option>)}
          </select>
          <select style={{ padding: '10px 15px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '14px', backgroundColor: 'white' }}>
            {pricingTypes.map(p => <option key={p}>{p}</option>)}
          </select>
        </div>

        {/* Tools Grid with AdSense Placeholders */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          
          {/* Tool Cards */}
          {tools.map((tool, index) => (
            <div key={tool.id}>
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb', position: 'relative' }}>
                {/* Featured/Sponsored Badges */}
                {(tool.featured || tool.sponsored) && (
                  <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', gap: '5px' }}>
                    {tool.featured && <span style={{ backgroundColor: '#fef3c7', color: '#92400e', fontSize: '10px', padding: '2px 8px', borderRadius: '4px', fontWeight: '500' }}>⭐ Featured</span>}
                    {tool.sponsored && <span style={{ backgroundColor: '#ffedd5', color: '#9a3412', fontSize: '10px', padding: '2px 8px', borderRadius: '4px', fontWeight: '500' }}>👑 Sponsored</span>}
                  </div>
                )}
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: '#eff6ff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', fontWeight: 'bold', color: '#2563eb' }}>
                    {tool.name.charAt(0)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: '600', margin: 0, color: '#111827' }}>{tool.name}</h3>
                    <span style={{ fontSize: '12px', color: '#6b7280' }}>{tool.category}</span>
                  </div>
                </div>
                
                <p style={{ color: '#4b5563', fontSize: '14px', margin: '0 0 12px 0', lineHeight: '1.5' }}>{tool.description}</p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ 
                    backgroundColor: tool.pricing === 'Free' ? '#dcfce7' : '#dbeafe', 
                    color: tool.pricing === 'Free' ? '#166534' : '#1e40af', 
                    fontSize: '12px', 
                    padding: '4px 10px', 
                    borderRadius: '6px', 
                    fontWeight: '500' 
                  }}>{tool.pricing}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ color: '#fbbf24', fontSize: '16px' }}>★</span>
                    <span style={{ fontSize: '14px', fontWeight: '600', color: '#374151' }}>{tool.rating}</span>
                  </div>
                </div>
              </div>
              
              {/* AdSense Placeholder - After every 4 tools */}
              {(index + 1) % 4 === 0 && (
                <div style={{ 
                  backgroundColor: '#f3f4f6', 
                  border: '2px dashed #d1d5db', 
                  borderRadius: '12px', 
                  padding: '30px', 
                  textAlign: 'center',
                  marginTop: '20px'
                }}>
                  <p style={{ color: '#9ca3af', fontSize: '14px', margin: 0 }}>📢 AdSense Placeholder</p>
                  <p style={{ color: '#d1d5db', fontSize: '12px', margin: '5px 0 0 0' }}>300x250 or Responsive Ad</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom AdSense Placeholder */}
        <div style={{ 
          backgroundColor: '#f3f4f6', 
          border: '2px dashed #d1d5db', 
          borderRadius: '12px', 
          padding: '40px', 
          textAlign: 'center',
          marginTop: '30px'
        }}>
          <p style={{ color: '#9ca3af', fontSize: '14px', margin: 0 }}>📢 AdSense Placeholder - Banner Ad</p>
          <p style={{ color: '#d1d5db', fontSize: '12px', margin: '5px 0 0 0' }}>728x90 Leaderboard or Responsive</p>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: 'white', borderTop: '1px solid #e5e7eb', marginTop: '40px', padding: '20px', textAlign: 'center' }}>
        <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>© 2025 ToolSeno.io - All rights reserved</p>
      </footer>
    </div>
  );
}
