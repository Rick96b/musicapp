import {
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit";
import { User } from "./types";

const initialState: {
    user: User | null
} = {
    user: null,
}

export const activeTrackModel = createSlice({
    name: "user",
    initialState,
    reducers: {
       
    },
})

export const {} = activeTrackModel.actions;

export const reducer = activeTrackModel.reducer