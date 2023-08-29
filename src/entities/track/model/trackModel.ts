import {
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit";
import { ActiveTrackType, TrackType } from "./types";

const initialState: {
    tracks: TrackType[]
    currentTrack: ActiveTrackType | {}
} = {
    tracks: [],
    currentTrack: {}
}

export const tracksModel = createSlice({
    name: "tracks",
    initialState,
    reducers: {

    },
})

export const {} = tracksModel.actions;

export const reducer = tracksModel.reducer