import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { trackModel, trackSelectors, trackTypes } from 'entities/track';

import styles from './ToggleTrack.module.scss';

interface ToggleTrackProps {
    children: React.ReactNode;
    trackData: trackTypes.TrackType
}

const ToggleTrack: React.FC<ToggleTrackProps> = ({children, trackData}) => {
    const activeTrack = useSelector(trackSelectors.getActiveTrack);
    const dispatch = useDispatch();

    const handleClick = () => {

        if(activeTrack?.id !== trackData.id) {
            dispatch(trackModel.setActiveTrack(trackData.id))
        } else {
            dispatch(trackModel.toggleActiveTrack())
        }
    }

    return (
        <div onClick={handleClick} className={styles.toggleTrack}>
            {children}
        </div>
    )
}

export default ToggleTrack;
