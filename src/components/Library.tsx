'use client'

import { ListMusic, Plus } from 'lucide-react'
import { type ReactNode, type FC } from 'react'

interface Props {
  children?: ReactNode
}

const Library: FC<Props> = (props) => {
  const onClick = async () => {
    console.log('click')
  }

  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-between px-5 pt-4'>
        <div className='inline-flex items-center gap-x-2'>
          <ListMusic size={26} className='text-neutral-400' />
          <p className='text-md font-medium text-neutral-400'>Your library</p>
        </div>
        <Plus size={15} className='cursor-pointer text-neutral-400 transition hover:text-white' onClick={onClick} />
      </div>
      <div className='mt-4 flex flex-col gap-y-2 px-3'>List of Songs</div>
    </div>
  )
}

export default Library
