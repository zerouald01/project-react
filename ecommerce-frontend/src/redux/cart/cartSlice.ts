import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "@customtypes/product";

export interface ICartState {
    items :{[key : number] : number};
    prodFullInfo : TProduct[];
}

const initialState : ICartState = {
    items : {},
    prodFullInfo : [],
}

const cartSlice = createSlice({
    name : 'cart',
    initialState ,
    reducers :{},
})

export default cartSlice.reducer