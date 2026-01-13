import React, { useEffect, useState } from 'react'
import Inner_common_banner from '../Common/Inner-common-banner'
import Shop_body from './Shop-body'
import shopinnerimg from '../../img/shop/inner1.jpg'
import usePageMeta from '../Seo/Seo'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getProductsPerCategory } from '../../store/thunks/productThunk'
import { useLocation, useParams } from 'react-router-dom'
import CustomLoader from '../shared/CustomLoader'
import { getCategoryList } from '../../store/thunks/categoryThunk'
import Preloader from '../Preloader/Preloader'

const Shopinner = () => {
  const location = useLocation()
  const { productsPercategory, loading, meta_tags_all_products, meta_tags_single_product } = useSelector(state => state.products)
  // console.log({ meta_tags_all_products })
  // const { categories } = useSelector(state => state.categories)
  const { id } = useParams()
  // const catId = localStorage.getItem("catId")
  // const categoryName = localStorage.getItem("categoryName")
  const dispatch = useDispatch()
  const [metaData, setMetadata] = useState({
    title: '',
    description: '',
    keywords: '',

  })
  console.log({ id })
  // useEffect(() => {
  //   if (catId
  //     && catId !== "all"
  //   ) {
  //     const catProducts = categories.filter(cat => cat.term_id === Number(catId))
  //     console.log(catProducts);
  //     setMetadata({
  //       title: catProducts[0]?.meta_title,
  //       description: catProducts[0]?.meta_description,
  //       keywords: catProducts[0]?.meta_keyword,
  //     })
  //     dispatch(getProductsPerCategory(catProducts[0]?.slug))
  //   }
  // }, [dispatch, catId, id, categories])
  // useEffect(() => {
  //   if (catId === "all") {
  //     dispatch(getAllProducts())
  //   }
  // }, [dispatch, catId])
  useEffect(() => {
    dispatch(getCategoryList())
  }, [dispatch])

  useEffect(() => {
    if (meta_tags_all_products) {
      setMetadata({
        title: meta_tags_all_products?.meta_title,
        description: meta_tags_all_products?.meta_description,
        keywords: meta_tags_all_products?.meta_keyword,
      })
    }
  }, [meta_tags_all_products])
  useEffect(() => {
    if (meta_tags_single_product) {
      setMetadata({
        title: meta_tags_single_product?.meta_title,
        description: meta_tags_single_product?.meta_description,
        keywords: meta_tags_single_product?.meta_keyword,
      })
    }
  }, [meta_tags_single_product])

  usePageMeta({
    title: metaData?.title,
    description: metaData?.description,
    keywords: metaData?.keywords,
    canonic: `https://gabapentinshop.com${location.pathname}`
  });
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
      <Preloader />

      <Inner_common_banner title={id ? meta_tags_single_product?.cat_name : "Shop"} subtitle={id ? meta_tags_single_product?.cat_name : "Shop"} background={shopinnerimg} />

      {loading === "All Products Loading" || loading === "products per cat loading" ? <CustomLoader /> :
        <>

          {productsPercategory && productsPercategory.length > 0 ? <Shop_body products={productsPercategory} /> :
            <div className='col-lg-12 col-md-12 col-sm-12' style={{ height: "400px", justifyContent: "center", alignItems: "center", display: 'flex' }}>
              <p style={{ fontWeight: 'bold' }}>No Products Found</p>
            </div>
          }

        </>




      }



    </div>
  )
}

export default Shopinner
