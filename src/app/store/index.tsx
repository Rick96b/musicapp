import { configureStore } from "@reduxjs/toolkit";

import { trackModel } from "entities/track";

export const store = configureStore({
  reducer: {
    tracks: trackModel.reducer,
  },
});