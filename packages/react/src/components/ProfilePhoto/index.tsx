import {
  ProfilePhotoContainer,
  ProfilePhotoImage,
  ProfilePhotoFallback,
} from './styles'
import { User } from '@phosphor-icons/react/dist/ssr'
import { ComponentProps } from 'react'

export interface ProfilePhotoProps
  extends ComponentProps<typeof ProfilePhotoImage> {}
export function ProfilePhoto(props: ProfilePhotoProps) {
  return (
    <ProfilePhotoContainer>
      <ProfilePhotoImage {...props} />

      <ProfilePhotoFallback delayMs={600}>
        <User />
      </ProfilePhotoFallback>
    </ProfilePhotoContainer>
  )
}

ProfilePhoto.displayName = 'ProfilePhoto'
