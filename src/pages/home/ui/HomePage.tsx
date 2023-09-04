import { trackFetchers, trackModel, trackTypes } from 'entities/track';
import { fetchAllTracks } from 'entities/track/api/fetchers';
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { TrackPlayer } from 'widgets/track-player';
import { TracksList } from 'widgets/tracks-list';
import useFetchedTracks from '../hooks/useFetchedTracks';

const HomePage = () => {
  const {data, isLoading, error} = useFetchedTracks({fetcher: fetchAllTracks});
  const dispatch = useDispatch()

  if(data) {
    dispatch(trackModel.setTracks(data))
  }
 

  console.log(data)

  return (
    <div>
        <TracksList tracksData={data || []} />
        <TrackPlayer />
    </div>
  )
}

export default HomePage;
