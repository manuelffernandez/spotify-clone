import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/components'

const figtree = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Listen to music!'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={figtree.className}>
        <div className='flex h-full p-2 md:gap-2'>
          {/* <Sidebar>{children}</Sidebar> */}
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  )
}
