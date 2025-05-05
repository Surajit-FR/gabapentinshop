import { createAsyncThunk } from '@reduxjs/toolkit'
import { GETALLFAQDATA } from '../../api/api'


// First, create the thunk
export const getFaqData = createAsyncThunk(
    'product/getFaqdata',
    async () => {
      const response = await GETALLFAQDATA()
      return response.data
    },
)