import { createSlice } from "@reduxjs/toolkit";

export const trackerSlice = createSlice({
    name: "tracker",
    initialState: {
        infected: "",
        recovered: "",
        deaths: "",
        active: "",
        lastUpdate: ""
    },
    reducers: {
        api: (state, action) => {
            state.infected = action.payload.confirmed.value
            state.recovered = action.payload.recovered.value
            state.deaths = action.payload.deaths.value
            state.active = action.payload.confirmed.value - action.payload.deaths.value
            state.lastUpdate = action.payload.lastUpdate
        }
    }
})
export const { updateInfected, updateRecovered, updateDeaths, updateActive, api } = trackerSlice.actions
export default trackerSlice.reducer