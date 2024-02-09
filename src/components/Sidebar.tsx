'use client'

import { routes } from '@/utils/constants/routes'
import { Home, Search } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useMemo, type ReactNode, type FC } from 'react'
import { Box, Library, SidebarItem } from '@/components'

interface Props {
  children?: ReactNode
}

const Sidebar: FC<Props> = (props) => {
  const { children } = props
  const pathname = usePathname()

  const items = useMemo(
    () => [
      {
        label: 'Home',
        icon: Home,
        active: pathname !== routes.search,
        href: routes.home
      },
      {
        label: 'Search',
        icon: Search,
        active: pathname === routes.search,
        href: routes.search
      }
    ],
    [pathname]
  )

  return (
    <aside className='flex h-full'>
      <div className='hidden h-full w-[300px] flex-col gap-y-2 bg-black md:flex'>
        <Box>
          <div className='flex flex-col gap-y-4 px-5 py-4'>
            {items.map((item, idx) => (
              <SidebarItem key={idx} label={item.label} Icon={item.icon} href={item.href} active={item.active} />
            ))}
          </div>
        </Box>
        <Box size='full'>
          <Library />
        </Box>
      </div>
      <main className='h-full flex-1 overflow-y-auto py-2'>{children}</main>
    </aside>
  )
}

export default Sidebar
