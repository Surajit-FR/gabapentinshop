import { createAsyncThunk } from '@reduxjs/toolkit'
import { GETALLBLOGS, GETBLOGDETAILS } from '../../api/api'


// First, create the thunk
export const getAllBlogs = createAsyncThunk(
    'product/getAllBlogs',
    async (categoryId) => {
      const response = await GETALLBLOGS(categoryId)
      return response.data.result
    },
)

// First, create the thunk
export const getBlogDetails = createAsyncThunk(
    'product/getBlogDetails',
    async (id) => {
      const response = await GETBLOGDETAILS(id)
      return response.data.result.blog
    },
)