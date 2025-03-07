import { createSlice } from '@reduxjs/toolkit'
import { mailOrder, mailToContact } from '../thunks/mailThunk'

const initialState = {
    loading: 'idle',
    message: '',
}

// Then, handle actions in your reducers:
const mailReducer = createSlice({
    name: 'mail',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
        cleanup: ()=>{
                    return initialState
                }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(mailToContact.pending, (state) => {
            // Add user to the state array
            state.message = 'pending'
        })
        builder.addCase(mailToContact.fulfilled, (state, action) => {
            // Add user to the state array
            state.message = action.payload
        })
        builder.addCase(mailToContact.rejected, (state, action) => {
            // Add user to the state array
            state.message = action.payload || 'fail'
        })
        builder.addCase(mailOrder.pending, (state) => {
            // Add user to the state array
            state.message = 'pending'
        })
        builder.addCase(mailOrder.fulfilled, (state, action) => {
            // Add user to the state array
            state.message = action.payload
        })
        builder.addCase(mailOrder.rejected, (state, action) => {
            // Add user to the state array
            state.message = action.payload || "fail"
        })

    },
})

export const {
    cleanup,
} = mailReducer.actions

export default mailReducer.reducer;