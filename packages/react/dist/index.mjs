// src/styles/index.ts
import { createStitches, defaultThemeMap } from '@stitches/react'

// src/components/ProfilePhoto/styles.ts
import * as Avatar from '@radix-ui/react-avatar'

// src/components/ProfilePhoto/index.tsx
import { User } from '@phosphor-icons/react/dist/ssr'
import { jsx, jsxs } from 'react/jsx-runtime'

// src/components/TextInput/index.tsx
import { forwardRef } from 'react'

// src/components/TextInput/index.tsx
import { jsx as jsx2, jsxs as jsxs2 } from 'react/jsx-runtime'

// src/components/Checkbox/index.tsx
import { Check } from '@phosphor-icons/react/dist/ssr'

// src/components/Checkbox/styles.ts
import * as Checkbox from '@radix-ui/react-checkbox'

// src/components/Checkbox/index.tsx
import { jsx as jsx3 } from 'react/jsx-runtime'

// src/components/MutiStep/index.tsx
import { jsx as jsx4, jsxs as jsxs3 } from 'react/jsx-runtime'

const __defProp = Object.defineProperty
const __defProps = Object.defineProperties
const __getOwnPropDescs = Object.getOwnPropertyDescriptors
const __getOwnPropSymbols = Object.getOwnPropertySymbols
const __hasOwnProp = Object.prototype.hasOwnProperty
const __propIsEnum = Object.prototype.propertyIsEnumerable
const __defNormalProp = (obj, key, value) =>
  key in obj
    ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value,
      })
    : (obj[key] = value)
const __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop])
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop])
    }
  return a
}
const __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b))
const __objRest = (source, exclude) => {
  const target = {}
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop]
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop]
    }
  return target
}

// ../tokens/dist/index.mjs
const colors = {
  white: '#FFF',
  black: '#000',
  gray100: '#E1E1E6',
  gray200: '#A9A9B2',
  gray400: '#7C7C8A',
  gray500: '#505059',
  gray600: '#323238',
  gray700: '#29292E',
  gray800: '#202024',
  gray900: '#121214',
  blue300: '#63C2E7',
  blue500: '#289DD2',
  blue700: '#007BFF',
  blue900: '#0056b3',
}
const space = {
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  40: '10rem',
  64: '16rem',
  80: '20rem',
}
const radii = {
  px: '1px',
  xs: '4px',
  sm: '6px',
  md: '8px',
  lg: '16px',
  full: '99999px',
}
const fonts = {
  default: 'Roboto, sans-serif',
  code: 'monospace',
}
const fontSizes = {
  xxs: '0.625rem',
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '4xl': '2rem',
  '5xl': '2.25rem',
  '6xl': '3rem',
  '7xl': '4rem',
  '8xl': '4.5rem',
  '9xl': '6rem',
}
const fontWeights = {
  regular: '400',
  medium: '500',
  bold: '700',
}
const lineHeights = {
  shorter: '125%',
  short: '140%',
  base: '160%',
  tall: '180%',
}
const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: __spreadProps(__spreadValues({}, defaultThemeMap), {
    height: 'space',
    width: 'space',
  }),
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})

// src/components/Box.tsx
const Box = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})
Box.displayName = 'Box'

// src/components/Text.tsx
const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$gray100',
  variants: {
    size: {
      xxs: { fontSize: '$xxs' },
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '4xl': { fontSize: '$4xl' },
      '5xl': { fontSize: '$5xl' },
      '6xl': { fontSize: '$6xl' },
      '7xl': { fontSize: '$7xl' },
      '8xl': { fontSize: '$8xl' },
      '9xl': { fontSize: '$9xl' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
Text.displayName = 'Text'

// src/components/Heading.tsx
const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$shorter',
  margin: 0,
  color: '$gray100',
  variants: {
    size: {
      sm: { fontSize: '$xl' },
      md: { fontSize: '$2xl' },
      lg: { fontSize: '$4xl' },
      '2xl': { fontSize: '$5xl' },
      '3xl': { fontSize: '$6xl' },
      '4xl': { fontSize: '$7xl' },
      '5xl': { fontSize: '$8xl' },
      '6xl': { fontSize: '$9xl' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
Heading.displayName = 'Heading'
const ProfilePhotoContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '$16',
  height: '$16',
  overflow: 'hidden',
})
const ProfilePhotoImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})
const ProfilePhotoFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  color: '$gray800',
  svg: {
    width: '$6',
    height: '$6',
  },
})
function ProfilePhoto(props) {
  return /* @__PURE__ */ jsxs(ProfilePhotoContainer, {
    children: [
      /* @__PURE__ */ jsx(ProfilePhotoImage, __spreadValues({}, props)),
      /* @__PURE__ */ jsx(ProfilePhotoFallback, {
        delayMs: 600,
        children: /* @__PURE__ */ jsx(User, {}),
      }),
    ],
  })
}
ProfilePhoto.displayName = 'ProfilePhoto'

