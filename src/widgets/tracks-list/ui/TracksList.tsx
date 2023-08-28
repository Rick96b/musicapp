import React from 'react'

import styles from './TracksList.module.scss';
import { Track, trackModel } from 'entities/track';

interface TracksListProps {
    tracksData: trackModel.TrackType[]
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
