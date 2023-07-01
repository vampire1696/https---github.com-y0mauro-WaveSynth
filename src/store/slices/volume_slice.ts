

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type VolumeState ={value:number}
const initialState :VolumeState = {value:0.5}

const volumeSlice = createSlice({
    name: 'volume',
        initialState,
    reducers: {
        setVolume(state, action: PayloadAction<number>) {
            state.value = action.payload
        }
    }
})

const { setVolume } = volumeSlice.actions
export {setVolume}
export default volumeSlice.reducer