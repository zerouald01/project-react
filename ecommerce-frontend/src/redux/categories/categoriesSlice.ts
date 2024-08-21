import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./thunk/actGetCategories";
import { TLoading } from "@customtypes/loading";
import { TCategory } from "@customtypes/category";
export interface ICategoriesStatus {
    records : TCategory[];
    loading : TLoading,
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