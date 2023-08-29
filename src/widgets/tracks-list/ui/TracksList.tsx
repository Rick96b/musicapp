import React from 'react'

import styles from './TracksList.module.scss';
import { Track, trackTypes } from 'entities/track';

interface TracksListProps {
    tracksData: trackTypes.TrackType[]
}

const TracksList: React.FC<TracksListProps> = ({tracksData}) => {
  return (
    <ul className={styles.trackList}>
      {tracksData.map(track => 
        <Track trackData={track} />
      )}
    </ul>
  )
}

export default TracksList;
