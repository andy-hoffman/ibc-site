import { ReactNode } from "react";

export default function IbcContent({
  children,
}: {
  children: ReactNode,
}) {
  return (
  <main className="w-full h-screen">
    {children}
  </main>  
  )
}
