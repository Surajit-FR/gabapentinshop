import { createAsyncThunk } from '@reduxjs/toolkit'
import { GETCATEGORYLIST } from '../../api/api'


// First, create the thunk
export const getCategoryList = createAsyncThunk(
    'category/getAllCategories',
    async () => {
      const response = await GETCATEGORYLIST()
      return response.data.result.list
    },
)
  