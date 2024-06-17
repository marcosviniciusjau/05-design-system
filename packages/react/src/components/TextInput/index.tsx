import { Input, Prefix, TextInputContainer } from './styles'
import { ComponentProps, forwardRef, ElementRef } from 'react'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  containerProps?: ComponentProps<typeof TextInputContainer>
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, containerProps, ...props }, ref) => {
    return (
      <TextInputContainer {...containerProps}>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'Text Input'
