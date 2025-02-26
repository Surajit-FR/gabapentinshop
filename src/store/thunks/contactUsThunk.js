import { createAsyncThunk } from '@reduxjs/toolkit'
import { GETALLCONTACTUSDATA } from '../../api/api'


// First, create the thunk
export const getContactData = createAsyncThunk(
    'contact/getContactData',
    async () => {
      const response = await GETALLCONTACTUSDATA()
      return response.data.getintouch_data
    },
)