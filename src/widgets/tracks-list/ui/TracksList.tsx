import React from 'react'

import styles from './TracksList.module.scss';
import { Track, trackTypes } from 'entities/track';
import { ToggleTrack } from 'features/toggle-track';

interface TracksListProps {
    tracksData: trackTypes.TrackType[] | null
}

const TracksList: React.FC<TracksListProps> = ({tracksData}) => {
  if(!tracksData) return <></>
  return (
    <ul className={styles.trackList}>
      {tracksData.map(track => 
        <li className={styles.trackContainer}>
          <ToggleTrack trackData={track}>
            <Track trackData={track} />
          </ToggleTrack>
        </li>
      )}
    </ul>
  )
}

export default TracksList;
