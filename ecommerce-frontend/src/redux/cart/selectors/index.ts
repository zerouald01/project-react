import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@redux/store";

const selectItems = (state : RootState) => state.cart.items;

export const selectTotalQuantity = createSelector(
    [selectItems],
    (items) => Object.values(items).reduce((acc, quantity) => acc + quantity, 0)
)