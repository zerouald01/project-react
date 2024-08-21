import { createSlice } from "@reduxjs/toolkit";
import actGetProducts from "./thunk/actGetProducts";
import { TLoading } from "@customtypes/loading";
import { TProduct } from "@customtypes/product";
export interface ICategoriesState {
    records : TProduct[];
    loading : TLoading,
    error : string | null;
}
const initialState : ICategoriesState = {
    records : [],
    loading : 'idle',
    error : null,   
}

const productsSlice = createSlice({
    name : 'products',
    initialState,
    reducers :{
        clearProducts : (state) => {
            state.records = []
        }
    },
    extraReducers : (builder) => {
        builder
            .addCase(actGetProducts.pending, (state) => {
                state.loading = 'pending'
                state.error = null
            })
            .addCase(actGetProducts.fulfilled, (state, action) => {
                state.loading = 'succeeded'
                state.records = action.payload
            })
            .addCase(actGetProducts.rejected, (state, action) => {
                state.loading = 'failed'
                if(action.error.message && typeof action.error.message === 'string') {
                    state.error = action.error.message
                }
            })
    }
})
export const {clearProducts} = productsSlice.actions
export {actGetProducts}
export default productsSlice.reducer