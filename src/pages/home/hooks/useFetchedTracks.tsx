import { trackTypes } from 'entities/track';
import React, { useState, useEffect } from 'react'

interface useFetcherProps {
    fetcher: (callback: React.Dispatch<React.SetStateAction<trackTypes.TrackType[] | null>>) => void
}

const useFetchedTracks = ({fetcher}: useFetcherProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<trackTypes.TrackType[] | null>(null);
    const [error, setError] = useState();

    useEffect(() => {
        try {
            setIsLoading(true)
            fetcher(setData)
        } catch(error: any) {
            setError(error)
            setIsLoading(false)
        }
    }, [])

    return {data, isLoading, error}
}

export default useFetchedTracks;