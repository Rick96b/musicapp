import { trackModel } from 'entities/track';
import React from 'react'
import { useDispatch } from 'react-redux';
import friends from 'shared/assets/friends.mp3';
import weather from 'shared/assets/weather.mp3'
import { TrackPlayer } from 'widgets/track-player';
import { TracksList } from 'widgets/tracks-list';

const HomePage = () => {
  const trackData = [{
    id: 1,
    avatarLink: 'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/5b/94/b8/5b94b890-8fb1-2c0e-b879-efba6ea3e600/cover.jpg/1200x1200bf-60.jpg',
    name: 'friends',
    authorName: 'Chase atlantic',
    durationInSeconds: 230,
    trackLink: friends
  },
  {
    id: 2,
    avatarLink: 'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/5b/94/b8/5b94b890-8fb1-2c0e-b879-efba6ea3e600/cover.jpg/1200x1200bf-60.jpg',
    name: 'weather',
    authorName: 'Chase atlantic',
    durationInSeconds: 230,
    trackLink: weather
  }
]

  const dispatch = useDispatch()
  dispatch(trackModel.setTracks(trackData))

  return (
    <div>
        <TracksList tracksData={trackData} />
        <TrackPlayer />
    </div>
  )
}

export default HomePage;
