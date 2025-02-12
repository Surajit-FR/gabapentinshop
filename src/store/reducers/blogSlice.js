import { createSlice } from '@reduxjs/toolkit'
import { getAllBlogs, getBlogDetails } from '../thunks/blogThunk'

const initialState = {
    blogs: [],
    singleBlog:{},
    loading: 'idle',
}


// Then, handle actions in your reducers:
const blogReducer = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getAllBlogs.fulfilled, (state, action) => {
            // Add user to the state array
            state.blogs = action.payload
        })
        builder.addCase(getBlogDetails.fulfilled, (state, action) => {
            // Add user to the state array
            state.singleBlog = action.payload
        })
    },
})


export default blogReducer.reducer;