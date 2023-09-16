import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { TrackPlayer } from 'widgets/track-player';
import { TracksList } from 'widgets/tracks-list';

import styles from './HomePage.module.scss';
import useRecentlyPlayedTracks from '../hooks/useRecentlyPlayedTracks';
import { userSelectors } from 'entities/user';

const HomePage = () => {
  const user = useSelector(userSelectors.getActiveUser);
  const [data, isLoading, error] = useRecentlyPlayedTracks(user);
  const dispatch = useDispatch()
  console.log(data)
  if(error) console.log(error)

  if(isLoading) return <></>


  return (
    <div className={styles.pageContainer}>
      <section className={styles.recentlyPlayer}>
        <h2>Recently played</h2>
        <TracksList tracksData={data} />
      </section>
        
        <TrackPlayer />
    </div>
  )
}

export default HomePage;
