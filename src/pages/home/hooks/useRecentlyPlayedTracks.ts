import { trackTypes } from 'entities/track';
import { fetchCurrentTracksById } from 'entities/track/api/fetchers';
import { TrackType } from 'entities/track/model/types';
import { userTypes } from 'entities/user';
import React, { useState, useEffect } from 'react'

interface useFetcherProps {
    fetcher: (callback: React.Dispatch<React.SetStateAction<trackTypes.TrackType[] | null>>) => void
}

const useRecentlyPlayedTracks = (user: userTypes.User | null): [TrackType[] | null, boolean, Error | undefined]=> {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<trackTypes.TrackType[] | null>(null);
    const [error, setError] = useState();

    useEffect(() => {
        try {
            setIsLoading(true)
            fetchCurrentTracksById(user?.recentlyPlayed)
            .then(data => {
                console.log(data)
                setData(data)
                setIsLoading(false)
            })
        } catch(error: any) {
            setError(error)
            setIsLoading(false)
        }
    }, [])

    return [data, isLoading, error];
}

export default useRecentlyPlayedTracks;