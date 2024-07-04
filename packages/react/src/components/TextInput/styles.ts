import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'center',

  variants: {
    size: {
      sm: { padding: '$2 $3' },
      md: { padding: '$3 $4' },
    },
  },
  defaultVariants: {
    size: 'md',
  },

  '&:has(input:focus)': {
    borderColor: '$blue300',
  },
  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: '$regular',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray400',
  },
})

export const InputWrapper = styled('div', {
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '$sm',
  border: '2px solid $gray300',
  display: 'flex',
  alignItems: 'center',
  '&:has(input:focus)': {
    borderColor: '$blue300',
  },
  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const RightText = styled('span', {
  color: '$gray400',
  fontSize: '$sm',
})
