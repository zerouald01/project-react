import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "@customtypes/product";
import { selectTotalQuantity } from "./selectors/index";


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
    reducers :{
        addToCart : (state, action) => {
            const id = action.payload;
            if(state.items[id]) {
                state.items[id] ++;
            } else {
                state.items[id] = 1
            }   
        }
    },
})




export {selectTotalQuantity}

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer