import { createAsyncThunk } from '@reduxjs/toolkit'
import { MAILTOCONTACT } from '../../api/api'

export const mailToContact = createAsyncThunk(
    'mail/mailToContact',
    async (data) => {
      const response = await MAILTOCONTACT(data)
      return response.data.msg
    },
)