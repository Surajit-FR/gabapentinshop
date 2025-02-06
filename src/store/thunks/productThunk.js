
import { createAsyncThunk } from '@reduxjs/toolkit'
import { GETALLPRODUCTS, GETALLPRODUCTSPERCATEGORY, GETPRODUCTDETAILS } from '../../api/api'


// First, create the thunk
export const getProductsPerCategory = createAsyncThunk(
    'product/getAllProductsPercategory',
    async (categoryId) => {
      const response = await GETALLPRODUCTSPERCATEGORY(categoryId)
      return response.data.result.product_list
    },
)
  
// First, create the thunk
export const getProductDetails = createAsyncThunk(
    'product/getProductDetails',
    async (id) => {
      const response = await GETPRODUCTDETAILS(id)
      return response.data.result.details
    },
)
// First, create the thunk
export const getAllProducts = createAsyncThunk(
    'product/getAllProducts',
    async () => {
      const response = await GETALLPRODUCTS()
      return response.data.result.products
    },
)
  
