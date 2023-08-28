import React from 'react'
import { useDispatch } from 'react-redux';
import { trackModel } from 'entities/track';

interface ToggleTrackProps {
    children: React.ReactNode;
    trackData: trackModel.TrackType
}

const ToggleTrack: React.FC<ToggleTrackProps> = ({children, trackData}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(trackModel.setCurrentTrack(trackData.id))
    }

    return (
        <div onClick={handleClick}>
            {children}
        </div>
    )
}

export default ToggleTrack;
