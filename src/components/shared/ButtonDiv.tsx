import { type ForwardedRef, forwardRef, type KeyboardEvent } from 'react'

interface ButtonDivProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export const ButtonDiv = forwardRef(
  (
    { children, onClick, ...restProps }: ButtonDivProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const handleKeyDown = ( e: KeyboardEvent<HTMLDivElement> ) => {
      if ( e.key === 'Enter' || e.key === ' ' ) {
        e.preventDefault()
        if ( onClick ) {
          onClick( e as unknown as React.MouseEvent<HTMLDivElement> )
        }
      }
    }

    return (
      // biome-ignore lint/a11y/noStaticElementInteractions: <Avoid linter>
      <div ref={ref} onClick={onClick} onKeyDown={handleKeyDown} {...restProps}>
        {children}
      </div>
    )
  },
)

ButtonDiv.displayName = 'ButtonDiv'
