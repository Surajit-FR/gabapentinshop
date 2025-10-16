import { createSlice } from '@reduxjs/toolkit'
import { getProductsPerCategory, getProductDetails, getAllProducts,mapProductsPerCategory } from '../thunks/productThunk'


const initialState = {
    productsPercategory: [],
    productDetails: {},
    loading: 'idle',
    mapProductsData:[],
    productId: '',
    meta_tags_all_products: '',
    meta_tags_single_product:{},
}


// Then, handle actions in your reducers:
const productReducer = createSlice({
    name: 'products',
    initialState,
    reducers: {
        updateProductId: (state, action)=>{
            state.productId = action.payload

        },
        // standard reducer logic, with auto-generated action types per reducer
        cleanup: ()=>{
            return initialState
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getProductsPerCategory.pending, (state, action) => {
            // Add products to the state array
            state.productsPercategory = action.payload
            state.loading = "products per cat loading"
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getProductsPerCategory.fulfilled, (state, action) => {
            // Add products to the state array
            state.productsPercategory = action.payload?.product_list
            state.meta_tags_single_product = action.payload?.category
            state.loading = "success"
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getProductsPerCategory.rejected, (state, action) => {
            // Add products to the state array
            state.productsPercategory = action.payload
            state.loading = "idle"
        })
        builder.addCase(getProductDetails.fulfilled, (state, action) => {
            // Add product to the state obj
            state.productDetails = action.payload
            state.loading="fulfilled"
        })
        builder.addCase(getAllProducts.pending, (state, action) => {
            // Add product to the state obj
            state.productsPercategory = action.payload
            state.loading= "All Products Loading"
        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            // Add product to the state obj
            state.productsPercategory = action.payload.products
            state.meta_tags_all_products= action.payload.meta_data
            state.loading= "idle"
        })
        builder.addCase(getAllProducts.rejected, (state, action) => {
            // Add product to the state obj
            state.productsPercategory = action.payload
            state.loading= "failed"
        })
        builder.addCase(mapProductsPerCategory.fulfilled, (state, action) => {
            // Add product to the state obj
            // const dataToPush = state.mapProductsData.filter(item =>item.categoryId !== action.payload.categoryId)

            state.mapProductsData.push(action.payload)
        })
    },
})

export const {
    updateProductId,
    cleanup,
} = productReducer.actions

export default productReducer.reducer;