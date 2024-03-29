import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import './theme-config.css'
import NavBar from './NavBar'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
 })

export const metadata: Metadata = {
  title: 'Trackify',
  description: 'Track your Issues',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Theme appearance='light' accentColor='violet'>
          <NavBar />
          <main className='p-5'>{children}</main>
        </Theme>
      </body>
    </html>
  )
}
