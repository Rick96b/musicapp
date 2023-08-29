import React from 'react'
import { useDispatch } from 'react-redux';
import { trackTypes } from 'entities/track';

interface ToggleTrackProps {
    children: React.ReactNode;
    trackData: trackTypes.TrackType
}

const ToggleTrack: React.FC<ToggleTrackProps> = ({children, trackData}) => {
    const dispatch = useDispatch();

    const handleClick = () => {

    }

    return (
        <div onClick={handleClick}>
            {children}
        </div>
    )
}

export default ToggleTrack;
