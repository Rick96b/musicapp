import {
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit";
import { ActiveTrackType } from "./types";

const initialState: {
    activeTrack: ActiveTrackType | null
} = {
    activeTrack: null,
}

export const activeTrackModel = createSlice({
    name: "activeTrack",
    initialState,
    reducers: {
        setActiveTrack: (state, {payload: newActiveTrack}: PayloadAction<ActiveTrackType>) => {
            state.activeTrack = newActiveTrack
        },
        toggleActiveTrack: ({activeTrack}) => {
            if(activeTrack) activeTrack.isPlaying = !activeTrack.isPlaying
            else console.log('There is no active track')
        },
        removeActiveTrack: (state) => {
            state.activeTrack = null
        },
    },
})

export const {setActiveTrack, toggleActiveTrack, removeActiveTrack} = activeTrackModel.actions;

export const reducer = activeTrackModel.reducer


