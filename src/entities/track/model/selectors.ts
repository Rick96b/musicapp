export const createGetTrackSelector = (id: number) => (state: RootState) => state.tracks.tracks.find(track => track.id === id)

