import React from 'react'

import styles from './Track.module.scss'
import {TrackType} from '../model/types'
import BaseAvatar from 'shared/ui/BaseTrackLogo';
import { formatDuration } from 'shared/utils/formatDuration';


interface TrackProps {
  trackData: TrackType;
}

const Track: React.FC<TrackProps> = ({trackData}) => {
  const formatedTrackDuration = formatDuration(trackData.durationInSeconds);

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
