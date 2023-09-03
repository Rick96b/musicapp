import {
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit";
import { TrackType } from "./types";

const initialState: {
    tracks: TrackType[]
} = {
    tracks: [],
}

export const tracksModel = createSlice({
    name: "tracks",
    initialState,
    reducers: {
        setTracks: (state, {payload: tracks}: PayloadAction<TrackType[]>) => {
            state.tracks = tracks
        },
    },
})

export const {setTracks} = tracksModel.actions;

export const reducer = tracksModel.reducer