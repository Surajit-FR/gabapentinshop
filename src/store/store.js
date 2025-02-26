import { configureStore } from '@reduxjs/toolkit'
import categoriesReducers from './reducers/categorySlice'
import productReducer from './reducers/productSlice'
import blogReducer from './reducers/blogSlice'
import homeReducer from './reducers/homeSlice'
import faqReducer from './reducers/faqSlice'
import contactReducer from './reducers/contactSlice'

export const store = configureStore({
    reducer: {
    categories: categoriesReducers,
    products: productReducer,
    blogs: blogReducer,
    home: homeReducer,
    faq:faqReducer,
    contact: contactReducer,
    },
  })