// src/components/Button.tsx
const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',
  svg: {
    width: '$4',
    height: '$4',
  },
  '&:disabled': {
    cursor: 'not-allowed',
  },
  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },
  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$blue500',
        '&:not(:disabled):hover': {
          background: '$blue300',
        },
        '&:disabled': {
          background: '$gray200',
        },
      },
      secondary: {
        color: '$blue300',
        border: '2px solid $blue500',
        '&:not(:disabled):hover': {
          background: '$blue500',
          color: '$white',
        },
        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },
      tertiary: {
        color: '$gray100',
        '&:not(:disabled):hover': {
          color: '$white',
        },
        '&:disabled': {
          color: '$gray600',
        },
      },
    },
    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})
Button.displayName = 'Button'

// src/components/TextInput/styles.ts
const TextInputContainer = styled('div', {
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
const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: '$regular',
})
const Input = styled('input', {
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
const InputWrapper = styled('div', {
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
const RightText = styled('span', {
  color: '$gray400',
  fontSize: '$sm',
})
const TextInput = forwardRef((_a, ref) => {
  const _b = _a
  const { prefix, containerProps } = _b
  const props = __objRest(_b, ['prefix', 'containerProps'])
  return /* @__PURE__ */ jsxs2(
    TextInputContainer,
    __spreadProps(__spreadValues({}, containerProps), {
      children: [
        !!prefix && /* @__PURE__ */ jsx2(Prefix, { children: prefix }),
        /* @__PURE__ */ jsx2(Input, __spreadValues({ ref }, props)),
      ],
    }),
  )
})
TextInput.displayName = 'TextInput'

// src/components/TextArea.tsx
const TextArea = styled('textarea', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  resize: 'vertical',
  minHeight: 80,
  '&:focus': {
    outline: 0,
    borderColor: '$blue300',
  },
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  '&:placeholder': {
    color: '$gray400',
  },
})
TextArea.displayName = 'TextArea'
const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $gray900',
  '&:focus, &[data-state="checked"]': {
    border: '2px solid $blue300',
  },
  '&[data-state="checked"]': {
    backgroundColor: '$blue300',
  },
})
const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})
const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})
const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',
  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})
function Checkbox2(props) {
  return /* @__PURE__ */ jsx3(
    CheckboxContainer,
    __spreadProps(__spreadValues({}, props), {
      children: /* @__PURE__ */ jsx3(CheckboxIndicator, {
        asChild: true,
        children: /* @__PURE__ */ jsx3(Check, { weight: 'bold' }),
      }),
    }),
  )
}
Checkbox2.displayName = 'Checkbox'

// src/components/MutiStep/styled.ts
const MultiStepContainer = styled('div', {})
const Label = styled(Text, {
  color: '$gray200',
  defaultVariants: {
    size: 'xs',
  },
})
const Steps = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
  gap: '$2',
  marginTop: '$1',
})
const Step = styled('div', {
  height: '$1',
  borderRadius: '$px',
  backgroundColor: '$gray600',
  variants: {
    active: {
      true: {
        backgroundColor: '$gray100',
      },
    },
  },
})
function MultiStep({ size, currentStep = 1 }) {
  return /* @__PURE__ */ jsxs3(MultiStepContainer, {
    children: [
      /* @__PURE__ */ jsxs3(Label, {
        children: ['Passo de ', currentStep, ' de ', size],
      }),
      /* @__PURE__ */ jsx4(Steps, {
        css: { '--steps-size': size },
        children: Array.from({ length: size }, (_, i) => i + 1).map((step) =>
          /* @__PURE__ */ jsx4(Step, { active: currentStep >= step }, step),
        ),
      }),
    ],
  })
}
MultiStep.displayName = 'MultiStep'
export {
  Box,
  Button,
  Checkbox2 as Checkbox,
  Heading,
  MultiStep,
  ProfilePhoto,
  Text,
  TextArea,
  TextInput,
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
}
