import React from 'react'
import Single_product from './Single-product'
import usePageMeta from '../Seo/Seo'


const Product_details = () => {
  usePageMeta({
      title:'Product Details',
      description:'Gabapentinshop Product Details',
      keywords:'Gabapentinshop Product Details',
  });

  return (
    <div>
 
      <Single_product/>
    </div>
  )
}

export default Product_details
