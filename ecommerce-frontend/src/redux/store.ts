import { configureStore, combineReducers } from '@reduxjs/toolkit'
import categoriesReducer from './categories/categoriesSlice'
import productsReducer from './products/productsSlice'
import cartReducer from './cart/cartSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'




const cartPersistConfig = {
  key : 'cart',
  storage,
}

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

const rootRudcer = combineReducers({
  categoriesReducer,
  productsReducer,
  cartReducer : persistedCartReducer
})

export const store = configureStore({
  reducer: rootRudcer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const persistore = persistStore(store)

export default  store