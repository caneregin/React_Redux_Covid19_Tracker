import { configureStore } from "@reduxjs/toolkit";
import trackerSlice from "./trackerPreviewer/trackerSlice";

export const store = configureStore({
    reducer:{
        tracker: trackerSlice
    },
})