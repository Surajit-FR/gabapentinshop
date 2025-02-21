import React, { useEffect } from 'react'
import Inner_common_banner from '../Common/Inner-common-banner'
import Shop_body from './Shop-body'
import shopinnerimg from '../../img/shop/inner1.jpg'
import usePageMeta from '../Seo/Seo'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getProductsPerCategory } from '../../store/thunks/productThunk'
import { useParams } from 'react-router-dom'

const Shopinner = () => {
  usePageMeta({
    title: 'Shop',
    description: 'Gabapentinshop Shop',
    keywords: 'Gabapentinshop Shop',
  });
  const { productsPercategory } = useSelector(state => state.products)
  const { catParams } = useParams()
  const catId = localStorage.getItem("catId")
  const categoryName = localStorage.getItem("categoryName")
  const dispatch = useDispatch()

  useEffect(() => {
    if (catId
      && catId !== "all"
    ) {
      dispatch(getProductsPerCategory(catId))
    }
  }, [dispatch, catId, catParams])
  useEffect(() => {
    if (catId === "all") {
      dispatch(getAllProducts())
    }
  }, [dispatch, catId])

  return (
    <div>

      <Inner_common_banner title={categoryName} subtitle={categoryName} background={shopinnerimg} />
      {productsPercategory && productsPercategory.length > 0 ? <Shop_body products={productsPercategory} /> :
        <div className='col-lg-12 col-md-12 col-sm-12' style={{ height: "400px", justifyContent: "center", alignItems: "center", display: 'flex' }}>
          <p style={{ fontWeight: 'bold' }}>No Products Found</p>
        </div>
      }

    </div>
  )
}

export default Shopinner
