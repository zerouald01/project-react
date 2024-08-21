import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TCategory } from "@customtypes/category";

export type TResponse = TCategory[];

const actGetCategories = createAsyncThunk(
    'categories/actGetCategories',
    async (_,{rejectWithValue}) => {
        try {
            const response = await axios.get<TResponse>('http://localhost:5000/categories')
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
export default actGetCategories