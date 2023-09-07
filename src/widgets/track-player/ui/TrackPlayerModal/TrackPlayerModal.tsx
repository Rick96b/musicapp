import React from 'react'
import { Slide, IconButton } from '@mui/material'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import Slider from '@mui/material/Slider';
import classNames from 'classnames'

import styles from './TrackPlayerModal.module.scss';
import { playerTypes } from 'entities/player';
import { formatDuration } from 'shared/utils/formatDuration';

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
                    <IconButton className={styles.backButton} onClick={handleClose}>
                        <KeyboardArrowDownIcon sx={{font: 'inherit'}}/>
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
                <div className={styles.sliderContainer}>
                    <Slider 
                        value={duration}
                        aria-label="duration"
                        valueLabelDisplay="off" 
                        size='small'
                        onChange={handleDurationChanges}
                        max={activeTrack.durationInSeconds}
                        sx={{
                            color: '#fff'
                        }}
                    />
                    <span>
                        {formatDuration(duration)}
                    </span>
                    <span style={{marginLeft: "auto"}}>
                        {formatDuration(activeTrack.durationInSeconds - duration)}
                    </span>
                </div>
                <div className={styles.buttonsContainer}>
                    <IconButton className={styles.skipPreviousButton}>
                        <SkipPreviousIcon sx={{font: 'inherit'}} />
                    </IconButton>
                    <IconButton className={styles.toggleButton}onClick={handleToggleTrack}>
                    {
                        activeTrack.isPlaying ?
                        <PauseCircleFilledIcon sx={{font: 'inherit'}}/>
                        :
                        <PlayCircleIcon sx={{font: 'inherit'}}/>
                    }
                    </IconButton>
                    <IconButton className={styles.skipNextButton}>
                        <SkipNextIcon sx={{font: 'inherit'}}/>
                    </IconButton>
                </div>
                
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
