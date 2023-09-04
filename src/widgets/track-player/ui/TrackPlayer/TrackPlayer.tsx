import { IconButton } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import React, {useEffect, useState} from 'react'

import styles from './TrackPlayer.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import TrackPlayerModal from '../TrackPlayerModal/TrackPlayerModal';
import { playerModel, playerSelectors } from 'entities/player';

let audioTune: HTMLAudioElement = new Audio();
audioTune.volume = 0.3;

const TrackPlayer: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [duration, setDuration] = useState(audioTune.currentTime);
  const [volume, setVolume] = useState(audioTune.volume * 100);

  const activeTrack = useSelector(playerSelectors.getActiveTrack)
  const dispatch = useDispatch()

  const handleToggleTrack = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(playerModel.toggleActiveTrack())
  }

  const handleModalClose = () => {
    setModalOpen(false)
  }

  const handleModalOpen = () => {
    setModalOpen(true)
  }

  const handleChange = (event: any) => {
    audioTune.currentTime = event.target.value
  }

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

  const handleCloseTrack = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(playerModel.removeActiveTrack())
  }

  if(activeTrack) {
    return (
      <>
        <article className={styles.trackPLayer} onClick={handleModalOpen}>
          <IconButton onClick={(event) => handleToggleTrack(event)}>
            {
              activeTrack.isPlaying ?
              <PauseOutlinedIcon />
              :
              <PlayArrowIcon />
            }
          </IconButton>
          <p className={styles.trackInfo}>
            <span className={styles.name}>{activeTrack.name}</span>
            <span className={styles.authorName}>{activeTrack.authorName}</span>
          </p>
          <IconButton onClick={handleCloseTrack}>
            <CloseOutlinedIcon />
          </IconButton>
        </article>
        <TrackPlayerModal 
          open={modalOpen} 
          handleClose={handleModalClose} 
          activeTrack={activeTrack}
          duration={audioTune.currentTime}
          volume={volume}
          handleDurationChanges={handleChange}
          handleVolumeChanges={handleVolumeChanges}
          handleToggleTrack={handleToggleTrack}
        />
      </>
    )
  }
 
  return <></>
}

export default TrackPlayer
