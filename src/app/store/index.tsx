import { configureStore } from "@reduxjs/toolkit";
import { activeTrackModel } from "entities/player/model/playerModel";

import { trackModel } from "entities/track";

export const store = configureStore({
  reducer: {
    tracks: trackModel.reducer,
    activeTrack: activeTrackModel.reducer,
  },
});