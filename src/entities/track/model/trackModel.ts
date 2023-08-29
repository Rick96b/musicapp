import {
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit";
import { ActiveTrackType, TrackType } from "./types";

const initialState: {
    tracks: TrackType[]
    activeTrack: ActiveTrackType
} = {
    tracks: [],
    activeTrack: {}
}

export const tracksModel = createSlice({
    name: "tracks",
    initialState,
    reducers: {
        setTracks: (state, {payload: tracks}: PayloadAction<TrackType[]>) => {
            state.tracks = tracks
        },
        setActiveTrack: (state, {payload: trackId}: PayloadAction<number>) => {
            state.activeTrack = {
                ...state.tracks.find(track => track.id === trackId),
                isPlaying: true,
                durationInSeconds: 0,
            }
        },
        toggleActiveTrack: ({activeTrack}) => {
            activeTrack.isPlaying = !activeTrack.isPlaying
        }
    },
})

export const {setTracks, setActiveTrack, toggleActiveTrack} = tracksModel.actions;

export const reducer = tracksModel.reducer