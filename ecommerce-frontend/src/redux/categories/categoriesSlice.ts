import { createSlice } from "@reduxjs/toolkit";

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
    reducers :{}
})

export default categoriesSlice.reducer