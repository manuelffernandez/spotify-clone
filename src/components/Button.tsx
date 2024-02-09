import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef, type ButtonHTMLAttributes } from 'react'

const buttonStyles = cva(
  'transition w-full font-bold text-sm sm:text-base rounded-full hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50 border border-transparent',
  {
    variants: {
      intent: {
        default: 'bg-green-500 text-black',
        transparent: 'bg-transparent text-neutral-300 font-medium',
        white: 'bg-white text-black'
      },
      size: { default: 'px-2 py-2 sm:px-3 sm:py-3', lg: 'px-4 py-1 sm:px-6 sm:py-2' }
    },
    defaultVariants: {
      intent: 'default',
      size: 'default'
    }
  }
)

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyles> {}

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { children, className, intent, size, disabled, type = 'button', ...additionalProps } = props
  return (
    <button
      type={type}
      className={buttonStyles({ intent, size, className })}
      disabled={disabled}
      ref={ref}
      {...additionalProps}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
