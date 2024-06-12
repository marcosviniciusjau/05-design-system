import type { Meta, StoryObj } from '@storybook/react'
import { ProfilePhoto, ProfilePhotoProps } from '@ignite-ui/react'

export default {
  title: 'Data Display/ProfilePhoto',
  component: ProfilePhoto,
  args: {
    src: 'https://github.com/marcosviniciusjau.png',
    alt: 'Marcos Vinicius',
  },
} as Meta<ProfilePhotoProps>

export const Primary: StoryObj<ProfilePhotoProps> = {}

export const WithFallback: StoryObj<ProfilePhotoProps> = {
  args: {
    src: undefined,
  },
}
