import { configureStore } from '@reduxjs/toolkit'
import categoriesReducers from './reducers/categorySlice'
import productReducer from './reducers/productSlice'

export const store = configureStore({
    reducer: {
    categories: categoriesReducers,
    products: productReducer
    },
  })