import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@marcos-vinicius-design-system/react'

export default {
  title: 'Surface/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testando o elemento Box</span>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
