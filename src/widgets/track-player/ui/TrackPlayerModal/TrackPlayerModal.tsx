import React, {useState} from 'react'
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import Slider from '@mui/material/Slider';


import styles from './TrackPlayerModal.module.scss';
import { trackTypes } from 'entities/track';
import { playerTypes } from 'entities/player';

interface TrackPlayerModalProps {
    open: boolean;
    handleClose: () => void;
    activeTrack: playerTypes.ActiveTrackType;
    duration: number;
    volume: number;
    handleDurationChanges: (event: any) => void;
    handleVolumeChanges: (event: any) => void;
    handleToggleTrack: (event: React.MouseEvent) => void;
}

const TrackPlayerModal:React.FC<TrackPlayerModalProps> = ({open, handleClose, activeTrack, duration, handleDurationChanges, handleToggleTrack, handleVolumeChanges, volume}) => {

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
                value={duration}
                aria-label="duration"
                valueLabelDisplay="off" 
                size='small'
                onChange={handleDurationChanges}
                max={activeTrack.durationInSeconds}
            />
            <p className={styles.trackInfo}>
                <span className={styles.name}>{activeTrack.name}</span>
                <span className={styles.authorName}>{activeTrack.authorName}</span>
            </p>
            <IconButton className={styles.toggleButton} onClick={handleToggleTrack}>
            {
                activeTrack.isPlaying ?
                <PauseOutlinedIcon />
                :
                <PlayArrowIcon />
            }
            </IconButton>
            <Slider 
                value={volume}
                aria-label="duration"
                valueLabelDisplay="off" 
                size='small'
                max={100}
                onChange={(event) => handleVolumeChanges(event)}
            />
        </div>
    </Modal>
  )
}

export default TrackPlayerModal;
