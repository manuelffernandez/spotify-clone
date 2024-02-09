'use client'

import { useRouter } from 'next/navigation'
import { type FC, type ReactNode } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

interface Props {
  image: string
  name: string
  href: string
  children?: ReactNode
}

const ListItem: FC<Props> = (props) => {
  const { image, name, href } = props

  const router = useRouter()
  const onClick = () => {
    router.push(href)
  }

  return (
    <button
      className='group relative flex items-center gap-x-4 overflow-hidden rounded-md bg-neutral-100/10 pr-4 transition hover:bg-neutral-100/20'
      onClick={onClick}
    >
      <div className='relative min-h-[64px] min-w-[64px]'>
        <Image className='object-cover' fill src={image} alt='Image' />
      </div>
      <p className='truncate py-5 font-medium'>{name}</p>
      <div className='absolute right-5 flex items-center justify-center rounded-full bg-green-500 p-4 opacity-0 drop-shadow-md transition hover:scale-110 group-hover:opacity-100'>
        <Play className='text-black' fill='black' size={13} />
      </div>
    </button>
  )
}

export default ListItem
