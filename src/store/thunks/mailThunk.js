import { createAsyncThunk } from '@reduxjs/toolkit'
import { MAILORDER, MAILTOCONTACT } from '../../api/api'

export const mailToContact = createAsyncThunk(
    'mail/mailToContact',
    async (data) => {
      const response = await MAILTOCONTACT(data)
      return response.data.msg
    },
)
export const mailOrder = createAsyncThunk(
    'mail/mailOrder',
    async (data) => {
      const response = await MAILORDER(data)
      return response.data.msg
    },
)