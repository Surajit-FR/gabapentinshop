import { createSlice } from '@reduxjs/toolkit'
import { getHomePageData, getFooterData, getDeliveryInfoData, getPrivacyPolicyData, getTermsAndConditionsData, getReturnPolicydata } from '../thunks/homeThunk'

const initialState = {
    homeData:{},
    loading: 'idle',
    footerData: {},
    deliveryInfodata: {},
    privacyPolicyData: {},
    termsAndConditions: {},
    returnPolicydata:{},
}
// Then, handle actions in your reducers:
const homeReducer = createSlice({
    name: 'home',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getHomePageData.fulfilled, (state, action) => {
            state.homeData = action.payload
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getFooterData.fulfilled, (state, action) => {
            state.footerData = action.payload
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getDeliveryInfoData.fulfilled, (state, action) => {
            state.deliveryInfodata = action.payload
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getPrivacyPolicyData.fulfilled, (state, action) => {
            state.privacyPolicyData = action.payload
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getTermsAndConditionsData.fulfilled, (state, action) => {
            state.termsAndConditions = action.payload
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getReturnPolicydata.fulfilled, (state, action) => {
            state.returnPolicydata = action.payload
        })

    },
})


export default homeReducer.reducer;