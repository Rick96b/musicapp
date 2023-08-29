import { createSelector } from "reselect";

export const getActiveTrack = createSelector(
    (state: RootState) => state.tracks.activeTrack,
    (activeTrack: RootState['tracks']['activeTrack']) => activeTrack
)