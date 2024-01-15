export default function FullWidthSection(
{
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full">
      {children}
    </div>    
  )
}


