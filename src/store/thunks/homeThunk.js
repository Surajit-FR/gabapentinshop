import { createAsyncThunk } from '@reduxjs/toolkit'
import { GETALLHOMEDATA, GETALLPRIVACYPOLICY, GETALLTERMSDATA, GETDELIVERYINFODATA, GETFOOTERDATA, GETRETURNSPOLICY } from '../../api/api'


export const getHomePageData = createAsyncThunk(
    'home/getHomeData',
    async () => {
      const response = await GETALLHOMEDATA()
      return response.data
    },
)
export const getFooterData = createAsyncThunk(
    'home/getFooterData',
    async () => {
      const response = await GETFOOTERDATA()
      return response.data
    },
)
export const getDeliveryInfoData = createAsyncThunk(
    'home/getDeliveryInfoData',
    async () => {
      const response = await GETDELIVERYINFODATA()
      return response.data
    },
)
export const getPrivacyPolicyData = createAsyncThunk(
    'home/getPrivacypolicyData',
    async () => {
      const response = await GETALLPRIVACYPOLICY()
      return response.data
    },
)
export const getTermsAndConditionsData = createAsyncThunk(
    'home/getTermsandConditions',
    async () => {
      const response = await GETALLTERMSDATA()
      return response.data
    },
)
export const getReturnPolicydata = createAsyncThunk(
    'home/getReturnPolicy',
    async () => {
      const response = await GETRETURNSPOLICY()
      return response.data
    },
)
