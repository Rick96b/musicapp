import { IconButton } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import React, { useState } from 'react'

import styles from './TrackPlayer.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import TrackPlayerModal from '../TrackPlayerModal/TrackPlayerModal';
import { playerModel, playerSelectors } from 'entities/player';
import useAudio from '../../hooks/useAudio';



const TrackPlayer: React.FC = () => {
  const activeTrack = useSelector(playerSelectors.getActiveTrack)

  const {duration, volume, handleVolumeChanges, handleDurationChanges} = useAudio({activeTrack})
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch()

  const handleModalClose = () => {
    setModalOpen(false)
  }

  const handleModalOpen = () => {
    setModalOpen(true)
  }

  const handleCloseTrack = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(playerModel.removeActiveTrack())
  }

  const handleToggleTrack = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(playerModel.toggleActiveTrack())
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
          duration={duration}
          volume={volume}
          handleDurationChanges={handleDurationChanges}
          handleVolumeChanges={handleVolumeChanges}
          handleToggleTrack={handleToggleTrack}
        />
      </>
    )
  }
 
  return <></>
}

export default TrackPlayer
