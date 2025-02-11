import { createSlice } from '@reduxjs/toolkit'
import { getProductsPerCategory, getProductDetails, getAllProducts,mapProductsPerCategory } from '../thunks/productThunk'


const initialState = {
    productsPercategory: [],
    productDetails: {},
    loading: 'idle',
    mapProductsData:[]
}


// Then, handle actions in your reducers:
const productReducer = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
        cleanup: ()=>{
            return initialState
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getProductsPerCategory.fulfilled, (state, action) => {
            // Add products to the state array
            state.productsPercategory = action.payload
        })
        builder.addCase(getProductDetails.fulfilled, (state, action) => {
            // Add product to the state obj
            state.productDetails = action.payload
        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            // Add product to the state obj
            state.productsPercategory = action.payload
        })
        builder.addCase(mapProductsPerCategory.fulfilled, (state, action) => {
            // Add product to the state obj
            state.mapProductsData.push(action.payload)
        })
    },
})

export const {
    cleanup,
} = productReducer.actions

export default productReducer.reducer;