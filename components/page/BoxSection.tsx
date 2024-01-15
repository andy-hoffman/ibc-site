export default function BoxSection(
{
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto p-10">
      {children}
    </div>    
  )
}


