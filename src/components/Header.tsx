'use client'

import { cx } from 'class-variance-authority'
import { ChevronLeft, ChevronRight, Home, Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { type FC, type ReactNode } from 'react'
import { Button } from '@/components'

interface Props {
  children?: ReactNode
  className?: string
}

const Header: FC<Props> = (props) => {
  const { className, children } = props

  const router = useRouter()

  return (
    <div className={cx('h-fit bg-gradient-to-b from-emerald-800 p-6', className)}>
      <div className='mb-4 flex w-full items-center justify-between'>
        <div className='hidden items-center gap-x-2 md:flex'>
          <button onClick={() => router.back()}>
            <ChevronLeft size={35} className='rounded-full bg-black text-white transition hover:opacity-75' />
          </button>
          <button onClick={() => router.forward()}>
            <ChevronRight size={35} className='rounded-full bg-black text-white transition hover:opacity-75' />
          </button>
        </div>
        <div className='flex items-center gap-x-2 md:hidden'>
          <button className='flex items-center rounded-full bg-white p-2 transition hover:opacity-75'>
            <Home className='text-black' size={20} />
          </button>
          <button className='flex items-center rounded-full bg-white p-2 transition hover:opacity-75'>
            <Search className='text-black' size={20} />
          </button>
        </div>
        <div className='flex items-center justify-between gap-x-4'>
          <>
            <div>
              <Button intent='transparent'>Sign up</Button>
            </div>
            <div>
              <Button intent='white' size='lg'>
                Sign up
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Header
