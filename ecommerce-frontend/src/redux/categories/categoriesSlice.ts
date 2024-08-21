import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./thunk/actGetCategories";
export interface ICategoriesStatus {
    records : { id : number, title : string, prefix : string, img : string}[];
    loading : 'idle' | 'pending' | 'succeeded' | 'failed',
    error : string | null;
}
const initialState : ICategoriesStatus = {
    records : [],
    loading : 'idle',
    error : null,   
}

const categoriesSlice = createSlice({
    name : 'categories',
    initialState,
    reducers :{},
    extraReducers : (builder) => {
        builder
            .addCase(actGetCategories.pending, (state) => {
                state.loading = 'pending'
                state.error = null
            })
            .addCase(actGetCategories.fulfilled, (state, action) => {
                state.loading = 'succeeded'
                state.records = action.payload
            })
            .addCase(actGetCategories.rejected, (state, action) => {
                state.loading = 'failed'
                if(action.error.message && typeof action.error.message === 'string') {
                    state.error = action.error.message
                }
                // state.error = action.error.message as string
            })
    }
})

export {actGetCategories}
export default categoriesSlice.reducer