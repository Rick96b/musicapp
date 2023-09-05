import React from 'react'
import { Slide, IconButton } from '@mui/material'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Slider from '@mui/material/Slider';
import classNames from 'classnames'

import styles from './TrackPlayerModal.module.scss';
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

const TrackPlayerModal:React.FC<TrackPlayerModalProps> = ({
    open, 
    handleClose, 
    activeTrack, 
    duration, 
    handleDurationChanges, 
    handleToggleTrack, 
    handleVolumeChanges, 
    volume}) => {

    return (
        <Slide in={open} direction='up' mountOnEnter unmountOnExit>
            <div 
                className={classNames(styles.container, open ? styles.containerOpen : '')}
            >
                <div className={styles.headerContainer}>
                    <IconButton sx={{color: '#fff', fontSize: '23px'}} onClick={handleClose}>
                        <KeyboardArrowDownIcon sx={{fontSize: 'inherit'}}/>
                    </IconButton>
                </div>
                <img src={activeTrack.avatarLink} alt='logo' className={styles.logo}/>
                <div className={styles.topContainer}>
                    <p className={styles.trackInfo}>
                        <span className={styles.name}>{activeTrack.name}</span>
                        <span className={styles.authorName}>{activeTrack.authorName}</span>
                    </p>
                    <IconButton>
                        <FavoriteIcon />
                    </IconButton>
                </div>
                <Slider 
                    value={duration}
                    aria-label="duration"
                    valueLabelDisplay="off" 
                    size='small'
                    onChange={handleDurationChanges}
                    max={activeTrack.durationInSeconds}
                />
                <IconButton className={styles.toggleButton} sx={{color: '#fff', fontSize: "62px"}} onClick={handleToggleTrack}>
                {
                    activeTrack.isPlaying ?
                    <PauseCircleFilledIcon sx={{fontSize: 'inherit'}}/>
                    :
                    <PlayCircleIcon sx={{fontSize: 'inherit'}}/>
                }
                </IconButton>
                {/* <Slider 
                    value={volume}
                    aria-label="duration"
                    valueLabelDisplay="off" 
                    size='small'
                    max={100}
                    onChange={(event) => handleVolumeChanges(event)}
                /> */}
            </div>
        </Slide>
    )
}

export default TrackPlayerModal;
