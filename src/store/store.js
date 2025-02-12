import { configureStore } from '@reduxjs/toolkit'
import categoriesReducers from './reducers/categorySlice'
import productReducer from './reducers/productSlice'
import blogReducer from './reducers/blogSlice'
export const store = configureStore({
    reducer: {
    categories: categoriesReducers,
    products: productReducer,
    blogs: blogReducer
    },
  })