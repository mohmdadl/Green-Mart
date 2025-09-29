// app/category/layout.tsx
export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {/* This could be a category-specific sidebar or header */}
      <nav style={{ border: '1px solid grey', padding: '10px', margin: '10px 0' }}>
        <h2> nested layout.</h2>
      </nav>

      {/* The actual page content will be rendered here */}
      {children}
    </div>
  )
}