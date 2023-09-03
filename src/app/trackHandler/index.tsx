import { trackModel, trackSelectors, trackTypes } from 'entities/track'
import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import friends from 'shared/assets/friends.mp3'
import weather from 'shared/assets/weather.mp3'

let audioTune: HTMLAudioElement = new Audio();

const TrackHandler:React.FC = () => {
    const activeTrack = useSelector(trackSelectors.getActiveTrack)
 
    useEffect(() => {
      if(activeTrack) {
        const file = activeTrack.name === 'friends' ? friends : weather
        audioTune.setAttribute("src", file);
        audioTune.load();
        audioTune.play();
      }
    }, [activeTrack?.id])
  
    useEffect(() => {
      if(activeTrack?.isPlaying) audioTune.play();
      else audioTune.pause();
    }, [activeTrack?.isPlaying])


    return (
        <></>
    )

}

export default TrackHandler;
