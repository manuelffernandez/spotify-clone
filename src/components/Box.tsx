import { type DOMAttributes, type FC, type ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const boxStyles = cva('rounded-lg bg-neutral-900 w-full', {
  variants: { size: { default: 'h-fit', full: 'overflow-y-auto h-full' } },
  defaultVariants: { size: 'default' }
})

interface Props extends DOMAttributes<HTMLDivElement>, VariantProps<typeof boxStyles> {
  children: ReactNode
  className?: string
}

const Box: FC<Props> = (props) => {
  const { children, className, size } = props
  return <div className={boxStyles({ size, className })}>{children}</div>
}

export default Box
