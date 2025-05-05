import { createSlice } from '@reduxjs/toolkit'
import { getContactData } from '../thunks/contactUsThunk'

const initialState = {
    contactUsData: [],
    meta_tags_contct_us:{},
    loading: 'idle',
}

// Then, handle actions in your reducers:
const contactReducer = createSlice({
    name: 'faq',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getContactData.fulfilled, (state, action) => {
            // Add user to the state array
            state.contactUsData = action.payload.getintouch_data
            state.meta_tags_contct_us= action.payload.meta_data
        })

    },
})


export default contactReducer.reducer;