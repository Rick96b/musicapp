import React from 'react'
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import Slider from '@mui/material/Slider';


import styles from './TrackPlayerModal.module.scss';
import { trackTypes } from 'entities/track';

interface TrackPlayerModalProps {
    open: boolean;
    handleClose: () => void;
    activeTrack: trackTypes.ActiveTrackType;
}

const TrackPlayerModal:React.FC<TrackPlayerModalProps> = ({open, handleClose, activeTrack}) => {
  return (
    <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={open}
        onClose={handleClose} 
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <div 
            className={styles.container}
        >
            <img src={activeTrack.avatarLink} alt='logo' className={styles.logo}/>
            <Slider 
                value={activeTrack.completedDurationInSeconds / activeTrack.durationInSeconds * 100}
                aria-label="duration"
                valueLabelDisplay="off" 
                size='small'
            />
            <p className={styles.trackInfo}>
                <span className={styles.name}>{activeTrack.name}</span>
                <span className={styles.authorName}>{activeTrack.authorName}</span>
            </p>
            <IconButton className={styles.toggleButton}>
            {
                activeTrack.isPlaying ?
                <PauseOutlinedIcon />
                :
                <PlayArrowIcon />
            }
            </IconButton>
        </div>
    </Modal>
  )
}

export default TrackPlayerModal;
