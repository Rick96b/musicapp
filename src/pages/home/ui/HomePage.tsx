import { Track } from 'entities/track';
import { ToggleTrack } from 'features/toggle-track';
import React from 'react'

const HomePage = () => {
  const track = {
    id: 1,
    avatarLink: 'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/5b/94/b8/5b94b890-8fb1-2c0e-b879-efba6ea3e600/cover.jpg/1200x1200bf-60.jpg',
    name: 'friends',
    authorName: 'Chase atlantic',
    durationInSeconds: 230,
  }

  

  return (
    <div>
        <ToggleTrack trackData={track}>
          <Track trackData={track} />
        </ToggleTrack>
    </div>
  )
}

export default HomePage;
