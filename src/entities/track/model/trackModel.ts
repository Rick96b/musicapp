import {
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit";
import { ActiveTrackType, TrackType } from "./types";

const initialState: {
    tracks: TrackType[]
    activeTrack: ActiveTrackType | null
} = {
    tracks: [],
    activeTrack: null
}

export const tracksModel = createSlice({
    name: "tracks",
    initialState,
    reducers: {
        setTracks: (state, {payload: tracks}: PayloadAction<TrackType[]>) => {
            state.tracks = tracks
        },
        setActiveTrack: (state, {payload: trackId}: PayloadAction<number>) => {
            const currentTrack = state.tracks.find(track => track.id === trackId) 
            if(currentTrack)
                state.activeTrack = {
                    ...currentTrack,
                    isPlaying: true,
                    completedDurationInSeconds: 0,
                }
            else    
                console.log('There is no appropriate track in tracks list')
        },
        toggleActiveTrack: ({activeTrack}) => {
            if(activeTrack) activeTrack.isPlaying = !activeTrack.isPlaying
            else console.log('There is no active track')
        }
    },
})

export const {setTracks, setActiveTrack, toggleActiveTrack} = tracksModel.actions;

export const reducer = tracksModel.reducer