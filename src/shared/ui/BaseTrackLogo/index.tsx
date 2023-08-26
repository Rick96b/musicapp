import { Avatar } from '@mui/material';
import React from 'react'

interface BaseAvatarProps {
    children?: React.ReactNode | string;
    src?: string;
}

const BaseAvatar: React.FC<BaseAvatarProps> = ({src, children}) => {
  return (
    <Avatar
        src={src}
        variant="rounded"
    >
      {children}
    </Avatar>
  )
}

export default BaseAvatar;
