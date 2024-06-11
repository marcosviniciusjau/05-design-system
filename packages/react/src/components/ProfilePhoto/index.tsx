import { ProfilePhotoContainer, ProfilePhotoImage } from './styles'
import { User } from 'phosphor-react'
import { AvatarFallback } from '@radix-ui/react-avatar'
import { ComponentProps } from 'react'

export interface ProfilePhotoProps
  extends ComponentProps<typeof ProfilePhotoImage> {}
export function ProfilePhoto(props: ProfilePhotoProps) {
  return (
    <ProfilePhotoContainer>
      <ProfilePhotoImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </ProfilePhotoContainer>
  )
}
