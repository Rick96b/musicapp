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
        setActiveUser: (state, {payload: user}: PayloadAction<User>) => {
            state.user = user;
        }
    },
})

export const {setActiveUser} = activeTrackModel.actions;

export const reducer = activeTrackModel.reducer