import { createSlice } from '@reduxjs/toolkit'
import { getAllBlogs, getBlogDetails } from '../thunks/blogThunk'

const initialState = {
    blogs: [],
    singleBlog:{},
    loading: 'idle',
    meta_tags_all_blogs: {}
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
        builder.addCase(getAllBlogs.pending, (state, action) => {
            // Add user to the state array
            state.loading = "All blogs pending"
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getAllBlogs.fulfilled, (state, action) => {
            // Add user to the state array
            state.blogs = action.payload.blog
            state.meta_tags_all_blogs= action.payload.meta_data
            state.loading = "idle"
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getAllBlogs.rejected, (state, action) => {
            // Add user to the state array
            state.loading = "failed"
        })
        builder.addCase(getBlogDetails.pending, (state, action) => {
            // Add user to the state array
            state.loading = "single Blog Loading"
        })
        builder.addCase(getBlogDetails.fulfilled, (state, action) => {
            // Add user to the state array
            state.singleBlog = action.payload
            state.loading = "idle"
        })
        builder.addCase(getBlogDetails.rejected, (state, action) => {
            // Add user to the state array
            state.singleBlog = action.payload
            state.loading = "failed"
        })
    },
})


export default blogReducer.reducer;