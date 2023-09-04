import { playerTypes } from 'entities/player';
import React, { useState, useEffect } from 'react'

interface useAudioProps {
    activeTrack: playerTypes.ActiveTrackType | null
}

let audioTune: HTMLAudioElement = new Audio();
audioTune.volume = 0.3;

const useAudio = ({activeTrack}: useAudioProps) => {
    const [duration, setDuration] = useState(audioTune.currentTime);
    const [volume, setVolume] = useState(audioTune.volume * 100);
    
    useEffect(() => {
        if(activeTrack) {
            audioTune.setAttribute("src", activeTrack.trackLink);
            audioTune.load();
            audioTune.play();
        }
    }, [activeTrack?.id])

    useEffect(() => {
        if(activeTrack?.isPlaying) audioTune.play();
        else audioTune.pause();
    }, [activeTrack?.isPlaying])

    audioTune.addEventListener('timeupdate', ()=> {
        setDuration(audioTune.currentTime)
    })

    const handleVolumeChanges = (event: any) => {
        setVolume(event.target.value)
        audioTune.volume = event.target.value / 100;
    }

    const handleDurationChanges = (event: any) => {
        audioTune.currentTime = event.target.value
    }

    return {duration, volume, handleVolumeChanges, handleDurationChanges}
}

export default useAudio
  