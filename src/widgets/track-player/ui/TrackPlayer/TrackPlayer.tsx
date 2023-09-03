import { IconButton } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import React, {useState} from 'react'
import { trackModel, trackSelectors, trackTypes } from 'entities/track';

import styles from './TrackPlayer.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import TrackPlayerModal from '../TrackPlayerModal/TrackPlayerModal';


const TrackPlayer: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const activeTrack = useSelector(trackSelectors.getActiveTrack)
  const dispatch = useDispatch()

  const handleToggleTrack = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(trackModel.toggleActiveTrack())
  }

  const handleModalClose = () => {
    setModalOpen(false)
  }

  const handleModalOpen = () => {
    setModalOpen(true)
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
          <IconButton>
            <CloseOutlinedIcon />
          </IconButton>
        </article>
        <TrackPlayerModal 
          open={modalOpen} 
          handleClose={handleModalClose} 
          activeTrack={activeTrack}/>
      </>
    )
  }
 
  return <></>
}

export default TrackPlayer
