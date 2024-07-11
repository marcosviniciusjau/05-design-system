import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@marcos-vinicius-design-system/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, mollitia quas velit dignissimos perspiciatis deserunt, laboriosam ad commodi incidunt vero, consequatur dolorum dolorem nihil? Cumque est veniam eius fugit nulla.',
  },
  argTypes: {
    size: {
      options: [
        'sm',
        'md',
        'lg',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
