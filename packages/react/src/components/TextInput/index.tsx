import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Input, InputMasks, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  containerProps?: ComponentProps<typeof TextInputContainer>
  mask?: string
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, containerProps, mask, ...props }, ref) => {
    return (
      <TextInputContainer {...containerProps}>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        {mask ? (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          <InputMasks ref={ref as any} mask={mask} {...props} />
        ) : (
          <Input ref={ref} {...props} />
        )}
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
