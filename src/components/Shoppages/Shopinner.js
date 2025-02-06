import React, { useEffect } from 'react'
import Inner_common_banner from '../Common/Inner-common-banner'
import Shop_body from './Shop-body'
// import { Link } from 'react-router-dom'
import shopinnerimg from '../../img/shop/inner1.jpg'
import usePageMeta from '../Seo/Seo'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getProductsPerCategory } from '../../store/thunks/productThunk'

const Shopinner = () => {
  usePageMeta({
    title: 'Shop',
    description: 'Gabapentinshop Shop',
    keywords: 'Gabapentinshop Shop',
  });
  const { productsPercategory } = useSelector(state => state.products)
  const { id } = useParams();
  const dispatch = useDispatch()
 
  useEffect(() => {
    if (id) {
      dispatch(getProductsPerCategory(id))
    }
  }, [dispatch, id])
  useEffect(() => {
    if (!id) {
      dispatch(getAllProducts())
    }
  }, [dispatch, id])
  return (
    <div>

      <Inner_common_banner title={"Shop"} subtitle={"Shop"} background={shopinnerimg} />
      {productsPercategory && productsPercategory.length > 0 ? <Shop_body products={productsPercategory} /> : <div>No Products Found</div>}

    </div>
  )
}

export default Shopinner
