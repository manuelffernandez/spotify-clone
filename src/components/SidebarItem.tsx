import { cx } from 'class-variance-authority'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { type ElementType, type FC } from 'react'

interface Props {
  label: string
  active?: boolean
  href: string
  Icon: LucideIcon | ElementType
}

const SidebarItem: FC<Props> = (props) => {
  const { label, active, href, Icon } = props
  return (
    <Link
      href={href}
      className={cx(
        'text-md flex h-auto w-full cursor-pointer flex-row items-center gap-x-4 py-1 font-medium transition hover:text-white',
        active ? 'text-white' : 'text-neutral-400'
      )}
    >
      <Icon size={26} />
      <p className='w-full truncate'>{label}</p>
    </Link>
  )
}

export default SidebarItem
