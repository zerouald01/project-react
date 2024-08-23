import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore, 
  FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
 } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import categoriesReducer from './categories/categoriesSlice';
import productsReducer from './products/productsSlice';
import cartReducer from './cart/cartSlice';




const cartPersistConfig = {
  key : 'cart',
  storage,
  whitelist : ['items'],
}

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

const rootRudcer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: persistedCartReducer,
})

export const store = configureStore({
  reducer: rootRudcer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({serializableCheck : {
      ignoredActions : [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }
  }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const persistore = persistStore(store)

export default  store