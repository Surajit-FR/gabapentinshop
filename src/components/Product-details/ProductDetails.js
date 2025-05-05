import React, { useEffect } from 'react'
import Single_product from './SingleProduct'
import usePageMeta from '../Seo/Seo'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails } from '../../store/thunks/productThunk'
import Preloader from '../Preloader/Preloader'


const ProductDetails = () => {

  const dispatch = useDispatch()
  const { productDetails } = useSelector(state => state.products)

  usePageMeta({
    title: productDetails?.meta_title,
    description: productDetails?.meta_description,
    keywords: productDetails?.meta_keyword,
  });
  // const { product_id } = useParams()
  const productId = localStorage.getItem("prodId")
  useEffect(() => {
    if (productId) {
      dispatch(getProductDetails(productId))
    }
  }, [productId, dispatch])

  return (
    <div>
      <Preloader />
      <Single_product data={productDetails} />
    </div>
  )
}

export default ProductDetails
