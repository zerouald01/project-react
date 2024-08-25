import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProduct } from "@customtypes/product";

export type TResponse = TProduct[];

const actGetProducts = createAsyncThunk(
    'products/actGetProducts',
    async (prefix: string ,{rejectWithValue}) => {
        try {
            const response = await axios.get<TResponse>(`/products?cat_prefix=${prefix}`)
            return response.data
        } catch (error) {
            if(axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message || error.message)
            }else {
                return rejectWithValue(error)
            }
        }
    }
)
export default actGetProducts