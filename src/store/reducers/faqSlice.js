import { createSlice } from '@reduxjs/toolkit'
import { getFaqData } from '../thunks/faqThunk'

const initialState = {
    faqData: [],
    meta_tags_faq_page: {},
    loading: 'idle',
}

// Then, handle actions in your reducers:
const faqReducer = createSlice({
    name: 'faq',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getFaqData.fulfilled, (state, action) => {
            // Add user to the state array
            state.faqData = action.payload.faq_data
            state.meta_tags_faq_page= action.payload.meta_data
        })

    },
})


export default faqReducer.reducer;