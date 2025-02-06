import { createSlice } from '@reduxjs/toolkit'
import { getCategoryList } from '../thunks/categoryThunk'


const initialState = {
    categories: [],
    loading: 'idle',
}


// Then, handle actions in your reducers:
const categoriesReducer = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getCategoryList.fulfilled, (state, action) => {
            // Add user to the state array
            state.categories = action.payload
        })
    },
})


export default categoriesReducer.reducer;