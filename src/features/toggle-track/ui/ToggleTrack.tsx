import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { trackTypes } from 'entities/track';
import { playerModel, playerSelectors } from 'entities/player';

import styles from './ToggleTrack.module.scss';

interface ToggleTrackProps {
    children: React.ReactNode;
    trackData: trackTypes.TrackType
}

const ToggleTrack: React.FC<ToggleTrackProps> = ({children, trackData}) => {
    const activeTrack = useSelector(playerSelectors.getActiveTrack);
    const dispatch = useDispatch();

    const handleClick = () => {

        if(!activeTrack || activeTrack.id !== trackData.id) {
            dispatch(playerModel.setActiveTrack(
                {
                    ...trackData,
                    isPlaying: true,
                }
            ))
        } else {
            dispatch(playerModel.toggleActiveTrack())
        }
    }

    return (
        <div onClick={handleClick} className={styles.toggleTrack}>
            {children}
        </div>
    )
}

export default ToggleTrack;
