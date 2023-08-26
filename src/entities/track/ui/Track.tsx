import React from 'react'

import styles from './Track.module.scss'
import { TrackType } from '../model/trackModel';
import BaseAvatar from 'shared/ui/BaseTrackLogo';


interface TrackProps {
  trackData: TrackType;
}

const Track: React.FC<TrackProps> = ({trackData}) => {

  let formatedTrackDuration = new Date(trackData.durationInSeconds * 1000)
  .toISOString()
  .slice(11, 19);

  // remove all unnecessary zeros
  for(let i = 0; i < formatedTrackDuration.length; i++) {
    if(formatedTrackDuration[i] != '0' && formatedTrackDuration[i] != ':') {
      formatedTrackDuration = formatedTrackDuration.slice(i)
      break
    }
  }

  return (
    <article className={styles.track}>
        <div className={styles.trackAvatarContainer}>
            <BaseAvatar src={trackData.avatarLink} />
        </div>
        <p className={styles.trackInfo}>
          <span className={styles.trackName}>{trackData.name}</span>
          <span className={styles.trackAuthorName}>{trackData.authorName}</span>
        </p>
        <p className={styles.trackDuration}>
          {formatedTrackDuration}
        </p>
    </article>
  )
}

export default Track;
