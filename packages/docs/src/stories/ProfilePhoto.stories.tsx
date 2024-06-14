import type { Meta, StoryObj } from '@storybook/react'
import { ProfilePhoto, ProfilePhotoProps } from '@marcosvinicius-ignite-ui/react'

export default {
  title: 'Data display/ProfilePhoto',
  component: ProfilePhoto,
  args: {
    src: 'https://github.com/diego3g.png',
    alt: 'Diego Fernandes',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<ProfilePhotoProps>

export const Primary: StoryObj<ProfilePhotoProps> = {}

export const WithFallback: StoryObj<ProfilePhotoProps> = {
  args: {
    src: undefined,
  },
}
