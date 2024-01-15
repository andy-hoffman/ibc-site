
import type { Metadata } from 'next'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import './globals.css'
import IbcFooter from '../components/page/IbcFooter'
import IbcHeader from '../components/page/IbcHeader'
import IbcContent from '@/components/page/IbcContent'

const defaultFont = Roboto({
  weight: "300",
  style: 'normal',
  subsets: ['latin'],
 })

 
export const metadata: Metadata = {
  title: 'Indiana Buddhist Center',
  description: 'Tibetan Buddhist Center in Indianapolis, Indiana',
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  const header = await IbcHeader()

  return (
    <html>
      <head>
        <title>Indiana Buddhist Center</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
      </head>
      <body>
          <header />
          <IbcContent>
            {children}
          </IbcContent>          
          <IbcFooter />
      </body>
    </html>
  )
}
