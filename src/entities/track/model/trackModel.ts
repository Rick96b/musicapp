import {
    createSelector,
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export type TrackType = {
    id: number
    avatarLink: string;
    name: string;
    authorName: string;
    durationInSeconds: number;
}

export type CurrentTrackType = TrackType & {
    completedDurationInSeconds: number;
    isPlaying: boolean;
}

const initialState: {
    tracks: TrackType[]
    currentTrack: CurrentTrackType | {}
} = {
    tracks: [{
        id: 1,
        avatarLink: 'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/5b/94/b8/5b94b890-8fb1-2c0e-b879-efba6ea3e600/cover.jpg/1200x1200bf-60.jpg',
        name: 'friends',
        authorName: 'Chase atlantic',
        durationInSeconds: 230,
      }],
    currentTrack: {}
}

export const tracksModel = createSlice({
    name: "tracks",
    initialState,
    reducers: {
        setTracks: (state, {payload: traks}: PayloadAction<TrackType[]>) => {
            state.tracks = traks;
        },
        setCurrentTrack: (state, {payload: trackId}: PayloadAction<number>) => {
            state.currentTrack = {
                ...state.tracks.find(track => track.id === trackId), 
                completedDurationInSeconds: 0,
                isPlaying: true
            } || {}
        }
    },
})

export const {setCurrentTrack} = tracksModel.actions;

export const reducer = tracksModel.reducer