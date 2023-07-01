

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type FilterState ={value:number}
const initialState :FilterState = {value:0}

const filterSlice = createSlice({
    name: 'filter',
        initialState,
    reducers: {
        setFilter(state, action: PayloadAction<number>) {
            state.value = action.payload
        }
    }
})

const { setFilter } = filterSlice.actions
export {setFilter}
export default filterSlice.reducer